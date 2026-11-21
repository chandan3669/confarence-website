import { Metadata } from "next";
import { CONFERENCE_INFO, TRACKS } from "@/lib/constants";
import { Layers, FileText, CheckCircle, ArrowRight, Download, Atom, Cpu, Share2, Network, Lock, Server, Database, Code2, Sparkles } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Call for Papers & 8 Research Tracks | ${CONFERENCE_INFO.name}`,
  description: `Explore the 8 specialized tracks and 62 research topics in AI, Quantum Computing, Cybersecurity, IoT, Advanced Computing, Networks, Data Science & Emerging Tech for ${CONFERENCE_INFO.fullName}.`,
};

export default function CallForPapersPage() {
  const trackIcons = [
    <Cpu key="1" className="w-6 h-6 text-indigo-600" />,
    <Atom key="2" className="w-6 h-6 text-emerald-600" />,
    <Lock key="3" className="w-6 h-6 text-rose-600" />,
    <Network key="4" className="w-6 h-6 text-amber-600" />,
    <Server key="5" className="w-6 h-6 text-blue-600" />,
    <Share2 key="6" className="w-6 h-6 text-cyan-600" />,
    <Database key="7" className="w-6 h-6 text-violet-600" />,
    <Sparkles key="8" className="w-6 h-6 text-fuchsia-600" />,
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers className="w-3.5 h-3.5" />
            Research Scope & Submissions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Call for Papers (8 Technical Tracks)
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            The International Conference on Quantum Intelligence, Networks & Secure Systems ({CONFERENCE_INFO.name}) invites original, unpublished research papers across 8 cutting-edge tracks and 62 specialized topics.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Call for Papers</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Submission Highlights Box */}
        <div className="bg-white rounded-2xl border border-slate-200 p-6 md:p-8 shadow-sm mb-12">
          <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
            <FileText className="w-5 h-5 text-emerald-600" />
            Author Submission Guidelines & Springer Proceedings
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Publication</span>
              <p className="text-sm font-semibold text-slate-900 mt-1">Springer LNAI / CCIS</p>
              <p className="text-xs text-slate-500 mt-1">All accepted and registered papers will be submitted for indexing in Scopus and WoS.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold text-indigo-700 uppercase tracking-wider">Format & Length</span>
              <p className="text-sm font-semibold text-slate-900 mt-1">6 to 8 Pages Max</p>
              <p className="text-xs text-slate-500 mt-1">Standard Springer LNCS / CCIS two-column format including figures, tables, and references.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold text-cyan-700 uppercase tracking-wider">Review Standard</span>
              <p className="text-sm font-semibold text-slate-900 mt-1">Double-Blind Peer Review</p>
              <p className="text-xs text-slate-500 mt-1">Authors must omit author names, affiliations, and acknowledgments in initial submissions.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Presentation Mode</span>
              <p className="text-sm font-semibold text-slate-900 mt-1">Hybrid (In-Person / Online)</p>
              <p className="text-xs text-slate-500 mt-1">Authors may present either on-site at BBIT Kolkata campus or virtually via video conference.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4 pt-6 border-t border-slate-100">
            <Link
              href={CONFERENCE_INFO.cmtUrl}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#5da834] hover:bg-[#4d8c2b] text-white px-6 py-2.5 rounded-lg font-bold text-sm shadow-sm transition"
            >
              Submit via Microsoft CMT <ArrowRight className="w-4 h-4" />
            </Link>
            <a
              href={CONFERENCE_INFO.wordTemplateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg font-semibold text-sm transition"
            >
              <Download className="w-4 h-4" /> Download Word Template
            </a>
            <a
              href={CONFERENCE_INFO.latexTemplateUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-800 px-5 py-2.5 rounded-lg font-semibold text-sm transition"
            >
              <Download className="w-4 h-4" /> Download LaTeX Template
            </a>
          </div>
        </div>

        {/* 8 Technical Tracks Grid */}
        <div className="text-center mb-10">
          <span className="text-emerald-600 font-bold text-sm uppercase tracking-wider">Core Research Domains</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
            8 Tracks & 62 Sub-Topics
          </h2>
          <div className="w-16 h-1 bg-[#5da834] mx-auto mt-3 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TRACKS.map((track, idx) => (
            <div
              key={track.id}
              className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-100 text-slate-700">
                    {track.number}
                  </span>
                  <div className="p-2 rounded-xl bg-slate-50 border border-slate-100">
                    {trackIcons[idx % trackIcons.length]}
                  </div>
                </div>
                <h3 className="text-lg font-bold text-slate-900 leading-snug mb-4">
                  {track.title}
                </h3>
                <div className="w-full h-px bg-slate-100 mb-4"></div>
                <ul className="space-y-3">
                  {track.topics.map((topic, i) => (
                    <li key={i} className="text-xs sm:text-sm text-slate-600 flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{topic}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <Link
                  href={CONFERENCE_INFO.cmtUrl}
                  target="_blank"
                  className="text-xs font-bold text-emerald-700 hover:text-emerald-800 inline-flex items-center gap-1"
                >
                  Submit Paper to {track.number} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
