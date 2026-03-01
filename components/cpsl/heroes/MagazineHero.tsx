import { Button } from "@/components/ui/button"

export interface MagazineHeroProps {
  season?: string
  /** Three headline lines: [line1, line2 (accent), line3] */
  headline?: string
  headlineAccent?: string
  headlineSub?: string
  stats?: Array<{ value: string; label: string }>
  primaryCta?: { label: string; href?: string }
  secondaryCta?: { label: string; href?: string }
  /** src for <img> right-panel background */
  imageSrc?: string
}

export function MagazineHero({
  season         = "2025–26 Season",
  headline       = "THE",
  headlineAccent = "LEAGUE",
  headlineSub    = "AWAITS",
  stats          = [{ value: "12", label: "Clubs" }, { value: "38", label: "Match Days" }, { value: "NC", label: "Statewide" }],
  primaryCta     = { label: "Explore Clubs →" },
  secondaryCta   = { label: "See Fixtures" },
  imageSrc,
}: MagazineHeroProps) {
  return (
    <div style={{ position: "relative", height: "540px", background: "#F4F6FA", overflow: "hidden", display: "flex" }}>

      {/* Accent stripe */}
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "4px", background: "linear-gradient(to bottom, #0047FF, #7C3AED)" }} />

      {/* Right — photo slot */}
      <div style={{ position: "absolute", right: 0, top: 0, bottom: 0, width: "55%", overflow: "hidden" }}>
        {imageSrc ? (
          <img src={imageSrc} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        ) : (
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #003AB0 0%, #0047FF 40%, #1A60FF 70%, #0029A3 100%)" }} />
        )}
        {/* Jersey watermark */}
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-52%)", fontFamily: "'Barlow Condensed', sans-serif", fontSize: "320px", fontWeight: 800, color: "rgba(255,255,255,0.07)", lineHeight: 1, letterSpacing: "-10px", userSelect: "none" }}>9</div>
        {/* Left fade */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: "180px", background: "linear-gradient(to right, #F4F6FA 0%, rgba(244,246,250,0) 100%)" }} />
      </div>

      {/* Left — text (overlaps photo) */}
      <div style={{ position: "relative", zIndex: 10, paddingLeft: "56px", paddingRight: "32px", display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: "600px" }}>
        {/* Season pill */}
        <div style={{ display: "inline-flex", alignItems: "center", background: "#0047FF", padding: "5px 12px", borderRadius: "4px", marginBottom: "20px", width: "fit-content" }}>
          <span style={{ color: "white", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>{season}</span>
        </div>

        {/* Headline */}
        <h1 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "104px", fontWeight: 800, lineHeight: 0.88, letterSpacing: "-3px", color: "#0A0E1A", marginBottom: "28px" }}>
          {headline}<br />
          <span style={{ color: "#0047FF" }}>{headlineAccent}</span><br />
          {headlineSub}
        </h1>

        {/* Stats row */}
        <div style={{ display: "flex", gap: "0", marginBottom: "36px" }}>
          {stats.map((s, i) => (
            <div key={s.label} style={{ paddingRight: "28px", marginRight: "28px", borderRight: i < stats.length - 1 ? "1px solid #CBD5E1" : "none" }}>
              <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "36px", fontWeight: 800, color: "#0047FF", lineHeight: 1 }}>{s.value}</div>
              <div style={{ fontSize: "10px", fontWeight: 600, color: "#64748B", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.label}</div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: "12px" }}>
          {primaryCta   && <Button size="lg">{primaryCta.label}</Button>}
          {secondaryCta && <Button size="lg" variant="ghost">{secondaryCta.label}</Button>}
        </div>
      </div>
    </div>
  )
}
