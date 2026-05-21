"use client";

import { useRef, useEffect, useState } from "react";
import { MapPin, Building2, FileCheck, Phone } from "lucide-react";

interface ShareImageData {
  fullName: string;
  region: string;
  regions?: string[];
  specialisation: string[];
  companyName: string;
  prNumber: string;
  showCompany: boolean;
  directoryUrl: string;
  phone?: string;
  showPhone?: boolean;
}

export function ShareImage({
  fullName,
  region,
  regions,
  specialisation,
  companyName,
  prNumber,
  showCompany,
  directoryUrl,
  phone,
  showPhone,
}: ShareImageData) {
  const initials = fullName.split(" ").map((n) => n[0]).join("").slice(0, 2).toUpperCase();

  const displayRegions = !regions || regions.length === 0 || regions.length === 9
    ? "All Regions"
    : regions.join(", ");

  return (
    <div
      style={{
        width: "1200px",
        height: "627px",
        background: "#E8E4DC",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Inter', 'Helvetica Neue', Helvetica, Arial, sans-serif",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient background dots */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "radial-gradient(circle, rgba(15,22,35,0.06) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      {/* Card — physical business card proportion 3.5:2 */}
      <div
        style={{
          width: "870px",
          height: "510px",
          background: "#FFFFFF",
          borderRadius: "16px",
          boxShadow:
            "0 32px 80px rgba(15,22,35,0.18), 0 8px 24px rgba(15,22,35,0.10), 0 2px 6px rgba(15,22,35,0.06)",
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Left accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "6px",
            background: "#E2BF29",
          }}
        />

        {/* Card inner layout */}
        <div style={{ display: "flex", flex: 1 }}>

          {/* ── Left section ── */}
          <div
            style={{
              flex: 1,
              padding: "48px 44px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRight: "1px solid #E8E4DC",
            }}
          >
            {/* Top: SAIT badge */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px" }}>
              <div
                style={{
                  width: "32px",
                  height: "32px",
                  borderRadius: "8px",
                  background: "#0F1623",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    fontSize: "10px",
                    fontWeight: 900,
                    color: "#E2BF29",
                    letterSpacing: "0.06em",
                  }}
                >
                  SAIT
                </span>
              </div>
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "#0F1623",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                Practitioner Directory
              </span>
            </div>

            {/* Middle: Avatar + Name */}
            <div style={{ display: "flex", alignItems: "center", gap: "22px", marginBottom: "24px" }}>
              <div
                style={{
                  width: "72px",
                  height: "72px",
                  borderRadius: "50%",
                  background: "#0F1623",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: 700,
                  fontSize: "26px",
                  color: "#E2BF29",
                  flexShrink: 0,
                  letterSpacing: "0.5px",
                }}
              >
                {initials}
              </div>
              <div>
                <div
                  style={{
                    fontSize: "30px",
                    fontWeight: 800,
                    color: "#0F1623",
                    lineHeight: 1.1,
                    letterSpacing: "-0.5px",
                    marginBottom: "8px",
                  }}
                >
                  {fullName}
                </div>
                <div
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "5px",
                    background: "rgba(226,191,41,0.12)",
                    border: "1px solid rgba(226,191,41,0.35)",
                    borderRadius: "999px",
                    padding: "3px 10px",
                  }}
                >
                  <FileCheck style={{ width: "11px", height: "11px", color: "#B8981A" }} />
                  <span
                    style={{
                      fontSize: "11px",
                      fontWeight: 700,
                      color: "#8A7214",
                      letterSpacing: "0.08em",
                      textTransform: "uppercase",
                    }}
                  >
                    SAIT Member
                  </span>
                </div>
              </div>
            </div>

            {/* Details */}
            <div style={{ display: "flex", flexDirection: "column", gap: "7px" }}>
              {showCompany && companyName && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Building2 style={{ width: "13px", height: "13px", color: "#9CA3AF" }} />
                  <span style={{ fontSize: "13.5px", color: "#4B5563" }}>{companyName}</span>
                </div>
              )}
              <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <MapPin style={{ width: "13px", height: "13px", color: "#9CA3AF" }} />
                <span style={{ fontSize: "13.5px", color: "#4B5563" }}>{displayRegions}</span>
              </div>
              {showPhone && phone && (
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <Phone style={{ width: "13px", height: "13px", color: "#9CA3AF" }} />
                  <span style={{ fontSize: "13.5px", color: "#4B5563" }}>{phone}</span>
                </div>
              )}
            </div>

            {/* Specialisation */}
            {specialisation.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "4px" }}>
                {specialisation.map((spec) => (
                  <span
                    key={spec}
                    style={{
                      fontSize: "11.5px",
                      fontWeight: 600,
                      color: "#4B5563",
                      background: "#F3F4F6",
                      borderRadius: "6px",
                      padding: "4px 10px",
                      letterSpacing: "0.01em",
                    }}
                  >
                    {spec}
                  </span>
                ))}
              </div>
            )}

            {/* Bottom: PR Number */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "auto" }}>
              <span
                style={{
                  fontSize: "10px",
                  fontWeight: 700,
                  color: "#9CA3AF",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                }}
              >
                PR No.
              </span>
              <span
                style={{
                  fontSize: "11px",
                  fontFamily: "Courier New, monospace",
                  color: "#6B7280",
                  letterSpacing: "0.08em",
                }}
              >
                {prNumber}
              </span>
            </div>
          </div>

          {/* ── Right section: CTA ── */}
          <div
            style={{
              width: "240px",
              background: "#0F1623",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "32px 28px",
              gap: "0",
            }}
          >
            {/* Logo */}
            <div
              style={{
                width: "56px",
                height: "56px",
                borderRadius: "12px",
                background: "#E2BF29",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: "20px",
              }}
            >
              <span
                style={{
                  fontSize: "11px",
                  fontWeight: 900,
                  color: "#0F1623",
                  letterSpacing: "0.08em",
                }}
              >
                SAIT
              </span>
            </div>

            {/* Tagline */}
            <div
              style={{
                fontSize: "14px",
                fontWeight: 700,
                color: "#FFFFFF",
                textAlign: "center",
                lineHeight: 1.35,
                marginBottom: "6px",
              }}
            >
              Verify a<br />Tax Professional
            </div>

            {/* Divider */}
            <div
              style={{
                width: "32px",
                height: "2px",
                background: "#E2BF29",
                borderRadius: "1px",
                margin: "16px 0",
              }}
            />

            {/* URL */}
            <div
              style={{
                fontSize: "10.5px",
                color: "#E2BF29",
                fontWeight: 600,
                textAlign: "center",
                lineHeight: 1.5,
                letterSpacing: "0.02em",
                wordBreak: "break-all",
              }}
            >
              {directoryUrl.replace("https://", "")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
