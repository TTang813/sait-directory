"use client";

import { use } from "react";
import { useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, ArrowRight } from "lucide-react";

export default function OptInStep1Page({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  const { token } = use(params);
  const router = useRouter();

  // In production, this would fetch member data from the token
  const mockMemberName = "Jane Smith";

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      <header className="bg-white border-b border-[var(--color-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Logo width={120} />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 px-4">
        <Card className="max-w-lg w-full p-10 text-center">
          {/* Step Indicator */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[var(--color-gold)] text-[var(--color-navy)] flex items-center justify-center text-sm font-bold">
                1
              </div>
              <span className="text-sm font-medium text-[var(--color-navy)]">Verify</span>
            </div>
            <div className="w-12 h-px bg-[var(--color-mid-gray)]" />
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-8 h-8 rounded-full bg-[var(--color-light-gray)] text-[var(--color-text-secondary)] flex items-center justify-center text-sm font-bold">
                2
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">Details</span>
            </div>
            <div className="w-12 h-px bg-[var(--color-mid-gray)]" />
            <div className="flex items-center gap-2 opacity-40">
              <div className="w-8 h-8 rounded-full bg-[var(--color-light-gray)] text-[var(--color-text-secondary)] flex items-center justify-center text-sm font-bold">
                3
              </div>
              <span className="text-sm text-[var(--color-text-secondary)]">Done</span>
            </div>
          </div>

          {/* Content */}
          <div className="mb-8">
            <div className="w-16 h-16 rounded-full bg-[var(--color-gold)]/10 flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-[var(--color-gold)]" />
            </div>
            <h1
              className="text-[var(--color-navy)] mb-3 font-bold"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(22px, 3vw, 28px)",
                lineHeight: 1.2,
              }}
            >
              Welcome back, {mockMemberName}
            </h1>
            <p
              className="text-[var(--color-text-secondary)] max-w-md mx-auto"
              style={{ fontFamily: "var(--font-body)" }}
            >
              We&apos;ve verified your identity. You&apos;re ready to complete your
              directory listing or update certain fields.
            </p>
          </div>

          {/* Info Box */}
          <div className="bg-[var(--color-light-gray)] rounded-[var(--radius-md)] p-4 mb-8 text-left">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-[var(--color-gold)]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-[var(--color-gold)] text-xs font-bold">i</span>
              </div>
              <p className="text-sm text-[var(--color-text-secondary)]">
                Your information has been pre-filled based on your SAIT membership
                records. You can review and update it in the next step.
              </p>
            </div>
          </div>

          {/* CTA — use actual token from URL */}
          <Button size="lg" className="w-full" onClick={() => router.push(`/opt-in/${token}/step-2`)}>
            Continue
            <ArrowRight className="w-4 h-4" />
          </Button>
        </Card>
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
