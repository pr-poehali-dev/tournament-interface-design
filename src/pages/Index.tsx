import { useState } from "react";
import Icon from "@/components/ui/icon";

const TEAMS = {
  left: {
    name: "NEON WOLVES",
    tag: "NW",
    color: "var(--neon-cyan)",
    score: 11,
    players: [
      { id: 1, name: "Shadowbyte", role: "IGL", kills: 24, rating: 1.42 },
      { id: 2, name: "Vortex", role: "AWP", kills: 18, rating: 1.28 },
    ],
  },
  right: {
    name: "CRIMSON EDGE",
    tag: "CE",
    color: "var(--neon-magenta)",
    score: 9,
    players: [
      { id: 3, name: "Phantom_X", role: "Entry", kills: 21, rating: 1.35 },
      { id: 4, name: "Ironclad", role: "Support", kills: 15, rating: 1.19 },
    ],
  },
};

const INITIAL_MESSAGES = [
  { id: 1, user: "GhostFrag", color: "#00ffc8", text: "NEON идут!!!" },
  { id: 2, user: "Стример228", color: "#ff0090", text: "Crimson возьмут эту карту, верю" },
  { id: 3, user: "CyberFan", color: "#ff6a00", text: "Shadowbyte монстр сегодня 🔥" },
  { id: 4, user: "xXxN00bSlayer", color: "#a855f7", text: "ez для NW как обычно" },
  { id: 5, user: "TurboViewer", color: "#00ffc8", text: "какой AWP! Vortex зверь" },
  { id: 6, user: "Анонимус", color: "#64748b", text: "оба тима топ, интересный матч" },
  { id: 7, user: "ProGamer_RU", color: "#ff0090", text: "Phantom_X тоже не сдаётся!" },
  { id: 8, user: "WatchDog99", color: "#ff6a00", text: "map 2 будет горячей" },
];

function StatBadge({ label, value, color }: { label: string; value: number | string; color: string }) {
  return (
    <div style={{ display: "flex", alignItems: "baseline", gap: 5 }}>
      <span style={{ fontSize: "9px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)" }}>
        {label}
      </span>
      <span style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "15px", color, textShadow: `0 0 8px ${color}` }}>
        {value}
      </span>
    </div>
  );
}

