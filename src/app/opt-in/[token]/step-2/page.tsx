"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { REGIONS, SPECIALISATION_CATEGORIES } from "@/types";
import { X, ChevronDown, Check } from "lucide-react";

const ALL_SPECIALISATIONS = Object.entries(SPECIALISATION_CATEGORIES).flatMap(
  ([category, specs]) =>
    specs.map((spec) => ({ value: spec, label: spec, category }))
);

const DB_VALUES = {
  fullName: "Jane Smith",
  regions: ["Gauteng"],
  specialisation: [],
  companyName: "Smith Tax Consultants",
  prNumber: "PR-2024-12345",
  phone: "+27 82 123 4567",
};

function MultiSelect({
  values,
  onChange,
}: {
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const [open, setOpen] = useState(false);
  const [search, setSearch] = useState("");

  const filtered = ALL_SPECIALISATIONS.filter(
    (s) =>
      s.label.toLowerCase().includes(search.toLowerCase()) ||
      s.category.toLowerCase().includes(search.toLowerCase())
  );

  const toggle = (val: string) => {
    if (values.includes(val)) {
      onChange(values.filter((v) => v !== val));
    } else {
      onChange([...values, val]);
    }
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 px-4 bg-white border border-[var(--color-mid-gray)] text-[15px] transition-all focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(226,191,41,0.12)]"
        style={{
          borderRadius: "var(--radius-md)",
          fontFamily: "var(--font-body)",
          color: values.length ? "var(--color-navy)" : "var(--color-text-secondary)",
        }}
      >
        <div className="flex flex-wrap gap-2 flex-1 min-w-0">
          {values.length === 0 ? (
            <span>Select specialisations</span>
          ) : (
            values.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1.5"
                style={{
                  background: "rgba(226,191,41,0.1)",
                  color: "var(--color-navy)",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid rgba(226,191,41,0.3)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {v}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); toggle(v); }}
                  onKeyDown={(e) => e.key === "Enter" && toggle(v)}
                  className="hover:opacity-70 cursor-pointer"
                  style={{ lineHeight: 1 }}
                >
                  <X style={{ width: "12px", height: "12px" }} />
                </span>
              </span>
            ))
          )}
        </div>
        <ChevronDown
          style={{
            width: "16px",
            height: "16px",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
            marginLeft: "8px",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {open && (
        <div
          className="absolute z-50 mt-1 w-full bg-white border border-[var(--color-mid-gray)]"
          style={{
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-lg)",
            maxHeight: "260px",
            overflowY: "auto",
          }}
        >
          <div
            className="sticky top-0 bg-white p-2"
            style={{ borderBottom: "1px solid var(--color-light-gray)" }}
          >
            <input
              type="text"
              placeholder="Search specialisations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-sm px-3 py-2"
              style={{
                border: "1px solid var(--color-light-gray)",
                borderRadius: "var(--radius-sm)",
                fontFamily: "var(--font-body)",
                color: "var(--color-navy)",
                outline: "none",
              }}
              onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
              onBlur={(e) => (e.target.style.borderColor = "var(--color-light-gray)")}
              autoFocus
            />
          </div>

          {Object.entries(
            filtered.reduce<Record<string, typeof ALL_SPECIALISATIONS>>((acc, item) => {
              if (!acc[item.category]) acc[item.category] = [];
              acc[item.category].push(item);
              return acc;
            }, {})
          ).map(([category, specs]) => (
            <div key={category}>
              <div
                className="px-4 py-2 text-[10px] font-bold uppercase tracking-wider"
                style={{
                  background: "var(--color-light-gray)",
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  position: "sticky",
                  top: "57px",
                }}
              >
                {category}
              </div>
              {specs.map((spec) => {
                const selected = values.includes(spec.value);
                return (
                  <button
                    key={spec.value}
                    type="button"
                    onClick={() => toggle(spec.value)}
                    className="w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors"
                    style={{
                      fontFamily: "var(--font-body)",
                      color: "var(--color-navy)",
                      background: selected ? "rgba(226,191,41,0.06)" : "transparent",
                      borderBottom: "1px solid var(--color-light-gray)",
                    }}
                    onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-light-gray)")}
                    onMouseLeave={(e) => (e.currentTarget.style.background = selected ? "rgba(226,191,41,0.06)" : "transparent")}
                  >
                    <span>{spec.label}</span>
                    {selected && (
                      <Check style={{ width: "14px", height: "14px", color: "var(--color-gold)" }} />
                    )}
                  </button>
                );
              })}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-4 py-8 text-sm text-center" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
              No results found
            </div>
          )}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}

function MultiSelectRegions({
  values,
  onChange,
}: {
  values: string[];
  onChange: (v: string[]) => void;
}) {
  const [open, setOpen] = useState(false);

  const toggle = (val: string) => {
    const newValues = values.includes(val)
      ? values.filter((v) => v !== val)
      : [...values, val];
    onChange(newValues);
  };

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-3 px-4 bg-white border border-[var(--color-mid-gray)] text-[15px] transition-all focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(226,191,41,0.12)]"
        style={{
          borderRadius: "var(--radius-md)",
          fontFamily: "var(--font-body)",
          color: values.length === 0 ? "var(--color-text-secondary)" : "var(--color-navy)",
        }}
      >
        <div className="flex flex-wrap gap-2 flex-1 min-w-0">
          {values.length === 0 ? (
            <span>Select regions</span>
          ) : (
            values.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1.5"
                style={{
                  background: "rgba(226,191,41,0.1)",
                  color: "var(--color-navy)",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "4px 10px",
                  borderRadius: "var(--radius-pill)",
                  border: "1px solid rgba(226,191,41,0.3)",
                  fontFamily: "var(--font-body)",
                }}
              >
                {v}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={(e) => { e.stopPropagation(); toggle(v); }}
                  onKeyDown={(e) => e.key === "Enter" && toggle(v)}
                  className="hover:opacity-70 cursor-pointer"
                  style={{ lineHeight: 1 }}
                >
                  <X style={{ width: "12px", height: "12px" }} />
                </span>
              </span>
            ))
          )}
        </div>
        <ChevronDown
          style={{
            width: "16px",
            height: "16px",
            color: "var(--color-text-secondary)",
            flexShrink: 0,
            marginLeft: "8px",
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        />
      </button>

      {open && (
        <div
          className="absolute z-50 mt-1 w-full bg-white border border-[var(--color-mid-gray)]"
          style={{
            borderRadius: "var(--radius-md)",
            boxShadow: "var(--shadow-lg)",
            maxHeight: "300px",
            overflowY: "auto",
          }}
        >
          <div
            className="px-4 py-2.5 text-[11px] font-bold uppercase tracking-wider"
            style={{
              background: "var(--color-light-gray)",
              color: "var(--color-text-secondary)",
              fontFamily: "var(--font-body)",
              position: "sticky",
              top: "0",
            }}
          >
            Regions
          </div>
          <button
            type="button"
            onClick={() => onChange([])}
            className="w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors"
            style={{
              fontFamily: "var(--font-body)",
              color: values.length === 0 || values.length === REGIONS.length ? "var(--color-navy)" : "var(--color-text-secondary)",
              fontWeight: values.length === 0 || values.length === REGIONS.length ? 600 : 400,
              background: values.length === 0 || values.length === REGIONS.length ? "rgba(226,191,41,0.06)" : "transparent",
              borderBottom: "1px solid var(--color-light-gray)",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-light-gray)")}
            onMouseLeave={(e) => (e.currentTarget.style.background = values.length === 0 || values.length === REGIONS.length ? "rgba(226,191,41,0.06)" : "transparent")}
          >
            <span>All Regions</span>
            {(values.length === 0 || values.length === REGIONS.length) && (
              <Check style={{ width: "14px", height: "14px", color: "var(--color-gold)" }} />
            )}
          </button>
          {REGIONS.map((region) => {
            const selected = values.includes(region);
            return (
              <button
                key={region}
                type="button"
                onClick={() => toggle(region)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm text-left transition-colors"
                style={{
                  fontFamily: "var(--font-body)",
                  color: "var(--color-navy)",
                  background: selected ? "rgba(226,191,41,0.06)" : "transparent",
                  borderBottom: "1px solid var(--color-light-gray)",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.background = "var(--color-light-gray)")}
                onMouseLeave={(e) => (e.currentTarget.style.background = selected ? "rgba(226,191,41,0.06)" : "transparent")}
              >
                <span>{region}</span>
                {selected && (
                  <Check style={{ width: "14px", height: "14px", color: "var(--color-gold)" }} />
                )}
              </button>
            );
          })}
        </div>
      )}

      {open && (
        <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
      )}
    </div>
  );
}

function Toggle({ checked, onChange }: { checked: boolean; onChange: (v: boolean) => void }) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      style={{
        position: "relative",
        display: "inline-flex",
        height: "28px",
        width: "48px",
        borderRadius: "var(--radius-pill)",
        background: checked ? "var(--color-gold)" : "var(--color-mid-gray)",
        border: "none",
        cursor: "pointer",
        transition: "background 0.2s",
        flexShrink: 0,
      }}
    >
      <span
        style={{
          position: "absolute",
          top: "3px",
          left: checked ? "23px" : "3px",
          width: "22px",
          height: "22px",
          borderRadius: "50%",
          background: "white",
          boxShadow: "0 1px 4px rgba(0,0,0,0.15)",
          transition: "left 0.2s",
        }}
      />
    </button>
  );
}

