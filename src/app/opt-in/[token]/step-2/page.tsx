"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { REGIONS, SPECIALISATION_CATEGORIES } from "@/types";
import { ChevronRight, Building2, X, ChevronDown, Check } from "lucide-react";

const ALL_SPECIALISATIONS = Object.entries(SPECIALISATION_CATEGORIES).flatMap(
  ([category, specs]) =>
    specs.map((spec) => ({ value: spec, label: spec, category }))
);

const DB_VALUES = {
  fullName: "Jane Smith",
  region: "Gauteng",
  specialisation: ["Corporate Income Tax", "VAT"],
  companyName: "Smith Tax Consultants",
  prNumber: "PR-2024-12345",
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
      {/* Trigger */}
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-2.5 pl-3.5 pr-3.5 bg-white border-[1.5px] border-[var(--color-mid-gray)] rounded-[var(--radius-sm)] text-[15px] transition-all focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(226,191,41,0.15)]"
      >
        <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
          {values.length === 0 ? (
            <span className="text-[var(--color-text-secondary)]">Select specialisations</span>
          ) : (
            values.map((v) => (
              <span
                key={v}
                className="inline-flex items-center gap-1 bg-[var(--color-gold)]/20 text-[var(--color-navy)] text-xs font-semibold px-2 py-0.5 rounded-full"
              >
                {v}
                <span
                  role="button"
                  tabIndex={0}
                  onClick={() => toggle(v)}
                  onKeyDown={(e) => e.key === "Enter" && toggle(v)}
                  className="hover:text-[var(--color-error)] cursor-pointer"
                >
                  <X className="w-2.5 h-2.5" />
                </span>
              </span>
            ))
          )}
        </div>
        <ChevronDown className="w-4 h-4 text-[var(--color-text-secondary)] flex-shrink-0 ml-2" />
      </button>

      {/* Count badge on trigger */}
      {values.length > 0 && (
        <span className="absolute -top-2 -right-2 bg-[var(--color-navy)] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full min-w-[20px] text-center">
          {values.length}
        </span>
      )}

      {/* Dropdown */}
      {open && (
        <div className="absolute z-50 mt-1 w-full bg-white border border-[var(--color-mid-gray)] rounded-[var(--radius-md)] shadow-[var(--shadow-lg)] max-h-64 overflow-y-auto">
          {/* Search */}
          <div className="p-2 border-b border-[var(--color-light-gray)] sticky top-0 bg-white">
            <input
              type="text"
              placeholder="Search specialisations..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-sm px-3 py-2 border border-[var(--color-light-gray)] rounded-[var(--radius-sm)] focus:outline-none focus:border-[var(--color-gold)]"
              autoFocus
            />
          </div>

          {/* Options grouped by category */}
          {Object.entries(
            filtered.reduce<Record<string, typeof ALL_SPECIALISATIONS>>((acc, item) => {
              if (!acc[item.category]) acc[item.category] = [];
              acc[item.category].push(item);
              return acc;
            }, {})
          ).map(([category, specs]) => (
            <div key={category}>
              <div className="px-3 py-1.5 text-[10px] font-bold text-[var(--color-text-secondary)] uppercase tracking-wider bg-[var(--color-off-white)] sticky top-[52px]">
                {category}
              </div>
              {specs.map((spec) => {
                const selected = values.includes(spec.value);
                return (
                  <button
                    key={spec.value}
                    type="button"
                    onClick={() => toggle(spec.value)}
                    className="w-full flex items-center justify-between px-3 py-2.5 text-sm text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] transition-colors text-left"
                  >
                    <span>{spec.label}</span>
                    {selected && <Check className="w-4 h-4 text-[var(--color-gold)]" />}
                  </button>
                );
              })}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="px-3 py-6 text-sm text-[var(--color-text-secondary)] text-center">
              No results found
            </div>
          )}
        </div>
      )}

      {/* Click-outside to close */}
      {open && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setOpen(false)}
        />
      )}
    </div>
  );
}

