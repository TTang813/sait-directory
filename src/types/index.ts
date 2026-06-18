// ============================================
// SAIT Practitioner Directory — Type Definitions
// ============================================

export interface PractitionerDisplayFields {
  showName: boolean;
  showRegion: boolean;
  showRegions: boolean;
  showSpecialisation: boolean;
  showCompanyName: boolean;
  showAcceptingClients: boolean;
  showPRNumber: boolean;
  showPhone: boolean;
}

export const DEFAULT_DISPLAY_FIELDS: PractitionerDisplayFields = {
  showName: true,
  showRegion: true,
  showRegions: true,
  showSpecialisation: true,
  showCompanyName: true,
  showAcceptingClients: true,
  showPRNumber: false,
  showPhone: false,
};

export interface Practitioner {
  id: string;
  fullName: string;
  /** Public directory name (from opt-in display name). */
  displayName: string;
  /** Province where the practitioner is based. */
  locatedRegion: string;
  /** Provinces where the practitioner operates (max 3 in opt-in). */
  operatingRegions: string[];
  /** Towns/cities within operating regions (max 3 in opt-in). */
  towns: string[];
  /** @deprecated Use locatedRegion — kept for backward compatibility. */
  region: string;
  /** @deprecated Use operatingRegions — kept for backward compatibility. */
  regions?: string[];
  specialisation: string[];
  prNumber: string;
  companyName?: string;
  phone?: string;
  acceptingClients: boolean;
  isActive: boolean;
  isOptedIn: boolean;
  displayFields: PractitionerDisplayFields;
}

export interface PractitionerProfile extends Practitioner {
  email?: string;
  displayFields: PractitionerDisplayFields;
  optInDate?: string;
}

export interface SearchFilters {
  regions?: string[];
  region?: string;
  specialisation?: string[];
  acceptingClients?: boolean;
  prNumber?: string;
}

export interface Enquiry {
  id: string;
  practitionerId: string;
  senderName: string;
  senderEmail: string;
  senderCompany?: string;
  message: string;
  status: "pending" | "sent" | "read" | "bounced" | "unsubscribed";
  createdAt: string;
}

export interface VerificationResult {
  found: boolean;
  practitioner?: {
    fullName: string;
    prNumber: string;
    isActive: boolean;
  };
}

// Specialisation categories from PRD
export const SPECIALISATION_CATEGORIES: Record<string, readonly string[]> = {
  "Personal Tax": [
    "Personal Income Tax",
    "Capital Gains Tax",
    "Estate Planning & Estate Duty",
    "Donations Tax",
    "Retirement & Pension Planning",
  ],
  "Corporate Tax": [
    "Corporate Income Tax",
    "Small Business Tax",
    "Tax Compliance & Returns",
    "Tax Advisory",
    "Mergers & Acquisitions Tax",
  ],
  "Indirect Tax": [
    "Value Added Tax (VAT)",
    "Customs & Excise",
    "Securities Transfer Tax",
    "Transfer Duty",
  ],
  "Employer & Payroll": [
    "Payroll Tax / PAYE",
    "Employee Benefits & Fringe Benefits Tax",
    "Skills Development Levy",
    "UIF & COIDA",
  ],
  "International Tax": [
    "International Tax",
    "Transfer Pricing",
    "Double Tax Agreements",
    "Exchange Control",
  ],
  "Specialist Areas": [
    "Tax Dispute Resolution & Litigation",
    "SARS Voluntary Disclosure",
    "Tax Due Diligence",
    "Non-profit & PBO Tax",
    "Carbon Tax",
    "Mining & Resources Tax",
    "Property Tax",
  ],
};

// Regions
export const REGIONS = [
  "Eastern Cape",
  "Free State",
  "Gauteng",
  "KwaZulu-Natal",
  "Limpopo",
  "Mpumalanga",
  "Northern Cape",
  "North West",
  "Western Cape",
] as const;

// Service types
export const SERVICE_TYPES = [
  "Individual Tax Services",
  "Business Tax Services",
  "VAT & Customs",
  "Payroll & Employment Tax",
  "International Tax",
  "Tax Advisory & Planning",
  "Tax Dispute Resolution",
] as const;

export type ServiceType = (typeof SERVICE_TYPES)[number];
export type Region = (typeof REGIONS)[number];
