const express = require("express");
const { getGroqChatCompletion } = require("./ai.js"); 
const app = express();
app.use(express.json())

// Маршрут для чата
app.post("/api/chat", async (req, res) => {
  try {
    const { user_message } = req.body;

    if (!user_message) {
      return res.status(400).json({ error: "user_message is required" });
    }

    const completion = await getGroqChatCompletion({ user_message });

    res.json(completion);
  } catch (err) {
    console.error("Error:", err);
    res.status(500).json({ error: "Internal server error" });
  }
});


const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
