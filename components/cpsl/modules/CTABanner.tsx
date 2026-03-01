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
      <div className="px-6 py-10 md:px-16 md:py-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
        <div>
          <div style={{ color: "#4A78E8", fontSize: "10px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", marginBottom: "12px" }}>
            {eyebrow}
          </div>
          <h2 style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "var(--text-display-sm)", fontWeight: 800, color: "white", lineHeight: 0.95, letterSpacing: "-1.5px", marginBottom: "16px" }}>
            {headline}<br />
            <span style={{ color: "#4A78E8" }}>{headlineAccent}</span>
          </h2>
          <p style={{ color: "#64748B", fontSize: "14px", lineHeight: 1.65, maxWidth: "520px" }}>{description}</p>
        </div>
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto shrink-0">
          {primaryCta   && <Button size="lg" className="w-full sm:w-auto md:min-w-[180px]">{primaryCta.label}</Button>}
          {secondaryCta && <Button size="lg" variant="secondary" className="w-full sm:w-auto md:min-w-[180px]">{secondaryCta.label}</Button>}
        </div>
      </div>
    </div>
  )
}
