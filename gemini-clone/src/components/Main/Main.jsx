// import React, { useState, useRef, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { sendMessageToGemini } from "../../config/gemini-chat";

// const Main = () => {
//   const [reply, setReply] = useState("");
//   const [loading, setLoading] = useState(false);
//   const inputRef = useRef();
//   const replyRef = useRef();

//   const handleSend = async () => {
//     const prompt = inputRef.current.value;
//     if (!prompt) return;

//     setLoading(true);
//     try {
//       const result = await sendMessageToGemini(prompt);
//       console.log("Gemini Response: ", result);
//       setReply(result);
//     } catch (error) {
//       setReply("Sorry, something went wrong. Please try again.");
//       console.error(error);
//     }
//     setLoading(false);
//     inputRef.current.value = "";
//   };

//   useEffect(() => {
//     if (replyRef.current) {
//       replyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [reply]);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="User" />
//       </div>
//       <div className="main-container">
//         <div className="greet">
//           <p>
//             <span>Hello, Pawan</span>
//           </p>
//           <p>How can I help you today?</p>
//         </div>

//         <div className="cards">
//           <div className="card">
//             <p>Suggest beautiful places to see on an upcoming road trip</p>
//             <img src={assets.compass_icon} />
//           </div>
//           <div className="card">
//             <p>Briefly summarize this concept: urban planning</p>
//             <img src={assets.bulb_icon} />
//           </div>
//           <div className="card">
//             <p>Brainstorm team bonding activities for our work retreat</p>
//             <img src={assets.message_icon} />
//           </div>
//           <div className="card">
//             <p>Improve the readability of the following code</p>
//             <img src={assets.code_icon} />
//           </div>
//         </div>

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Enter prompt here"
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               disabled={loading}
//             />
//             <img src={assets.gallery_icon} alt="" />
//             <img src={assets.mic_icon} alt="" />
//             <img
//               src={assets.send_icon}
//               alt=""
//               onClick={handleSend}
//               style={{
//                 cursor: loading ? "not-allowed" : "pointer",
//                 opacity: loading ? 0.5 : 1,
//               }}
//             />
//           </div>

//           <p ref={replyRef}>
//             <strong>Gemini:</strong>{" "}
//             {loading ? <span className="loading-spinner" /> : reply}
//           </p>
//           <p className="bottom-info">
//             Gemini may display inaccurate info, including about people, so
//             double-check responses.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
// 
// import React, { useState, useRef, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { sendMessageToGemini } from "../../config/groq-chat";
// import React, { useState, useRef, useEffect } from "react";


// const Main = () => {
//   const [reply, setReply] = useState("");
//   const [loading, setLoading] = useState(false);
//   const inputRef = useRef();
//   const replyRef = useRef();

//   const handleSend = async () => {
//     const prompt = inputRef.current.value;
//     if (!prompt) return;

//     setLoading(true);
//     try {
//       const result = await sendMessageToGemini(prompt);
//       console.log("Groq Response:", result);
//       setReply(result);
//     } catch (error) {
//       setReply("Sorry, something went wrong. Please try again.");
//     }
//     setLoading(false);
//     inputRef.current.value = "";
//   };

//   useEffect(() => {
//     if (replyRef.current) {
//       replyRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [reply]);

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} alt="User" />
//       </div>
//       <div className="main-container">
//         <div className="greet">
//           <p><span>Hello, Pawan</span></p>
//           <p>How can I help you today?</p>
//         </div>

//         <div className="cards">
//           <div className="card">
//             <p>Suggest beautiful places to see on an upcoming road trip</p>
//             <img src={assets.compass_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Briefly summarize this concept: urban planning</p>
//             <img src={assets.bulb_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Brainstorm team bonding activities for our work retreat</p>
//             <img src={assets.message_icon} alt="" />
//           </div>
//           <div className="card">
//             <p>Improve the readability of the following code</p>
//             <img src={assets.code_icon} alt="" />
//           </div>
//         </div>

//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Enter prompt here"
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               disabled={loading}
//             />
//             <img src={assets.gallery_icon} alt="" />
//             <img src={assets.mic_icon} alt="" />
//             <img
//               src={assets.send_icon}
//               alt="Send"
//               onClick={handleSend}
//               style={{
//                 cursor: loading ? "not-allowed" : "pointer",
//                 opacity: loading ? 0.5 : 1,
//               }}
//             />
//           </div>

