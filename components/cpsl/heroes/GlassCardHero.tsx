import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export interface GlassCardHeroProps {
  /** src for <img> background — leave undefined for gradient placeholder */
  imageSrc?: string
  competition?: string
  minute?: number
  homeTeam?: { name: string; abbr: string; color: string; score: number }
  awayTeam?: { name: string; abbr: string; color: string; score: number }
  leadingLabel?: string
  homePossession?: number
  primaryCta?: { label: string; href?: string }
}

export function GlassCardHero({
  imageSrc,
  competition     = "CPSL Premiership",
  minute          = 67,
  homeTeam        = { name: "Charlotte FC",    abbr: "CFA", color: "#0047FF", score: 3 },
  awayTeam        = { name: "Raleigh Athletic", abbr: "RLH", color: "#7C3AED", score: 1 },
  leadingLabel    = "Charlotte Leading",
  homePossession  = 54,
  primaryCta      = { label: "Watch Live" },
}: GlassCardHeroProps) {
  const awayPossession = 100 - homePossession

  return (
    <div style={{ position: "relative", height: "560px", background: "#020B1A", overflow: "hidden" }}>

      {/* Background */}
      {imageSrc ? (
        <img src={imageSrc} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
      ) : (
        <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse at 50% 60%, #1A3A6A 0%, #0A1628 50%, #020B1A 100%)" }} />
      )}

      {/* Spotlight beams */}
      {["-10%", "25%", "60%", "88%"].map((left, i) => (
        <div key={i} style={{ position: "absolute", top: 0, bottom: 0, left, width: i % 2 === 0 ? "80px" : "40px", background: `linear-gradient(to bottom, rgba(255,255,255,${i % 2 === 0 ? 0.04 : 0.02}), transparent 60%)`, transform: `rotate(${i % 2 === 0 ? 5 : -3}deg)` }} />
      ))}
      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "50%", background: "linear-gradient(to top, rgba(2,11,26,0.7), transparent)" }} />

      {/* Frosted glass card */}
      <div style={{ position: "relative", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <div style={{ background: "rgba(10,22,40,0.72)", backdropFilter: "blur(28px)", WebkitBackdropFilter: "blur(28px)", border: "1px solid rgba(255,255,255,0.10)", borderRadius: "24px", padding: "40px 52px", minWidth: "460px", textAlign: "center", boxShadow: "0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)" }}>

          {/* Header */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
            <span style={{ color: "#475569", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>{competition}</span>
            <Badge variant="live">LIVE · {minute}&apos;</Badge>
          </div>

          {/* Teams + score */}
          <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
            {/* Home */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: homeTeam.color, border: `3px solid ${homeTeam.color}4D`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "white", margin: "0 auto 10px", boxShadow: `0 4px 20px ${homeTeam.color}66` }}>{homeTeam.abbr}</div>
              <div style={{ color: "#E2E8F0", fontSize: "12px", fontWeight: 700 }}>{homeTeam.name}</div>
              <div style={{ color: "#475569", fontSize: "10px", marginTop: "2px" }}>Home</div>
            </div>

            {/* Score */}
            <div style={{ textAlign: "center", flexShrink: 0 }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "80px", fontWeight: 800, color: "white", letterSpacing: "-4px", lineHeight: 1 }}>{homeTeam.score}–{awayTeam.score}</div>
              <div style={{ color: "#00C853", fontSize: "10px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px" }}>{leadingLabel}</div>
            </div>

            {/* Away */}
            <div style={{ flex: 1, textAlign: "center" }}>
              <div style={{ width: "56px", height: "56px", borderRadius: "50%", background: awayTeam.color, border: `3px solid ${awayTeam.color}4D`, display: "flex", alignItems: "center", justifyContent: "center", fontSize: "13px", fontWeight: 800, color: "white", margin: "0 auto 10px", boxShadow: `0 4px 20px ${awayTeam.color}4D` }}>{awayTeam.abbr}</div>
              <div style={{ color: "#94A3B8", fontSize: "12px", fontWeight: 700 }}>{awayTeam.name}</div>
              <div style={{ color: "#475569", fontSize: "10px", marginTop: "2px" }}>Away</div>
            </div>
          </div>

          {/* Possession bar */}
          <div style={{ marginBottom: "28px" }}>
            <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#475569", marginBottom: "6px" }}>
              <span>{homePossession}% Possession</span>
              <span>{awayPossession}%</span>
            </div>
            <div style={{ height: "3px", borderRadius: "99px", background: "rgba(255,255,255,0.08)", overflow: "hidden", display: "flex" }}>
              <div style={{ width: `${homePossession}%`, background: homeTeam.color, borderRadius: "99px 0 0 99px" }} />
              <div style={{ flex: 1, background: awayTeam.color, borderRadius: "0 99px 99px 0" }} />
            </div>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
            {primaryCta && (
              <Button variant="cpsl-live" size="sm">
                <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
                {primaryCta.label}
              </Button>
            )}
            <Button variant="ghost" size="sm" style={{ color: "#94A3B8" }}>Stats</Button>
            <Button variant="ghost" size="sm" style={{ color: "#94A3B8" }}>Lineups</Button>
          </div>
        </div>
      </div>
    </div>
  )
}
