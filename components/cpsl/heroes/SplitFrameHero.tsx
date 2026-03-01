import { Button } from "@/components/ui/button"

export interface SplitFrameHeroProps {
  eyebrow?: string
  /** Three headline lines: [line1, vsLine (gets purple accent), line3] */
  teamA?: string
  teamB?: string
  matchMeta?: Array<{ label: string; value: string }>
  primaryCta?: { label: string; href?: string }
  secondaryCta?: { label: string; href?: string }
  /** src for <img> right-panel background */
  imageSrc?: string
  homeTeam?: { abbr: string; color: string }
  awayTeam?: { abbr: string; color: string }
}

export function SplitFrameHero({
  eyebrow    = "CPSL Premiership · Match Day 18",
  teamA      = "CHARLOTTE",
  teamB      = "ATHLETIC",
  matchMeta  = [{ label: "Date", value: "Sat 1 Mar" }, { label: "Kickoff", value: "3:00 PM" }, { label: "Venue", value: "Matthews" }],
  primaryCta = { label: "Buy Tickets" },
  secondaryCta = { label: "Match Preview" },
  imageSrc,
  homeTeam   = { abbr: "CFA", color: "#0047FF" },
  awayTeam   = { abbr: "RLH", color: "#7C3AED" },
}: SplitFrameHeroProps) {
  return (
    <div style={{ display: "flex", height: "520px", overflow: "hidden" }}>

      {/* Left — content */}
      <div style={{ width: "50%", flexShrink: 0, background: "#020B1A", padding: "56px 52px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
        <div style={{ color: "#0047FF", fontSize: "10px", fontWeight: 700, letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px", display: "flex", alignItems: "center", gap: "8px" }}>
          <span style={{ width: "20px", height: "2px", background: "#0047FF", display: "inline-block" }} />
          {eyebrow}
        </div>

        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "58px", fontWeight: 800, color: "white", lineHeight: 0.93, letterSpacing: "-1.5px", marginBottom: "28px" }}>
          {teamA}<br />
          <span style={{ color: "#7C3AED" }}>vs</span> RALEIGH<br />
          {teamB}
        </h1>

        <div style={{ display: "flex", gap: "0", marginBottom: "36px" }}>
          {matchMeta.map((s, i) => (
            <div key={s.label} style={{ paddingRight: "24px", marginRight: "24px", borderRight: i < matchMeta.length - 1 ? "1px solid #1E2D45" : "none" }}>
              <div style={{ color: "#334155", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{s.label}</div>
              <div style={{ color: "#F1F5F9", fontSize: "14px", fontWeight: 600 }}>{s.value}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {primaryCta   && <Button size="lg">{primaryCta.label}</Button>}
          {secondaryCta && <Button size="lg" variant="secondary">{secondaryCta.label}</Button>}
        </div>
      </div>

      {/* Right — photo slot */}
      <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
        {imageSrc ? (
          <img src={imageSrc} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0A2040 0%, #1A4080 35%, #0047FF 65%, #0029A3 100%)" }} />
        )}

        {/* Jersey number watermark */}
        <div style={{ position: "absolute", right: "-20px", top: "50%", transform: "translateY(-50%)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "260px", fontWeight: 800, color: "rgba(255,255,255,0.06)", lineHeight: 1, letterSpacing: "-8px", userSelect: "none" }}>10</div>

        {/* Diagonal mask */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "100px", background: "#020B1A", clipPath: "polygon(0 0, 100% 0, 20% 100%, 0 100%)" }} />

        {/* Team badges */}
        <div style={{ position: "absolute", top: "36px", right: "36px", width: "60px", height: "60px", borderRadius: "50%", background: homeTeam.color, border: "3px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, color: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>{homeTeam.abbr}</div>
        <div style={{ position: "absolute", bottom: "36px", left: "72px", width: "60px", height: "60px", borderRadius: "50%", background: awayTeam.color, border: "3px solid rgba(255,255,255,0.15)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "12px", fontWeight: 800, color: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.4)" }}>{awayTeam.abbr}</div>

        {/* VS */}
        <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <span style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "96px", fontWeight: 800, color: "rgba(255,255,255,0.07)", letterSpacing: "-4px", userSelect: "none" }}>VS</span>
        </div>
      </div>
    </div>
  )
}
