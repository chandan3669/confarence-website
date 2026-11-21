import { Metadata } from "next";
import { CONFERENCE_INFO } from "@/lib/constants";
import { Navigation, Plane, Train, Bus, MapPin, Building, Phone, Mail } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: `How to Reach & Venue | ${CONFERENCE_INFO.name} - BBIT Kolkata`,
  description: `Travel directions, airport/railway transfers, campus location, and accommodation for ${CONFERENCE_INFO.fullName}.`,
};

export default function HowToReachPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Header */}
      <section className="bg-gradient-to-r from-[#0f2027] via-[#203a43] to-[#2c5364] text-white py-14 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Navigation className="w-3.5 h-3.5" />
            Travel & Hospitality
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight mb-4 text-white">
            How to Reach the Venue
          </h1>
          <p className="text-slate-300 max-w-3xl mx-auto text-sm sm:text-base leading-relaxed">
            Convenient transit options, rail/air connectivity, and accommodation assistance for delegates visiting Budge Budge Institute of Technology (BBIT), Kolkata.
          </p>
          <div className="flex items-center justify-center gap-2 mt-6 text-xs text-slate-400">
            <Link href="/" className="hover:text-emerald-400 transition">Home</Link>
            <span>/</span>
            <span className="text-emerald-400 font-medium">How to Reach</span>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 max-w-7xl mx-auto px-4 space-y-12">
        {/* Campus Overview Banner */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Host Campus & Address</span>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">Budge Budge Institute of Technology (BBIT)</h2>
            <p className="text-sm text-slate-600 mt-2 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{CONFERENCE_INFO.secretariat.address}</span>
            </p>
          </div>
          <a
            href="https://maps.google.com/?q=Budge+Budge+Institute+of+Technology+Kolkata"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-[#5da834] hover:bg-[#4d8c2b] text-white px-6 py-3 rounded-lg font-bold text-sm shadow-sm transition shrink-0"
          >
            <Navigation className="w-4 h-4" /> Open in Google Maps
          </a>
        </div>

        {/* 3 Transit Modes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* By Air */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5">
              <Plane className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">By Air (CCU Airport)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Netaji Subhash Chandra Bose International Airport (Kolkata Airport) is situated approximately <strong>42 km</strong> from BBIT campus.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <p>• Pre-paid taxis & app cabs (Uber / Ola) are available 24/7 at airport exits.</p>
              <p>• Approximate travel time: 70–90 minutes via Maa Flyover & Taratala.</p>
            </div>
          </div>

          {/* By Train */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-5">
              <Train className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">By Train (HWH / SDAH)</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Kolkata is connected via Howrah (HWH, 28 km) and Sealdah (SDAH, 26 km) railway junctions.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <p>• Direct local trains from Sealdah South section go to <strong>Komagata Maru Budge Budge</strong> station (3.5 km to BBIT).</p>
              <p>• Auto-rickshaws and e-rickshaws (Totos) connect station to BBIT gate in 10 mins.</p>
            </div>
          </div>

          {/* By Road / Metro */}
          <div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition">
            <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-5">
              <Bus className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">By Road & Metro</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              Easily accessible via Diamond Harbour Road (NH 12) and Budge Budge Trunk Road.
            </p>
            <div className="mt-4 pt-4 border-t border-slate-100 text-xs text-slate-500 space-y-1.5">
              <p>• Nearest Metro: <strong>Taratala Metro Station</strong> (Purple Line, ~18 km).</p>
              <p>• Regular state & private buses (Route 77, SD7) operate frequently from Esplanade and Taratala.</p>
            </div>
          </div>
        </div>

        {/* Accommodation Assistance */}
        <div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2 mb-4">
            <Building className="w-5 h-5 text-emerald-600" />
            Delegate Accommodation & Hospitality Desk
          </h3>
          <p className="text-sm text-slate-600 mb-6 leading-relaxed">
            The conference organizing committee provides personalized accommodation booking support for registered national and international delegates. Budget-friendly and luxury hotel options with shuttle services to the campus are arranged.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Phone className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Hospitality & Transit Helpline:</p>
                <p className="text-sm font-bold text-slate-900">{CONFERENCE_INFO.secretariat.mobile}</p>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3">
              <Mail className="w-5 h-5 text-emerald-600 shrink-0" />
              <div>
                <p className="text-xs text-slate-500">Official Visa & Lodging Desk:</p>
                <p className="text-sm font-bold text-slate-900">{CONFERENCE_INFO.secretariat.emailVisa}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
