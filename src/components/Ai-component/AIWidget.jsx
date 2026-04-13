<<<<<<< HEAD
import { useState, useRef, useEffect } from "react";
=======
import { useState, useEffect } from "react";
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
import "./AIWidget.css";

const AIWidget = () => {
  const [open, setOpen] = useState(false);
<<<<<<< HEAD
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      text: "Hey! 👋 I'm your DevProgress AI. Ask me anything about coding, DSA, projects, or your progress!",
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    if (bottomRef.current) {
      bottomRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: "user", text: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/ai/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: input }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: data.reply },
      ]);
    } catch (err) {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", text: "❌ Error aaya! Backend check karo." },
      ]);
    }

    setLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") sendMessage();
  };
=======

  useEffect(() => {
    if (open) {
      startTyping();
    }
  }, [open]);
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1

  return (
    <>
      {/* Floating Button */}
      <div className="ai-button" onClick={() => setOpen(!open)}>
        <div className="outer-cont flex">
          <svg viewBox="0 0 24 24" height="24" width="24">
            <path
              d="M9.107 5.448c.598-1.75 3.016-1.803 3.725-.159l.06.16l.807 2.36a4 4 0 0 0 2.276 2.411l.217.081l2.36.806c1.75.598 1.803 3.016.16 3.725l-.16.06l-2.36.807a4 4 0 0 0-2.412 2.276l-.081.216l-.806 2.361c-.598 1.75-3.016 1.803-3.724.16l-.062-.16l-.806-2.36a4 4 0 0 0-2.276-2.412l-.216-.081l-2.36-.806c-1.751-.598-1.804-3.016-.16-3.724l.16-.062l2.36-.806A4 4 0 0 0 8.22 8.025l.081-.216z"
              fill="currentColor"
            />
          </svg>
          Ask AI
        </div>
      </div>

      {/* Popup */}
      {open && (
        <div className="ai-popup">
          <div className="ai-header">
<<<<<<< HEAD
            <span>🤖 DevProgress AI</span>
=======
            <span>AI Assistant</span>
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
            <span className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </span>
          </div>

          <div className="ai-body">
<<<<<<< HEAD
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`ai-message ${
                  msg.role === "user" ? "user-msg" : "bot-msg"
                }`}
              >
                {msg.text}
              </div>
            ))}

            {loading && (
              <div className="ai-message bot-msg typing">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          <div className="ai-footer">
            <div className="ai-input-box">
              <input
                type="text"
                placeholder="Message AI..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>
            <button className="ai-send-btn" onClick={sendMessage}>
              ➤
            </button>
=======
            <div className="welcome-box">
              <h2 id="typeTitle"></h2>
              <p id="typeSubtitle"></p>
            </div>
          </div>

          <div className="ai-footer">
            <button className="ai-icon-btn">+</button>

            <div className="ai-input-box">
              <input type="text" placeholder="Message AI..." />
            </div>

            <button className="ai-icon-btn">🎤</button>
            <button className="ai-send-btn">➤</button>
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
          </div>
        </div>
      )}
    </>
  );
};

<<<<<<< HEAD
export default AIWidget;
=======
export default AIWidget;

/* ---------------- Typing Logic ---------------- */

function typeText(element, text, speed) {
  let i = 0;
  element.innerHTML = "";
  let cursor = document.createElement("span");
  cursor.classList.add("typing-cursor");
  element.appendChild(cursor);

  let typing = setInterval(() => {
    if (i < text.length) {
      cursor.insertAdjacentText("beforebegin", text.charAt(i));
      i++;
    } else {
      clearInterval(typing);
    }
  }, speed);
}

function startTyping() {
  const title = document.getElementById("typeTitle");
  const subtitle = document.getElementById("typeSubtitle");

  if (!title || !subtitle) return;

  typeText(title, "Welcome to DevProgress! 😊", 60);

  setTimeout(() => {
    typeText(subtitle, "How can I help you today?", 50);
  }, 1600);
}
>>>>>>> 2ad728cdf6c885c03d2912149663f3f15f2560d1
