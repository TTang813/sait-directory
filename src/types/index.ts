// ============================================
// SAIT Practitioner Directory — Type Definitions
// ============================================

export interface Practitioner {
  id: string;
  fullName: string;
  region: string;
  specialisation: string[];
  prNumber: string;
  companyName?: string;
  acceptingClients: boolean;
  isActive: boolean;
  isOptedIn: boolean;
}

export interface PractitionerDisplayFields {
  showName: boolean;
  showRegion: boolean;
  showSpecialisation: boolean;
  showCompanyName: boolean;
  showAcceptingClients: boolean;
  showPRNumber: boolean;
}

export interface PractitionerProfile extends Practitioner {
  email?: string;
  displayFields: PractitionerDisplayFields;
  optInDate?: string;
}

export interface SearchFilters {
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
