"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import { useReactToPrint } from "react-to-print";
import Image from "next/image";
import { Logo } from "@/components/ui/logo";
import { Card } from "@/components/ui/card";
import { CheckCircle, MapPin, Building2, FileCheck, Download, Phone } from "lucide-react";
import { ShareImage } from "@/components/share-image";
import { REGIONS } from "@/types";

function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function ListingCard({
  fullName,
  regions,
  specialisation,
  companyName,
  showCompany,
  phone,
  showPhone,
}: {
  fullName: string;
  regions?: string[];
  specialisation: string[];
  companyName: string;
  showCompany: boolean;
  phone?: string;
  showPhone?: boolean;
}) {
  const initials = fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  const displayRegions = !regions || regions.length === 0 || regions.length === REGIONS.length
    ? "All Regions"
    : regions.join(", ");

  return (
    <div
      style={{
        background: "#1F212E",
        borderRadius: "14px",
        overflow: "hidden",
        width: "100%",
        maxWidth: "360px",
        boxShadow: "0 20px 60px rgba(31,33,46,0.35), 0 4px 16px rgba(31,33,46,0.2)",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      }}
    >
      <div
        style={{
          height: "96px",
          background: "#1F212E",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(226,191,41,0.14) 1px, transparent 0)",
            backgroundSize: "18px 18px",
          }}
        />
        <Image
          src="/sait-logo.png"
          alt="SAIT"
          width={120}
          height={38}
          style={{
            objectFit: "contain",
            position: "relative",
            zIndex: 1,
            filter: "brightness(0) invert(1) opacity(0.88)",
          }}
        />
      </div>

      <div style={{ padding: "22px 24px" }}>
        {/* Header: Avatar + Name + Member */}
        <div style={{ display: "flex", alignItems: "flex-start", gap: "14px", marginBottom: "16px" }}>
          <div
            style={{
              width: "54px",
              height: "54px",
              borderRadius: "10px",
              background: "#E2BF29",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "20px",
              color: "#1F212E",
              flexShrink: 0,
            }}
          >
            {initials}
          </div>
          <div style={{ paddingTop: "4px" }}>
            <div style={{ fontSize: "18px", fontWeight: 700, color: "#ffffff", lineHeight: 1.2, marginBottom: "6px" }}>
              {fullName}
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "5px", fontSize: "11px", color: "rgba(226,191,41,0.85)" }}>
              <FileCheck style={{ width: "11px", height: "11px" }} />
              SAIT Member
            </div>
          </div>
        </div>

        {/* Info rows: all aligned with consistent icon+text, offset to match name alignment */}
        <div style={{ display: "flex", flexDirection: "column", gap: "6px", marginBottom: "14px", paddingLeft: "68px" }}>
          {showCompany && companyName && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Building2 style={{ width: "13px", height: "13px", color: "rgba(255,255,255,0.38)", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{companyName}</span>
            </div>
          )}
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <MapPin style={{ width: "13px", height: "13px", color: "rgba(255,255,255,0.38)", flexShrink: 0 }} />
            <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{displayRegions}</span>
          </div>
          {showPhone && phone && (
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Phone style={{ width: "13px", height: "13px", color: "rgba(255,255,255,0.38)", flexShrink: 0 }} />
              <span style={{ fontSize: "13px", color: "rgba(255,255,255,0.7)" }}>{phone}</span>
            </div>
          )}
        </div>

        {specialisation.length > 0 && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginBottom: "16px", paddingLeft: "68px" }}>
            {specialisation.map((spec) => (
              <span
                key={spec}
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  padding: "3px 10px",
                  borderRadius: "999px",
                  background: "rgba(226,191,41,0.12)",
                  color: "#E2BF29",
                  border: "1px solid rgba(226,191,41,0.25)",
                }}
              >
                {spec}
              </span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "8px", paddingLeft: "68px" }} />
      </div>
    </div>
  );
}

