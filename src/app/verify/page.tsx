"use client";

import { useState } from "react";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { verifyPractitioner } from "@/lib/mock-data";
import { CAMPAIGN_GOLD, CAMPAIGN_NAVY, CAMPAIGN_PAGE_BG } from "@/lib/campaign-theme";
import {
  Search,
  Shield,
  CheckCircle,
  XCircle,
  Info,
  ArrowRight,
} from "lucide-react";

type VerificationStatus = "idle" | "active" | "inactive" | "not_found";

export default function VerifyPage() {
  const [query, setQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [status, setStatus] = useState<VerificationStatus>("idle");
  const [result, setResult] = useState<{
    fullName: string;
    prNumber: string;
    isActive: boolean;
  } | null>(null);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsSearching(true);
    await new Promise((resolve) => setTimeout(resolve, 800));

    const verifyResult = verifyPractitioner(query.trim());

    if (verifyResult.found) {
      setResult(verifyResult.practitioner!);
      setStatus(verifyResult.isActive ? "active" : "inactive");
    } else {
      setResult(null);
      setStatus("not_found");
    }

    setIsSearching(false);
  };

  const handleReset = () => {
    setQuery("");
    setStatus("idle");
    setResult(null);
  };

  return (
    <div
      className="campaign-theme min-h-screen flex flex-col"
      style={{ backgroundColor: CAMPAIGN_PAGE_BG }}
    >
      <SiteHeader active="verify" />

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url(/verify-hero.png)" }}
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

        <div className="relative z-10 py-12 md:py-16">
          <div className="max-w-[1200px] mx-auto px-6 text-center">
            <div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
              style={{ backgroundColor: "rgba(200, 164, 93, 0.2)" }}
            >
              <Shield className="w-4 h-4" style={{ color: CAMPAIGN_GOLD }} />
              <span className="text-sm font-medium" style={{ color: CAMPAIGN_GOLD }}>
                Membership Verification
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-4">
              Verify a SAIT Practitioner
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-white/90 max-w-2xl mx-auto">
              Check if a tax practitioner is a registered, active SAIT member.
              Enter their name or PR number below.
            </p>
          </div>
        </div>
      </section>

      <main className="flex-1 -mt-8 relative z-10 pb-12">
        <div className="max-w-[640px] mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-8">
            <form onSubmit={handleSearch} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    placeholder="Enter practitioner name or PR number..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    leftIcon={<Search className="w-4 h-4" />}
                    className="bg-white"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSearching}
                  className="px-8 py-3 rounded-lg font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:opacity-60 disabled:hover:translate-y-0"
                  style={{ backgroundColor: CAMPAIGN_NAVY }}
                >
                  {isSearching ? "Verifying..." : "Verify"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                <Info className="w-3 h-3" />
                Searching across all {">"} 9,000 SAIT members
              </p>
            </form>

            {status !== "idle" && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
                {status === "active" && result && (
                  <div className="rounded-xl p-6 border-2 border-green-500 bg-green-50/50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div className="flex-1">
                        <Badge variant="active" className="mb-3">
                          Verified — Active SAIT Member
                        </Badge>
                        <dl className="space-y-3">
                          <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider">Name</dt>
                            <dd className="text-lg font-semibold" style={{ color: CAMPAIGN_NAVY }}>
                              {result.fullName}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider">
                              PR Number
                            </dt>
                            <dd className="font-mono text-sm" style={{ color: CAMPAIGN_NAVY }}>
                              {result.prNumber}
                            </dd>
                          </div>
                          <div>
                            <dt className="text-xs text-gray-500 uppercase tracking-wider">Status</dt>
                            <dd className="text-green-600 font-medium">Active</dd>
                          </div>
                        </dl>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600 mb-4">
                        This practitioner is a verified, active member of SAIT. They may appear in
                        our practitioner directory if they have opted in.
                      </p>
                      <Link
                        href={`/search?prNumber=${encodeURIComponent(result.prNumber)}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold transition-colors hover:opacity-80"
                        style={{ color: CAMPAIGN_NAVY }}
                      >
                        View in Directory
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                )}

                {status === "inactive" && result && (
                  <div className="rounded-xl p-6 border-2 border-amber-400 bg-amber-50/50">
                    <Badge variant="inactive" className="mb-4">
                      Inactive Member
                    </Badge>
                    <dl className="space-y-3">
                      <div>
                        <dt className="text-xs text-gray-500 uppercase tracking-wider">Name</dt>
                        <dd className="text-lg font-semibold" style={{ color: CAMPAIGN_NAVY }}>
                          {result.fullName}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-gray-500 uppercase tracking-wider">
                          PR Number
                        </dt>
                        <dd className="font-mono text-sm" style={{ color: CAMPAIGN_NAVY }}>
                          {result.prNumber}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-xs text-gray-500 uppercase tracking-wider">Status</dt>
                        <dd className="text-amber-600 font-medium">
                          Inactive — membership not currently active
                        </dd>
                      </div>
                    </dl>

                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        This practitioner was previously an SAIT member but their membership is
                        currently inactive. They do not appear in our practitioner directory.
                      </p>
                    </div>
                  </div>
                )}

                {status === "not_found" && (
                  <div className="rounded-xl p-6 border border-gray-200 bg-gray-50">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center flex-shrink-0">
                        <XCircle className="w-6 h-6 text-gray-500" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold mb-2" style={{ color: CAMPAIGN_NAVY }}>
                          No match found for &ldquo;{query}&rdquo;
                        </h3>
                        <p className="text-gray-600 mb-4 text-sm">
                          This may be due to a spelling difference. Try searching by PR number for
                          an exact result.
                        </p>
                        <p className="text-sm text-gray-500">
                          If you believe this practitioner should be listed, contact SAIT at{" "}
                          <a
                            href="mailto:info@thesait.org.za"
                            className="font-medium hover:underline"
                            style={{ color: CAMPAIGN_GOLD }}
                          >
                            info@thesait.org.za
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="mt-6 text-center">
                  <button
                    type="button"
                    onClick={handleReset}
                    className="text-sm font-medium text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    Search again
                  </button>
                </div>
              </div>
            )}

            {status === "idle" && (
              <div className="rounded-xl border border-gray-100 bg-[#F8F9FA] p-6">
                <h3 className="text-base font-bold mb-4" style={{ color: CAMPAIGN_NAVY }}>
                  About Verification
                </h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    <span>
                      Verification searches across the complete SAIT membership database, including
                      both active and inactive members.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Info className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                    <span>
                      PR numbers (Tax Practitioner Registration numbers) provide the most accurate
                      search results.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Shield className="w-5 h-5 flex-shrink-0 mt-0.5" style={{ color: CAMPAIGN_GOLD }} />
                    <span>
                      Only practitioners who have explicitly opted in will appear in the public
                      directory.
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
