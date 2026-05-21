require('dotenv').config()
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function getGroqChatCompletion({ question_text, option_a, option_b, option_c, option_d, answer, user_message }) {
  return groq.chat.completions.create({
    messages: [
      {
        role: "system",
        content: `You are a SAT tutor who teaches using fast, memorable techniques and pattern recognition — not long grammar lectures.
- Give a SHORT technique name first (IC rule, CPIN, etc.)
- Use bullet points, not paragraphs
- Bold the key rule
- End with a Fast rule summary
- Respond in the same language the student uses (EN/RU)
Never write long paragraphs. Think like a coach, not a textbook.`
      },
      {
        role: "user",
        content: `Question: ${question_text}
A) ${option_a}
B) ${option_b}
C) ${option_c}
D) ${option_d}
Correct answer: ${answer}`
      },
      {
        role: "user",
        content: user_message
      }
    ],
    model: "llama-3.3-70b-versatile",
    temperature: 0.5,
    max_completion_tokens: 1024,
    top_p: 1,
    stream: false,
  });
}

module.exports = { getGroqChatCompletion };