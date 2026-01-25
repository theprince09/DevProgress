import { useState, useEffect } from "react";
import "./AIWidget.css";

const AIWidget = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      startTyping();
    }
  }, [open]);

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
            <span>AI Assistant</span>
            <span className="close-btn" onClick={() => setOpen(false)}>
              ✖
            </span>
          </div>

          <div className="ai-body">
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
          </div>
        </div>
      )}
    </>
  );
};

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
