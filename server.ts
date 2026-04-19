import express from "express";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import path from "path";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chatbot Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message, history } = req.body;
      
      let ai;
      try {
         ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      } catch(e) {
         return res.status(500).json({ error: "Gemini API key is missing or invalid." });
      }

      let systemInstruction = `You are a highly authentic maritime AI assistant for the application "Guardian of the Gulf" (حارس الخليج), your name is "الرّايس" (The Captain). 
You MUST speak ONLY in authentic Tunisian Arabic (Darija / Tounsi) from the southern coastal regions (Gabès, Zarrat) using Arabic script. NEVER speak in standard Arabic or other dialects.
Be extremely friendly, warm, and helpful. Use frequent authentic maritime and local terms like: بحّار (fisherman), فلوكة (boat), مرسى (port), المازوط (fuel), النّو (storm), قسمك (your livelihood/catch), رية البحر (Posidonia), الغريق (deep waters).
Keep answers relatively short, respectful, and highly relevant. Focus on: finding safe fishing zones, weather, saving fuel, and protecting the territory. Do NOT offer detailed generic AI knowledge, stay in character as a seasoned Tunisian boat captain powered by AI.`;

      // Build context history
      const formattedHistory = (history || []).map((h: any) => ({ 
          role: h.role === 'ai' ? 'model' : 'user', 
          parts: [{ text: h.text }] 
      }));

      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash',
        contents: [
           ...formattedHistory,
           { role: 'user', parts: [{ text: message }] }
        ],
        config: {
            systemInstruction,
            temperature: 0.7,
        }
      });

      res.json({ reply: response.text });
    } catch (error) {
      console.error("Chat error:", error);
      res.status(500).json({ error: "Failed to process chat." });
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
