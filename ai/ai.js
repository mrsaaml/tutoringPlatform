require('dotenv').config()
const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY
});

async function getGroqChatCompletion({ question_text, option_a, option_b, option_c, option_d, answer,type, user_message, history = [] }) {
  return groq.chat.completions.create({
    messages: [
  {
    role: "system",
    content: `You are an expert SAT tutor helping a student with a specific question.

The student is currently working on this question:
Question: ${question_text}
A) ${option_a}
B) ${option_b}
C) ${option_c}
D) ${option_d}
Correct answer: ${answer}

Your job is to help the student understand WHY this answer is correct.

Rules:
- No markdown: no **, no *, no #
- Clean plain text only, short paragraphs
- Maximum 4-5 sentences per response
- Focus specifically on THIS question, not general advice
- If student asks why another option is wrong, explain that specific option
- End with one memorable tip
- Respond in the same language the student writes in (Russian or English)
- Never say filler phrases, get straight to the point`
  },
  ...history,
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
