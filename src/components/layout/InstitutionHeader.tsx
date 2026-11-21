import React from "react";
import { Sparkles, CalendarCheck } from "lucide-react";
import { CONFERENCE_INFO } from "@/lib/constants";

export function InstitutionHeader() {
  return (
    <header className="bg-white border-b border-slate-200 py-3">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Genuine BBIT Logo & Host Details */}
        <div className="flex items-center gap-3.5 text-center md:text-left">
          <div className="relative w-16 h-16 sm:w-18 sm:h-18 flex-shrink-0 bg-white p-1 rounded-lg border border-slate-200 shadow-sm flex items-center justify-center">
            <img
              src="/bbit-logo.webp"
              alt="Budge Budge Institute of Technology (BBIT) Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div>
            <h1 className="text-lg md:text-xl font-extrabold text-[#234262] leading-tight">
              {CONFERENCE_INFO.institution}
            </h1>
            <p className="text-xs text-primary font-bold">
              {CONFERENCE_INFO.parentTrust}
            </p>
            <p className="text-[11.5px] sm:text-xs text-slate-500 font-medium">
              {CONFERENCE_INFO.department} &bull; {CONFERENCE_INFO.accreditation}
            </p>
          </div>
        </div>

        {/* Conference Scope Badges */}
        <div className="flex items-center gap-4 sm:gap-6">
          <div className="text-right border-l-2 border-slate-200 pl-4">
            <span className="block text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
              Publication Scope
            </span>
            <strong className="text-xs sm:text-sm font-bold text-navy-dark flex items-center gap-1.5 justify-end">
              <Sparkles className="w-4 h-4 text-primary" />
              Springer Scopus Volume
            </strong>
          </div>

          <div className="text-right border-l-2 border-slate-200 pl-4">
            <span className="block text-[10.5px] font-semibold text-slate-400 uppercase tracking-wider">
              Conference Dates
            </span>
            <strong className="text-xs sm:text-sm font-bold text-navy-text flex items-center gap-1.5 justify-end">
              <CalendarCheck className="w-4 h-4 text-primary" />
              {CONFERENCE_INFO.dates}
            </strong>
          </div>
        </div>
      </div>
    </header>
  );
}
