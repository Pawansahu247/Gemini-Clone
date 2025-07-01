// import { GoogleGenAI } from "@google/genai";

// const genAI = new GoogleGenAI({
//   apiKey: "AIzaSyBN3D9xVK6d2pkfHZOUnpO2bXggkQ9Jbis", // 👈 Use your key here
// });

// export const sendMessageToGemini = async (userPrompt) => {
//   try {
//     const result = await genAI.models.generateContent({
//       model: "models/gemini-1.5-flash", // or "models/gemini-1.5-pro"
//       contents: [{ role: "user", parts: [{ text: userPrompt }] }],
//     });

//     return result.response.text();
//   } catch (error) {
//     console.error(" Gemini Error:", error);
//     return "Something went wrong. Try again.";
//   }
// };
// import { GoogleGenAI } from "@google/genai";

// // Initialize Gemini with API key
// const genAI = new GoogleGenAI({
//   apiKey: "AIzaSyBN3D9xVK6d2pkfHZOUnpO2bXggkQ9Jbis", // ✅ Your real key
// });

// export const sendMessageToGemini = async (userPrompt) => {
//   try {
//     const model = genAI.getGenerativeModel({
//       model: "models/gemini-1.5-flash", // ✅ Valid model
//     });

//     const result = await model.generateContent({
//       contents: [{ role: "user", parts: [{ text: userPrompt }] }],
//     });

//     // 🛡️ Defensive check before calling .text()
//     if (result?.response?.text) {
//       return result.response.text();
//     } else {
//       console.error("⚠️ Unexpected Gemini response:", result);
//       return "Gemini responded with an unexpected format.";
//     }
//   } catch (error) {
//     console.error("❌ Gemini Error:", error);
//     return "Something went wrong. Try again.";
//   }
// };
// 
// 
// export const sendMessageToGemini = async (prompt) => {
//   const GROQ_API_KEY = "gsk_live_XXXXXXXXXXXX"; // 👈 apna real key yahan daalna

//   try {
//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROQ_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "llama3-70b-8192",
//         messages: [
//           {
//             role: "user",
//             content: prompt,
//           },
//         ],
//       }),
//     });

//     const data = await response.json();
//     return data.choices[0].message.content;
//   } catch (error) {
//     console.error("Groq error:", error);
//     return "Something went wrong with Groq API.";
//   }
// };
// export const sendMessageToGemini = async (prompt) => {
//   const GROQ_API_KEY = "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"; // 🔑 Replace with your Groq key

//   try {
//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROQ_API_KEY}`,
//       },
//       body: JSON.stringify({
//         model: "llama3-70b-8192",
//         messages: [{ role: "user", content: prompt }],
//       }),
//     });

//     const data = await response.json();
//     return data.choices[0].message.content;
//   } catch (error) {
//     console.error("Groq error:", error);
//     return "Something went wrong with Groq API.";
//   }
// };
// src/config/groq-chat.js
// 



// final 


export const sendMessageToGemini = async (prompt) => {
  const GROQ_API_KEY = "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"; // Replace with your real key
console.log("pawan");

  try {
    const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GROQ_API_KEY}`,
      },
      body: JSON.stringify({
        model: "llama3-70b-8192",
        messages: [{ role: "user", content: prompt }],
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Groq error:", error);
    return "Something went wrong with Groq API.";
  }
};

// src/config/groq-chat.js
// export const sendMessageToGemini = async (prompt, controller = new AbortController()) => {
//   const GROQ_API_KEY = "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"; // Replace this with your real key

//   try {
//     const response = await fetch("https://api.groq.com/openai/v1/chat/completions", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: `Bearer ${GROQ_API_KEY}`,
//       },
//       signal: controller.signal,
//       body: JSON.stringify({
//         model: "llama3-70b-8192",
//         messages: [{ role: "user", content: prompt }],
//       }),
//     });

//     const data = await response.json();
//     return data.choices[0].message.content;
//   } catch (error) {
//     if (error.name === "AbortError") return "[Response stopped]";
//     console.error("Groq error:", error);
//     return "Something went wrong.";
//   }
// };


