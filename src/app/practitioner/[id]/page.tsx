"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { mockPractitioners } from "@/lib/mock-data";
import {
  EXTERNAL_LEGAL_LINK_PROPS,
  SAIT_PRIVACY_URL,
  SAIT_TERMS_URL,
} from "@/lib/legal-links";
import {
  ArrowLeft,
  MapPin,
  Building2,
  FileCheck,
  Mail,
  Send,
  Shield,
  Phone,
} from "lucide-react";

export default function PractitionerPage() {
  const params = useParams();
  const router = useRouter();
  const practitionerId = params.id as string;

  const practitioner = mockPractitioners.find(
    (p) => p.id === practitionerId
  );

  // Enquiry form state
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setSubmitted(true);
    setIsSubmitting(false);
  };

  if (!practitioner) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
        <header className="bg-white border-b border-[var(--color-light-gray)]">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/search">
              <Logo width={120} href="/search" />
            </Link>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center py-20">
          <div className="text-center">
            <h1 className="text-h2 text-[var(--color-navy)] mb-4">
              Practitioner Not Found
            </h1>
            <p className="text-[var(--color-text-secondary)] mb-6">
              This practitioner profile could not be found.
            </p>
            <Button asChild>
              <Link href="/search">Back to Search</Link>
            </Button>
          </div>
        </main>
      </div>
    );
  }

  if (submitted) {
    return (
      <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
        <header className="bg-white border-b border-[var(--color-light-gray)]">
          <div className="max-w-7xl mx-auto px-4 py-4">
            <Link href="/search">
              <Logo width={120} href="/search" />
            </Link>
          </div>
        </header>
        <main className="flex-1 flex items-center justify-center py-20">
          <Card className="max-w-lg mx-4 text-center">
            <div className="w-16 h-16 rounded-full bg-[var(--color-success-bg)] flex items-center justify-center mx-auto mb-6">
              <Send className="w-8 h-8 text-[var(--color-success)]" />
            </div>
            <h2 className="text-h2 text-[var(--color-navy)] mb-3">
              Enquiry Sent Successfully
            </h2>
            <p className="text-[var(--color-text-secondary)] mb-6">
              Your enquiry has been forwarded to {practitioner.fullName}. They will
              respond to you directly via email. Your contact details have not been
              shared with the practitioner.
            </p>
            <div className="flex gap-3 justify-center">
              <Button asChild>
                <Link href="/search">Search More</Link>
              </Button>
              <Button variant="secondary" onClick={() => router.push("/")}>
                Back to Home
              </Button>
            </div>
          </Card>
        </main>
      </div>
    );
  }

  const operatingRegions =
    practitioner.operatingRegions.length > 0
      ? practitioner.operatingRegions
      : practitioner.regions ?? [practitioner.locatedRegion];

  const practitionerRegions =
    operatingRegions.length === 0 || operatingRegions.length === 9
      ? "All Regions"
      : operatingRegions.join(", ");

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-off-white)]">
      {/* Header */}
      <header className="bg-white border-b border-[var(--color-light-gray)] sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/search" className="flex items-center gap-2 text-sm text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors">
              <ArrowLeft className="w-4 h-4" />
              Back to Search
            </Link>
            <div className="flex items-center gap-4">
              <Link
                href="/search"
                className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-gold)]"
              >
                Find a Practitioner
              </Link>
              <Link
                href="/verify"
                className="text-sm font-medium text-[var(--color-navy)] hover:text-[var(--color-gold)]"
              >
                Verify Practitioner
              </Link>
            </div>
          </div>
        </div>
      </header>

      <main className="flex-1 py-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Profile Card */}
          <Card className="mb-8">
            {/* Header */}
            <div className="flex items-start justify-between mb-6">
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <h1 className="text-2xl font-bold text-[var(--color-navy)]">
                    {practitioner.fullName}
                  </h1>
                  {practitioner.isActive ? (
                    <Badge variant="active">
                      <FileCheck className="w-3 h-3" />
                      SAIT Member
                    </Badge>
                  ) : (
                    <Badge variant="inactive">Inactive Member</Badge>
                  )}
                </div>
                {practitioner.companyName && (
                  <div className="flex items-center gap-2 text-[var(--color-text-secondary)]">
                    <Building2 className="w-4 h-4" />
                    <span>{practitioner.companyName}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-light-gray)] flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                      Region{practitioner.regions && practitioner.regions.length > 1 ? "s" : ""}
                    </div>
                    <div className="font-medium text-[var(--color-navy)]">
                      {practitionerRegions}
                    </div>
                  </div>
                </div>

                {/* Phone - only show if exists */}
                {practitioner.phone && (
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-light-gray)] flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[var(--color-text-secondary)]" />
                    </div>
                    <div>
                      <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                        Phone
                      </div>
                      <div className="font-medium text-[var(--color-navy)]">
                        {practitioner.phone}
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-[var(--radius-md)] bg-[var(--color-light-gray)] flex items-center justify-center">
                    <FileCheck className="w-5 h-5 text-[var(--color-text-secondary)]" />
                  </div>
                  <div>
                    <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider">
                      PR Number
                    </div>
                    <div className="font-mono font-medium text-[var(--color-navy)]">
                      {practitioner.prNumber}
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <div className="text-xs text-[var(--color-text-secondary)] uppercase tracking-wider mb-2">
                  Specialisations
                </div>
                <div className="flex flex-wrap gap-2">
                  {practitioner.specialisation.map((spec) => (
                    <Badge key={spec} variant="outline">
                      {spec}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Contact Section */}
          {!showForm ? (
            <Card className="text-center py-8">
              <Mail className="w-12 h-12 text-[var(--color-gold)] mx-auto mb-4" />
              <h2 className="text-h2 text-[var(--color-navy)] mb-2">
                Interested in This Practitioner?
              </h2>
              <p className="text-[var(--color-text-secondary)] mb-6 max-w-md mx-auto">
                Send an enquiry and the practitioner will respond directly to your
                email. Your contact details remain private.
              </p>
              <Button onClick={() => setShowForm(true)} size="lg">
                <Mail className="w-5 h-5" />
                Send Enquiry
              </Button>
            </Card>
          ) : (
            <Card>
              <h2 className="text-h2 text-[var(--color-navy)] mb-6">
                Send an Enquiry
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <Input
                    label="Your Name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    placeholder="John Smith"
                  />
                  <Input
                    label="Your Email"
                    type="email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    placeholder="john@example.com"
                  />
                </div>
                <Input
                  label="Company (optional)"
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  placeholder="Your company name"
                />
                <div className="flex flex-col gap-1.5">
                  <label className="text-sm font-medium text-[var(--color-navy)]">
                    Message <span className="text-[var(--color-error)]">*</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                    rows={4}
                    placeholder="Describe your tax needs and how this practitioner can help..."
                    className="w-full bg-[var(--color-white)] text-[var(--color-navy)] border-[1.5px] border-[var(--color-mid-gray)] rounded-[var(--radius-sm)] py-2.5 px-3.5 text-[15px] placeholder:text-[var(--color-text-secondary)] transition-all duration-200 focus:outline-none focus:border-[var(--color-gold)] focus:shadow-[0_0_0_3px_rgba(226,191,41,0.15)] resize-none"
                  />
                </div>

                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => setAgreed(e.target.checked)}
                    className="w-5 h-5 mt-0.5 rounded border-2 border-[var(--color-mid-gray)] accent-[var(--color-gold)]"
                  />
                  <span className="text-sm text-[var(--color-text-secondary)]">
                    I agree to the{" "}
                    <a
                      href={SAIT_PRIVACY_URL}
                      {...EXTERNAL_LEGAL_LINK_PROPS}
                      className="text-[var(--color-gold)] hover:underline"
                    >
                      Privacy Policy
                    </a>{" "}
                    and consent to SAIT forwarding my enquiry to this practitioner.
                  </span>
                </label>

                <div className="flex gap-3 pt-2">
                  <Button
                    type="submit"
                    isLoading={isSubmitting}
                    disabled={!agreed}
                    size="lg"
                  >
                    <Send className="w-4 h-4" />
                    Send Enquiry
                  </Button>
                  <Button
                    type="button"
                    variant="secondary"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </Card>
          )}

          {/* Privacy Notice */}
          <div className="mt-6 flex items-start gap-3 text-xs text-[var(--color-text-secondary)]">
            <Shield className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p>
              Your contact information is protected and will only be used to forward
              your enquiry to the selected practitioner. The practitioner&apos;s email
              address is never displayed or shared.
            </p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[var(--color-navy)] text-white py-6 mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-white/50">
            &copy; {new Date().getFullYear()} South African Institute of Taxation (SAIT)
          </p>
          <div className="flex gap-6 text-xs">
            <a
              href={SAIT_PRIVACY_URL}
              {...EXTERNAL_LEGAL_LINK_PROPS}
              className="text-white/50 hover:text-white"
            >
              Privacy Policy
            </a>
            <a
              href={SAIT_TERMS_URL}
              {...EXTERNAL_LEGAL_LINK_PROPS}
              className="text-white/50 hover:text-white"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
