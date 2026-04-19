import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";
import "dotenv/config";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Initialize AI client once
  const apiKey = process.env.GEMINI_API_KEY;
  const ai = apiKey ? new GoogleGenAI({ apiKey }) : null;

  // AI Chatbot Route
  app.post("/api/chat", async (req, res) => {
    try {
      if (!ai) {
        return res.status(500).json({ error: "Gemini API key is not configured in the environment." });
      }

      const { message, history } = req.body;
      
      const systemInstruction = `You are a highly authentic maritime AI assistant for the application "SIBA7RI .AI" (سيبحري .ذكاء), your name is "الرّايس" (The Captain). 
You MUST speak ONLY in authentic Tunisian Arabic (Darija / Tounsi) from the southern coastal regions (Gabès, Zarrat) using Arabic script. NEVER speak in standard Arabic or other dialects.
Be extremely friendly, warm, and helpful. Use frequent authentic maritime and local terms like: بحّار (fisherman), فلوكة (boat), مرسى (port), المازوط (fuel), النّو (storm), قسمك (your livelihood/catch), رية البحر (Posidonia), الغريق (deep waters).
Keep answers relatively short, respectful, and highly relevant. Focus on: finding safe fishing zones, weather, saving fuel, and protecting the territory. Do NOT offer detailed generic AI knowledge, stay in character as a seasoned Tunisian boat captain powered by AI.`;

      // Build context history for generateContent
      const contents = (history || []).map((h: any) => ({ 
          role: h.role === 'ai' ? 'model' : 'user', 
          parts: [{ text: h.text }] 
      }));

      // Add current message
      contents.push({ role: 'user', parts: [{ text: message }] });

      const response = await ai.models.generateContent({
        model: 'gemini-3-flash-preview',
        contents,
        config: {
          systemInstruction,
          temperature: 0.7,
        }
      });

      const text = response.text;

      res.json({ reply: text });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process chat. Please check if your API key is valid." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
