import { Separator } from "@/components/ui/separator"

export interface StatItem {
  value: string
  label: string
}

export interface StatsBarProps {
  stats?: StatItem[]
  background?: string
}

const DEFAULT_STATS: StatItem[] = [
  { value: "12",    label: "Clubs" },
  { value: "380+",  label: "Players" },
  { value: "38",    label: "Match Days" },
  { value: "6",     label: "Venues" },
  { value: "2026",  label: "Season" },
]

export function StatsBar({ stats = DEFAULT_STATS, background = "#020B1A" }: StatsBarProps) {
  return (
    <div style={{ background, padding: "36px 48px", display: "flex", alignItems: "center", justifyContent: "space-around" }}>
      {stats.map((s, i) => (
        <div key={s.label} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "52px", fontWeight: 800, color: "white", lineHeight: 1, letterSpacing: "-1.5px" }}>
              {s.value}
            </div>
            <div style={{ color: "#475569", fontSize: "10px", fontWeight: 700, letterSpacing: "2.5px", textTransform: "uppercase", marginTop: "8px" }}>
              {s.label}
            </div>
          </div>
          {i < stats.length - 1 && <Separator orientation="vertical" className="h-12 opacity-10 ml-10" />}
        </div>
      ))}
    </div>
  )
}
