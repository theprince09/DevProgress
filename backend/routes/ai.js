const express = require("express");
const router = express.Router();
const Groq = require("groq-sdk");

const groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

router.post("/chat", async (req, res) => {
  try {
    const { message } = req.body;

    const completion = await groq.chat.completions.create({
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "system",
          content: `You are a helpful AI assistant inside DevProgress — a developer progress tracking app. 
          Help the user with coding, DSA, projects, GitHub, LeetCode, and career advice. 
          Be concise and friendly. Reply in the same language the user writes in.`,
        },
        {
          role: "user",
          content: message,
        },
      ],
      max_tokens: 1024,
    });

    const reply = completion.choices[0]?.message?.content || "Kuch samajh nahi aaya, dobara puchho!";
    res.json({ reply });

  } catch (err) {
    console.error("Groq error:", err);
    res.status(500).json({ reply: "AI se connect nahi ho pa raha, try again!" });
  }
});

module.exports = router;