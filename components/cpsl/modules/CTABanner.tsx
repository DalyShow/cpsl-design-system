import { Button } from "@/components/ui/button"

export interface CTABannerProps {
  eyebrow?: string
  headline?: string
  headlineAccent?: string
  description?: string
  primaryCta?: { label: string; href?: string }
  secondaryCta?: { label: string; href?: string }
}

export function CTABanner({
  eyebrow       = "2025–26 Season",
  headline      = "REGISTER YOUR CLUB",
  headlineAccent= "BEFORE APRIL 30",
  description   = "Applications for the 2025–26 CPSL Premiership and Development League are now open. Secure your spot for next season before the deadline closes.",
  primaryCta    = { label: "Apply Now →" },
  secondaryCta  = { label: "Learn More" },
}: CTABannerProps) {
  return (
    <div className="rounded-2xl overflow-hidden border border-[#1E2D45]" style={{ background: "#020B1A" }}>
      <div style={{ padding: "56px 64px", display: "flex", alignItems: "center", justifyContent: "space-between", gap: "48px" }}>
        <div>
          <div style={{ color: "#0047FF", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
            {eyebrow}
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "52px", fontWeight: 800, color: "white", lineHeight: 0.95, letterSpacing: "-1.5px", marginBottom: "16px" }}>
            {headline}<br />
            <span style={{ color: "#0047FF" }}>{headlineAccent}</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.65, maxWidth: "520px" }}>{description}</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "12px", flexShrink: 0 }}>
          {primaryCta   && <Button size="lg" style={{ minWidth: "180px" }}>{primaryCta.label}</Button>}
          {secondaryCta && <Button size="lg" variant="secondary" style={{ minWidth: "180px" }}>{secondaryCta.label}</Button>}
        </div>
      </div>
    </div>
  )
}
