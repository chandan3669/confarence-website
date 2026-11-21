import { Metadata } from "next";
import { CONFERENCE_INFO, COMMITTEE_MEMBERS } from "@/lib/constants";
import { Users, Crown, Award, Globe, Shield, UserCheck } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Organizing Committees & Leadership | ${CONFERENCE_INFO.name}`,
  description: `Distinguished academic leadership, international advisory board, and technical program committee for ${CONFERENCE_INFO.fullName}.`,
};

export default function OrganizingCommitteesPage() {
  const patrons = COMMITTEE_MEMBERS.filter((m) => m.group === "patrons");
  const generalChairs = COMMITTEE_MEMBERS.filter((m) => m.group === "general");
  const advisory = COMMITTEE_MEMBERS.filter((m) => m.group === "advisory");
  const conveners = COMMITTEE_MEMBERS.filter((m) => m.group === "conveners");
  const tpc = COMMITTEE_MEMBERS.filter((m) => m.group === "tpc");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Users className="w-3.5 h-3.5" />
            Distinguished Board
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Organizing Committees & Leadership
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            The visionary leadership of Budge Budge Institute of Technology (BBIT), Samarkand State University, NIMS Japan, MIT USA, and global academic institutions.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Committees</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 space-y-12">
        {/* Section 1: Patrons */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2.5 rounded-xl bg-amber-50 text-amber-600">
              <Crown className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Patron-in-Chief & Patrons</h2>
              <p className="text-xs text-slate-500">Institutional Governance & Executive Benefactors</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {patrons.map((member) => (
              <div key={member.id} className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0f2027] to-[#2c5364] text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">{member.designation}</p>
                  <p className="text-xs text-slate-500 mt-1">{member.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: General Chairs */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2.5 rounded-xl bg-emerald-50 text-emerald-600">
              <Award className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">General Chairs</h2>
              <p className="text-xs text-slate-500">Scientific Leadership & Program Directors</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {generalChairs.map((member) => (
              <div key={member.id} className="p-5 rounded-xl border border-emerald-100 bg-emerald-50/20 hover:bg-emerald-50/40 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-emerald-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                  <p className="text-xs font-semibold text-emerald-700 mt-0.5">{member.designation}</p>
                  <p className="text-xs text-slate-500 mt-1">{member.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Steering & International Advisory Committee */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2.5 rounded-xl bg-indigo-50 text-indigo-600">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Steering & International Advisory Committee</h2>
              <p className="text-xs text-slate-500">Global Academic Experts from MIT, Georgia, Luleå, Seoul & Granada</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {advisory.map((member) => (
              <div key={member.id} className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-base">{member.name}</h3>
                  <p className="text-xs font-semibold text-indigo-700 mt-0.5">{member.designation}</p>
                  <p className="text-xs text-slate-500 mt-1">{member.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 4: Organizing Secretaries & Conveners */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2.5 rounded-xl bg-cyan-50 text-cyan-600">
              <UserCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Organizing Committee & Secretaries</h2>
              <p className="text-xs text-slate-500">BBIT Kolkata Host Organizing Team</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {conveners.map((member) => (
              <div key={member.id} className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition flex items-start gap-4">
                <div className="w-11 h-11 rounded-full bg-cyan-600 text-white flex items-center justify-center font-bold text-sm shrink-0 shadow-sm">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                  <p className="text-xs font-semibold text-cyan-700 mt-0.5">{member.designation}</p>
                  <p className="text-xs text-slate-500 mt-1">{member.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 5: Technical Program Committee */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <div className="flex items-center gap-3 mb-6 pb-4 border-b border-slate-100">
            <div className="p-2.5 rounded-xl bg-rose-50 text-rose-600">
              <Shield className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-slate-900">Technical Program Committee (TPC)</h2>
              <p className="text-xs text-slate-500">Peer-Reviewers & Domain Specialists</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {tpc.map((member) => (
              <div key={member.id} className="p-5 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-slate-50 transition flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-slate-200 text-slate-700 flex items-center justify-center font-bold text-xs shrink-0">
                  {member.initials}
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm">{member.name}</h3>
                  <p className="text-xs text-slate-600 mt-0.5">{member.designation}</p>
                  <p className="text-xs text-slate-400 mt-1">{member.institution}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
