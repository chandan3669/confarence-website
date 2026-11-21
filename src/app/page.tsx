import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarDays,
  MapPin,
  BookOpen,
  Send,
  ListFilter,
  Ticket,
  Award,
  CheckCircle2,
  Users,
  ShieldCheck,
  Cpu,
  Database,
  Server,
  ArrowRight,
  Atom,
  Binary,
  Network,
  Lock,
} from "lucide-react";
import { CONFERENCE_INFO, IMPORTANT_DATES, TRACKS, SPEAKERS, COMMITTEE_MEMBERS } from "@/lib/constants";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white py-16 md:py-28 text-center overflow-hidden min-h-[580px] flex items-center justify-center">
        {/* Campus Background Image with Vignette & Gradient Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/bg.png"
            alt="Budge Budge Institute of Technology (BBIT) Campus"
            fill
            priority
            className="object-cover object-center"
            quality={95}
          />
          {/* Multi-layered dark glassmorphic gradient overlay for maximum readability & aesthetic depth */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#0f2027]/90 via-[#1a343e]/85 to-[#0f2027]/95" />
          <div className="absolute inset-0 bg-[radial-gradient(rgba(93,168,52,0.18)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />
        </div>

        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          {/* Institutional Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary text-[#a3e635] px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
            <Atom className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "12s" }} />
            {CONFERENCE_INFO.name} &bull; {CONFERENCE_INFO.edition} &bull; {CONFERENCE_INFO.tagline}
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4 drop-shadow-md">
            {CONFERENCE_INFO.fullName}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-8 font-normal leading-relaxed">
            Hosted by <strong>{CONFERENCE_INFO.institution}</strong> ({CONFERENCE_INFO.parentTrust}) in academic partnership with Samarkand State University, NIMS Japan, and global research institutions.
          </p>

          {/* Meta Badges */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 mb-10">
            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3 text-left">
              <CalendarDays className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Conference Dates
                </span>
                <strong className="text-sm font-bold text-white">{CONFERENCE_INFO.dates}</strong>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3 text-left">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Venue & Mode
                </span>
                <strong className="text-sm font-bold text-white">BBIT Campus, Kolkata (Hybrid)</strong>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-md border border-white/15 rounded-xl px-4 py-3 flex items-center gap-3 text-left">
              <BookOpen className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <span className="block text-[10px] uppercase font-semibold text-slate-400 tracking-wider">
                  Proceedings Publication
                </span>
                <strong className="text-sm font-bold text-white">Springer LNAI / CCIS Volume</strong>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <Link
              href={CONFERENCE_INFO.cmtUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white text-sm font-semibold px-6 py-3.5 rounded-full shadow-lg hover:shadow-primary/50 hover:-translate-y-0.5 transition-all"
            >
              <Send className="w-4 h-4" />
              Submit Paper via Microsoft CMT
            </Link>

            <Link
              href="/call-for-papers"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3.5 rounded-full backdrop-blur-sm transition-all"
            >
              <ListFilter className="w-4 h-4" />
              Explore 8 Tracks & 62 Topics
            </Link>

            <Link
              href="/organizing-committees"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/30 text-sm font-semibold px-6 py-3.5 rounded-full backdrop-blur-sm transition-all"
            >
              <Users className="w-4 h-4" />
              78 Committee Members
            </Link>
          </div>
        </div>
      </section>

      {/* Quantum & Conference Stat Counters Bar */}
      <section className="bg-white border-b border-slate-200 py-6">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-3 border-r border-slate-100 last:border-none">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#234262]">512+</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Qubits Discussed (Logical & Physical)</span>
            </div>

            <div className="p-3 border-r border-slate-100 last:border-none">
              <span className="block text-2xl md:text-3xl font-extrabold text-primary">08 / 62</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Research Tracks & Topics</span>
            </div>

            <div className="p-3 border-r border-slate-100 last:border-none">
              <span className="block text-2xl md:text-3xl font-extrabold text-[#234262]">17+</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Participating Countries</span>
            </div>

            <div className="p-3">
              <span className="block text-2xl md:text-3xl font-extrabold text-primary">78</span>
              <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Global Committee Members</span>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Showcase: Chairman & Patrons */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
              Guiding Vision & Leadership
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-text mb-3">
              Message from Patrons & General Chairs
            </h2>
            <div className="w-14 h-1 bg-primary mx-auto rounded mb-4" />
            <p className="text-slate-600 text-sm">
              Bringing together leadership from Budge Budge Institute of Technology (BBIT), Samarkand State University, NIMS Japan, and Amity University.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Shri Jagannath Gupta Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center relative overflow-hidden">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-mid to-navy-dark text-white flex items-center justify-center font-bold text-xl shadow">
                JG
              </div>
              <span className="inline-block bg-emerald-50 text-emerald-700 text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Patron-in-Chief
              </span>
              <h3 className="text-lg font-bold text-navy-text">Shri Jagannath Gupta</h3>
              <p className="text-xs text-primary font-semibold mb-3">Chairman, BBIT & Jagannath Gupta Family Trust</p>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "BBIT is dedicated to pioneering world-class academic platforms. QINS-2027 unites international scholars at the frontier of quantum computation, intelligent systems, and cybersecurity."
              </p>
            </div>

            {/* Prof. Rustam Kholmurodov Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center relative overflow-hidden">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark text-white flex items-center justify-center font-bold text-xl shadow">
                RK
              </div>
              <span className="inline-block bg-blue-50 text-blue-700 text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                Chief Patron
              </span>
              <h3 className="text-lg font-bold text-navy-text">Prof. Rustam Kholmurodov</h3>
              <p className="text-xs text-primary font-semibold mb-3">Rector, Samarkand State University, Uzbekistan</p>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "Our global partnership creates a vibrant forum for exchanging groundbreaking algorithms, quantum physical models, and next-generation networks."
              </p>
            </div>

            {/* Prof. Anirban Bandyopadhyay Card */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-all text-center relative overflow-hidden">
              <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-navy-dark to-slate-800 text-white flex items-center justify-center font-bold text-xl shadow">
                AB
              </div>
              <span className="inline-block bg-purple-50 text-purple-700 text-[10.5px] font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-2">
                General Chair
              </span>
              <h3 className="text-lg font-bold text-navy-text">Prof. Anirban Bandyopadhyay</h3>
              <p className="text-xs text-primary font-semibold mb-3">Senior Scientist, NIMS, Japan</p>
              <p className="text-xs text-slate-500 leading-relaxed italic">
                "QINS-2027 focuses on variational quantum algorithms, quantum neural networks, and secure distributed ledgers, opening new paradigms for computation."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8 Core Research Tracks Section */}
      <section className="py-16 bg-white" id="tracks">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
              Call for Papers
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-text mb-3">
              8 Research Tracks & 62 Sub-Topics
            </h2>
            <div className="w-14 h-1 bg-primary mx-auto rounded mb-4" />
            <p className="text-slate-600 text-sm">
              We invite researchers to submit original papers in Springer LNAI/LNNS format across the following tracks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {TRACKS.map((track) => (
              <div
                key={track.id}
                className="bg-slate-50 border border-slate-200 rounded-2xl p-6 hover:border-primary hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-navy-mid text-white text-[10.5px] font-bold px-2.5 py-1 rounded uppercase tracking-wider">
                      {track.number}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-primary">|ψ⟩ QINS</span>
                  </div>
                  <h3 className="text-base font-bold text-navy-text mb-3 leading-snug">{track.title}</h3>
                  <ul className="space-y-2 text-xs text-slate-600 mb-6">
                    {track.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary font-bold mt-0.5">•</span>
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  href="/call-for-papers"
                  className="text-xs font-bold text-primary hover:text-primary-hover inline-flex items-center gap-1.5"
                >
                  View Submission Guidelines <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Dates Timeline */}
      <section className="py-16 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
              Conference Timeline
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-text mb-3">
              Important Dates
            </h2>
            <div className="w-14 h-1 bg-primary mx-auto rounded mb-4" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {IMPORTANT_DATES.map((item) => (
              <div
                key={item.id}
                className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary transition-all relative overflow-hidden"
              >
                <span className="text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 absolute top-3 right-3">
                  {item.status}
                </span>
                <CalendarDays className="w-6 h-6 text-primary mb-3" />
                <h4 className="font-bold text-sm text-navy-text mb-1">{item.title}</h4>
                <div className="text-sm font-extrabold text-primary-dark mb-1">{item.date}</div>
                <p className="text-[11px] text-slate-500 leading-tight">{item.note}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Host Institution: BBIT Campus Highlights */}
      <section className="py-16 bg-white border-t border-slate-200">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-widest block mb-1">
                Conference Venue & Host
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-navy-text mb-4">
                Budge Budge Institute of Technology (BBIT), Kolkata
              </h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-4">
                A Unit of <strong>Jagannath Gupta Family Trust (JB Group)</strong>, BBIT is an AICTE-approved, MAKAUT-affiliated, and <strong>NAAC (B++) & NBA Accredited</strong> premier engineering institution located in South Kolkata.
              </p>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">
                Spread over a scenic 20+ acre campus with advanced computing clusters, quantum simulation facilities, and modern auditoriums, BBIT offers ideal infrastructure for hybrid international conventions.
              </p>

              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="block text-xl font-extrabold text-navy-text">NAAC B++</span>
                  <span className="text-[11px] text-slate-500">Accredited by National Assessment Council</span>
                </div>

                <div className="bg-slate-50 p-3.5 rounded-xl border border-slate-200">
                  <span className="block text-xl font-extrabold text-navy-text">NBA</span>
                  <span className="text-[11px] text-slate-500">Accredited Engineering Departments</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80"
                alt="BBIT Kolkata Campus"
                className="rounded-2xl shadow-xl w-full object-cover h-80"
              />
              <div className="absolute -bottom-4 left-6 bg-white p-4 rounded-xl shadow-lg border-l-4 border-primary max-w-xs">
                <span className="block text-base font-extrabold text-navy-text">Nischintapur, Budge Budge</span>
                <span className="text-xs text-slate-500 font-medium">Kolkata – 700137, West Bengal</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
