import PageHeader from "@/components/PageHeader";
import Section from "@/components/Section";

export default function PatternsPage() {
  return (
    <div style={{ background: "#F4F6FA", minHeight: "100vh" }}>
      <PageHeader section="10 — Patterns" title="Patterns"
        description="Composite UI patterns specific to CPSL products — the live scoreboard widget, match card states, and the full authentication flow with 2FA and password reset." />
      <div className="px-12 py-12">
        <Section title="Live Scoreboard Widget">
          <div className="flex gap-6">
            <div style={{ width: "340px", flexShrink: 0 }}>
              <div className="rounded-2xl overflow-hidden" style={{ background: "#020B1A", boxShadow: "0 8px 32px rgba(0,71,255,0.2)" }}>
                <div className="flex items-center justify-between px-5 py-3" style={{ background: "#0A1628", borderBottom: "1px solid #1E2D45" }}>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full" style={{ background: "#FF1744" }} />
                    <span className="text-xs font-bold" style={{ color: "#FF1744", letterSpacing: "1.5px" }}>LIVE</span>
                  </div>
                  <span className="text-xs" style={{ color: "#64748B" }}>CPSL · League · Week 18</span>
                  <span className="text-xs font-bold" style={{ color: "#FF5A1F" }}>72&apos;</span>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-5">
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-black text-white" style={{ background: "#0047FF" }}>CC</div>
                      <span className="text-sm font-bold text-white">Charlotte FC</span>
                      <span className="text-xs" style={{ color: "#334155" }}>HOME</span>
                    </div>
                    <div className="text-center flex-shrink-0">
                      <div className="flex items-baseline gap-2 mb-2">
                        <span className="font-black text-white" style={{ fontSize: "48px", letterSpacing: "-2px", lineHeight: 1 }}>3</span>
                        <span className="text-2xl font-light" style={{ color: "#334155" }}>—</span>
                        <span className="font-black" style={{ fontSize: "48px", letterSpacing: "-2px", lineHeight: 1, color: "#94A3B8" }}>1</span>
                      </div>
                      <span className="text-xs font-semibold px-2 py-0.5 rounded" style={{ background: "#012A14", color: "#00C853" }}>HT 2–1</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 flex-1">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center text-base font-black text-white" style={{ background: "#FF5A1F" }}>RA</div>
                      <span className="text-sm font-bold" style={{ color: "#94A3B8" }}>Raleigh</span>
                      <span className="text-xs" style={{ color: "#334155" }}>AWAY</span>
                    </div>
                  </div>
                  <div className="pt-4" style={{ borderTop: "1px solid #1E2D45" }}>
                    <div className="text-xs uppercase tracking-wide mb-2" style={{ color: "#64748B" }}>Possession</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-bold text-white">62%</span>
                      <div className="flex-1 h-1.5 rounded-full" style={{ background: "#1E2D45" }}>
                        <div className="h-1.5 rounded-full" style={{ width: "62%", background: "#0047FF" }} />
                      </div>
                      <span className="text-xs font-bold" style={{ color: "#64748B" }}>38%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="text-xs font-semibold uppercase tracking-wide mb-3" style={{ color: "#64748B" }}>Anatomy</div>
              <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
                {[
                  ["Status bar", "Live indicator (animated dot), competition, clock — always visible"],
                  ["Team block", "Team initial badge, full name, home/away label"],
                  ["Score block", "Large numerals (48px+), divider, half-time annotation"],
                  ["Stat bar", "Possession or shots, always labeled — never color-only"],
                  ["Dark bg", "#020B1A surface for night match aesthetic, contrast AAA"],
                ].map(([name, desc]) => (
                  <div key={name as string} className="flex gap-3 py-2.5 border-b last:border-b-0" style={{ borderColor: "#F1F5F9" }}>
                    <div className="w-2.5 h-2.5 rounded-full flex-shrink-0 mt-1.5" style={{ background: "#0047FF" }} />
                    <div>
                      <span className="text-xs font-bold" style={{ color: "#0A0E1A" }}>{name}: </span>
                      <span className="text-xs" style={{ color: "#64748B" }}>{desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        <Section title="Match Card States">
          <div className="grid grid-cols-3 gap-4">
            {/* Upcoming */}
            <div className="rounded-2xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#0047FF" }}>CPSL League</span>
                <span className="text-xs" style={{ color: "#94A3B8" }}>Sat, Mar 1 · 3PM</span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#0047FF" }}>CC</div>
                  <span className="text-sm font-semibold" style={{ color: "#0A0E1A" }}>Charlotte FC</span>
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-lg" style={{ background: "#F4F6FA", color: "#94A3B8" }}>vs</span>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#1A1A2E" }}>DU</div>
                  <span className="text-sm font-semibold" style={{ color: "#0A0E1A" }}>Durham Utd</span>
                </div>
              </div>
              <div className="flex items-center gap-1.5 pt-3 text-xs" style={{ borderTop: "1px solid #F1F5F9", color: "#94A3B8" }}>
                📍 Bank of America Stadium
              </div>
            </div>

            {/* Final score */}
            <div className="rounded-2xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>CPSL Cup</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#E8FFF2", color: "#00875A" }}>Final Score</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#0047FF" }}>CC</div>
                  <div>
                    <div className="text-sm font-bold" style={{ color: "#0A0E1A" }}>Charlotte</div>
                    <div className="text-xs font-bold" style={{ color: "#00875A" }}>WIN</div>
                  </div>
                </div>
                <div className="flex gap-2 items-baseline">
                  <span className="font-black" style={{ fontSize: "26px", color: "#0A0E1A" }}>2</span>
                  <span style={{ color: "#94A3B8" }}>–</span>
                  <span className="font-black" style={{ fontSize: "26px", color: "#94A3B8" }}>0</span>
                </div>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#FF5A1F" }}>RA</div>
                  <div className="text-right">
                    <div className="text-sm font-semibold" style={{ color: "#94A3B8" }}>Raleigh</div>
                    <div className="text-xs font-bold" style={{ color: "#FF1744" }}>LOSS</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Postponed */}
            <div className="rounded-2xl p-5 border opacity-70" style={{ background: "white", borderColor: "#E2E8F0" }}>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold uppercase tracking-wide" style={{ color: "#64748B" }}>CPSL League</span>
                <span className="text-xs font-semibold px-2 py-0.5 rounded-full" style={{ background: "#FFF3E0", color: "#E65100" }}>Postponed</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#CBD5E1" }}>TF</div>
                  <span className="text-sm font-semibold" style={{ color: "#94A3B8" }}>Triangle FC</span>
                </div>
                <span className="text-xs font-medium px-2 py-1 rounded-lg" style={{ background: "#F4F6FA", color: "#CBD5E1" }}>vs</span>
                <div className="flex items-center gap-2 flex-row-reverse">
                  <div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-bold text-white" style={{ background: "#CBD5E1" }}>GV</div>
                  <span className="text-sm font-semibold" style={{ color: "#94A3B8" }}>Greensboro</span>
                </div>
              </div>
            </div>
          </div>
        </Section>

        <Section title="Auth — Sign In Flow">
          <div className="flex gap-6">
            <div style={{ width: "380px", flexShrink: 0 }}>
              <div className="rounded-2xl p-8 border" style={{ background: "white", borderColor: "#E2E8F0", boxShadow: "0 2px 12px rgba(0,0,0,0.08)" }}>
                <div className="flex flex-col items-center mb-6">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center mb-3" style={{ background: "#0047FF" }}>
                    <svg width="24" height="28" viewBox="0 0 24 28" fill="none">
                      <path d="M2 2L22 2L22 18C22 24 12 27 12 27C12 27 2 24 2 18Z" fill="none" stroke="white" strokeWidth="2"/>
                      <path d="M7 14L12 9L17 14" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="text-xl font-bold mb-1" style={{ color: "#0A0E1A" }}>Welcome back</div>
                  <div className="text-sm" style={{ color: "#64748B" }}>Sign in to CPSL Portal</div>
                </div>
                <div className="flex flex-col gap-4 mb-5">
                  <div>
                    <label className="block text-xs font-semibold mb-1.5" style={{ color: "#475569" }}>Email address</label>
                    <div className="rounded-xl px-3 py-3 border-2 text-sm flex items-center gap-2" style={{ borderColor: "#0047FF", background: "#FAFCFF" }}>
                      <span style={{ color: "#94A3B8" }}>✉</span>
                      <span style={{ color: "#0A0E1A" }}>coach@charlottefc.com</span>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1.5">
                      <label className="text-xs font-semibold" style={{ color: "#475569" }}>Password</label>
                      <a className="text-xs font-medium cursor-pointer" style={{ color: "#0047FF" }}>Forgot?</a>
                    </div>
                    <div className="rounded-xl px-3 py-3 border text-sm flex items-center gap-2" style={{ borderColor: "#E2E8F0" }}>
                      <span style={{ color: "#94A3B8" }}>🔒</span>
                      <span style={{ color: "#94A3B8", letterSpacing: "3px" }}>••••••••••</span>
                    </div>
                  </div>
                </div>
                <button className="w-full py-3 rounded-xl text-sm font-bold text-white mb-4" style={{ background: "#0047FF" }}>Sign in</button>
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
                  <span className="text-xs" style={{ color: "#94A3B8" }}>or</span>
                  <div className="flex-1 h-px" style={{ background: "#E2E8F0" }} />
                </div>
                <button className="w-full py-3 rounded-xl text-sm font-semibold border flex items-center justify-center gap-2" style={{ borderColor: "#E2E8F0", color: "#0A0E1A" }}>
                  <svg width="16" height="16" viewBox="0 0 16 16"><path d="M15.68 8.18c0-.57-.05-1.11-.15-1.64H8v3.1h4.3a3.67 3.67 0 01-1.6 2.41v2h2.6c1.52-1.4 2.38-3.45 2.38-5.87z" fill="#4285F4"/><path d="M8 16c2.16 0 3.97-.72 5.3-1.95l-2.6-2a4.77 4.77 0 01-2.7.77c-2.08 0-3.85-1.41-4.48-3.31H.85v2.07A8 8 0 008 16z" fill="#34A853"/><path d="M3.52 9.51A4.8 4.8 0 013.27 8c0-.52.09-1.03.25-1.51V4.42H.85A8 8 0 000 8c0 1.3.31 2.52.85 3.58l2.67-2.07z" fill="#FBBC05"/><path d="M8 3.19c1.17 0 2.22.4 3.05 1.2l2.28-2.28C11.96.72 10.15 0 8 0A8 8 0 00.85 4.42L3.52 6.49C4.15 4.59 5.92 3.19 8 3.19z" fill="#EA4335"/></svg>
                  Continue with Google
                </button>
              </div>
            </div>

            {/* States */}
            <div className="flex-1 flex flex-col gap-4">
              {/* Error state */}
              <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
                <div className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#FF1744" }}>Error State</div>
                <div className="rounded-xl px-3 py-3 border-2 text-sm mb-2 flex items-center gap-2" style={{ borderColor: "#FF1744", background: "#FFF5F5" }}>
                  <span style={{ color: "#94A3B8" }}>✉</span>
                  <span style={{ color: "#0A0E1A" }}>wrong@email</span>
                </div>
                <div className="flex items-center gap-1.5 mb-2">
                  <span style={{ color: "#FF1744", fontSize: "11px" }}>✕</span>
                  <span className="text-xs" style={{ color: "#FF1744" }}>Please enter a valid email</span>
                </div>
                <div className="rounded-lg p-3 border text-xs" style={{ background: "#FFF0F0", borderColor: "#FFC5CC", color: "#FF1744" }}>
                  ✕ Invalid email or password. Please try again.
                </div>
              </div>

              {/* 2FA */}
              <div className="rounded-xl p-5 border" style={{ background: "white", borderColor: "#E2E8F0" }}>
                <div className="text-xs font-bold uppercase tracking-wide mb-3" style={{ color: "#00875A" }}>Two-Factor Auth</div>
                <div className="text-xs mb-3" style={{ color: "#64748B" }}>We sent a 6-digit code to coach@charlottefc.com</div>
                <div className="flex gap-2 mb-2">
                  {["4","8","2","—","—","—"].map((v, i) => (
                    <div key={i} className="w-9 h-11 rounded-lg flex items-center justify-center text-base font-bold border-2"
                      style={{ borderColor: i < 3 ? "#0047FF" : "#E2E8F0", background: i < 3 ? "#FAFCFF" : "white", color: i < 3 ? "#0A0E1A" : "#94A3B8" }}>{v}</div>
                  ))}
                </div>
                <div className="text-xs" style={{ color: "#94A3B8" }}>Resend code in <span style={{ color: "#0047FF", fontWeight: 600 }}>0:42</span></div>
              </div>
            </div>
          </div>
        </Section>
      </div>
    </div>
  );
}