//           <p ref={replyRef}>
//             <strong>Bot:</strong> {loading ? <span className="loading-spinner" /> : reply}
//           </p>
//           <p className="bottom-info">
//             This AI may display inaccurate info. Always verify important facts.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
// import React, { useState, useRef, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { sendMessageToGemini } from "../../config/groq-chat"; // or openai-chat.js

// const Main = () => {
//   const [reply, setReply] = useState("");
//   const [typedReply, setTypedReply] = useState("");
//   const [loading, setLoading] = useState(false);
//   const inputRef = useRef();

//   const handleSend = async () => {
//     const prompt = inputRef.current.value;
//     if (!prompt) return;

//     setReply(""); // clear old
//     setTypedReply(""); // clear typing
//     setLoading(true);

//     try {
//       const result = await sendMessageToGemini(prompt);
//       setReply(result); // Save full response

//       // Typing animation
//       let index = 0;
//       const typing = setInterval(() => {
//         setTypedReply((prev) => prev + result.charAt(index));
//         index++;
//         if (index >= result.length) clearInterval(typing);
//       }, 20); // speed
//     } catch (err) {
//       setReply("Something went wrong.");
//       setTypedReply("Something went wrong.");
//     }

//     setLoading(false);
//     inputRef.current.value = "";
//   };

//   return (
//     <div className="main">
//       <div className="nav">
//         <p>Gemini</p>
//         <img src={assets.user_icon} />
//       </div>

//       <div className="main-container">
//         <div className="greet">
//           <p><span>Hello, Pawan</span></p>
//           <p>How can I help you today?</p>
//         </div>

//         {/* Cards Section */}
//         <div className="cards">
//           {/* ... your cards code ... */}
//         </div>

//         {/* Response Output Centered */}
//         <div className="response-area">
//           {loading ? (
//             <p className="typing-dots">Gemini is thinking<span className="dot">.</span><span className="dot">.</span><span className="dot">.</span></p>
//           ) : (
//             <p className="typed-text">{typedReply}</p>
//           )}
//         </div>

//         {/* Bottom input */}
//         <div className="main-bottom">
//           <div className="search-box">
//             <input
//               ref={inputRef}
//               type="text"
//               placeholder="Enter prompt here"
//               onKeyDown={(e) => e.key === "Enter" && handleSend()}
//               disabled={loading}
//             />
//             <img src={assets.gallery_icon} />
//             <img src={assets.mic_icon} />
//             <img
//               src={assets.send_icon}
//               onClick={handleSend}
//               style={{ cursor: loading ? "not-allowed" : "pointer", opacity: loading ? 0.5 : 1 }}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Main;
// src/components/Main/Main.jsx
// 




import React, { useState, useRef, useEffect } from "react";
import "./Main.css";
import { assets } from "../../assets/assets";
import { sendMessageToGemini } from "../../config/groq-chat"; // Using Groq
import { useSidebar } from "../context/Context";

