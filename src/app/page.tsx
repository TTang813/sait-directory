import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Search, Shield, Users, Globe, ChevronRight, Phone } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <header className="border-b border-[var(--color-light-gray)] bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Logo width={120} />
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/search"
                className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
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
            <Button size="sm" asChild>
              <Link href="/search">Search Now</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-[var(--color-navy)] overflow-hidden">
        {/* Background Pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(226,191,41,0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-[var(--color-gold)]/20 text-[var(--color-gold)] px-4 py-1.5 rounded-full text-sm font-semibold mb-6">
              <Shield className="w-4 h-4" />
              South Africa&apos;s Largest Tax Professional Body
            </div>

            <h1 className="text-h1 text-white mb-6">
              Find a Qualified{" "}
              <span className="text-[var(--color-gold)]">Tax Practitioner</span>{" "}
              Near You
            </h1>

            <p className="text-lg text-white/80 mb-10 max-w-2xl leading-relaxed">
              Connect with verified SAIT-certified tax professionals across South Africa.
              Whether you need personal tax advice or corporate tax services, find the right
              practitioner in our directory.
            </p>

            {/* Hero CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/search" className="gap-2">
                  <Search className="w-5 h-5" />
                  Find a Practitioner
                </Link>
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <Link href="/verify" className="gap-2 border-white/30 text-white hover:bg-white hover:text-[var(--color-navy)]">
                  <Shield className="w-5 h-5" />
                  Verify a Practitioner
                </Link>
              </Button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-10 border-t border-white/10 max-w-2xl">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-gold)]">9,000+</div>
              <div className="text-sm text-white/60 mt-1">Active Members</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-gold)]">9</div>
              <div className="text-sm text-white/60 mt-1">Provinces Covered</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-[var(--color-gold)]">10+</div>
              <div className="text-sm text-white/60 mt-1">Tax Specialisations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Propositions */}
      <section className="py-16 md:py-24 bg-[var(--color-off-white)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-h2 text-[var(--color-navy)] mb-4">
              Why Use the SAIT Directory?
            </h2>
            <p className="text-body text-[var(--color-text-secondary)] max-w-2xl mx-auto">
              Our directory connects you with verified tax professionals who meet SAIT&apos;s
              rigorous standards of excellence and integrity.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)]">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
                <Shield className="w-7 h-7 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-h3 text-[var(--color-navy)] mb-3">
                Verified Professionals
              </h3>
              <p className="text-body text-[var(--color-text-secondary)]">
                Every practitioner in our directory is registered with SAIT and verified against
                the SAIT membership database. Trust that you&apos;re working with qualified professionals.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)]">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
                <Search className="w-7 h-7 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-h3 text-[var(--color-navy)] mb-3">
                Easy Search
              </h3>
              <p className="text-body text-[var(--color-text-secondary)]">
                Filter by region, specialisation, and services to find the perfect practitioner
                for your needs. Search across all nine provinces of South Africa.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-[var(--radius-lg)] p-8 shadow-[var(--shadow-md)]">
              <div className="w-14 h-14 rounded-[var(--radius-md)] bg-[var(--color-gold)]/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-[var(--color-gold)]" />
              </div>
              <h3 className="text-h3 text-[var(--color-navy)] mb-3">
                Direct Connection
              </h3>
              <p className="text-body text-[var(--color-text-secondary)]">
                Submit enquiries directly to practitioners through our secure form. Your contact
                details are protected and never shared publicly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Specialisations Preview */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div>
              <h2 className="text-h2 text-[var(--color-navy)] mb-4">
                Areas of Expertise
              </h2>
              <p className="text-body text-[var(--color-text-secondary)] max-w-xl">
                Our members offer comprehensive tax services across multiple specialisations
                to meet your specific needs.
              </p>
            </div>
            <Button variant="secondary" asChild>
              <Link href="/search">
                Browse All
                <ChevronRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Personal Tax", count: 45 },
              { name: "Corporate Tax", count: 38 },
              { name: "VAT & Customs", count: 29 },
              { name: "International Tax", count: 21 },
              { name: "Payroll Tax", count: 34 },
              { name: "Estate Planning", count: 18 },
              { name: "Tax Disputes", count: 15 },
              { name: "SME Tax", count: 41 },
            ].map((spec) => (
              <Link
                key={spec.name}
                href={`/search?specialisation=${encodeURIComponent(spec.name)}`}
                className="group p-5 rounded-[var(--radius-md)] border border-[var(--color-light-gray)] hover:border-[var(--color-gold)] hover:shadow-[var(--shadow-md)] transition-all"
              >
                <div className="text-base font-semibold text-[var(--color-navy)] group-hover:text-[var(--color-gold)] transition-colors mb-1">
                  {spec.name}
                </div>
                <div className="text-sm text-[var(--color-text-secondary)]">
                  {spec.count} practitioners
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 bg-[var(--color-navy-bg)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-6" />
          <h2 className="text-h2 text-white mb-4">
            Ready to Find Your Tax Professional?
          </h2>
          <p className="text-body text-white/70 mb-8 max-w-xl mx-auto">
            Browse our directory of verified SAIT members and connect with the right
            practitioner for your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild>
              <Link href="/search">Search Practitioners</Link>
            </Button>
            <Button size="lg" variant="secondary" className="border-white/30 text-white hover:bg-white hover:text-[var(--color-navy)]" asChild>
              <Link href="/verify">Verify a Practitioner</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-12 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <Logo variant="light" width={140} className="mb-4" />
              <p className="text-sm text-white/60 max-w-sm">
                The South African Institute of Taxation (SAIT) is the largest recognised
                controlling body for tax practitioners in South Africa.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-[var(--color-gold)]">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/search" className="text-white/70 hover:text-[var(--color-gold)] transition-colors">
                    Find a Practitioner
                  </Link>
                </li>
                <li>
                  <Link href="/verify" className="text-white/70 hover:text-[var(--color-gold)] transition-colors">
                    Verify Practitioner
                  </Link>
                </li>
                <li>
                  <a
                    href="https://www.thesait.org.za"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/70 hover:text-[var(--color-gold)] transition-colors"
                  >
                    SAIT Website
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-[var(--color-gold)]">Contact</h4>
              <ul className="space-y-2 text-sm text-white/70">
                <li className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+27 (0)11 123 4567</span>
                </li>
                <li>
                  <a
                    href="mailto:info@thesait.org.za"
                    className="hover:text-[var(--color-gold)] transition-colors"
                  >
                    info@thesait.org.za
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-white/50">
              &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT). All rights reserved.
            </p>
            <div className="flex gap-6 text-xs">
              <Link href="/privacy" className="text-white/50 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/50 hover:text-white transition-colors">
                Terms of Use
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
