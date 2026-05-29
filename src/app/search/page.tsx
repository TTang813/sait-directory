"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { PractitionerCard } from "@/components/practitioner/practitioner-card";
import { Badge } from "@/components/ui/badge";
import {
  getMockPractitioners,
} from "@/lib/mock-data";
import {
  REGIONS,
  SPECIALISATION_CATEGORIES,
} from "@/types";
import {
  Search,
  X,
  MapPin,
  SlidersHorizontal,
  AlertCircle,
} from "lucide-react";

// Flatten specialisations for dropdown
const ALL_SPECIALISATIONS = Object.entries(SPECIALISATION_CATEGORIES).flatMap(
  ([category, specs]) => specs.map((spec) => ({ value: spec, label: spec }))
);

export default function SearchPage() {
  const router = useRouter();

  const [region, setRegion] = useState("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const practitioners = useMemo(() => {
    return getMockPractitioners({
      regions: region ? [region] : undefined,
      specialisation: selectedSpecs.length > 0 ? selectedSpecs : undefined,
    });
  }, [region, selectedSpecs]);

  const clearFilters = () => {
    setRegion("");
    setSelectedSpecs([]);
  };

  const hasActiveFilters = region || selectedSpecs.length > 0;

  const getSuggestion = () => {
    if (practitioners.length === 0 && hasActiveFilters) {
      if (selectedSpecs.length > 0) {
        return "Try removing some specialisation filters";
      }
    }
    return null;
  };

  const suggestion = getSuggestion();

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-light-gray)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo width={120} />
            <nav className="flex items-center gap-4">
              <Link
                href="/search"
                className="text-sm font-semibold text-[var(--color-gold)] border-b-2 border-[var(--color-gold)] pb-1"
              >
                Find a Practitioner
              </Link>
              <Link
                href="/verify"
                className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
              >
                Verify Practitioner
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero + Search — P2-style background image with overlay */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/workplace-hero.png)" }}
          aria-hidden
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(31, 33, 46, 0.72) 0%, rgba(31, 33, 46, 0.82) 45%, rgba(31, 33, 46, 0.9) 100%)",
          }}
          aria-hidden
        />

        <div className="relative z-10 py-14 md:py-20 lg:py-24">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1
              className="text-white mb-4 font-bold tracking-tight"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(2rem, 5vw, 3rem)",
                lineHeight: 1.15,
              }}
            >
              Find a Practitioner
            </h1>
            <p
              className="text-white/80 mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(0.95rem, 2vw, 1.125rem)",
              }}
            >
              Search our directory of verified SAIT-certified tax professionals
            </p>

            <div className="text-left p-6 md:p-8 rounded-[var(--radius-lg)] border border-white/12 bg-white/[0.06] backdrop-blur-sm shadow-[0_8px_32px_rgba(0,0,0,0.2)]">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Select
                  label="Region"
                  dark
                  placeholder="All regions"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  options={[
                    { value: "", label: "All regions" },
                    ...REGIONS.map((r) => ({ value: r, label: r })),
                  ]}
                />

                <Select
                  label="Specialisation"
                  dark
                  placeholder="Filter by specialisation"
                  value={selectedSpecs[0] || ""}
                  onChange={(e) =>
                    setSelectedSpecs(e.target.value ? [e.target.value] : [])
                  }
                  options={ALL_SPECIALISATIONS}
                />
              </div>

              {hasActiveFilters && (
                <div className="mt-5 flex justify-center md:justify-end">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={clearFilters}
                    className="text-white/70 hover:text-white hover:bg-white/10"
                  >
                    <X className="w-4 h-4" />
                    Clear all filters
                  </Button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <main className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Results Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <span className="text-[var(--color-text-secondary)]">
                {practitioners.length} practitioner
                {practitioners.length !== 1 ? "s" : ""} found
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-sm text-[var(--color-gold)] hover:underline flex items-center gap-1"
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {/* Active Filters */}
          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-6">
              {region && (
                <Badge variant="outline" className="gap-1">
                  <MapPin className="w-3 h-3" />
                  {region}
                  <button onClick={() => setRegion("")} className="ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedSpecs.map((spec) => (
                <Badge key={spec} variant="outline" className="gap-1">
                  {spec}
                  <button
                    onClick={() =>
                      setSelectedSpecs((prev) => prev.filter((s) => s !== spec))
                    }
                    className="ml-1"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
            </div>
          )}

          {/* Results Grid */}
          {practitioners.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practitioners.map((practitioner) => (
                <PractitionerCard
                  key={practitioner.id}
                  practitioner={practitioner}
                  onClick={() =>
                    router.push(`/practitioner/${practitioner.id}`)
                  }
                />
              ))}
            </div>
          ) : (
            /* Empty State */
            <div className="bg-white rounded-[var(--radius-lg)] p-12 text-center shadow-[var(--shadow-sm)]">
              <div className="w-16 h-16 rounded-full bg-[var(--color-light-gray)] flex items-center justify-center mx-auto mb-6">
                <Search className="w-8 h-8 text-[var(--color-text-secondary)]" />
              </div>
              <h3 className="text-h3 text-[var(--color-navy)] mb-2">
                No results found
              </h3>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                {hasActiveFilters
                  ? "We couldn't find any practitioners matching your criteria."
                  : "No practitioners have joined the directory yet."}
              </p>

              {suggestion && (
                <div className="flex items-center justify-center gap-2 text-[var(--color-gold)] mb-6">
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{suggestion}</span>
                </div>
              )}

              {hasActiveFilters && (
                <Button variant="secondary" onClick={clearFilters}>
                  Clear Filters
                </Button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT)
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-white/50 hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/50 hover:text-white">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