const Main = () => {
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [typingResponse, setTypingResponse] = useState("");
  const [stopTyping, setStopTyping] = useState(false);
  const inputRef = useRef();
  const { newChatFlag } = useSidebar();

  useEffect(() => {
    if (newChatFlag) {
      setMessages([]);
      setTypingResponse("");
    }
  }, [newChatFlag]);

  const handleSend = async () => {
    const prompt = inputRef.current.value;
    if (!prompt.trim()) return;

    const newMessage = { type: "user", text: prompt };
    setMessages(prev => [...prev, newMessage]);
    inputRef.current.value = "";
    setTypingResponse("");
    setStopTyping(false);
    setLoading(true);

    try {
      const response = await sendMessageToGemini(prompt);

      let index = 0;
      const interval = setInterval(() => {
        if (stopTyping || index >= response.length) {
          clearInterval(interval);
          setMessages(prev => [...prev, { type: "bot", text: response.slice(0, index) }]);
          setLoading(false);
          return;
        }

        setTypingResponse(response.slice(0, index + 1));
        index++;
      }, 20); // typing speed
    } catch (err) {
      setMessages(prev => [...prev, { type: "bot", text: "Error: Something went wrong." }]);
      setLoading(false);
    }
  };

  const stopResponse = () => {
    setStopTyping(true);
    setLoading(false);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="user" />
      {/* <p>Gemini</p> */}
      {/* <img src={assets.user_icon} alt="User" />
      <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? "Day" : "Night"}
      </button> */}
    </div>

      <div className="main-container">
        <div className="greet">
          <p><span>Hello, Pawan</span></p>
          <p>How can I help you today?</p>
        </div>

        <div className="chat-feed">
          {messages.map((msg, index) => (
            <div key={index} className={`chat-message ${msg.type}`}>
              <p>{msg.text}</p>
            </div>
          ))}

          {loading && (
            <div className="chat-message bot">
              <p>{typingResponse}<span className="blinker">|</span></p>
              <button onClick={stopResponse} className="stop-btn">Stop</button>
            </div>
          )}
        </div>

        <div className="main-bottom">
          <div className="search-box">
            <input
              ref={inputRef}
              type="text"
              placeholder="Enter prompt here"
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              disabled={loading}
            />
            <img src={assets.send_icon} alt="send" onClick={handleSend} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

// import React, { useState, useRef, useEffect } from "react";
// import "./Main.css";
// import { assets } from "../../assets/assets";
// import { sendMessageToGemini } from "../../config/groq-chat";

// const Main = () => {
//   const [chatHistory, setChatHistory] = useState([]);
//   const [currentReply, setCurrentReply] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [controller, setController] = useState(null);
//   const [theme, setTheme] = useState("light");
//   const inputRef = useRef();
//   const chatEndRef = useRef();

//   const handleSend = async () => {
//     const prompt = inputRef.current.value.trim();
//     if (!prompt) return;

//     const newUserMsg = { role: "user", content: prompt };
//     setChatHistory((prev) => [...prev, newUserMsg]);
//     inputRef.current.value = "";
//     setLoading(true);
//     setCurrentReply("");

//     const abortCtrl = new AbortController();
//     setController(abortCtrl);

//     const response = await sendMessageToGemini(prompt, abortCtrl);

//     let i = 0;
//     const interval = setInterval(() => {
//       if (i < response.length) {
//         setCurrentReply((prev) => prev + response.charAt(i));
//         i++;
//       } else {
//         clearInterval(interval);
//         setChatHistory((prev) => [...prev, { role: "bot", content: response }]);
//         setCurrentReply("");
//         setLoading(false);
//       }
//     }, 30);
//   };

//   const stopResponse = () => {
//     if (controller) controller.abort();
//     setLoading(false);
//   };

//   const handleNewChat = () => {
//     setChatHistory([]);
//     setCurrentReply("");
//     inputRef.current.value = "";
//   };

//   useEffect(() => {
//     if (chatEndRef.current) chatEndRef.current.scrollIntoView({ behavior: "smooth" });
//   }, [chatHistory, currentReply]);

//   return (
//   <div className={`main ${theme}`}>
    

//     <div className="main-container">
//       <div className="greet">
//         <p><span>Hello, Pawan</span></p>
//         <p>How can I help you today?</p>
//       </div>

//       <div className="chat-feed">
//         {chatHistory.map((msg, idx) => (
//           <div key={idx} className={`chat-msg ${msg.role}`}>
//             <strong>{msg.role === "user" ? "You" : "Gemini"}:</strong> {msg.content}
//           </div>
//         ))}
//         {loading && (
//           <div className="chat-msg bot">
//             <strong>Gemini:</strong> {currentReply}
//             <span className="blinker">|</span>
//             <button onClick={stopResponse} className="stop-btn">Stop</button>
//           </div>
//         )}
//         <div ref={chatEndRef} />
//       </div>

//       <div className="main-bottom">
//         <div className="search-box">
//           <input
//             ref={inputRef}
//             type="text"
//             placeholder="Enter prompt here"
//             onKeyDown={(e) => e.key === "Enter" && handleSend()}
//             disabled={loading}
//           />
//           <img src={assets.send_icon} alt="Send" onClick={handleSend} />
//         </div>
//       </div>
//     </div>
//   </div>
// );
// }

    
   
// export default Main;
