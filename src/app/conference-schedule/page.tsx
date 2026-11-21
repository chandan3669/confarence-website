"use client";

import { CONFERENCE_INFO, SCHEDULE_DAYS } from "@/lib/constants";
import { Clock, Calendar, MapPin, Users, Printer } from "lucide-react";
import Link from "next/link";

export default function ConferenceSchedulePage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Clock className="w-3.5 h-3.5" />
            20–21 December 2026
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Conference Schedule & Program
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Detailed 2-day itinerary featuring plenary quantum lectures, parallel technical tracks, industry exhibitions, and the gala dinner at Budge Budge Institute of Technology (BBIT), Kolkata.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Schedule</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-12">
        {SCHEDULE_DAYS.map((day) => (
          <div key={day.dayNumber} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="bg-gradient-to-r from-[#0f2027] to-[#203a43] text-white px-6 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div className="flex items-center gap-3">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#5da834] text-white uppercase tracking-wider">
                  Day 0{day.dayNumber}
                </span>
                <h2 className="text-lg font-bold">{day.dateStr}</h2>
              </div>
              <span className="text-xs text-slate-300 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-emerald-400" /> Hybrid Mode (BBIT Campus & Stream)
              </span>
            </div>

            <div className="divide-y divide-slate-100 p-6">
              {day.events.map((evt, idx) => (
                <div key={idx} className="py-4 first:pt-0 last:pb-0 flex flex-col md:flex-row md:items-start justify-between gap-3">
                  <div className="md:w-48 shrink-0 flex items-center gap-2 text-xs font-bold text-slate-500">
                    <Clock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{evt.time}</span>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-base font-bold text-slate-900 leading-snug">{evt.title}</h3>
                    {evt.speakerOrSession && (
                      <p className="text-xs text-slate-600 mt-1 flex items-center gap-1.5 font-medium">
                        <Users className="w-3 h-3 text-emerald-600" />
                        <span>{evt.speakerOrSession}</span>
                      </p>
                    )}
                    <p className="text-xs text-slate-400 mt-1.5 flex items-center gap-1.5">
                      <MapPin className="w-3 h-3 text-slate-400" />
                      <span>{evt.venue}</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center pt-4">
          <button
            onClick={() => typeof window !== "undefined" && window.print()}
            className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition"
          >
            <Printer className="w-4 h-4" /> Print / Save Schedule PDF
          </button>
        </div>
      </section>
    </div>
  );
}
