import React from "react";
import { Bell } from "lucide-react";
import { ANNOUNCEMENTS } from "@/lib/constants";

export function TopNoticeBar() {
  return (
    <div className="bg-[#091317] text-slate-200 text-xs py-2 border-b border-white/10 overflow-hidden">
      <div className="container mx-auto px-4 flex items-center">
        <span className="bg-primary text-white font-bold text-[11px] uppercase px-2.5 py-0.5 rounded tracking-wider flex items-center gap-1.5 whitespace-nowrap mr-3 shadow-sm">
          <Bell className="w-3 h-3 animate-pulse" />
          Announcements
        </span>

        <div className="relative overflow-hidden w-full whitespace-nowrap">
          <div className="inline-block animate-marquee notice-marquee-track">
            {ANNOUNCEMENTS.map((text, idx) => (
              <span key={idx} className="mr-8 inline-block font-medium">
                {text}
                {idx < ANNOUNCEMENTS.length - 1 && <span className="mx-4 text-white/30">•</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
