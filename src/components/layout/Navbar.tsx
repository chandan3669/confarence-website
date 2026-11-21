"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Menu,
  X,
  ChevronDown,
  Send,
  FileText,
  FileArchive,
  ExternalLink,
} from "lucide-react";
import { CONFERENCE_INFO } from "@/lib/constants";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Important Dates", href: "/important-dates" },
  {
    label: "Committees",
    href: "/organizing-committees",
    dropdown: [
      { label: "Patrons & Leadership", href: "/organizing-committees" },
      { label: "General Chairs & Steering Board", href: "/organizing-committees#general" },
      { label: "International Advisory Board", href: "/organizing-committees#advisory" },
      { label: "Technical Programme Committee", href: "/organizing-committees#technical" },
    ],
  },
  {
    label: "For Authors",
    href: "/call-for-papers",
    dropdown: [
      { label: "Research Tracks (8 Tracks)", href: "/call-for-papers" },
      { label: "Submission Guidelines", href: "/paper-submission" },
      {
        label: "Springer Word Template",
        href: CONFERENCE_INFO.wordTemplateUrl,
        external: true,
        icon: FileText,
      },
      {
        label: "Springer LaTeX Template",
        href: CONFERENCE_INFO.latexTemplateUrl,
        external: true,
        icon: FileArchive,
      },
    ],
  },
  { label: "Registration", href: "/registration" },
  { label: "Keynotes", href: "/keynote-speakers" },
  { label: "Schedule", href: "/conference-schedule" },
  { label: "Venue & Travel", href: "/how-to-reach" },
  { label: "Contact", href: "/contact-us" },
];

export function Navbar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const toggleDropdown = (label: string) => {
    setOpenDropdown(openDropdown === label ? null : label);
  };

  return (
    <nav className="navbar-gradient sticky top-0 z-50 shadow-lg backdrop-blur-md">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Conference Brand Pill with Quantum Theme */}
        <Link href="/" className="flex items-center gap-2 py-3 text-white font-bold text-lg tracking-tight">
          <span className="bg-primary text-white text-xs px-2.5 py-1 rounded-md font-extrabold tracking-wider shadow">
            {CONFERENCE_INFO.name}
          </span>
          <span className="text-white/90 text-sm font-semibold hidden sm:inline">BBIT Kolkata</span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-1">
          {NAV_LINKS.map((item) => {
            const isActive = pathname === item.href;
            const hasDropdown = Boolean(item.dropdown);

            if (hasDropdown) {
              return (
                <div key={item.label} className="relative group">
                  <button
                    className={cn(
                      "flex items-center gap-1.5 px-3 py-4 text-sm font-medium transition-colors duration-200",
                      isActive ? "text-primary font-semibold" : "text-slate-100 hover:text-white"
                    )}
                  >
                    {item.label}
                    <ChevronDown className="w-3.5 h-3.5 transition-transform duration-200 group-hover:rotate-180 opacity-80" />
                  </button>

                  <div className="absolute top-full left-0 w-64 py-2 bg-[#151F28] border-t-2 border-primary rounded-b-lg shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                    {item.dropdown?.map((subItem) => (
                      <Link
                        key={subItem.label}
                        href={subItem.href}
                        target={subItem.external ? "_blank" : undefined}
                        rel={subItem.external ? "noopener noreferrer" : undefined}
                        className="flex items-center justify-between px-4 py-2.5 text-xs text-slate-300 hover:text-white hover:bg-primary/20 transition-colors"
                      >
                        <span className="flex items-center gap-2">
                          {subItem.icon && <subItem.icon className="w-3.5 h-3.5 text-primary" />}
                          {subItem.label}
                        </span>
                        {subItem.external && <ExternalLink className="w-3 h-3 opacity-60" />}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  "px-3 py-4 text-sm font-medium transition-colors relative duration-200",
                  isActive ? "text-white font-semibold after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-3/4 after:h-0.5 after:bg-primary" : "text-slate-200 hover:text-white"
                )}
              >
                {item.label}
              </Link>
            );
          })}

          <Link
            href={CONFERENCE_INFO.cmtUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 inline-flex items-center gap-2 bg-gradient-to-r from-primary to-primary-hover text-white text-xs font-semibold px-4 py-2 rounded-full shadow-md hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-200"
          >
            <Send className="w-3.5 h-3.5" />
            Submit Paper
          </Link>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-white/90 hover:text-white focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-[#101C24] border-t border-white/10 px-4 py-4 space-y-2">
          {NAV_LINKS.map((item) => {
            if (item.dropdown) {
              const isOpen = openDropdown === item.label;
              return (
                <div key={item.label} className="border-b border-white/5 pb-1">
                  <button
                    onClick={() => toggleDropdown(item.label)}
                    className="w-full flex items-center justify-between py-2 text-sm text-slate-200 font-medium"
                  >
                    <span>{item.label}</span>
                    <ChevronDown className={cn("w-4 h-4 transition-transform", isOpen && "rotate-180")} />
                  </button>
                  {isOpen && (
                    <div className="pl-4 py-1 space-y-1 bg-white/5 rounded-md my-1">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.label}
                          href={sub.href}
                          onClick={() => setMobileOpen(false)}
                          target={sub.external ? "_blank" : undefined}
                          className="block py-2 text-xs text-slate-300 hover:text-primary"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="block py-2 text-sm text-slate-200 font-medium hover:text-primary border-b border-white/5"
              >
                {item.label}
              </Link>
            );
          })}

          <div className="pt-2">
            <Link
              href={CONFERENCE_INFO.cmtUrl}
              target="_blank"
              onClick={() => setMobileOpen(false)}
              className="w-full justify-center flex items-center gap-2 bg-primary text-white text-sm font-semibold py-2.5 rounded-lg shadow"
            >
              <Send className="w-4 h-4" />
              Submit Paper on CMT
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
