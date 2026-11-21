import { Metadata } from "next";
import { CONFERENCE_INFO, SPEAKERS } from "@/lib/constants";
import { Mic, BookOpen, Building, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: `Keynote Speakers | ${CONFERENCE_INFO.name}`,
  description: `Distinguished keynote speakers, scientific luminaries, and global researchers presenting at ${CONFERENCE_INFO.fullName}.`,
};

export default function KeynoteSpeakersPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Mic className="w-3.5 h-3.5" />
            Distinguished Thought Leaders
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Keynote Speakers
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            World-renowned scientists and professors from NIMS Japan, MIT USA, Samarkand State University, and Amity University delivering plenary lectures.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Keynote Speakers</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SPEAKERS.map((speaker) => (
            <div
              key={speaker.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-all duration-200 flex flex-col sm:flex-row"
            >
              <div className="sm:w-48 h-56 sm:h-auto relative bg-slate-100 shrink-0">
                <Image
                  src={speaker.photoUrl}
                  alt={speaker.name}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    {speaker.title}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-1">
                    {speaker.name}
                  </h3>
                  <p className="text-xs text-slate-500 flex items-center gap-1.5 mt-1.5">
                    <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>{speaker.affiliation}</span>
                  </p>

                  <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                    <span className="text-xs font-semibold text-slate-400 flex items-center gap-1">
                      <BookOpen className="w-3 h-3 text-emerald-600" /> Plenary Keynote Address
                    </span>
                    <p className="text-sm font-semibold text-slate-800 mt-1 italic">
                      "{speaker.keynoteTitle}"
                    </p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Hybrid Session (Auditorium & Virtual)</span>
                  <Link
                    href="/conference-schedule"
                    className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                  >
                    View in Schedule <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
