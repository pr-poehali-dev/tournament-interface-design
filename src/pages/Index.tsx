import { useState } from "react";
import Icon from "@/components/ui/icon";

const TEAMS = {
  left: {
    name: "NEON WOLVES",
    tag: "NW",
    score: 11,
    players: [
      { id: 1, name: "Shadowbyte", role: "IGL", kills: 24, rating: 1.42 },
      { id: 2, name: "Vortex", role: "AWP", kills: 18, rating: 1.28 },
    ],
  },
  right: {
    name: "CRIMSON EDGE",
    tag: "CE",
    score: 9,
    players: [
      { id: 3, name: "Phantom_X", role: "Entry", kills: 21, rating: 1.35 },
      { id: 4, name: "Ironclad", role: "Support", kills: 15, rating: 1.19 },
    ],
  },
};

const INITIAL_MESSAGES = [
  { id: 1, user: "GhostFrag", color: "#f4a323", text: "NEON идут!!!" },
  { id: 2, user: "Стример228", color: "#8a8d96", text: "Crimson возьмут эту карту, верю" },
  { id: 3, user: "CyberFan", color: "#4a9eff", text: "Shadowbyte монстр сегодня 🔥" },
  { id: 4, user: "xXxN00bSlayer", color: "#8a8d96", text: "ez для NW как обычно" },
  { id: 5, user: "TurboViewer", color: "#f4a323", text: "какой AWP! Vortex зверь" },
  { id: 6, user: "Анонимус", color: "#4a4d57", text: "оба тима топ, интересный матч" },
  { id: 7, user: "ProGamer_RU", color: "#4a9eff", text: "Phantom_X тоже не сдаётся!" },
  { id: 8, user: "WatchDog99", color: "#8a8d96", text: "map 2 будет горячей" },
];

function StatBadge({ label, value, highlight = false }: { label: string; value: number | string; highlight?: boolean }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 1 }}>
      <span style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "0.08em", color: "var(--text-muted)", textTransform: "uppercase" }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "16px", color: highlight ? "var(--accent-orange)" : "var(--text-primary)", lineHeight: 1 }}>
        {value}
      </span>
    </div>
  );
}

const total = TEAMS.left.score + TEAMS.right.score;
const leftPct = Math.round((TEAMS.left.score / total) * 100);

