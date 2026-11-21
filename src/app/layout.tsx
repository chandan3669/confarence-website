import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { TopNoticeBar } from "@/components/layout/TopNoticeBar";
import { InstitutionHeader } from "@/components/layout/InstitutionHeader";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CONFERENCE_INFO } from "@/lib/constants";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${CONFERENCE_INFO.name} | ${CONFERENCE_INFO.fullName}`,
  description: `${CONFERENCE_INFO.name}: ${CONFERENCE_INFO.fullName} held on ${CONFERENCE_INFO.dates} at ${CONFERENCE_INFO.institution}. Submit research papers in AI, Machine Learning, IoT, Cyber Security, and Green Computing.`,
  keywords: [
    "Academic Conference",
    "IEEE Conference",
    "Artificial Intelligence",
    "Cyber Security",
    "Internet of Things",
    "Machine Learning",
    "Scopus Indexed",
    CONFERENCE_INFO.name,
  ],
  authors: [{ name: CONFERENCE_INFO.institution }],
  openGraph: {
    title: `${CONFERENCE_INFO.name} | International Conference`,
    description: `${CONFERENCE_INFO.fullName} - ${CONFERENCE_INFO.dates}`,
    siteName: CONFERENCE_INFO.name,
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-800 antialiased selection:bg-primary/20 selection:text-primary-dark">
        <TopNoticeBar />
        <InstitutionHeader />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
