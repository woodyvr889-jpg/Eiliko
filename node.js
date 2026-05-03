// Eiliko Backend Server (SAFE API KEY HANDLER) // Run with Node.js // This keeps your API key hidden from the browser

import express from "express"; import cors from "cors"; import dotenv from "dotenv"; import fetch from "node-fetch";

dotenv.config();

const app = express(); app.use(cors()); app.use(express.json());

const API_KEY = process.env.OPENAI_API_KEY;

app.post("/chat", async (req, res) => { try { const userText = req.body.message;

const response = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${API_KEY}`
  },
  body: JSON.stringify({
    model: "gpt-4o-mini",
    messages: [
      {
        role: "system",
        content: "You are Eiliko, a cute emotional AI robot companion. Keep replies short, friendly, and expressive."
      },
      {
        role: "user",
        content: userText
      }
    ]
  })
});

const data = await response.json();

res.json({
  reply: data.choices[0].message.content
});

} catch (err) { res.status(500).json({ error: "AI request failed" }); } });

app.listen(3000, () => { console.log("Eiliko backend running on http://localhost:3000"); });

/* SETUP INSTRUCTIONS:

1. Install Node.js


2. Run in folder: npm init -y npm install express cors dotenv node-fetch


3. Create .env file: OPENAI_API_KEY=your_api_key_here


4. Run server: node server.js


5. In your frontend, call: POST http://localhost:3000/chat body: { message: "hello" } */



