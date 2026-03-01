import React from "react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export interface Feature {
  icon: React.ReactNode
  title: string
  body: string
  linkLabel?: string
  linkHref?: string
}

export interface FeatureHighlightsProps {
  features: Feature[]
}

export function FeatureHighlights({ features }: FeatureHighlightsProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
      {features.map((f) => (
        <Card key={f.title} className="bg-white border-[#E2E8F0]">
          <CardHeader>
            <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-3" style={{ background: "#EEF3FF" }}>
              {f.icon}
            </div>
            <CardTitle className="text-base text-[#0A0E1A]">{f.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-sm leading-relaxed text-[#64748B]">{f.body}</CardDescription>
          </CardContent>
          {(f.linkLabel || f.linkHref) && (
            <CardFooter>
              <Button variant="link" className="px-0 text-primary text-sm">
                {f.linkHref ? <a href={f.linkHref}>{f.linkLabel ?? "Learn more →"}</a> : <span>{f.linkLabel ?? "Learn more →"}</span>}
              </Button>
            </CardFooter>
          )}
        </Card>
      ))}
    </div>
  )
}
