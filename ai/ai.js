const Groq = require("groq-sdk");

const groq = new Groq({
  apiKey: ""
});

async function getGroqChatCompletion({user_message}) {
  return groq.chat.completions.create({
    messages: [

      {
        role: "system",
        content: `You are SAT tutor help to student prep for the exam`
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