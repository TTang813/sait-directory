import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import {
  CAMPAIGN_FOOTER_BG,
  CAMPAIGN_GOLD,
  CAMPAIGN_NAVY,
  type SitePage,
} from "@/lib/campaign-theme";

export function SiteHeader({ active }: { active: SitePage }) {
  const linkClass = (page: SitePage) =>
    active === page
      ? "text-sm font-semibold pb-0.5 border-b-2"
      : "text-sm font-medium transition-colors hover:opacity-80";

  const linkStyle = (page: SitePage) =>
    active === page
      ? { color: CAMPAIGN_GOLD, borderColor: CAMPAIGN_GOLD }
      : { color: CAMPAIGN_NAVY };

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Logo width={120} />
          <nav className="flex items-center gap-6">
            <Link href="/" className={linkClass("landing")} style={linkStyle("landing")}>
              Landing Page
            </Link>
            <Link href="/search" className={linkClass("search")} style={linkStyle("search")}>
              Find a Practitioner
            </Link>
            <Link href="/verify" className={linkClass("verify")} style={linkStyle("verify")}>
              Verify Practitioner
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer
      className="text-white py-7 mt-auto border-t border-white/10"
      style={{ backgroundColor: CAMPAIGN_FOOTER_BG }}
    >
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
  );
}