export default function OptInSuccessPage({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const router = useRouter();
  const shareImageRef = useRef<HTMLDivElement>(null);

  // Read form data from sessionStorage (set by Step 2)
  const [formData, setFormData] = useState<{
    fullName: string;
    displayName?: string;
    operatingRegions?: string[];
    regions: string[];
    towns?: string[];
    specialisation: string[];
    companyName: string;
    showCompany: boolean;
    phone: string;
    email?: string;
    showPRInDirectory?: boolean;
    prNumber: string;
  } | null>(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("optInData");
    if (saved) {
      setFormData(JSON.parse(saved));
    }
  }, []);

  // Fallback defaults if sessionStorage is empty (direct URL access)
  const mockData = formData || {
    fullName: "Jane Smith",
    displayName: "Jane Smith",
    regions: ["Gauteng"],
    operatingRegions: ["Gauteng"],
    towns: ["Johannesburg"],
    specialisation: [],
    companyName: "Smith Tax Consultants",
    showCompany: true,
    phone: "+27 82 123 4567",
    email: "jane.smith@example.com",
    showPRInDirectory: false,
    prNumber: "PR-2024-12345",
  };

  const cardName = mockData.displayName || mockData.fullName;
  const cardRegions = mockData.operatingRegions ?? mockData.regions;

  const fullShareUrl = `https://directory.thesait.org.za/practitioner/${mockData.prNumber}`;

  const [copied, setCopied] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleCopyLink = () => {
    navigator.clipboard.writeText(fullShareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleDownloadImage = async () => {
    setDownloading(true);
    const container = shareImageRef.current;
    if (!container) return;

    try {
      const html2canvas = (await import("html2canvas")).default;
      const canvas = await html2canvas(container, {
        scale: 2,
        useCORS: true,
        allowTaint: false,
        backgroundColor: "#0F1623",
        width: 1200,
        height: 627,
        logging: false,
      });

      const link = document.createElement("a");
      link.download = `${mockData.fullName.replace(/\s+/g, "-")}-SAIT-Directory.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    } catch (err) {
      console.error("Failed to generate image:", err);
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      {/* Hidden share image for canvas rendering */}
      <div
        ref={shareImageRef}
        style={{
          position: "fixed",
          left: "-9999px",
          top: 0,
          zIndex: -1,
        }}
      >
        <ShareImage
          fullName={cardName}
          regions={cardRegions}
          specialisation={mockData.specialisation}
          companyName={mockData.companyName}
          showCompany={mockData.showCompany}
          directoryUrl={fullShareUrl}
        />
      </div>

      <header className="bg-white border-b border-[var(--color-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Logo width={120} />
        </div>
      </header>

      <main className="flex-1 py-10 px-4">
        <div className="max-w-lg mx-auto">

          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-3 mb-10">
            {[
              { label: "Verify", done: true },
              { label: "Details", done: true },
              { label: "Done", active: true },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                    step.active
                      ? "bg-[var(--color-gold)] text-[var(--color-navy)]"
                      : step.done
                      ? "bg-[var(--color-gold)] text-[var(--color-navy)]"
                      : "bg-[var(--color-light-gray)] text-[var(--color-text-secondary)]"
                  }`}
                >
                  {(step.done || step.active) ? "✓" : i + 1}
                </div>
                <span className={`text-xs font-medium ${(step.done || step.active) ? "text-[var(--color-navy)]" : "text-[var(--color-text-secondary)]"}`}>
                  {step.label}
                </span>
                {i < 2 && <div className={`w-6 h-px ${step.done || step.active ? "bg-[var(--color-gold)]" : "bg-[var(--color-light-gray)]"}`} />}
              </div>
            ))}
          </div>

          {/* Confirmation */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-5 h-5 rounded-full bg-[var(--color-gold)]/15 flex items-center justify-center">
              <CheckCircle className="w-3.5 h-3.5 text-[var(--color-gold)]" />
            </div>
            <p className="text-sm font-medium text-[var(--color-navy)]">
              You&apos;re live in the Directory
            </p>
          </div>

          {/* Card as the focal point */}
          <div className="flex justify-center mb-8">
            <ListingCard
              fullName={cardName}
              regions={cardRegions}
              specialisation={mockData.specialisation}
              companyName={mockData.companyName}
              showCompany={mockData.showCompany}
            />
          </div>

          <div className="text-center">
            {/* Share actions */}
            <div className="flex flex-wrap items-center justify-center gap-2.5">
              <button
                onClick={handleDownloadImage}
                disabled={downloading}
                className="inline-flex items-center gap-2.5 px-5 py-2.5 bg-[var(--color-navy)] hover:bg-[#162035] disabled:opacity-60 text-white text-sm font-medium rounded-[var(--radius-sm)] transition-colors"
              >
                <Download className="w-4 h-4" />
                {downloading ? "Generating..." : "Download Share Image"}
              </button>

              <button
                onClick={handleCopyLink}
                className="inline-flex items-center gap-2 px-4 py-2.5 border border-[var(--color-mid-gray)] text-[var(--color-navy)] text-sm font-medium rounded-[var(--radius-sm)] hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors bg-white"
              >
                {copied ? "Copied!" : "Copy link"}
              </button>
            </div>

            <button
              onClick={() => router.push(`/opt-in/${token}/step-2`)}
              className="mt-4 text-xs text-[var(--color-text-secondary)] hover:text-[var(--color-gold)] transition-colors block mx-auto"
            >
              Manage listing
            </button>
          </div>
        </div>
      </main>

      <footer className="bg-[var(--color-navy)] text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT)
          </p>
        </div>
      </footer>
    </div>
  );
}
