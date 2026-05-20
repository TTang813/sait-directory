"use client";

import { use } from "react";
import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import type { ReactNode } from "react";

type Section = {
  num: string;
  title: string;
  body?: ReactNode;
  lead?: string;
  items?: string[];
  note?: string;
  highlight?: boolean;
};

const SECTIONS: Section[] = [
  {
    num: "01",
    title: "Purpose of the Directory",
    body: (
      <p>
        The SAIT Practitioner Directory is a voluntary, opt-in service that allows SAIT
        members in good standing to display their professional contact details and areas
        of specialisation to the public. Its purpose is to help members of the public
        and businesses identify and verify qualified tax practitioners who are registered
        with the South African Institute of Taxation (SAIT). Inclusion in the directory
        does not constitute an endorsement by SAIT.
      </p>
    ),
  },
  {
    num: "02",
    title: "Eligibility & Membership Status",
    body: (
      <p>
        Only current SAIT members in good standing are eligible to appear in the directory.
        Your PR Number (practitioner registration number) will be verified against SAIT&apos;s
        membership records. If your membership lapses or is suspended, SAIT reserves the
        right to remove your listing without notice.
      </p>
    ),
  },
  {
    num: "03",
    title: "What We Display",
    lead: "The following information will always be displayed in your listing:",
    items: [
      "Your full name as registered with SAIT",
      "Your SAIT PR (Practitioner Registration) Number",
      "Your selected region (province)",
      "Your selected area(s) of specialisation",
    ],
    note: "Your company/business name will only be shown if you choose to include it.",
  },
  {
    num: "04",
    title: "What We Do Not Display",
    body: (
      <p>
        SAIT will <strong>never</strong> display your personal email address, phone number,
        home address, or financial information. The directory provides only the information
        necessary for prospective clients to verify your credentials and initiate contact —
        you control how that contact is made.
      </p>
    ),
  },
  {
    num: "05",
    title: "Public Accessibility",
    body: (
      <p>
        Directory listings are publicly accessible — visible to anyone who visits the
        directory, including search engines. This is the nature of a public practitioner
        register. You should only opt in if you are comfortable with this information
        being publicly available.
      </p>
    ),
  },
  {
    num: "06",
    title: "Your Rights",
    lead: "You retain full control of your listing at all times:",
    items: [
      "Update your information at any time by requesting a new opt-in link from SAIT",
      "Request removal of your listing at any time by contacting SAIT directly",
      "Withdraw consent and have your listing removed at any time",
      "Your SAIT membership data is protected under SAIT's Privacy Policy",
    ],
  },
  {
    num: "07",
    title: "SAIT's Responsibilities",
    body: (
      <p>
        SAIT undertakes to maintain the directory with reasonable care and to process your
        personal information in accordance with applicable data protection legislation,
        including POPIA (the Protection of Personal Information Act, 4 of 2013). SAIT
        accepts no liability for how third parties use information once it is published.
      </p>
    ),
  },
  {
    num: "08",
    title: "Data Protection & POPIA",
    highlight: true,
    body: (
      <p>
        By opting in, you consent to SAIT processing and publicly displaying your name,
        PR number, region, and specialisation(s) as described above. This processing
        is undertaken under SAIT&apos;s legitimate interest in maintaining a public register
        of tax practitioners, as the lawful basis for processing under POPIA.
      </p>
    ),
  },
  {
    num: "09",
    title: "Contact",
    body: (
      <p>
        For questions about the directory, to update your listing, or to withdraw consent,
        please contact SAIT at{" "}
        <a href="mailto:membership@thesait.org.za" className="text-[var(--color-navy)] underline underline-offset-2 decoration-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors">
          membership@thesait.org.za
        </a>
        .
      </p>
    ),
  },
];

