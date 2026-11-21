import { Metadata } from "next";
import { CONFERENCE_INFO, IMPORTANT_DATES } from "@/lib/constants";
import { Calendar, Clock, AlertCircle, ArrowRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Important Dates | ${CONFERENCE_INFO.name} - BBIT Kolkata`,
  description: `Submission milestones, acceptance notifications, and author registration deadlines for ${CONFERENCE_INFO.fullName}.`,
};

export default function ImportantDatesPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Calendar className="w-3.5 h-3.5" />
            Milestones & Schedule
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Important Dates & Deadlines
          </h1>
          <p className="text-slate-300 max-w-2xl mx-auto text-sm sm:text-base">
            Mark your calendar with critical submission cutoffs and milestones for {CONFERENCE_INFO.name} at Budge Budge Institute of Technology (BBIT), Kolkata.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Important Dates</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-5xl mx-auto px-4">
        {/* Urgent Alert Banner */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-10 flex items-start gap-4 shadow-sm">
          <AlertCircle className="w-6 h-6 text-amber-600 shrink-0 mt-0.5" />
          <div>
            <h3 className="font-bold text-amber-900 text-base">Paper Submission Window is Live!</h3>
            <p className="text-sm text-amber-800 mt-1 leading-relaxed">
              Full manuscripts must be submitted before <span className="font-semibold underline">October 31, 2027 (23:59 IST)</span> through Microsoft CMT. Due to strict peer-review schedules, no extensions will be granted beyond the hard deadline.
            </p>
          </div>
        </div>

        {/* Timeline Table / Cards */}
        <div className="space-y-4">
          {IMPORTANT_DATES.map((item, index) => {
            const isMilestone = item.isKeyMilestone;
            return (
              <div
                key={item.id}
                className={`relative bg-white rounded-xl border p-6 transition-all duration-200 shadow-sm hover:shadow-md flex flex-col md:flex-row md:items-center justify-between gap-4 ${
                  isMilestone
                    ? "border-emerald-500/50 ring-1 ring-emerald-500/20 bg-gradient-to-r from-emerald-50/20 to-white"
                    : "border-slate-200"
                }`}
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 font-bold text-lg ${
                      isMilestone
                        ? "bg-emerald-600 text-white shadow-emerald-200 shadow-lg"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    0{index + 1}
                  </div>
                  <div>
                    <div className="flex items-center gap-3">
                      <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                      {item.status === "open" && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
                          Active
                        </span>
                      )}
                      {item.status === "upcoming" && (
                        <span className="px-2 py-0.5 rounded-full text-xs font-medium bg-slate-100 text-slate-600">
                          Upcoming
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-slate-500 mt-1">{item.note}</p>
                  </div>
                </div>

                <div className="flex md:flex-col md:items-end justify-between items-center border-t md:border-t-0 pt-3 md:pt-0 border-slate-100">
                  <div className="flex items-center gap-2 text-slate-900 font-bold text-lg">
                    <Clock className="w-4 h-4 text-emerald-600" />
                    <span>{item.date}</span>
                  </div>
                  <span className="text-xs text-slate-400 mt-0.5">Strict cut-off (23:59 IST)</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Instructions Card */}
        <div className="mt-12 bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
            <ShieldCheck className="w-5 h-5 text-emerald-600" />
            Publication & Compliance Notes
          </h3>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>All accepted and registered papers will be published in <strong>{CONFERENCE_INFO.proceedingsPublisher}</strong>.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>At least one author must complete full author registration by <strong>December 05, 2027</strong> for inclusion in the proceedings volume.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
              <span>Authors can present their research either in-person at BBIT Kolkata campus or virtually via high-definition hybrid stream.</span>
            </li>
          </ul>

          <div className="mt-8 flex flex-wrap gap-4 items-center">
            <Link
              href={CONFERENCE_INFO.cmtUrl}
              target="_blank"
              className="inline-flex items-center gap-2 bg-[#5da834] hover:bg-[#4d8c2b] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition"
            >
              Submit Paper via CMT <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/registration"
              className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-6 py-3 rounded-lg font-bold text-sm transition"
            >
              View Registration Tiers
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
