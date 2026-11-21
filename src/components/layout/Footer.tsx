import React from "react";
import Link from "next/link";
import { Send, MapPin, Mail, Phone, ExternalLink } from "lucide-react";
import { CONFERENCE_INFO } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-[#091317] text-slate-400 pt-14 pb-8 border-t-4 border-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Col 1: About */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src="/bbit-logo.webp" alt="BBIT Logo" className="w-8 h-8 object-contain" />
              <h4 className="text-white text-base font-bold">
                {CONFERENCE_INFO.name}
              </h4>
            </div>
            <p className="text-xs leading-relaxed text-slate-400 mb-4">
              {CONFERENCE_INFO.fullName} &bull; <em>{CONFERENCE_INFO.tagline}</em>. Hosted by <strong>{CONFERENCE_INFO.institution}</strong> ({CONFERENCE_INFO.parentTrust}) in technical collaboration with global university partners.
            </p>
            <div className="text-xs text-slate-400 space-y-1.5">
              <p className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                <span>{CONFERENCE_INFO.secretariat.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{CONFERENCE_INFO.secretariat.phone}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                <span>{CONFERENCE_INFO.secretariat.emailSubmissions}</span>
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link href="/important-dates" className="hover:text-white transition-colors">Important Dates</Link></li>
              <li><Link href="/call-for-papers" className="hover:text-white transition-colors">5 Research Tracks & 23 Topics</Link></li>
              <li><Link href="/paper-submission" className="hover:text-white transition-colors">Submission Guidelines</Link></li>
              <li><Link href="/registration" className="hover:text-white transition-colors">Registration Fees</Link></li>
              <li><Link href="/organizing-committees" className="hover:text-white transition-colors">Organizing Committee (78 Members)</Link></li>
            </ul>
          </div>

          {/* Col 3: Policies */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Conference Policies
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link href="/registration#payment-policy" className="hover:text-white transition-colors">Payment Policy</Link></li>
              <li><Link href="/registration#refund-policy" className="hover:text-white transition-colors">Refund & Cancellation Policy</Link></li>
              <li><Link href="/paper-submission#plagiarism-policy" className="hover:text-white transition-colors">Plagiarism Policy (&lt;15%)</Link></li>
              <li><Link href="/paper-submission#no-show-policy" className="hover:text-white transition-colors">Author Presentation Policy</Link></li>
              <li><Link href="/how-to-reach#visa" className="hover:text-white transition-colors">VISA Support for International Delegates</Link></li>
            </ul>
          </div>

          {/* Col 4: Submission Portal */}
          <div>
            <h4 className="text-white text-base font-bold mb-4 relative pb-2 after:absolute after:bottom-0 after:left-0 after:w-8 after:h-0.5 after:bg-primary">
              Paper Submission Portal
            </h4>
            <p className="text-xs text-slate-400 leading-relaxed mb-4">
              All manuscripts must be submitted exclusively via the Microsoft CMT portal for {CONFERENCE_INFO.name}.
            </p>
            <Link
              href={CONFERENCE_INFO.cmtUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary-hover text-white text-xs font-semibold px-4 py-2.5 rounded-lg shadow-md transition-colors"
            >
              <Send className="w-3.5 h-3.5" />
              Open Microsoft CMT
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            &copy; 2027 {CONFERENCE_INFO.name}. Hosted by {CONFERENCE_INFO.institution}.
          </div>
          <div className="flex items-center gap-3">
            <span>Springer LNAI / CCIS Volume</span>
            <span>&bull;</span>
            <span>Accredited NAAC B++ &bull; NBA</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
