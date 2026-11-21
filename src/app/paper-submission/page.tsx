import { Metadata } from "next";
import { CONFERENCE_INFO } from "@/lib/constants";
import { FileUp, Download, ShieldCheck, CheckCircle2, ArrowRight, BookOpen, AlertTriangle } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `Paper Submission Guidelines | ${CONFERENCE_INFO.name}`,
  description: `Submission format, templates, plagiarism limits, and peer review process for ${CONFERENCE_INFO.fullName}.`,
};

export default function PaperSubmissionPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <FileUp className="w-3.5 h-3.5" />
            Author Instructions
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Paper Submission Guidelines
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Follow the formal formatting instructions, Springer LNAI/LNNS publication templates, and double-blind review criteria for {CONFERENCE_INFO.name}.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Submission</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-5xl mx-auto px-4 space-y-10">
        {/* Quick CTA Box */}
        <div className="bg-gradient-to-br from-[#0f2027] to-[#203a43] text-white rounded-2xl p-8 shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-slate-700">
          <div>
            <span className="text-emerald-400 text-xs font-bold uppercase tracking-wider">Submission Portal Active</span>
            <h2 className="text-2xl font-bold mt-1 text-white">Ready to submit your manuscript?</h2>
            <p className="text-slate-300 text-sm mt-2 max-w-xl">
              Upload your double-blind PDF manuscript to Microsoft CMT before <strong>October 31, 2027</strong>.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href={CONFERENCE_INFO.cmtUrl}
              target="_blank"
              className="inline-flex items-center justify-center gap-2 bg-[#5da834] hover:bg-[#4d8c2b] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-md transition"
            >
              Submit on CMT <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Templates Card */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
            <Download className="w-5 h-5 text-emerald-600" />
            Official Springer / Conference Manuscript Templates
          </h3>
          <p className="text-sm text-slate-600 mb-6">
            All submitted papers must adhere strictly to the Springer double-column A4 format. Papers that deviate from this layout may be rejected without peer review.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href={CONFERENCE_INFO.wordTemplateUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/20 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-sm">
                  DOCX
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition">Microsoft Word Template</h4>
                  <p className="text-xs text-slate-500">Standard A4 Format (.docx)</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition" />
            </a>

            <a
              href={CONFERENCE_INFO.latexTemplateUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-between p-4 rounded-xl border border-slate-200 hover:border-emerald-500 hover:bg-emerald-50/20 transition group"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-sm">
                  TEX
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm group-hover:text-emerald-700 transition">LaTeX Template Package</h4>
                  <p className="text-xs text-slate-500">Includes .cls & sample .tex (.zip)</p>
                </div>
              </div>
              <Download className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition" />
            </a>
          </div>
        </div>

        {/* Submission Rules & Plagiarism */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Manuscript Specifications
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Page Limit:</strong> Maximum 6 pages (up to 2 additional pages allowed with excess page fee).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>File Type:</strong> Initial submission must be in PDF format with all fonts embedded.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Double-Blind Policy:</strong> Omit author names, emails, affiliations, and grant acknowledgements.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Language:</strong> Submissions must be written in standard scientific English.</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
            <h4 className="font-bold text-slate-900 text-base flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-amber-600" />
              Ethics & Plagiarism Policy
            </h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Originality:</strong> All papers are screened with CrossCheck / Turnitin similarity software.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Similarity Threshold:</strong> Overall similarity index must be strictly below 15% (with no single source {">"} 3%).</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Dual Submission:</strong> Papers under review in other journals or conferences cannot be submitted.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                <span><strong>Publication:</strong> Accepted papers will appear in {CONFERENCE_INFO.proceedingsPublisher}.</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Review Process */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-6">
            <BookOpen className="w-5 h-5 text-emerald-600" />
            Peer Review Lifecycle
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">1</div>
              <h5 className="font-bold text-sm text-slate-900">Initial Desk Check</h5>
              <p className="text-xs text-slate-500 mt-1">Scope relevance, format validation, and plagiarism verification.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">2</div>
              <h5 className="font-bold text-sm text-slate-900">Double-Blind Review</h5>
              <p className="text-xs text-slate-500 mt-1">Evaluated by at least 2 independent international domain specialists.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">3</div>
              <h5 className="font-bold text-sm text-slate-900">Decision & Notification</h5>
              <p className="text-xs text-slate-500 mt-1">Accept, Revision, or Reject verdict sent by November 15, 2027.</p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-center">
              <div className="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-xs mx-auto mb-2">4</div>
              <h5 className="font-bold text-sm text-slate-900">Camera Ready & Registration</h5>
              <p className="text-xs text-slate-500 mt-1">Submit Springer copyright and final PDF by November 30, 2027.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
