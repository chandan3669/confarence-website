"use client";

import { useState } from "react";
import { CONFERENCE_INFO, REGISTRATION_TIERS } from "@/lib/constants";
import { Ticket, CheckCircle2, CreditCard, Building2, HelpCircle, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";

export default function RegistrationPage() {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Ticket className="w-3.5 h-3.5" />
            Tariffs & Inclusion
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            Conference Registration Fees
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Transparent delegate categories for Indian and International authors, researchers, and attendees for {CONFERENCE_INFO.name}.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">Registration</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Currency Switcher */}
        <div className="flex items-center justify-center mb-12">
          <div className="bg-white border border-slate-200 p-1.5 rounded-xl shadow-sm flex items-center gap-1">
            <button
              onClick={() => setCurrency("INR")}
              className={`px-5 py-2 rounded-lg font-bold text-sm transition-all ${
                currency === "INR"
                  ? "bg-[#5da834] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Indian Delegates (₹ INR)
            </button>
            <button
              onClick={() => setCurrency("USD")}
              className={`px-5 py-2 rounded-lg font-bold text-sm transition-all ${
                currency === "USD"
                  ? "bg-[#5da834] text-white shadow"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              International Delegates ($ USD)
            </button>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {REGISTRATION_TIERS.map((tier, idx) => {
            const isStudent = idx === 0;
            return (
              <div
                key={idx}
                className={`bg-white rounded-2xl border p-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all duration-200 ${
                  isStudent ? "border-emerald-500 ring-2 ring-emerald-500/20" : "border-slate-200"
                }`}
              >
                <div>
                  {isStudent && (
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-emerald-100 text-emerald-800 uppercase tracking-wider mb-3">
                      Most Popular
                    </span>
                  )}
                  <h3 className="font-bold text-slate-900 text-lg leading-snug">{tier.category}</h3>
                  <div className="my-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-extrabold text-slate-900">
                        {currency === "INR" ? `₹${tier.inrPrice.toLocaleString()}` : `$${tier.foreignUsdPrice}`}
                      </span>
                      <span className="text-xs text-slate-400">/ paper</span>
                    </div>
                    {tier.ieeeInrPrice && currency === "INR" && (
                      <p className="text-xs text-emerald-700 font-semibold mt-1">
                        IEEE / Student Discount: ₹{tier.ieeeInrPrice.toLocaleString()}
                      </p>
                    )}
                    {tier.ieeeUsdPrice && currency === "USD" && (
                      <p className="text-xs text-emerald-700 font-semibold mt-1">
                        IEEE / Member Discount: ${tier.ieeeUsdPrice}
                      </p>
                    )}
                  </div>
                  <div className="w-full h-px bg-slate-100 mb-5"></div>
                  <ul className="space-y-3">
                    {tier.features.map((feature, fIdx) => (
                      <li key={fIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-4 border-t border-slate-100">
                  <Link
                    href="/contact-us"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg font-bold text-xs transition"
                  >
                    Register for Tier <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bank & Payment Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <Building2 className="w-5 h-5 text-emerald-600" />
              Official Bank Transfer Account (NEFT/RTGS/IMPS)
            </h3>
            <p className="text-xs text-slate-500 mb-6">
              All registrations are processed through the official bank account of Budge Budge Institute of Technology.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Account Name:</span>
                <span className="font-semibold text-slate-900">Budge Budge Institute of Technology</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Account Number:</span>
                <span className="font-mono font-bold text-slate-900">911010048560128</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Bank Name:</span>
                <span className="font-semibold text-slate-900">Axis Bank Ltd.</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-500">Branch & IFSC:</span>
                <span className="font-mono font-bold text-slate-900">UTIB0000845 (Budge Budge Branch)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-500">SWIFT / BIC Code:</span>
                <span className="font-mono font-bold text-slate-900">AXISINBB045 (For Wire Transfer)</span>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
            <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-emerald-600" />
              Registration Terms & Policy
            </h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li className="flex items-start gap-2">
                <CreditCard className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>One registration covers up to 6 pages. Additional pages are charged at ₹1,000 / $25 per page (maximum 2 extra pages).</span>
              </li>
              <li className="flex items-start gap-2">
                <CreditCard className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>After completing the bank transfer, authors must email the payment receipt and Paper ID to <strong>{CONFERENCE_INFO.secretariat.emailSubmissions}</strong>.</span>
              </li>
              <li className="flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>Registration fees are non-refundable once the paper has been included in the conference schedule.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
