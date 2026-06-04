"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Select } from "@/components/ui/select";
import { PractitionerCard } from "@/components/practitioner/practitioner-card";
import { Badge } from "@/components/ui/badge";
import { getMockPractitioners } from "@/lib/mock-data";
import { REGIONS, SPECIALISATION_CATEGORIES } from "@/types";
import { Search, X, MapPin, AlertCircle, Shield } from "lucide-react";

const ALL_SPECIALISATIONS = Object.entries(SPECIALISATION_CATEGORIES).flatMap(
  ([, specs]) => specs.map((spec) => ({ value: spec, label: spec }))
);

const CAMPAIGN_NAVY = "#0B2C5F";
const CAMPAIGN_GOLD = "#C8A45D";

export default function SearchPage() {
  const router = useRouter();

  const [region, setRegion] = useState("");
  const [selectedSpecs, setSelectedSpecs] = useState<string[]>([]);

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
    if (practitioners.length === 0 && hasActiveFilters && selectedSpecs.length > 0) {
      return "Try removing some specialisation filters";
    }
    return null;
  };

  const suggestion = getSuggestion();

  return (
    <div className="campaign-theme min-h-screen flex flex-col bg-[#F8F9FA]">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            <Logo width={120} />
            <nav className="flex items-center gap-6">
              <Link
                href="/search"
                className="text-sm font-semibold pb-0.5 border-b-2"
                style={{ color: CAMPAIGN_GOLD, borderColor: CAMPAIGN_GOLD }}
              >
                Find a Practitioner
              </Link>
              <Link
                href="/verify"
                className="text-sm font-medium transition-colors hover:opacity-80"
                style={{ color: CAMPAIGN_NAVY }}
              >
                Verify Practitioner
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero + Search — workplace banner + campaign content */}
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

        <div className="relative z-10 py-16 md:py-24">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
              <div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
                style={{ backgroundColor: "rgba(200, 164, 93, 0.2)" }}
              >
                <Shield className="w-4 h-4" style={{ color: CAMPAIGN_GOLD }} />
                <span className="text-sm font-medium" style={{ color: CAMPAIGN_GOLD }}>
                  Use a SAIT Practitioner
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
                Find a SAIT Practitioner.
                <br />
                <span style={{ color: CAMPAIGN_GOLD }}>Get it Right the First Time.</span>
              </h1>

              <p className="text-lg md:text-xl leading-relaxed text-white/90 max-w-2xl mx-auto">
                When it comes to tax, accuracy isn&apos;t optional. Search our directory of
                qualified, regulated, and trusted SAIT professionals.
              </p>
            </div>

            <div className="max-w-3xl mx-auto bg-white p-6 md:p-8 rounded-xl border border-gray-200 shadow-lg">
              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <Select
                  label="Region"
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
                  placeholder="All specialisations"
                  value={selectedSpecs[0] || ""}
                  onChange={(e) =>
                    setSelectedSpecs(e.target.value ? [e.target.value] : [])
                  }
                  options={ALL_SPECIALISATIONS}
                />
              </div>

              {hasActiveFilters && (
                <div className="mt-5 flex justify-center md:justify-end">
                  <button
                    type="button"
                    onClick={clearFilters}
                    className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:opacity-80"
                    style={{ color: CAMPAIGN_NAVY }}
                  >
                    <X className="w-4 h-4" />
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Results */}
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <span className="text-gray-600">
                <span className="font-semibold" style={{ color: CAMPAIGN_NAVY }}>
                  {practitioners.length}
                </span>{" "}
                practitioner{practitioners.length !== 1 ? "s" : ""} found
              </span>
              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="text-sm font-medium flex items-center gap-1 transition-colors hover:opacity-80"
                  style={{ color: CAMPAIGN_GOLD }}
                >
                  <X className="w-3 h-3" />
                  Clear filters
                </button>
              )}
            </div>
          </div>

          {hasActiveFilters && (
            <div className="flex flex-wrap gap-2 mb-8">
              {region && (
                <Badge variant="outline" className="gap-1 rounded-lg">
                  <MapPin className="w-3 h-3" />
                  {region}
                  <button type="button" onClick={() => setRegion("")} className="ml-1">
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
              {selectedSpecs.map((spec) => (
                <Badge key={spec} variant="outline" className="gap-1 rounded-lg">
                  {spec}
                  <button
                    type="button"
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

          {practitioners.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {practitioners.map((practitioner) => (
                <PractitionerCard
                  key={practitioner.id}
                  practitioner={practitioner}
                  onClick={() => router.push(`/practitioner/${practitioner.id}`)}
                  className="rounded-xl border-gray-200 hover:shadow-lg hover:border-[#C8A45D]/40 transition-all"
                />
              ))}
            </div>
          ) : (
            <div className="bg-white rounded-xl p-12 text-center border border-gray-200 shadow-sm">
              <div
                className="w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6"
                style={{ backgroundColor: "rgba(200, 164, 93, 0.15)" }}
              >
                <Search className="w-8 h-8" style={{ color: CAMPAIGN_GOLD }} />
              </div>
              <h3 className="text-xl font-bold mb-2" style={{ color: CAMPAIGN_NAVY }}>
                No results found
              </h3>
              <p className="text-gray-600 mb-6 max-w-md mx-auto">
                {hasActiveFilters
                  ? "We couldn't find any practitioners matching your criteria."
                  : "No practitioners have joined the directory yet."}
              </p>

              {suggestion && (
                <div
                  className="flex items-center justify-center gap-2 mb-6"
                  style={{ color: CAMPAIGN_GOLD }}
                >
                  <AlertCircle className="w-4 h-4" />
                  <span className="text-sm">{suggestion}</span>
                </div>
              )}

              {hasActiveFilters && (
                <button
                  type="button"
                  onClick={clearFilters}
                  className="px-8 py-3 rounded-lg font-medium transition-all hover:-translate-y-0.5 hover:shadow-lg"
                  style={{ backgroundColor: CAMPAIGN_NAVY, color: "white" }}
                >
                  Clear Filters
                </button>
              )}
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="text-white py-8 mt-auto" style={{ backgroundColor: CAMPAIGN_NAVY }}>
        <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/60">
            &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT)
          </p>
          <div className="flex gap-6 text-xs">
            <Link href="/privacy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-white/60 hover:text-white transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
