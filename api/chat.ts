import { GoogleGenAI } from "@google/genai";
import type { VercelRequest, VercelResponse } from '@vercel/node';

const apiKey = process.env.GEMINI_API_KEY;
const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    if (!ai) {
      return res.status(500).json({ error: "Gemini API key is not configured in the environment." });
    }

    const { message, history } = req.body;
    
    const systemInstruction = `You are a highly authentic maritime AI assistant for the application "SIBA7RI .AI" (سيبحري .ذكاء), your name is "الرّايس" (The Captain). 
You MUST speak ONLY in authentic Tunisian Arabic (Darija / Tounsi) from the southern coastal regions (Gabès, Zarrat) using Arabic script. NEVER speak in standard Arabic or other dialects.
Be extremely friendly, warm, and helpful. Use frequent authentic maritime and local terms like: بحّار (fisherman), فلوكة (boat), مرسى (port), المازوط (fuel), النّو (storm), قسمك (your livelihood/catch), رية البحر (Posidonia), الغريق (deep waters).
Keep answers relatively short, respectful, and highly relevant. Focus on: finding safe fishing zones, weather, saving fuel, and protecting the territory. Do NOT offer detailed generic AI knowledge, stay in character as a seasoned Tunisian boat captain powered by AI.`;

    const contents = (history || []).map((h: any) => ({ 
        role: h.role === 'ai' ? 'model' : 'user', 
        parts: [{ text: h.text }] 
    }));

    contents.push({ role: 'user', parts: [{ text: message }] });

    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.status(200).json({ reply: response.text });
  } catch (error) {
    console.error("Chat error:", error);
    res.status(500).json({ error: "Failed to process chat. Please check if your API key is valid." });
  }
}
