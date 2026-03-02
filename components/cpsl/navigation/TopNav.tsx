"use client";
import { useState } from "react";

export interface TopNavItem {
  label: string;
}

export interface TopNavProps {
  items?: TopNavItem[];
  logoText?: string;
  userInitials?: string;
  showLive?: boolean;
  defaultActive?: number;
  /** "card" = rounded-2xl with border (default)
   *  "full" = edge-to-edge, no border-radius, bottom border only */
  variant?: "card" | "full";
}

export function TopNav({
  items = [
    { label: "Standings" },
    { label: "Matches" },
    { label: "Teams" },
    { label: "Stats" },
    { label: "News" },
  ],
  logoText = "CPSL",
  userInitials = "JD",
  showLive = false,
  defaultActive = 0,
  variant = "card",
}: TopNavProps) {
  const [activeIndex, setActiveIndex] = useState(defaultActive);
  const isFull = variant === "full";

  const inner = (
    <div
      className="flex items-center justify-between px-6 py-0"
      style={{ background: "#091628" }}
    >
      {/* Logo + Nav */}
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2.5 py-4">
          <div
            className="w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0"
            style={{ background: "#3B82F6" }}
          >
            <svg width="16" height="18" viewBox="0 0 16 18" fill="none">
              <path d="M1 1L15 1L15 12C15 16 8 17 8 17C8 17 1 16 1 12Z" fill="none" stroke="white" strokeWidth="1.5" />
              <path d="M4 9.5L8 6L12 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <span className="text-white font-bold text-sm">{logoText}</span>
        </div>

        <nav className="flex gap-1">
          {items.map((item, i) => (
            <button
              key={item.label}
              onClick={() => setActiveIndex(i)}
              className="px-4 py-4 text-sm font-medium border-b-2 transition-colors"
              style={{
                color: i === activeIndex ? "white" : "#64748B",
                borderColor: i === activeIndex ? "#3B82F6" : "transparent",
                background: "none",
                cursor: "pointer",
              }}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>

      {/* Right slot */}
      <div className="flex items-center gap-3">
        {showLive && (
          <div
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold"
            style={{ background: "#FF1744", color: "white" }}
          >
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-white" />
            Live
          </div>
        )}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
          style={{ background: "#3B82F6" }}
        >
          {userInitials}
        </div>
      </div>
    </div>
  );

  if (isFull) {
    return (
      <div
        style={{
          width: "100%",
          borderBottom: "1px solid #1E2D45",
        }}
      >
        {inner}
      </div>
    );
  }

  // Card variant (default)
  return (
    <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#1E2D45" }}>
      {inner}
    </div>
  );
}