export default function OptInStep2Page({ params }: { params: Promise<{ token: string }> }) {
  const { token } = use(params);
  const router = useRouter();

  const [formData, setFormData] = useState<{
    fullName: string;
    regions: string[];
    specialisation: string[];
    companyName: string;
    phone: string;
  }>({
    fullName: DB_VALUES.fullName,
    regions: [...DB_VALUES.regions],
    specialisation: [...DB_VALUES.specialisation],
    companyName: DB_VALUES.companyName,
    phone: DB_VALUES.phone,
  });

  const [showCompanyName, setShowCompanyName] = useState(true);
  const [showPhone, setShowPhone] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Save form data to sessionStorage for Step 3 to read
    sessionStorage.setItem("optInData", JSON.stringify({
      fullName: formData.fullName,
      regions: formData.regions,
      specialisation: formData.specialisation,
      companyName: formData.companyName,
      showCompany: showCompanyName,
      phone: formData.phone,
      showPhone,
      prNumber: DB_VALUES.prNumber,
    }));
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push(`/opt-in/${token}/success`);
  };

  const displayRegions = formData.regions.length === 0 || formData.regions.length === REGIONS.length
    ? "All Regions"
    : formData.regions.join(", ");

  return (
    <div className="min-h-screen flex flex-col" style={{ background: "var(--color-off-white)" }}>
      {/* Header */}
      <header style={{ background: "white", borderBottom: "1px solid var(--color-light-gray)" }}>
        <div className="max-w-xl mx-auto px-6 py-5">
          <Logo width={100} />
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="max-w-xl mx-auto px-6">

          {/* Step indicator */}
          <div className="flex items-center justify-center gap-2 mb-10">
            {[
              { n: 1, label: "Verify", done: true },
              { n: 2, label: "Details", active: true },
              { n: 3, label: "Done" },
            ].map((step, i) => (
              <div key={step.label} className="flex items-center gap-2">
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "28px",
                    height: "28px",
                    borderRadius: "50%",
                    fontSize: "12px",
                    fontWeight: 700,
                    fontFamily: "var(--font-body)",
                    background: step.active || step.done ? "var(--color-gold)" : "var(--color-light-gray)",
                    color: step.active || step.done ? "var(--color-navy)" : "var(--color-text-secondary)",
                    border: "none",
                  }}
                >
                  {(step.done) ? "✓" : step.n}
                </div>
                <span
                  style={{
                    fontSize: "12px",
                    fontWeight: step.active ? 600 : 400,
                    fontFamily: "var(--font-body)",
                    color: step.active || step.done ? "var(--color-navy)" : "var(--color-text-secondary)",
                  }}
                >
                  {step.label}
                </span>
                {i < 2 && (
                  <div
                    style={{
                      width: "32px",
                      height: "1px",
                      background: step.done ? "var(--color-gold)" : "var(--color-light-gray)",
                      margin: "0 4px",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Form card */}
          <div
            className="bg-white"
            style={{
              borderRadius: "var(--radius-lg)",
              boxShadow: "var(--shadow-md)",
              border: "1px solid var(--color-light-gray)",
              padding: "40px",
            }}
          >
            {/* Card label */}
            <div
              className="inline-block text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-5"
              style={{
                background: "rgba(226,191,41,0.1)",
                color: "var(--color-gold)",
                fontFamily: "var(--font-body)",
                border: "1px solid rgba(226,191,41,0.2)",
              }}
            >
              Directory Opt-in
            </div>

            {/* Title */}
            <h1
              className="mb-2"
              style={{
                fontFamily: "var(--font-display), Georgia, serif",
                fontSize: "clamp(22px, 3vw, 30px)",
                fontWeight: 700,
                color: "var(--color-navy)",
                lineHeight: 1.15,
                letterSpacing: "-0.01em",
              }}
            >
              Review Your Information
            </h1>
            <p
              className="mb-8"
              style={{
                fontSize: "14px",
                color: "var(--color-text-secondary)",
                fontFamily: "var(--font-body)",
                lineHeight: 1.6,
              }}
            >
              Your details are pre-filled from SAIT records. Update anything that needs changing.
            </p>

            <form onSubmit={handleSubmit} style={{ fontFamily: "var(--font-body)" }}>
              {/* Name */}
              <div className="mb-5">
                <label
                  className="block text-[13px] font-semibold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  Full Name
                </label>
                <input
                  type="text"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1.5px solid var(--color-mid-gray)",
                    fontSize: "15px",
                    fontFamily: "var(--font-body)",
                    color: "var(--color-navy)",
                    background: "white",
                    outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-mid-gray)")}
                />
              </div>

              {/* PR Number */}
              <div className="mb-5">
                <label
                  className="block text-[13px] font-semibold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  PR Number
                </label>
                <input
                  type="text"
                  value={DB_VALUES.prNumber}
                  readOnly
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1.5px solid var(--color-light-gray)",
                    fontSize: "15px",
                    fontFamily: "var(--font-body)",
                    color: "var(--color-text-secondary)",
                    background: "var(--color-light-gray)",
                    opacity: 0.7,
                    cursor: "not-allowed",
                  }}
                />
                <p className="text-[11px] mt-1.5" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                  Contact SAIT to correct this field.
                </p>
              </div>

              {/* Regions */}
              <div className="mb-5">
                <label
                  className="block text-[13px] font-semibold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  Regions
                </label>
                <MultiSelectRegions
                  values={formData.regions}
                  onChange={(v) => setFormData({ ...formData, regions: v })}
                />
                <p className="text-[12px] mt-2" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                  Select one or more regions, or leave empty for All Regions
                </p>
              </div>

              {/* Specialisations */}
              <div className="mb-5">
                <label
                  className="block text-[13px] font-semibold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  Areas of Specialisation
                </label>
                <MultiSelect
                  values={formData.specialisation}
                  onChange={(v) => setFormData({ ...formData, specialisation: v })}
                />
                <p className="text-[12px] mt-2" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                  {formData.specialisation.length === 0
                    ? "Select at least one specialisation"
                    : `${formData.specialisation.length} selected`}
                </p>
              </div>

              {/* Company name */}
              <div
                className="mb-7 p-5"
                style={{
                  background: "var(--color-light-gray)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid transparent",
                }}
              >
                <label
                  className="block text-[13px] font-semibold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  Company Name
                </label>
                <input
                  type="text"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  placeholder="Leave blank if not applicable"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1.5px solid var(--color-mid-gray)",
                    fontSize: "15px",
                    fontFamily: "var(--font-body)",
                    color: "var(--color-navy)",
                    background: "white",
                    outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-mid-gray)")}
                />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[13px]" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                    Show in directory listing
                  </span>
                  <Toggle checked={showCompanyName} onChange={setShowCompanyName} />
                </div>
              </div>

              {/* Phone number */}
              <div
                className="mb-7 p-5"
                style={{
                  background: "var(--color-light-gray)",
                  borderRadius: "var(--radius-md)",
                  border: "1px solid transparent",
                }}
              >
                <label
                  className="block text-[13px] font-semibold mb-2"
                  style={{ color: "var(--color-navy)", fontFamily: "var(--font-body)" }}
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="e.g. +27 82 123 4567"
                  style={{
                    width: "100%",
                    padding: "12px 16px",
                    borderRadius: "var(--radius-md)",
                    border: "1.5px solid var(--color-mid-gray)",
                    fontSize: "15px",
                    fontFamily: "var(--font-body)",
                    color: "var(--color-navy)",
                    background: "white",
                    outline: "none",
                    transition: "border-color 0.15s",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "var(--color-gold)")}
                  onBlur={(e) => (e.target.style.borderColor = "var(--color-mid-gray)")}
                />
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-[13px]" style={{ color: "var(--color-text-secondary)", fontFamily: "var(--font-body)" }}>
                    Show in directory listing
                  </span>
                  <Toggle checked={showPhone} onChange={setShowPhone} />
                </div>
              </div>

              {/* Agreement checkbox */}
              <div
                className="mb-6"
                style={{ fontFamily: "var(--font-body)" }}
              >
                <div
                  onClick={() => setAgreed(!agreed)}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "14px",
                    padding: "18px",
                    borderRadius: "var(--radius-md)",
                    border: `2px solid ${agreed ? "var(--color-gold)" : "var(--color-mid-gray)"}`,
                    background: agreed ? "rgba(226,191,41,0.04)" : "rgba(242,242,240,0.5)",
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  <div
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "6px",
                      border: `2px solid ${agreed ? "var(--color-gold)" : "var(--color-mid-gray)"}`,
                      background: agreed ? "var(--color-gold)" : "white",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      marginTop: "1px",
                      transition: "all 0.15s",
                    }}
                  >
                    {agreed && (
                      <svg width="11" height="11" viewBox="0 0 12 12" fill="none">
                        <path d="M2 6l3 3 5-5" stroke="#1F212E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    )}
                  </div>

                  <div className="flex-1">
                    <p
                      className="mb-1.5"
                      style={{
                        fontSize: "14px",
                        fontWeight: 600,
                        color: "var(--color-navy)",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.4,
                      }}
                    >
                      I have read and agree to the{" "}
                      <a
                        href={`/opt-in/${token}/agreement`}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          color: "var(--color-gold)",
                          textDecoration: "underline",
                          textUnderlineOffset: "2px",
                          fontWeight: 700,
                        }}
                        onClick={(e) => e.stopPropagation()}
                      >
                        Directory Listing Agreement &amp; Privacy Notice
                      </a>
                    </p>
                    <p
                      style={{
                        fontSize: "13px",
                        color: "var(--color-text-secondary)",
                        fontFamily: "var(--font-body)",
                        lineHeight: 1.55,
                      }}
                    >
                      By checking this box, you consent to having your information displayed
                      in the SAIT Practitioner Directory. You may withdraw consent at any time.
                    </p>
                  </div>
                </div>
              </div>

              {/* Submit button */}
              <div style={{ fontFamily: "var(--font-body)" }}>
                {agreed ? (
                  <Button
                    size="lg"
                    className="w-full"
                    isLoading={isSubmitting}
                    type="submit"
                  >
                    Confirm &amp; Join Directory
                  </Button>
                ) : (
                  <div
                    className="w-full text-center py-4 text-[14px] font-medium"
                    style={{
                      background: "var(--color-light-gray)",
                      color: "var(--color-text-secondary)",
                      borderRadius: "var(--radius-sm)",
                      border: "1px solid var(--color-mid-gray)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    Read the Agreement Above to Continue
                  </div>
                )}

                {!agreed && (
                  <p
                    className="text-center mt-3"
                    style={{
                      fontSize: "12px",
                      color: "var(--color-text-secondary)",
                      fontFamily: "var(--font-body)",
                    }}
                  >
                    You must agree to the directory listing agreement before submitting
                  </p>
                )}
              </div>

              {/* Footer note */}
              <p
                className="text-center mt-5"
                style={{
                  fontSize: "12px",
                  color: "var(--color-text-secondary)",
                  fontFamily: "var(--font-body)",
                  lineHeight: 1.6,
                }}
              >
                Your name, region(s), specialisations, and PR number will always be shown.
                You can update your information at any time.
              </p>
            </form>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "var(--color-navy)", padding: "24px 0", marginTop: "auto" }}>
        <div className="max-w-xl mx-auto px-6 text-center">
          <p className="text-[12px]" style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-body)" }}>
            &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT)
          </p>
        </div>
      </footer>
    </div>
  );
}
