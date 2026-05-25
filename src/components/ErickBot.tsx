import { useState, useRef, useEffect } from "react";
import { useServerFn } from "@tanstack/react-start";
import { MessageCircle, X, Send, Sparkles } from "lucide-react";
import { askErickBot } from "@/lib/chat.functions";

type Msg = { role: "user" | "assistant"; content: string };

const SUGGESTIONS = [
  "What does Erick build?",
  "Show me his projects",
  "What's his tech stack?",
  "How do I hire him?",
];

export default function ErickBot() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const [messages, setMessages] = useState<Msg[]>([
    {
      role: "assistant",
      content:
        "Habari! I'm Erick's AI assistant 👋 Ask me about his projects, stack, experience, or how to get in touch.",
    },
  ]);
  const scrollRef = useRef<HTMLDivElement>(null);
  const ask = useServerFn(askErickBot);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const send = async (text?: string) => {
    const content = (text ?? input).trim();
    if (!content || busy) return;
    const next: Msg[] = [...messages, { role: "user", content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const { reply } = await ask({ data: { messages: next } });
      setMessages([...next, { role: "assistant", content: reply }]);
    } catch (e: any) {
      setMessages([
        ...next,
        { role: "assistant", content: e?.message || "Something went wrong. Try again?" },
      ]);
    } finally {
      setBusy(false);
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? "Close assistant" : "Open assistant"}
        className="fixed bottom-5 right-5 z-[60] group"
      >
        <span className="absolute inset-0 rounded-full animate-pulse-ring pointer-events-none" />
        <span
          className="relative flex items-center gap-2 pl-4 pr-5 py-3 border-2 border-ink font-mono text-xs uppercase tracking-wider font-semibold shadow-[4px_4px_0_0_var(--ink)] hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0_0_var(--ink)] transition-all"
          style={{ background: "var(--primary)", color: "var(--primary-foreground)" }}
        >
          {open ? <X className="size-4" /> : <Sparkles className="size-4" />}
          {open ? "Close" : "Ask about Erick"}
        </span>
      </button>

      {/* Panel */}
      {open && (
        <div className="fixed bottom-24 right-3 sm:right-5 z-[59] w-[min(92vw,400px)] h-[min(78vh,560px)] flex flex-col card-brut animate-fade-up overflow-hidden">
          {/* Header */}
          <div className="border-b-2 border-ink px-4 py-3 flex items-center gap-3" style={{ background: "var(--sun)" }}>
            <div className="size-9 rounded-full border-2 border-ink flex items-center justify-center shrink-0" style={{ background: "var(--background)" }}>
              <MessageCircle className="size-4" />
            </div>
            <div className="min-w-0">
              <div className="font-display text-lg leading-none">Erick's Assistant</div>
              <div className="text-[10px] font-mono uppercase tracking-widest opacity-80">AI · ask anything</div>
            </div>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 py-4 space-y-3" style={{ background: "var(--background)" }}>
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                <div
                  className={`max-w-[85%] px-3.5 py-2.5 text-sm leading-relaxed border-2 border-ink whitespace-pre-wrap ${
                    m.role === "user" ? "rounded-2xl rounded-br-sm" : "rounded-2xl rounded-bl-sm"
                  }`}
                  style={
                    m.role === "user"
                      ? { background: "var(--primary)", color: "var(--primary-foreground)" }
                      : { background: "var(--card)" }
                  }
                >
                  {m.content}
                </div>
              </div>
            ))}
            {busy && (
              <div className="flex justify-start">
                <div className="px-3.5 py-2.5 border-2 border-ink rounded-2xl rounded-bl-sm bg-card text-sm">
                  <span className="inline-flex gap-1">
                    <span className="size-1.5 rounded-full bg-ink animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="size-1.5 rounded-full bg-ink animate-bounce" style={{ animationDelay: "120ms" }} />
                    <span className="size-1.5 rounded-full bg-ink animate-bounce" style={{ animationDelay: "240ms" }} />
                  </span>
                </div>
              </div>
            )}

            {messages.length <= 1 && (
              <div className="pt-2 flex flex-wrap gap-2">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => send(s)}
                    className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1.5 border-2 border-ink bg-background hover:bg-secondary transition"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              send();
            }}
            className="border-t-2 border-ink p-2.5 flex gap-2"
            style={{ background: "var(--card)" }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              maxLength={500}
              disabled={busy}
              placeholder="Ask about Erick…"
              className="flex-1 bg-background border-2 border-ink px-3 py-2.5 text-sm outline-none focus:shadow-[3px_3px_0_0_var(--primary)] transition"
            />
            <button
              type="submit"
              disabled={busy || !input.trim()}
              className="px-3 border-2 border-ink bg-ink text-background disabled:opacity-40 hover:translate-x-[-1px] hover:translate-y-[-1px] hover:shadow-[3px_3px_0_0_var(--primary)] transition-all"
              aria-label="Send"
            >
              <Send className="size-4" />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