const Index = () => {
  const [leftPlayer, setLeftPlayer] = useState(TEAMS.left.players[0]);
  const [rightPlayer, setRightPlayer] = useState(TEAMS.right.players[0]);
  const [chatInput, setChatInput] = useState("");
  const [messages, setMessages] = useState(INITIAL_MESSAGES);

  const sendMessage = () => {
    if (!chatInput.trim()) return;
    setMessages((prev) => [
      ...prev,
      { id: prev.length + 1, user: "Зритель", color: "#00ffc8", text: chatInput.trim() },
    ]);
    setChatInput("");
  };

  return (
    <div className="min-h-screen flex flex-col noise" style={{ background: "var(--bg-deep)", fontFamily: "'Rajdhani', sans-serif" }}>

      {/* TOP NAVBAR */}
      <header className="flex items-center justify-between px-6 py-3 relative" style={{ background: "linear-gradient(180deg, rgba(0,255,200,0.04) 0%, transparent 100%)", borderBottom: "1px solid rgba(0,255,200,0.08)" }}>
        <div className="flex items-center gap-3">
          <div className="clip-sharp-btn px-3 py-1 flex items-center gap-2" style={{ background: "linear-gradient(135deg, var(--neon-cyan), #00b890)", fontFamily: "'Orbitron', monospace", fontWeight: 900, fontSize: "14px", color: "#000", letterSpacing: "0.1em" }}>
            ▲ ARENA
          </div>
          <span style={{ color: "rgba(255,255,255,0.2)", fontFamily: "'Rajdhani', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.15em" }}>
            LIVE BROADCAST
          </span>
        </div>

        <div className="flex items-center gap-4">
          <div className="live-badge clip-sharp-btn px-3 py-1 flex items-center gap-2" style={{ background: "rgba(255,0,0,0.15)", border: "1px solid rgba(255,0,0,0.4)", fontSize: "11px", fontWeight: 700, letterSpacing: "0.15em", color: "#ff4444" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#ff4444", display: "inline-block" }} />
            LIVE
          </div>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", fontWeight: 600, letterSpacing: "0.1em" }}>DUST2 · MAP 1/3</span>
          <span style={{ color: "rgba(255,255,255,0.12)", fontSize: "13px" }}>|</span>
          <span style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", fontWeight: 600 }}>GRAND FINAL</span>
        </div>

        <div className="flex items-center gap-2" style={{ color: "rgba(255,255,255,0.4)", fontSize: "13px", fontWeight: 600 }}>
          <Icon name="Eye" size={14} />
          <span style={{ color: "var(--neon-cyan)" }}>12 847</span>
          <span>зрителей</span>
        </div>
      </header>

      {/* MAIN LAYOUT */}
      <div className="flex flex-1 gap-0 overflow-hidden" style={{ padding: "16px" }}>

        {/* STREAMS + SCOREBOARD */}
        <div className="flex flex-col flex-1 gap-3 min-w-0">

          {/* SCOREBOARD */}
          <div className="flex items-center justify-between px-6 py-3 relative" style={{ background: "var(--bg-panel)", border: "1px solid rgba(255,255,255,0.05)", clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 16px 100%, 0 calc(100% - 16px))" }}>
            {/* Left team */}
            <div className="flex items-center gap-3 flex-1">
              <div style={{ width: 4, height: 32, background: "var(--neon-cyan)", boxShadow: "0 0 12px var(--neon-cyan)" }} />
              <div>
                <div className="glow-cyan" style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "16px", color: "var(--neon-cyan)", letterSpacing: "0.12em" }}>{TEAMS.left.name}</div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>CT SIDE</div>
              </div>
            </div>

            {/* Score + timer */}
            <div className="flex items-center gap-6">
              <div className="score-digit glow-cyan" style={{ fontSize: "52px", color: "var(--neon-cyan)", minWidth: "60px", textAlign: "center" }}>{TEAMS.left.score}</div>
              <div className="flex flex-col items-center gap-1">
                <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 600, fontSize: "22px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.05em", lineHeight: 1 }}>
                  1<span className="timer-colon">:</span>45
                </div>
                <div className="divider-slash px-4 py-0.5" style={{ background: "rgba(255,255,255,0.06)", fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.3)" }}>
                  РАУНД 21
                </div>
              </div>
              <div className="score-digit glow-magenta" style={{ fontSize: "52px", color: "var(--neon-magenta)", minWidth: "60px", textAlign: "center" }}>{TEAMS.right.score}</div>
            </div>

            {/* Right team */}
            <div className="flex items-center gap-3 flex-1 justify-end">
              <div style={{ textAlign: "right" }}>
                <div className="glow-magenta" style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "16px", color: "var(--neon-magenta)", letterSpacing: "0.12em" }}>{TEAMS.right.name}</div>
                <div style={{ color: "rgba(255,255,255,0.3)", fontSize: "11px", fontWeight: 600, letterSpacing: "0.1em" }}>T SIDE</div>
              </div>
              <div style={{ width: 4, height: 32, background: "var(--neon-magenta)", boxShadow: "0 0 12px var(--neon-magenta)" }} />
            </div>

            <div style={{ position: "absolute", top: 0, left: 0, width: 20, height: 20, borderTop: "2px solid var(--neon-cyan)", borderLeft: "2px solid var(--neon-cyan)", opacity: 0.5 }} />
            <div style={{ position: "absolute", bottom: 0, right: 0, width: 20, height: 20, borderBottom: "2px solid var(--neon-magenta)", borderRight: "2px solid var(--neon-magenta)", opacity: 0.5 }} />
          </div>

          {/* STREAMS ROW */}
          <div className="flex gap-3 flex-1 min-h-0">

            {/* LEFT STREAM */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="video-placeholder glow-box-cyan relative" style={{ flex: 1, minHeight: "300px", border: "1px solid rgba(0,255,200,0.2)", clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}>
                <div style={{ position: "absolute", top: 12, left: 12, zIndex: 2 }}>
                  <div className="clip-sharp-btn px-3 py-1" style={{ background: "rgba(0,255,200,0.12)", border: "1px solid rgba(0,255,200,0.35)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "13px", color: "var(--neon-cyan)", letterSpacing: "0.1em" }}>{leftPlayer.name}</span>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>{leftPlayer.role}</span>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px", background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)", display: "flex", gap: 16, zIndex: 2 }}>
                  <StatBadge label="УБИЙСТВ" value={leftPlayer.kills} color="var(--neon-cyan)" />
                  <StatBadge label="РЕЙТИНГ" value={leftPlayer.rating} color="var(--neon-cyan)" />
                </div>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, opacity: 0.06 }}>
                  <Icon name="Monitor" size={100} />
                </div>
                <div style={{ position: "absolute", top: 0, right: 0, width: 16, height: 16, borderTop: "2px solid var(--neon-cyan)", borderRight: "2px solid var(--neon-cyan)", opacity: 0.4 }} />
              </div>

              {/* Left player selector */}
              <div style={{ display: "flex", gap: 8, padding: "10px", background: "var(--bg-panel)", border: "1px solid rgba(0,255,200,0.08)", clipPath: "polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", alignSelf: "center", marginRight: 4, whiteSpace: "nowrap" }}>КАМЕРА</span>
                {TEAMS.left.players.map((p) => (
                  <button
                    key={p.id}
                    className={`player-btn clip-sharp-btn flex-1 px-3 py-2 ${leftPlayer.id === p.id ? "active-left" : ""}`}
                    style={{ background: leftPlayer.id === p.id ? undefined : "rgba(255,255,255,0.03)", border: `1px solid ${leftPlayer.id === p.id ? "var(--neon-cyan)" : "rgba(255,255,255,0.07)"}`, textAlign: "left" }}
                    onClick={() => setLeftPlayer(p)}
                  >
                    <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "12px", color: leftPlayer.id === p.id ? "var(--neon-cyan)" : "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}>{p.name}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.1em" }}>{p.role}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT STREAM */}
            <div className="flex flex-col gap-2 flex-1">
              <div className="video-placeholder glow-box-magenta relative" style={{ flex: 1, minHeight: "300px", border: "1px solid rgba(255,0,144,0.2)", clipPath: "polygon(16px 0, 100% 0, 100% 100%, 0 100%, 0 16px)" }}>
                <div style={{ position: "absolute", top: 12, right: 12, zIndex: 2 }}>
                  <div className="clip-sharp-btn px-3 py-1" style={{ background: "rgba(255,0,144,0.12)", border: "1px solid rgba(255,0,144,0.35)", backdropFilter: "blur(8px)", display: "flex", alignItems: "center", gap: 8 }}>
                    <span style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "13px", color: "var(--neon-magenta)", letterSpacing: "0.1em" }}>{rightPlayer.name}</span>
                    <span style={{ fontSize: "10px", fontWeight: 600, color: "rgba(255,255,255,0.4)", letterSpacing: "0.1em" }}>{rightPlayer.role}</span>
                  </div>
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "12px", background: "linear-gradient(0deg, rgba(0,0,0,0.8) 0%, transparent 100%)", display: "flex", gap: 16, zIndex: 2 }}>
                  <StatBadge label="УБИЙСТВ" value={rightPlayer.kills} color="var(--neon-magenta)" />
                  <StatBadge label="РЕЙТИНГ" value={rightPlayer.rating} color="var(--neon-magenta)" />
                </div>
                <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center", zIndex: 1, opacity: 0.06 }}>
                  <Icon name="Monitor" size={100} />
                </div>
                <div style={{ position: "absolute", bottom: 0, left: 0, width: 16, height: 16, borderBottom: "2px solid var(--neon-magenta)", borderLeft: "2px solid var(--neon-magenta)", opacity: 0.4 }} />
              </div>

              {/* Right player selector */}
              <div style={{ display: "flex", gap: 8, padding: "10px", background: "var(--bg-panel)", border: "1px solid rgba(255,0,144,0.08)", clipPath: "polygon(0 0, 100% 0, 100% 100%, 8px 100%, 0 calc(100% - 8px))" }}>
                <span style={{ fontSize: "10px", fontWeight: 700, letterSpacing: "0.15em", color: "rgba(255,255,255,0.2)", alignSelf: "center", marginRight: 4, whiteSpace: "nowrap" }}>КАМЕРА</span>
                {TEAMS.right.players.map((p) => (
                  <button
                    key={p.id}
                    className={`player-btn clip-sharp-btn flex-1 px-3 py-2 ${rightPlayer.id === p.id ? "active-right" : ""}`}
                    style={{ background: rightPlayer.id === p.id ? undefined : "rgba(255,255,255,0.03)", border: `1px solid ${rightPlayer.id === p.id ? "var(--neon-magenta)" : "rgba(255,255,255,0.07)"}`, textAlign: "left" }}
                    onClick={() => setRightPlayer(p)}
                  >
                    <div style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "12px", color: rightPlayer.id === p.id ? "var(--neon-magenta)" : "rgba(255,255,255,0.6)", letterSpacing: "0.08em" }}>{p.name}</div>
                    <div style={{ fontSize: "10px", color: "rgba(255,255,255,0.25)", fontWeight: 600, letterSpacing: "0.1em" }}>{p.role}</div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CHAT PANEL */}
        <div className="flex flex-col" style={{ width: "280px", marginLeft: "12px", background: "var(--bg-panel)", border: "1px solid rgba(255,255,255,0.05)", clipPath: "polygon(0 0, calc(100% - 16px) 0, 100% 16px, 100% 100%, 0 100%)" }}>
          {/* Chat header */}
          <div style={{ padding: "12px 16px", borderBottom: "1px solid rgba(255,255,255,0.05)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <Icon name="MessageSquare" size={14} style={{ color: "var(--neon-cyan)" }} />
              <span style={{ fontFamily: "'Orbitron', monospace", fontWeight: 700, fontSize: "11px", letterSpacing: "0.15em", color: "rgba(255,255,255,0.7)" }}>ЧАТ</span>
            </div>
            <div className="clip-sharp-btn px-2 py-0.5" style={{ background: "rgba(0,255,200,0.08)", border: "1px solid rgba(0,255,200,0.15)", fontSize: "10px", fontWeight: 700, color: "var(--neon-cyan)", letterSpacing: "0.1em" }}>
              12 847
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto" style={{ padding: "8px", display: "flex", flexDirection: "column", gap: 2 }}>
            {messages.map((msg) => (
              <div key={msg.id} className="chat-msg" style={{ padding: "5px 8px" }}>
                <span style={{ fontWeight: 700, fontSize: "12px", color: msg.color, marginRight: 6, letterSpacing: "0.05em" }}>{msg.user}</span>
                <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.65)", fontWeight: 400 }}>{msg.text}</span>
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div style={{ padding: "10px", borderTop: "1px solid rgba(255,255,255,0.05)", display: "flex", gap: 6 }}>
            <input
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              placeholder="Написать..."
              style={{ flex: 1, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", padding: "7px 10px", fontSize: "13px", fontFamily: "'Rajdhani', sans-serif", fontWeight: 500, color: "rgba(255,255,255,0.8)", outline: "none", clipPath: "polygon(0 0, calc(100% - 5px) 0, 100% 5px, 100% 100%, 0 100%)" }}
            />
            <button
              onClick={sendMessage}
              className="clip-sharp-btn"
              style={{ background: "linear-gradient(135deg, var(--neon-cyan), #00b890)", border: "none", padding: "7px 12px", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}
            >
              <Icon name="Send" size={14} style={{ color: "#000" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
