import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, Clock, ArrowRight, Shield } from "lucide-react";

export default function TokenExpiredPage() {
  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      <header className="bg-white border-b border-[var(--color-light-gray)]">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Logo width={120} />
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-16 px-4">
        <Card className="max-w-md w-full text-center p-10">
          <div className="w-20 h-20 rounded-full bg-[var(--color-warning-bg)] flex items-center justify-center mx-auto mb-6">
            <Clock className="w-10 h-10 text-[var(--color-warning)]" />
          </div>

          <h1 className="text-h2 text-[var(--color-navy)] mb-3">
            This Link Has Expired
          </h1>

          <p className="text-[var(--color-text-secondary)] mb-8">
            Your opt-in invitation link has expired for security reasons.
            Please contact SAIT to request a new invitation.
          </p>

          <div className="space-y-3">
            <Button size="lg" className="w-full" asChild>
              <a
                href="mailto:info@thesait.org.za?subject=Request%20New%20Opt-in%20Invitation"
                className="gap-2"
              >
                <Mail className="w-4 h-4" />
                Contact SAIT
              </a>
            </Button>
            <Button variant="secondary" size="lg" className="w-full" asChild>
              <Link href="/">
                Return to Home
              </Link>
            </Button>
          </div>

          <div className="mt-8 pt-6 border-t border-[var(--color-light-gray)]">
            <div className="flex items-center justify-center gap-2 text-xs text-[var(--color-text-secondary)]">
              <Shield className="w-3 h-3" />
              <span>Links expire after 7 days for your security</span>
            </div>
          </div>
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

function Mail({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
      />
    </svg>
  );
}