export default function OptInAgreementPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const [accepted, setAccepted] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      {/* Header */}
      <header className="bg-[var(--color-navy)]">
        <div className="max-w-3xl mx-auto px-6 py-5 flex items-center justify-between">
          <Logo width={100} variant="light" />
        </div>
      </header>

      {/* Hero */}
      <div
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(160deg, #1F212E 0%, #2a2d3e 100%)",
          borderBottom: "1px solid rgba(226,191,41,0.15)",
        }}
      >
        {/* Subtle dot pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle, rgba(226,191,41,0.08) 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />
        {/* Gold accent line */}
        <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: "2px", background: "var(--color-gold)" }} />

        <div className="relative max-w-3xl mx-auto px-6 py-14 md:py-20">
          {/* Label */}
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-6"
            style={{
              background: "rgba(226,191,41,0.12)",
              border: "1px solid rgba(226,191,41,0.25)",
            }}
          >
            <span
              className="text-[10px] font-bold tracking-widest uppercase"
              style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}
            >
              SAIT Practitioner Directory
            </span>
          </div>

          {/* Title */}
          <h1
            className="text-display mb-4"
            style={{
              fontFamily: "var(--font-display), Georgia, serif",
              color: "white",
              maxWidth: "580px",
            }}
          >
            Directory Listing Agreement
          </h1>

          <p
            className="text-[15px] leading-relaxed mb-2"
            style={{
              color: "rgba(255,255,255,0.55)",
              fontFamily: "var(--font-body)",
              maxWidth: "480px",
            }}
          >
            Please read this agreement carefully before opting in to the SAIT Practitioner Directory.
          </p>

          <p
            className="text-[12px]"
            style={{
              color: "rgba(255,255,255,0.3)",
              fontFamily: "var(--font-body)",
              letterSpacing: "0.05em",
            }}
          >
            Version 1.0 &nbsp;&middot;&nbsp; {new Date().getFullYear()} &nbsp;&middot;&nbsp; South African Institute of Taxation
          </p>
        </div>
      </div>

      {/* Main content */}
      <main className="flex-1">
        <div className="max-w-3xl mx-auto px-6 py-12">

          {/* Table of contents */}
          <nav className="mb-14">
            <h2
              className="text-label mb-5"
              style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
            >
              Contents
            </h2>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-2"
              style={{ fontFamily: "var(--font-body)" }}
            >
              {SECTIONS.map((s) => (
                <a
                  key={s.num}
                  href={`#section-${s.num}`}
                  className="group flex items-start gap-3 py-1.5 hover:opacity-80 transition-opacity"
                >
                  <span
                    className="text-[11px] font-bold mt-0.5 flex-shrink-0"
                    style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}
                  >
                    {s.num}
                  </span>
                  <span
                    className="text-sm text-[var(--color-text-secondary)] group-hover:text-[var(--color-navy)] transition-colors leading-snug"
                    style={{ fontFamily: "var(--font-body)" }}
                  >
                    {s.title}
                  </span>
                </a>
              ))}
            </div>
          </nav>

          {/* Sections */}
          <div
            className="space-y-12"
            style={{ fontFamily: "var(--font-body)" }}
          >
            {SECTIONS.map((section, i) => (
              <section
                key={section.num}
                id={`section-${section.num}`}
                className="scroll-mt-8"
              >
                {/* Section header */}
                <div className="flex items-baseline gap-5 mb-5">
                  <span
                    className="text-[13px] font-bold"
                    style={{ color: "var(--color-gold)", fontFamily: "var(--font-body)" }}
                  >
                    {section.num}
                  </span>
                  <h2
                    className="text-h2"
                    style={{
                      fontFamily: "var(--font-display), Georgia, serif",
                      color: "var(--color-navy)",
                      lineHeight: 1.15,
                    }}
                  >
                    {section.title}
                  </h2>
                  {/* Thin divider line */}
                  <div className="flex-1 h-px" style={{ background: "var(--color-light-gray)" }} />
                </div>

                {/* Content */}
                <div
                  className="pl-[2.75rem]"
                  style={{ fontFamily: "var(--font-body)" }}
                >
                  {section.highlight && (
                    <div
                      className="p-6 rounded-[var(--radius-md)] mb-5"
                      style={{
                        background: "rgba(226,191,41,0.07)",
                        border: "1px solid rgba(226,191,41,0.2)",
                        borderLeft: "3px solid var(--color-gold)",
                      }}
                    >
                      <div
                        className="text-[11px] font-bold uppercase tracking-widest mb-3"
                        style={{ color: "var(--color-gold)" }}
                      >
                        Legal Basis — POPIA
                      </div>
                      {section.body}
                    </div>
                  )}

                  {!section.highlight && section.body && (
                    <div
                      className="text-[15px] leading-relaxed space-y-4"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {section.lead && (
                        <p className="text-[15px] font-medium" style={{ color: "var(--color-navy)" }}>
                          {section.lead}
                        </p>
                      )}
                      {section.body}
                    </div>
                  )}

                  {section.items && (
                    <div>
                      {section.lead && (
                        <p
                          className="text-[15px] font-medium mb-4"
                          style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                        >
                          {section.lead}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {section.items.map((item, j) => (
                          <li
                            key={j}
                            className="flex items-start gap-3 text-[15px] leading-relaxed"
                            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                              style={{ background: "var(--color-gold)" }}
                            />
                            {item}
                          </li>
                        ))}
                      </ul>
                      {section.note && (
                        <p
                          className="text-[13px] mt-4 leading-relaxed italic"
                          style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                        >
                          {section.note}
                        </p>
                      )}
                    </div>
                  )}
                </div>

                {/* Divider between sections */}
                {i < SECTIONS.length - 1 && (
                  <div className="mt-12" style={{ borderTop: "1px solid var(--color-light-gray)" }} />
                )}
              </section>
            ))}
          </div>

          {/* Agreement section */}
          <div
            className="mt-16 p-8 rounded-[var(--radius-lg)]"
            style={{
              background: "white",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--color-light-gray)",
            }}
          >
            <h2
              className="text-h2 mb-1"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Your Consent
            </h2>
            <p
              className="text-[14px] mb-7"
              style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
            >
              Please confirm that you have read and agree to the terms above.
            </p>

            {/* Checkbox row */}
            <div
              className={`flex items-start gap-4 p-6 rounded-[var(--radius-md)] border-2 transition-all duration-200 cursor-pointer ${
                accepted ? "border-[var(--color-gold)]" : "border-[var(--color-mid-gray)]"
              }`}
              style={{
                background: accepted ? "rgba(226,191,41,0.04)" : "var(--color-light-gray)",
                fontFamily: "var(--font-body)",
              }}
              onClick={() => setAccepted(!accepted)}
            >
              <div
                className={`w-5 h-5 rounded-[6px] border-2 flex items-center justify-center flex-shrink-0 mt-0.5 transition-all duration-150 ${
                  accepted
                    ? "border-[var(--color-gold)]"
                    : "border-[var(--color-mid-gray)]"
                }`}
                style={{
                  background: accepted ? "var(--color-gold)" : "white",
                }}
              >
                {accepted && (
                  <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                    <path d="M2 6l3 3 5-5" stroke="#1F212E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </div>

              <div className="flex-1">
                <p
                  className="text-[15px] font-medium mb-1"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  I have read and understood this agreement
                </p>
                <p
                  className="text-[13px] leading-relaxed"
                  style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
                >
                  By checking this box, you give your consent to have your information displayed
                  in the SAIT Practitioner Directory. You may withdraw this consent at any time
                  by contacting SAIT.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-6">
              {accepted ? (
                <Button
                  size="lg"
                  className="w-full"
                  onClick={() => {
                    if (typeof window !== "undefined") {
                      sessionStorage.setItem("sait_optin_agreement", "accepted");
                      window.history.back();
                    }
                  }}
                >
                  Continue to Listing Form
                </Button>
              ) : (
                <div
                  className="w-full py-4 text-center text-[14px] font-medium rounded-[var(--radius-sm)]"
                  style={{
                    background: "var(--color-light-gray)",
                    color: "var(--color-text-secondary)",
                    fontFamily: "var(--font-body)",
                    cursor: "default",
                    border: "1px solid var(--color-mid-gray)",
                  }}
                >
                  Please read and agree to the terms above to continue
                </div>
              )}
            </div>

            {/* Back link */}
            <div className="mt-5 text-center">
              <Link
                href={`/opt-in/${token}/step-2`}
                className="text-[13px] transition-colors"
                style={{
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                }}
              >
                Back to listing form
              </Link>
            </div>
          </div>

          {/* Footer note */}
          <p
            className="text-[12px] text-center mt-8 leading-relaxed"
            style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}
          >
            This agreement should be read together with SAIT&apos;s{" "}
            <a href="#" style={{ color: "var(--color-navy)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              Privacy Policy
            </a>{" "}
            and{" "}
            <a href="#" style={{ color: "var(--color-navy)", textDecoration: "underline", textUnderlineOffset: "2px" }}>
              POPIA Statement
            </a>
            .
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="py-6 mt-auto"
        style={{ background: "var(--color-navy)", fontFamily: "var(--font-body)" }}
      >
        <div className="max-w-3xl mx-auto px-6 text-center">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)" }}>
            &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT) &nbsp;&middot;&nbsp;{" "}
            <a href="mailto:membership@thesait.org.za" style={{ color: "rgba(255,255,255,0.35)", textDecoration: "underline" }}>
              membership@thesait.org.za
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