const Index = () => {
  const [leftPlayer, setLeftPlayer] = useState(TEAMS.left.players[0]);
  const [rightPlayer, setRightPlayer] = useState(TEAMS.right.players[0]);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages((prev) => [...prev, { id: prev.length + 1, user: "Вы", color: "#f4a323", text: chatInput.trim() }]);
    setChatInput("");
  };

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", background: "var(--bg-deep)", fontFamily: "'Barlow', sans-serif" }}>

      {/* HEADER */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 20px", height: "48px", background: "var(--bg-panel)", borderBottom: "1px solid var(--border-subtle)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
            <div style={{ width: 24, height: 24, background: "var(--accent-orange)", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <Icon name="Zap" size={13} style={{ color: "#000" }} />
            </div>
            <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "17px", letterSpacing: "0.08em", color: "var(--text-primary)" }}>ARENA</span>
          </div>
          <div style={{ width: 1, height: 20, background: "var(--border-mid)" }} />
          <span style={{ fontSize: "12px", fontWeight: 500, color: "var(--text-muted)", letterSpacing: "0.05em" }}>GRAND FINAL</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div className="live-badge" style={{ display: "flex", alignItems: "center", gap: 5, padding: "3px 8px", background: "rgba(229,57,53,0.12)", border: "1px solid rgba(229,57,53,0.3)", borderRadius: 3 }}>
            <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#e53935" }} />
            <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", color: "#e53935" }}>LIVE</span>
          </div>
          <span style={{ fontSize: "12px", color: "var(--text-muted)", fontWeight: 500 }}>DUST2 · Карта 1 из 3</span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: "12px", fontWeight: 500 }}>
          <Icon name="Eye" size={13} />
          <span style={{ color: "var(--text-primary)", fontWeight: 600 }}>12 847</span>
          <span>зрителей</span>
        </div>
      </header>

      {/* MAIN */}
      <div style={{ display: "flex", flex: 1, padding: "14px", gap: 0, overflow: "hidden" }}>

        {/* LEFT + STREAMS COLUMN */}
        <div style={{ display: "flex", flexDirection: "column", flex: 1, gap: 10, minWidth: 0 }}>

          {/* SCOREBOARD */}
          <div style={{ display: "flex", alignItems: "stretch", background: "var(--bg-panel)", border: "1px solid var(--border-subtle)", borderRadius: 4, overflow: "hidden" }}>
            <div style={{ width: 3, background: "var(--accent-orange)", flexShrink: 0 }} />
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", flex: 1, padding: "14px 20px" }}>

              {/* Left team */}
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "20px", letterSpacing: "0.06em", color: "var(--text-primary)", textTransform: "uppercase" }}>
                  {TEAMS.left.name}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3 }}>
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "var(--accent-orange)", letterSpacing: "0.1em" }}>CT</span>
                  <div style={{ width: 1, height: 10, background: "var(--border-mid)" }} />
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>11–3</span>
                </div>
              </div>

              {/* Score + timer */}
              <div style={{ display: "flex", alignItems: "center" }}>
                <div style={{ padding: "0 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "58px", color: "var(--accent-orange)", lineHeight: 1 }}>
                    {TEAMS.left.score}
                  </div>
                </div>

                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 5, padding: "0 18px", borderLeft: "1px solid var(--border-subtle)", borderRight: "1px solid var(--border-subtle)" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "28px", color: "var(--text-secondary)", letterSpacing: "0.03em", lineHeight: 1 }}>
                    1<span className="timer-colon">:</span>45
                  </div>
                  <div style={{ padding: "2px 10px", background: "var(--bg-elevated)", borderRadius: 2, fontSize: "10px", fontWeight: 700, letterSpacing: "0.12em", color: "var(--text-muted)", textTransform: "uppercase" }}>
                    Раунд 21
                  </div>
                </div>

                <div style={{ padding: "0 24px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "58px", color: "var(--text-secondary)", lineHeight: 1 }}>
                    {TEAMS.right.score}
                  </div>
                </div>
              </div>

              {/* Right team */}
              <div style={{ flex: 1, textAlign: "right" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "20px", letterSpacing: "0.06em", color: "var(--text-primary)", textTransform: "uppercase" }}>
                  {TEAMS.right.name}
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 6, marginTop: 3, justifyContent: "flex-end" }}>
                  <span style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>9–5</span>
                  <div style={{ width: 1, height: 10, background: "var(--border-mid)" }} />
                  <span style={{ fontSize: "11px", fontWeight: 700, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>T</span>
                </div>
              </div>
            </div>
            <div style={{ width: 3, background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />
          </div>

          {/* Score bar */}
          <div style={{ display: "flex", height: 3, overflow: "hidden", borderRadius: 2 }}>
            <div style={{ width: `${leftPct}%`, background: "var(--accent-orange)" }} />
            <div style={{ flex: 1, background: "rgba(255,255,255,0.12)" }} />
          </div>

          {/* STREAMS */}
          <div style={{ display: "flex", gap: 10, flex: 1, minHeight: 0 }}>

            {/* LEFT STREAM */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <div className="video-placeholder" style={{ flex: 1, minHeight: "300px", border: "1px solid var(--border-subtle)", borderTop: "2px solid var(--accent-orange)", borderRadius: "0 4px 4px 0", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 10, left: 10, zIndex: 2 }}>
                  <div style={{ padding: "4px 10px", background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", borderRadius: 3, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--text-primary)", letterSpacing: "0.06em" }}>{leftPlayer.name}</span>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--accent-orange)", letterSpacing: "0.08em" }}>{leftPlayer.role}</span>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 14px 12px", background: "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, transparent 100%)", display: "flex", gap: 20, zIndex: 2 }}>
                  <StatBadge label="Убийств" value={leftPlayer.kills} highlight />
                  <StatBadge label="Рейтинг" value={leftPlayer.rating} />
                </div>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.1 }}>
                    <Icon name="Monitor" size={64} />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.12em" }}>ВИДЕОПОТОК</span>
                  </div>
                </div>
              </div>

              {/* Left player selector */}
              <div style={{ display: "flex", gap: 6, padding: "10px 12px", background: "var(--bg-panel)", border: "1px solid var(--border-subtle)", borderRadius: 4, alignItems: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", whiteSpace: "nowrap", marginRight: 4 }}>Камера</span>
                {TEAMS.left.players.map((p) => (
                  <button
                    key={p.id}
                    className={`player-btn flex-1 px-3 py-2 ${leftPlayer.id === p.id ? "active-left" : ""}`}
                    style={{ background: leftPlayer.id === p.id ? undefined : "rgba(255,255,255,0.02)", border: `1px solid ${leftPlayer.id === p.id ? "var(--accent-orange)" : "var(--border-subtle)"}`, textAlign: "left" }}
                    onClick={() => setLeftPlayer(p)}
                  >
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "13px", color: leftPlayer.id === p.id ? "var(--accent-orange)" : "var(--text-primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>{p.role}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT STREAM */}
            <div style={{ display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
              <div className="video-placeholder" style={{ flex: 1, minHeight: "300px", border: "1px solid var(--border-subtle)", borderTop: "2px solid rgba(255,255,255,0.22)", borderRadius: "4px 0 0 4px", position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", top: 10, right: 10, zIndex: 2 }}>
                  <div style={{ padding: "4px 10px", background: "rgba(0,0,0,0.65)", backdropFilter: "blur(8px)", borderRadius: 3, display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontSize: "11px", fontWeight: 600, color: "var(--text-muted)", letterSpacing: "0.08em" }}>{rightPlayer.role}</span>
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "14px", color: "var(--text-primary)", letterSpacing: "0.06em" }}>{rightPlayer.name}</span>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 14px 12px", background: "linear-gradient(0deg, rgba(0,0,0,0.72) 0%, transparent 100%)", display: "flex", gap: 20, zIndex: 2 }}>
                  <StatBadge label="Убийств" value={rightPlayer.kills} />
                  <StatBadge label="Рейтинг" value={rightPlayer.rating} />
                </div>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1 }}>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, opacity: 0.1 }}>
                    <Icon name="Monitor" size={64} />
                    <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "11px", letterSpacing: "0.12em" }}>ВИДЕОПОТОК</span>
                  </div>
                </div>
              </div>

              {/* Right player selector */}
              <div style={{ display: "flex", gap: 6, padding: "10px 12px", background: "var(--bg-panel)", border: "1px solid var(--border-subtle)", borderRadius: 4, alignItems: "center" }}>
                <span style={{ fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em", color: "var(--text-muted)", textTransform: "uppercase", whiteSpace: "nowrap", marginRight: 4 }}>Камера</span>
                {TEAMS.right.players.map((p) => (
                  <button
                    key={p.id}
                    className={`player-btn flex-1 px-3 py-2 ${rightPlayer.id === p.id ? "active-right" : ""}`}
                    style={{ background: rightPlayer.id === p.id ? undefined : "rgba(255,255,255,0.02)", border: `1px solid ${rightPlayer.id === p.id ? "rgba(255,255,255,0.3)" : "var(--border-subtle)"}`, textAlign: "left" }}
                    onClick={() => setRightPlayer(p)}
                  >
                    <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "13px", color: rightPlayer.id === p.id ? "var(--text-primary)" : "rgba(255,255,255,0.45)", letterSpacing: "0.05em", textTransform: "uppercase" }}>{p.name}</div>
                    <div style={{ fontSize: "11px", color: "var(--text-muted)", fontWeight: 500 }}>{p.role}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CHAT */}
        <div style={{ width: "272px", marginLeft: "10px", display: "flex", flexDirection: "column", background: "var(--bg-panel)", border: "1px solid var(--border-subtle)", borderRadius: 4, overflow: "hidden" }}>
          <div style={{ padding: "11px 14px", borderBottom: "1px solid var(--border-subtle)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
              <Icon name="MessageSquare" size={13} style={{ color: "var(--text-muted)" }} />
              <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "13px", letterSpacing: "0.1em", color: "var(--text-primary)", textTransform: "uppercase" }}>Чат</span>
            </div>
            <div style={{ padding: "2px 7px", background: "var(--bg-elevated)", borderRadius: 2, fontSize: "11px", fontWeight: 600, color: "var(--text-muted)" }}>
              12 847
            </div>
          </div>

          <div style={{ flex: 1, overflowY: "auto", padding: "8px 4px", display: "flex", flexDirection: "column", gap: 1 }}>
            {messages.map((msg) => (
              <div key={msg.id} className="chat-msg" style={{ padding: "4px 10px", borderRadius: 3 }}>
                <span style={{ fontWeight: 700, fontSize: "12px", color: msg.color, marginRight: 5 }}>{msg.user}</span>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.5)", fontWeight: 400 }}>{msg.text}</span>
              </div>
            ))}
          </div>

          <div style={{ padding: "10px", borderTop: "1px solid var(--border-subtle)", display: "flex", gap: 6 }}>
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Написать сообщение..."
              style={{ flex: 1, background: "var(--bg-elevated)", border: "1px solid var(--border-subtle)", borderRadius: 3, padding: "7px 10px", fontSize: "13px", fontFamily: "'Barlow', sans-serif", color: "var(--text-primary)", outline: "none" }}
            />
            <button
              onClick={sendMessage}
              style={{ background: "var(--accent-orange)", border: "none", borderRadius: 3, padding: "7px 11px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}
            >
              <Icon name="Send" size={13} style={{ color: "#000" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
