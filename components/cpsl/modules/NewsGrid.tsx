import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"

export interface NewsArticle {
  category: string
  date: string
  title: string
  excerpt: string
  imageSrc?: string
  href?: string
}

export interface NewsGridProps {
  articles: NewsArticle[]
}

export function NewsGrid({ articles }: NewsGridProps) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "16px" }}>
      {articles.map((n) => (
        <Card key={n.title} className="bg-white border-[#E2E8F0] flex flex-col">
          {/* Image slot */}
          <div className="h-40 rounded-t-xl overflow-hidden">
            {n.imageSrc ? (
              <img src={n.imageSrc} alt={n.title} className="w-full h-full object-cover" />
            ) : (
              <div className="h-full flex items-center justify-center" style={{ background: "linear-gradient(135deg, #EEF3FF 0%, #DDEAFF 100%)" }}>
                <div style={{ fontFamily: "'Barlow Condensed', sans-serif", fontSize: "40px", fontWeight: 800, color: "#BDCEFF", letterSpacing: "-1px" }}>CPSL</div>
              </div>
            )}
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="default" className="text-[10px] px-2">{n.category}</Badge>
              <span className="text-[10px] text-[#94A3B8]">{n.date}</span>
            </div>
            <CardTitle className="text-sm leading-snug text-[#0A0E1A]">{n.title}</CardTitle>
          </CardHeader>
          <CardContent className="flex-1 pt-0">
            <CardDescription className="text-xs leading-relaxed text-[#64748B] line-clamp-3">{n.excerpt}</CardDescription>
          </CardContent>
          <CardFooter className="border-t border-[#F1F5F9] pt-3 mt-auto">
            <Button variant="link" className="px-0 text-primary text-xs font-semibold h-auto">
              {n.href ? <a href={n.href}>Read more →</a> : <span>Read more →</span>}
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