function Toggle({
  checked,
  onChange,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <button
      type="button"
      role="switch"
      aria-checked={checked}
      onClick={() => onChange(!checked)}
      className={`
        relative inline-flex h-5 w-9 items-center rounded-full transition-colors
        ${checked ? "bg-[var(--color-gold)]" : "bg-[var(--color-mid-gray)]"}
      `}
    >
      <span
        className={`
          inline-block h-3.5 w-3.5 transform rounded-full bg-white transition-transform
          ${checked ? "translate-x-5" : "translate-x-0.5"}
        `}
      />
    </button>
  );
}

export default function OptInStep2Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = use(params);
  const router = useRouter();

  const [formData, setFormData] = useState({
    fullName: DB_VALUES.fullName,
    region: DB_VALUES.region,
    specialisation: [...DB_VALUES.specialisation],
    companyName: DB_VALUES.companyName,
  });

  const [showCompanyName, setShowCompanyName] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    router.push(`/opt-in/${token}/success`);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      <header className="bg-white border-b border-[var(--color-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Logo width={120} />
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="max-w-lg mx-auto px-4">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center text-xs font-bold">
                1
              </div>
              <span className="text-xs font-medium text-[var(--color-navy)]">Verify</span>
            </div>
            <div className="w-8 h-px bg-[var(--color-gold)]" />
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center text-xs font-bold">
                2
              </div>
              <span className="text-xs font-medium text-[var(--color-navy)]">Details</span>
            </div>
            <div className="w-8 h-px bg-[var(--color-mid-gray)]" />
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-7 h-7 rounded-full bg-[var(--color-light-gray)] text-[var(--color-text-secondary)] flex items-center justify-center text-xs font-bold">
                3
              </div>
              <span className="text-xs text-[var(--color-text-secondary)]">Done</span>
            </div>
          </div>

          <Card className="p-8">
            <div className="flex items-center gap-2 mb-1">
              <Building2 className="w-4 h-4 text-[var(--color-gold)]" />
              <span className="text-xs font-semibold text-[var(--color-gold)] uppercase tracking-wider">
                Directory Opt-in
              </span>
            </div>
            <h1 className="text-h2 text-[var(--color-navy)] mb-1">
              Review Your Information
            </h1>
            <p className="text-sm text-[var(--color-text-secondary)] mb-8">
              Your details are pre-filled from SAIT records. Update anything that needs changing.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Name */}
              <Input
                label="Full Name"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
                required
              />

              {/* PR Number — read only */}
              <Input
                label="PR Number"
                value={DB_VALUES.prNumber}
                disabled
                className="opacity-60"
                hint="Contact SAIT to correct this field."
              />

              {/* Region */}
              <Select
                label="Region"
                value={formData.region}
                onChange={(e) =>
                  setFormData({ ...formData, region: e.target.value })
                }
                options={REGIONS.map((r) => ({ value: r, label: r }))}
                required
              />

              {/* Specialisations — multi-select with chips */}
              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-medium text-[var(--color-navy)]">
                  Specialisations
                </label>
                <MultiSelect
                  values={formData.specialisation}
                  onChange={(v) =>
                    setFormData({ ...formData, specialisation: v })
                  }
                />
                <p className="text-xs text-[var(--color-text-secondary)]">
                  {formData.specialisation.length === 0
                    ? "Select at least one specialisation"
                    : `${formData.specialisation.length} selected`}
                </p>
              </div>

              {/* Company Name with display toggle */}
              <div className="p-4 bg-[var(--color-light-gray)] rounded-[var(--radius-md)]">
                <Input
                  label="Company Name"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  leftIcon={<Building2 className="w-4 h-4" />}
                  placeholder="Leave blank if not applicable"
                />
                <div className="mt-3 flex items-center justify-between">
                  <p className="text-xs text-[var(--color-text-secondary)]">
                    Show in directory listing
                  </p>
                  <Toggle
                    checked={showCompanyName}
                    onChange={setShowCompanyName}
                  />
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full"
                isLoading={isSubmitting}
              >
                Confirm &amp; Join Directory
                <ChevronRight className="w-4 h-4" />
              </Button>

              <p className="text-xs text-[var(--color-text-secondary)] text-center">
                Your name, region, specialisations, and PR number will always be shown. You can update your information at any time.
              </p>
            </form>
          </Card>
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
