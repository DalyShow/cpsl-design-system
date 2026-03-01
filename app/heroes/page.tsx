import PageHeader from "@/components/PageHeader"
import Section from "@/components/Section"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

// ─── Shared photo-slot note ─────────────────────────────────────────────────
// Each hero uses a <div> gradient to simulate a photo/video background.
// In production, replace with:
//   <img src={…} className="absolute inset-0 w-full h-full object-cover" />
//   <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover" />

export default function HeroesPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader
        section="12 — Patterns"
        title="Hero Sections"
        description="Four production-ready hero layouts built from CPSL design tokens. Each accepts a photo or video background — swap the gradient placeholder for an <img> or <video> tag."
      />

      <div className="px-12 py-12">

        {/* ── Hero 1: Cinematic Gradient ─────────────────────────────────────── */}
        <Section title="1 — Cinematic Gradient">
          <p className="text-xs text-muted-foreground mb-4">
            Full-bleed background (photo or video) with a directional gradient mask keeping text readable. Live match ticker anchored to the bottom. Best for homepage and season-launch moments.
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            <div style={{ position: "relative", height: "540px", overflow: "hidden", background: "#020B1A" }}>

              {/* ── Photo / video slot ── replace gradient with <img> or <video> */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(115deg, #0A1628 0%, #112244 35%, #1A3A6A 60%, #0D2550 100%)",
              }} />
              {/* Subtle diagonal lines — stadium floodlight feel */}
              {["-30%", "-10%", "10%", "35%", "58%", "78%"].map((left, i) => (
                <div key={i} style={{
                  position: "absolute", top: "-50%", bottom: "-50%",
                  left, width: i % 3 === 0 ? "2px" : "1px",
                  background: `rgba(0,71,255,${i % 2 === 0 ? 0.12 : 0.06})`,
                  transform: "rotate(18deg)",
                }} />
              ))}
              {/* Left-to-right content mask */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, rgba(2,11,26,0.97) 30%, rgba(2,11,26,0.65) 55%, rgba(2,11,26,0.05) 100%)",
              }} />

              {/* Content */}
              <div style={{
                position: "relative", height: "100%",
                display: "flex", flexDirection: "column", justifyContent: "center",
                padding: "0 64px",
              }}>
                <div style={{ maxWidth: "560px" }}>
                  {/* Eyebrow */}
                  <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "20px" }}>
                    <span style={{
                      width: "7px", height: "7px", borderRadius: "50%",
                      background: "#FF1744", display: "inline-block", flexShrink: 0,
                      boxShadow: "0 0 8px #FF1744",
                      animation: "pulse 2s infinite",
                    }} />
                    <span style={{ color: "#FF1744", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                      Live Now
                    </span>
                    <span style={{ width: "1px", height: "12px", background: "#334155", flexShrink: 0 }} />
                    <span style={{ color: "#64748B", fontSize: "11px", fontWeight: 500 }}>Match Day 18 · Charlotte FC</span>
                  </div>

                  {/* Headline */}
                  <h1 style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "76px", fontWeight: 800,
                    color: "white", lineHeight: 0.92, letterSpacing: "-2px",
                    marginBottom: "24px",
                  }}>
                    CAROLINA<br />
                    <span style={{ color: "#0047FF" }}>PREMIER</span><br />
                    SOCCER LEAGUE
                  </h1>

                  <p style={{ color: "#94A3B8", fontSize: "16px", lineHeight: 1.65, marginBottom: "32px", maxWidth: "420px" }}>
                    The premier youth soccer league in the Carolinas. Follow every match, every moment, every season.
                  </p>

                  <div style={{ display: "flex", gap: "12px" }}>
                    <Button size="lg">Watch Live →</Button>
                    <Button size="lg" variant="secondary">View Schedule</Button>
                  </div>
                </div>
              </div>

              {/* Bottom match ticker */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0,
                background: "rgba(0,71,255,0.12)",
                backdropFilter: "blur(12px)",
                borderTop: "1px solid rgba(0,71,255,0.25)",
                padding: "10px 64px",
                display: "flex", alignItems: "center", gap: "32px",
              }}>
                <span style={{ color: "#475569", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", flexShrink: 0 }}>
                  Today
                </span>
                {[
                  { home: "Charlotte FC", hAbbr: "CFA", hScore: 3, away: "Raleigh Athletic", aAbbr: "RLH", aScore: 1, time: "72'", live: true },
                  { home: "Durham United", hAbbr: "DUR", hScore: 0, away: "Triangle FC", aAbbr: "TFC", aScore: 2, time: "45'", live: true },
                  { home: "Greensboro FC", hAbbr: "GFC", hScore: 1, away: "Winston-Salem SC", aAbbr: "WSS", aScore: 1, time: "FT", live: false },
                  { home: "Outer Banks FC", hAbbr: "OBK", hScore: 0, away: "Asheville City", aAbbr: "AVL", aScore: 0, time: "3:00 PM", live: false },
                ].map((m) => (
                  <div key={m.hAbbr} style={{
                    display: "flex", alignItems: "center", gap: "8px",
                    fontSize: "12px", whiteSpace: "nowrap", flexShrink: 0,
                  }}>
                    {m.live && <span style={{ width: "5px", height: "5px", borderRadius: "50%", background: "#FF1744", flexShrink: 0 }} />}
                    <span style={{ color: "#94A3B8", fontWeight: 600 }}>{m.hAbbr}</span>
                    <span style={{
                      fontFamily: "'Barlow Condensed', sans-serif",
                      fontSize: "18px", fontWeight: 800, color: "white", letterSpacing: "-0.5px",
                    }}>
                      {m.hScore}–{m.aScore}
                    </span>
                    <span style={{ color: "#64748B", fontWeight: 600 }}>{m.aAbbr}</span>
                    <span style={{ color: m.live ? "#FF1744" : "#475569", fontSize: "9px", fontWeight: 700, letterSpacing: "1px" }}>
                      {m.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ── Hero 2: Split Frame ────────────────────────────────────────────── */}
        <Section title="2 — Split Frame">
          <p className="text-xs text-muted-foreground mb-4">
            Dark navy content panel left, diagonal-clipped action photo right. Match preview layout — pair with <code className="bg-secondary px-1.5 py-0.5 rounded">MatchCard</code> below. Works equally well as a player spotlight or venue feature.
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            <div style={{ display: "flex", height: "520px", overflow: "hidden" }}>

              {/* Left — content */}
              <div style={{
                width: "50%", flexShrink: 0,
                background: "#020B1A",
                padding: "56px 52px",
                display: "flex", flexDirection: "column", justifyContent: "center",
              }}>
                <div style={{
                  color: "#0047FF", fontSize: "10px", fontWeight: 700,
                  letterSpacing: "4px", textTransform: "uppercase", marginBottom: "20px",
                  display: "flex", alignItems: "center", gap: "8px",
                }}>
                  <span style={{ width: "20px", height: "2px", background: "#0047FF", display: "inline-block" }} />
                  CPSL Premiership · Match Day 18
                </div>

                <h1 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "58px", fontWeight: 800,
                  color: "white", lineHeight: 0.93, letterSpacing: "-1.5px",
                  marginBottom: "28px",
                }}>
                  CHARLOTTE<br />
                  <span style={{ color: "#7C3AED" }}>vs</span> RALEIGH<br />
                  ATHLETIC
                </h1>

                {/* Match meta */}
                <div style={{ display: "flex", gap: "0", marginBottom: "36px" }}>
                  {[
                    { label: "Date", value: "Sat 1 Mar" },
                    { label: "Kickoff", value: "3:00 PM" },
                    { label: "Venue", value: "Matthews" },
                  ].map((s, i) => (
                    <div key={s.label} style={{
                      paddingRight: "24px",
                      marginRight: "24px",
                      borderRight: i < 2 ? "1px solid #1E2D45" : "none",
                    }}>
                      <div style={{ color: "#334155", fontSize: "9px", fontWeight: 700, letterSpacing: "2px", textTransform: "uppercase", marginBottom: "4px" }}>{s.label}</div>
                      <div style={{ color: "#F1F5F9", fontSize: "14px", fontWeight: 600 }}>{s.value}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <Button size="lg">Buy Tickets</Button>
                  <Button size="lg" variant="secondary">Match Preview</Button>
                </div>
              </div>

              {/* Right — photo/video slot */}
              <div style={{ flex: 1, position: "relative", overflow: "hidden" }}>
                {/* ── Replace with <img> or <video> ── */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, #0A2040 0%, #1A4080 35%, #0047FF 65%, #0029A3 100%)",
                }} />
                {/* Jersey number watermark */}
                <div style={{
                  position: "absolute", right: "-20px", top: "50%",
                  transform: "translateY(-50%)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "260px", fontWeight: 800, color: "rgba(255,255,255,0.06)",
                  lineHeight: 1, letterSpacing: "-8px",
                  userSelect: "none",
                }}>10</div>

                {/* Diagonal mask — creates the split edge */}
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: "100px",
                  background: "#020B1A",
                  clipPath: "polygon(0 0, 100% 0, 20% 100%, 0 100%)",
                }} />

                {/* Team badges */}
                <div style={{
                  position: "absolute", top: "36px", right: "36px",
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "#0047FF", border: "3px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 800, color: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}>CFA</div>
                <div style={{
                  position: "absolute", bottom: "36px", left: "72px",
                  width: "60px", height: "60px", borderRadius: "50%",
                  background: "#7C3AED", border: "3px solid rgba(255,255,255,0.15)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: "12px", fontWeight: 800, color: "white",
                  boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                }}>RLH</div>

                {/* VS label */}
                <div style={{
                  position: "absolute", inset: 0,
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <span style={{
                    fontFamily: "'Barlow Condensed', sans-serif",
                    fontSize: "96px", fontWeight: 800, color: "rgba(255,255,255,0.07)",
                    letterSpacing: "-4px", userSelect: "none",
                  }}>VS</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Hero 3: Glass Card on Dark ─────────────────────────────────────── */}
        <Section title="3 — Glass Card on Dark">
          <p className="text-xs text-muted-foreground mb-4">
            Frosted glass card floats over a full-bleed dark stadium background. Minimal, focused, and ideal for live match moments. The <code className="bg-secondary px-1.5 py-0.5 rounded">backdrop-filter: blur</code> requires a real photo or video behind it to read well in production.
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            <div style={{ position: "relative", height: "560px", background: "#020B1A", overflow: "hidden" }}>

              {/* ── Photo / video slot ── */}
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 50% 60%, #1A3A6A 0%, #0A1628 50%, #020B1A 100%)",
              }} />
              {/* Spotlight beams */}
              {["-10%", "25%", "60%", "88%"].map((left, i) => (
                <div key={i} style={{
                  position: "absolute", top: 0, bottom: 0,
                  left, width: i % 2 === 0 ? "80px" : "40px",
                  background: `linear-gradient(to bottom, rgba(255,255,255,${i % 2 === 0 ? 0.04 : 0.02}), transparent 60%)`,
                  transform: `rotate(${i % 2 === 0 ? 5 : -3}deg)`,
                }} />
              ))}
              {/* Bottom gradient up */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "50%",
                background: "linear-gradient(to top, rgba(2,11,26,0.7), transparent)",
              }} />

              {/* Centered frosted card */}
              <div style={{
                position: "relative", height: "100%",
                display: "flex", alignItems: "center", justifyContent: "center",
              }}>
                <div style={{
                  background: "rgba(10,22,40,0.72)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  borderRadius: "24px",
                  padding: "40px 52px",
                  minWidth: "460px",
                  textAlign: "center",
                  boxShadow: "0 32px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.07)",
                }}>
                  {/* Competition + live */}
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "10px", marginBottom: "24px" }}>
                    <span style={{ color: "#475569", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                      CPSL Premiership
                    </span>
                    <Badge variant="live">LIVE · 67&apos;</Badge>
                  </div>

                  {/* Teams + score */}
                  <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "32px" }}>
                    {/* Home */}
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div style={{
                        width: "56px", height: "56px", borderRadius: "50%",
                        background: "#0047FF",
                        border: "3px solid rgba(0,71,255,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "13px", fontWeight: 800, color: "white",
                        margin: "0 auto 10px",
                        boxShadow: "0 4px 20px rgba(0,71,255,0.4)",
                      }}>CFA</div>
                      <div style={{ color: "#E2E8F0", fontSize: "12px", fontWeight: 700 }}>Charlotte FC</div>
                      <div style={{ color: "#475569", fontSize: "10px", marginTop: "2px" }}>Home</div>
                    </div>

                    {/* Score */}
                    <div style={{ textAlign: "center", flexShrink: 0 }}>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "80px", fontWeight: 800, color: "white",
                        letterSpacing: "-4px", lineHeight: 1,
                      }}>3–1</div>
                      <div style={{
                        color: "#00C853", fontSize: "10px", fontWeight: 700,
                        letterSpacing: "2px", textTransform: "uppercase", marginTop: "6px",
                      }}>Charlotte Leading</div>
                    </div>

                    {/* Away */}
                    <div style={{ flex: 1, textAlign: "center" }}>
                      <div style={{
                        width: "56px", height: "56px", borderRadius: "50%",
                        background: "#7C3AED",
                        border: "3px solid rgba(124,58,237,0.3)",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        fontSize: "13px", fontWeight: 800, color: "white",
                        margin: "0 auto 10px",
                        boxShadow: "0 4px 20px rgba(124,58,237,0.3)",
                      }}>RLH</div>
                      <div style={{ color: "#94A3B8", fontSize: "12px", fontWeight: 700 }}>Raleigh Athletic</div>
                      <div style={{ color: "#475569", fontSize: "10px", marginTop: "2px" }}>Away</div>
                    </div>
                  </div>

                  {/* Possession bar */}
                  <div style={{ marginBottom: "28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", fontSize: "10px", color: "#475569", marginBottom: "6px" }}>
                      <span>54% Possession</span>
                      <span>46%</span>
                    </div>
                    <div style={{ height: "3px", borderRadius: "99px", background: "rgba(255,255,255,0.08)", overflow: "hidden", display: "flex" }}>
                      <div style={{ width: "54%", background: "#0047FF", borderRadius: "99px 0 0 99px" }} />
                      <div style={{ flex: 1, background: "#7C3AED", borderRadius: "0 99px 99px 0" }} />
                    </div>
                  </div>

                  {/* CTAs */}
                  <div style={{ display: "flex", gap: "10px", justifyContent: "center" }}>
                    <Button variant="cpsl-live" size="sm">
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="currentColor"><circle cx="4" cy="4" r="4" /></svg>
                      Watch Live
                    </Button>
                    <Button variant="ghost" size="sm" style={{ color: "#94A3B8" }}>
                      Stats
                    </Button>
                    <Button variant="ghost" size="sm" style={{ color: "#94A3B8" }}>
                      Lineups
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Hero 4: Magazine Overlap ───────────────────────────────────────── */}
        <Section title="4 — Magazine Overlap">
          <p className="text-xs text-muted-foreground mb-4">
            Editorial / magazine grid — huge Barlow Condensed headline bleeds over the right-hand photo panel. Light background with an accent photo strip. Great for league launches, player features, and season recaps.
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            <div style={{
              position: "relative", height: "540px",
              background: "#F4F6FA", overflow: "hidden",
              display: "flex",
            }}>
              {/* Right — photo/video slot */}
              <div style={{
                position: "absolute", right: 0, top: 0, bottom: 0,
                width: "55%", overflow: "hidden",
              }}>
                {/* ── Replace with <img> or <video> ── */}
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, #003AB0 0%, #0047FF 40%, #1A60FF 70%, #0029A3 100%)",
                }} />
                {/* Jersey number watermark */}
                <div style={{
                  position: "absolute", right: "-40px", top: "50%",
                  transform: "translateY(-52%)",
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "320px", fontWeight: 800,
                  color: "rgba(255,255,255,0.07)",
                  lineHeight: 1, letterSpacing: "-10px",
                  userSelect: "none",
                }}>9</div>
                {/* Action marks */}
                <div style={{
                  position: "absolute", top: "28px", left: "80px",
                  width: "80px", height: "80px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                }} />
                <div style={{
                  position: "absolute", bottom: "36px", right: "48px",
                  width: "48px", height: "48px", borderRadius: "50%",
                  background: "rgba(255,255,255,0.05)",
                }} />
                {/* Left fade to blend with content */}
                <div style={{
                  position: "absolute", left: 0, top: 0, bottom: 0, width: "180px",
                  background: "linear-gradient(to right, #F4F6FA 0%, rgba(244,246,250,0) 100%)",
                }} />
              </div>

              {/* Left — text content (overlaps into photo) */}
              <div style={{
                position: "relative", zIndex: 10,
                paddingLeft: "56px", paddingRight: "32px",
                display: "flex", flexDirection: "column", justifyContent: "center",
                maxWidth: "600px",
              }}>
                {/* Season pill */}
                <div style={{
                  display: "inline-flex", alignItems: "center", gap: "6px",
                  background: "#0047FF", padding: "5px 12px", borderRadius: "4px",
                  marginBottom: "20px", width: "fit-content",
                }}>
                  <span style={{ color: "white", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase" }}>
                    2025–26 Season
                  </span>
                </div>

                {/* Giant headline */}
                <h1 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "104px", fontWeight: 800,
                  lineHeight: 0.88, letterSpacing: "-3px",
                  color: "#0A0E1A",
                  marginBottom: "28px",
                }}>
                  THE<br />
                  <span style={{ color: "#0047FF", WebkitTextStroke: "0px" }}>LEAGUE</span><br />
                  AWAITS
                </h1>

                {/* Stats row */}
                <div style={{ display: "flex", gap: "0", marginBottom: "36px" }}>
                  {[
                    { value: "12", label: "Clubs" },
                    { value: "38", label: "Match Days" },
                    { value: "NC", label: "Statewide" },
                  ].map((s, i) => (
                    <div key={s.label} style={{
                      paddingRight: "28px", marginRight: "28px",
                      borderRight: i < 2 ? "1px solid #CBD5E1" : "none",
                    }}>
                      <div style={{
                        fontFamily: "'Barlow Condensed', sans-serif",
                        fontSize: "36px", fontWeight: 800, color: "#0047FF", lineHeight: 1,
                      }}>{s.value}</div>
                      <div style={{ fontSize: "10px", fontWeight: 600, color: "#64748B", letterSpacing: "1.5px", textTransform: "uppercase" }}>{s.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: "flex", gap: "12px" }}>
                  <Button size="lg">Explore Clubs →</Button>
                  <Button size="lg" variant="ghost">See Fixtures</Button>
                </div>
              </div>

              {/* Accent vertical stripe on left edge */}
              <div style={{
                position: "absolute", left: 0, top: 0, bottom: 0, width: "4px",
                background: "linear-gradient(to bottom, #0047FF, #7C3AED)",
              }} />
            </div>
          </div>
        </Section>

        {/* ── Hero 5: Full Width Image + Headline ───────────────────────────── */}
        <Section title="5 — Full Width Image + Headline">
          <p className="text-xs text-muted-foreground mb-4">
            Image-first hero — the photo takes full command, headline anchored bottom-left over a gradient scrim. Nothing else. Let the image do the work.
          </p>

          <div className="rounded-2xl overflow-hidden border border-[#E2E8F0]">
            <div style={{ position: "relative", height: "560px" }}>

              {/* ── Full-width photo slot — replace with <img> or <video> ── */}
              <div style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(160deg, #071A2E 0%, #0A2A50 30%, #0047FF 65%, #002299 100%)",
              }} />
              {/* Subtle light bloom — simulates stadium floodlights */}
              <div style={{
                position: "absolute", inset: 0,
                background: "radial-gradient(ellipse at 68% 38%, rgba(255,255,255,0.06) 0%, transparent 55%)",
              }} />

              {/* Bottom-up gradient scrim for text legibility */}
              <div style={{
                position: "absolute", bottom: 0, left: 0, right: 0, height: "65%",
                background: "linear-gradient(to top, rgba(2,11,26,0.94) 0%, rgba(2,11,26,0.5) 50%, transparent 100%)",
              }} />

              {/* Headline */}
              <div style={{ position: "absolute", bottom: "52px", left: "60px" }}>
                <h1 style={{
                  fontFamily: "'Barlow Condensed', sans-serif",
                  fontSize: "88px", fontWeight: 800,
                  color: "white", lineHeight: 0.91, letterSpacing: "-2.5px",
                  margin: 0,
                }}>
                  CAROLINA<br />PREMIER LEAGUE
                </h1>
              </div>
            </div>
          </div>
        </Section>

        {/* ── Photo / Video Integration guide ────────────────────────────────── */}
        <Section title="Photo & Video Integration">
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                title: "Static Photo",
                code: `<div className="relative h-[540px] overflow-hidden">
  {/* Photo */}
  <img
    src="/stadium.jpg"
    alt="Stadium"
    className="absolute inset-0 w-full h-full object-cover"
  />
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r
    from-[#020B1A]/95 via-[#020B1A]/60 to-transparent" />
  {/* Content */}
  <div className="relative …">…</div>
</div>`,
              },
              {
                title: "Autoplaying Video",
                code: `<div className="relative h-[540px] overflow-hidden">
  {/* Video */}
  <video
    autoPlay muted loop playsInline
    className="absolute inset-0 w-full h-full object-cover"
    poster="/stadium-poster.jpg"
  >
    <source src="/stadium.mp4" type="video/mp4" />
  </video>
  {/* Gradient overlay */}
  <div className="absolute inset-0 bg-gradient-to-r
    from-[#020B1A]/95 via-[#020B1A]/60 to-transparent" />
  {/* Content */}
  <div className="relative …">…</div>
</div>`,
              },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border bg-white border-[#E2E8F0] overflow-hidden">
                <div className="px-4 py-2.5 border-b border-[#F1F5F9] bg-[#FAFBFF]">
                  <span className="text-xs font-bold text-foreground">{item.title}</span>
                </div>
                <pre className="text-[11px] leading-relaxed p-4 overflow-x-auto" style={{ fontFamily: "'Fira Code', 'Cascadia Code', monospace", color: "#475569" }}>
                  {item.code}
                </pre>
              </div>
            ))}
          </div>
        </Section>

      </div>
    </div>
  )
}
