import { useState, useEffect, useRef } from "react";
import chatbotData from "../data/chatbotData";

export default function Chatbot() {
  const [messages, setMessages] = useState([
    { text: "Hi 👋 How can I help you shop on EasyCart?", sender: "bot" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  // 👇 THIS IS FOR AUTO-SCROLL
  const messagesEndRef = useRef(null);

  // normalize
  const normalize = (text) =>
    String(text).toLowerCase().trim();

  // bot logic (UNCHANGED)
  const getReply = (text) => {
    const userText = normalize(text);

    for (let item of chatbotData) {
      const match = item.keywords.some((k) =>
        userText.includes(k)
      );

      if (match) {
        return item.reply;
      }
    }

    return "Sorry, I didn’t understand that. Try phones, laptops, TVs, or payments 💡";
  };

  // send message
  const handleSend = () => {
    if (!input.trim()) return;

    const userMsg = { text: input, sender: "user" };
    const botMsg = { text: getReply(input), sender: "bot" };

    setMessages((prev) => [...prev, userMsg, botMsg]);
    setInput("");
  };

  // 🔥 AUTO SCROLL EFFECT
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* FLOAT BUTTON */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: "#0056b3",
          color: "white",
          fontSize: "24px",
          border: "none",
          zIndex: 1000
        }}
      >
        💬
      </button>

      {/* CHAT BOX */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "90px",
            left: "20px",
            width: "300px",
            height: "400px",
            background: "white",
            borderRadius: "15px",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
            zIndex: 1000
          }}
        >
          {/* HEADER */}
          <div
            style={{
              background: "#0056b3",
              color: "white",
              padding: "10px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <span>EasyCart Chat</span>

            {/* ❌ CLEAN X BUTTON */}
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "white",
                color: "black",
                border: "none",
                width: "28px",
                height: "28px",
                borderRadius: "50%",
                fontSize: "16px",
                fontWeight: "bold",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              X
            </button>
          </div>

          {/* MESSAGES (AUTO SCROLL ENABLED) */}
          <div
            style={{
              flex: 1,
              padding: "10px",
              overflowY: "auto"
            }}
          >
            {messages.map((msg, i) => (
              <div
                key={i}
                style={{
                  textAlign: msg.sender === "user" ? "right" : "left",
                  margin: "5px 0"
                }}
              >
                <span
                  style={{
                    display: "inline-block",
                    padding: "8px 12px",
                    borderRadius: "15px",
                    background: msg.sender === "user" ? "#4facfe" : "#eee",
                    color: msg.sender === "user" ? "white" : "black",
                    maxWidth: "80%",
                    wordBreak: "break-word"
                  }}
                >
                  {msg.text}
                </span>
              </div>
            ))}

            {/* 👇 AUTO-SCROLL TARGET */}
            <div ref={messagesEndRef} />
          </div>

          {/* INPUT */}
          <div style={{ display: "flex", borderTop: "1px solid #ddd" }}>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type message..."
              style={{
                flex: 1,
                padding: "10px",
                border: "none",
                outline: "none"
              }}
            />
            <button
              onClick={handleSend}
              style={{
                padding: "10px",
                background: "#0056b3",
                color: "white",
                border: "none",
                cursor: "pointer"
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}