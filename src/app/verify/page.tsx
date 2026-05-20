"use client";

import { useState } from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { verifyPractitioner } from "@/lib/mock-data";
import {
  Search,
  Shield,
  CheckCircle,
  AlertTriangle,
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

    // Simulate API call
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
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-light-gray)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo width={120} />
            <nav className="flex items-center gap-4">
              <Link
                href="/search"
                className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
              >
                Find a Practitioner
              </Link>
              <Link
                href="/verify"
                className="text-sm font-semibold text-[var(--color-gold)] border-b-2 border-[var(--color-gold)] pb-1"
              >
                Verify Practitioner
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 py-12">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-10">
            <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-6">
              <Shield className="w-8 h-8 text-[var(--color-gold)]" />
            </div>
            <h1 className="text-h1 text-[var(--color-navy)] mb-4">
              Verify a Practitioner
            </h1>
            <p className="text-body text-[var(--color-text-secondary)]">
              Check if a tax practitioner is a registered, active SAIT member.
              Enter their name or PR number below.
            </p>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSearch} className="mb-8">
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
              <Button type="submit" isLoading={isSearching} size="lg">
                Verify
              </Button>
            </div>
            <p className="text-xs text-[var(--color-text-secondary)] mt-2 flex items-center gap-1">
              <Info className="w-3 h-3" />
              Searching across all {">"} 9,000 SAIT members
            </p>
          </form>

          {/* Results */}
          {status !== "idle" && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-300">
              {/* Active Member */}
              {status === "active" && result && (
                <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)] border-2 border-[var(--color-success)]">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-success-bg)] flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-7 h-7 text-[var(--color-success)]" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="active" className="mb-3">
                        Verified — Active SAIT Member
                      </Badge>
                      <dl className="space-y-3">
                        <div className="flex flex-col">
                          <dt className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                            Name
                          </dt>
                          <dd className="text-lg font-semibold text-[var(--color-navy)]">
                            {result.fullName}
                          </dd>
                        </div>
                        <div className="flex flex-col">
                          <dt className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                            PR Number
                          </dt>
                          <dd className="font-mono text-[var(--color-navy)]">
                            {result.prNumber}
                          </dd>
                        </div>
                        <div className="flex flex-col">
                          <dt className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                            Status
                          </dt>
                          <dd className="text-[var(--color-success)] font-medium">
                            Active
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[var(--color-light-gray)]">
                    <p className="text-sm text-[var(--color-text-secondary)] mb-4">
                      This practitioner is a verified, active member of SAIT.
                      They may appear in our practitioner directory if they have
                      opted in.
                    </p>
                    <Button variant="secondary" asChild>
                      <Link href={`/search?prNumber=${encodeURIComponent(result.prNumber)}`}>
                        View in Directory
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}

              {/* Inactive Member */}
              {status === "inactive" && result && (
                <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)] border-2 border-[var(--color-warning)]">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-warning-bg)] flex items-center justify-center flex-shrink-0">
                      <AlertTriangle className="w-7 h-7 text-[var(--color-warning)]" />
                    </div>
                    <div className="flex-1">
                      <Badge variant="inactive" className="mb-3">
                        Inactive Member
                      </Badge>
                      <dl className="space-y-3">
                        <div className="flex flex-col">
                          <dt className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                            Name
                          </dt>
                          <dd className="text-lg font-semibold text-[var(--color-navy)]">
                            {result.fullName}
                          </dd>
                        </div>
                        <div className="flex flex-col">
                          <dt className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                            PR Number
                          </dt>
                          <dd className="font-mono text-[var(--color-navy)]">
                            {result.prNumber}
                          </dd>
                        </div>
                        <div className="flex flex-col">
                          <dt className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                            Status
                          </dt>
                          <dd className="text-[var(--color-warning)] font-medium">
                            Inactive — membership not currently active
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-[var(--color-light-gray)]">
                    <p className="text-sm text-[var(--color-text-secondary)]">
                      This practitioner was previously an SAIT member but their
                      membership is currently inactive. They do not appear in our
                      practitioner directory.
                    </p>
                  </div>
                </div>
              )}

              {/* Not Found */}
              {status === "not_found" && (
                <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)]">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-full bg-[var(--color-light-gray)] flex items-center justify-center flex-shrink-0">
                      <XCircle className="w-7 h-7 text-[var(--color-text-secondary)]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-h3 text-[var(--color-navy)] mb-2">
                        No match found for &ldquo;{query}&rdquo;
                      </h3>
                      <p className="text-[var(--color-text-secondary)] mb-4">
                        This may be due to a spelling difference. Try searching
                        by PR number for an exact result.
                      </p>
                      <p className="text-sm text-[var(--color-text-secondary)]">
                        If you believe this practitioner should be listed,
                        contact SAIT at{" "}
                        <a
                          href="mailto:info@thesait.org.za"
                          className="text-[var(--color-gold)] hover:underline"
                        >
                          info@thesait.org.za
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Reset Button */}
              <div className="mt-6 text-center">
                <Button variant="ghost" onClick={handleReset}>
                  Search again
                </Button>
              </div>
            </div>
          )}

          {/* Info Section */}
          {status === "idle" && (
            <div className="bg-white rounded-[var(--radius-lg)] p-6 shadow-[var(--shadow-sm)]">
              <h3 className="text-h3 text-[var(--color-navy)] mb-4">
                About Verification
              </h3>
              <ul className="space-y-3 text-sm text-[var(--color-text-secondary)]">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[var(--color-success)] flex-shrink-0 mt-0.5" />
                  <span>
                    Verification searches across the complete SAIT membership
                    database, including both active and inactive members.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Info className="w-5 h-5 text-[var(--color-text-secondary)] flex-shrink-0 mt-0.5" />
                  <span>
                    PR numbers (Tax Practitioner Registration numbers) provide
                    the most accurate search results.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[var(--color-gold)] flex-shrink-0 mt-0.5" />
                  <span>
                    Only practitioners who have explicitly opted in will appear in
                    the public directory.
                  </span>
                </li>
              </ul>
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
