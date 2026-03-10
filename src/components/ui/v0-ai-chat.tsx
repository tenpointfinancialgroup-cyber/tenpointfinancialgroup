"use client";

import { useState, useRef, useEffect } from "react";
import { Textarea } from "./textarea";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const SHORTCUTS = [
  "Retirement Planning",
  "Life Insurance",
  "Medicare",
  "Annuities",
];

export function VercelV0Chat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  async function sendMessage(text?: string) {
    const content = text ?? input.trim();
    if (!content || loading) return;

    const userMsg: Message = { role: "user", content };
    const next = [...messages, userMsg];
    setMessages(next);
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: content,
          history: next.slice(0, -1),
        }),
      });

      if (!res.ok) throw new Error("API error");

      const data = await res.json();
      setMessages([...next, { role: "assistant", content: data.reply }]);
    } catch {
      setMessages([
        ...next,
        {
          role: "assistant",
          content:
            "I apologize, I'm having trouble connecting right now. Please call us at +1 (586) 899-1003 or use our contact form.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "520px",
        background: "rgba(10,10,10,0.95)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(20px)",
      }}
    >
      {/* Message area */}
      <div style={{ flex: 1, overflowY: "auto", padding: "1.5rem" }}>
        {messages.length === 0 && (
          <div style={{ textAlign: "center", padding: "3rem 1rem", color: "#444" }}>
            <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>💬</div>
            <p style={{ fontFamily: "'Playfair Display', serif", color: "#666", fontSize: "1rem", marginBottom: "0.5rem" }}>
              Ask our financial advisor
            </p>
            <p style={{ fontSize: "0.78rem", color: "#444", letterSpacing: "0.05em" }}>
              Get instant answers about retirement, insurance, and wealth planning.
            </p>
          </div>
        )}

        {messages.map((msg, i) => (
          <div
            key={i}
            style={{
              display: "flex",
              justifyContent: msg.role === "user" ? "flex-end" : "flex-start",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                maxWidth: "80%",
                padding: "0.75rem 1rem",
                background:
                  msg.role === "user"
                    ? "rgba(255,255,255,0.1)"
                    : "rgba(255,255,255,0.04)",
                border: `1px solid ${msg.role === "user" ? "rgba(255,255,255,0.15)" : "rgba(255,255,255,0.07)"}`,
                fontSize: "0.85rem",
                lineHeight: 1.7,
                color: msg.role === "user" ? "#fff" : "#c0c0c0",
                fontFamily: "'Raleway', sans-serif",
              }}
            >
              {msg.content}
            </div>
          </div>
        ))}

        {loading && (
          <div style={{ display: "flex", justifyContent: "flex-start", marginBottom: "1rem" }}>
            <div
              style={{
                padding: "0.75rem 1rem",
                background: "rgba(255,255,255,0.04)",
                border: "1px solid rgba(255,255,255,0.07)",
                color: "#888",
                fontSize: "0.85rem",
              }}
            >
              <span style={{ animation: "pulseGlow 1s ease-in-out infinite" }}>Thinking…</span>
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Shortcut buttons */}
      <div style={{ display: "flex", gap: "0.5rem", padding: "0 1.5rem 0.75rem", flexWrap: "wrap" }}>
        {SHORTCUTS.map((s) => (
          <button
            key={s}
            onClick={() => sendMessage(s)}
            disabled={loading}
            style={{
              padding: "0.35rem 0.85rem",
              background: "transparent",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#888",
              fontSize: "0.7rem",
              fontFamily: "'Raleway', sans-serif",
              letterSpacing: "0.08em",
              cursor: "pointer",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.3)";
              (e.currentTarget as HTMLButtonElement).style.color = "#c0c0c0";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(255,255,255,0.12)";
              (e.currentTarget as HTMLButtonElement).style.color = "#888";
            }}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Input area */}
      <div style={{ padding: "0 1.5rem 1.5rem", display: "flex", gap: "0.75rem", alignItems: "flex-end" }}>
        <Textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Ask about retirement, insurance, Medicare, annuities…"
          disabled={loading}
          style={{ flex: 1, minHeight: "52px", maxHeight: "120px" }}
        />
        <button
          onClick={() => sendMessage()}
          disabled={loading || !input.trim()}
          style={{
            padding: "0.75rem 1.4rem",
            background: input.trim() && !loading ? "#fff" : "rgba(255,255,255,0.1)",
            color: input.trim() && !loading ? "#000" : "#555",
            border: "none",
            fontFamily: "'Raleway', sans-serif",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            cursor: input.trim() && !loading ? "pointer" : "not-allowed",
            transition: "background 0.2s, color 0.2s",
            flexShrink: 0,
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
