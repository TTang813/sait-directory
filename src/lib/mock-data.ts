import type { Practitioner } from "@/types";

// ============================================
// Mock Data — SAIT Practitioner Directory
// Based on South African context
// ============================================

export const mockPractitioners: Practitioner[] = [
  {
    id: "pract-001",
    fullName: "Thandi Molefe",
    region: "Gauteng",
    regions: ["Gauteng", "Limpopo"],
    specialisation: ["Corporate Income Tax", "Tax Compliance & Returns", "Tax Advisory"],
    prNumber: "PR-2024-08471",
    companyName: "Molefe Tax Consultants",
    phone: "+27 11 123 4567",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-002",
    fullName: "Johan van der Berg",
    region: "Western Cape",
    regions: ["Western Cape"],
    specialisation: ["Value Added Tax (VAT)", "International Tax", "Transfer Pricing"],
    prNumber: "PR-2023-06532",
    companyName: "Cape Town Tax Partners",
    phone: "+27 21 987 6543",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-003",
    fullName: "Amahle Nkosi",
    region: "KwaZulu-Natal",
    regions: ["KwaZulu-Natal"],
    specialisation: ["Personal Income Tax", "Estate Planning & Estate Duty", "Retirement & Pension Planning"],
    prNumber: "PR-2022-04123",
    companyName: "Durban Financial Services",
    phone: undefined,
    acceptingClients: false,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-004",
    fullName: "Pieter Smit",
    region: "Gauteng",
    regions: ["Gauteng", "Mpumalanga"],
    specialisation: ["Small Business Tax", "Payroll Tax / PAYE", "Tax Compliance & Returns"],
    prNumber: "PR-2021-02891",
    companyName: "Smit & Associates",
    phone: "+27 82 555 1234",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-005",
    fullName: "Fatima Patel",
    region: "KwaZulu-Natal",
    regions: ["KwaZulu-Natal", "Eastern Cape"],
    specialisation: ["Customs & Excise", "SARS Voluntary Disclosure", "Transfer Duty"],
    prNumber: "PR-2020-01547",
    companyName: undefined,
    phone: "+27 83 777 8888",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-006",
    fullName: "Lerato Mokoena",
    region: "Mpumalanga",
    regions: ["Mpumalanga"],
    specialisation: ["Corporate Income Tax", "Tax Due Diligence", "Mergers & Acquisitions Tax"],
    prNumber: "PR-2023-07102",
    companyName: "Lowveld Business Advisors",
    phone: "+27 13 222 3333",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-007",
    fullName: "Hendrik van Wyk",
    region: "Northern Cape",
    regions: ["Northern Cape"],
    specialisation: ["Mining & Resources Tax", "Carbon Tax", "Tax Dispute Resolution & Litigation"],
    prNumber: "PR-2019-00983",
    companyName: "Kimberley Tax Solutions",
    phone: undefined,
    acceptingClients: false,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-008",
    fullName: "Nokuthula Dlamini",
    region: "Eastern Cape",
    regions: ["Eastern Cape"],
    specialisation: ["Payroll Tax / PAYE", "Skills Development Levy", "UIF & COIDA"],
    prNumber: "PR-2022-03872",
    companyName: "East Cape Payroll Services",
    phone: "+27 41 444 5555",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-009",
    fullName: "Willem Oosthuizen",
    region: "Free State",
    regions: ["Free State"],
    specialisation: ["Personal Income Tax", "Capital Gains Tax", "Donations Tax"],
    prNumber: "PR-2021-02215",
    companyName: "Bloemfontein Tax Practitioners",
    phone: "+27 51 666 7777",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-010",
    fullName: "Precious Khumalo",
    region: "Gauteng",
    regions: ["Gauteng", "North West"],
    specialisation: ["Non-profit & PBO Tax", "Tax Advisory", "Tax Compliance & Returns"],
    prNumber: "PR-2023-06891",
    companyName: "JHB NPO Advisory",
    phone: "+27 10 888 9999",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-011",
    fullName: "Charl Botha",
    region: "Western Cape",
    regions: ["Western Cape"],
    specialisation: ["Property Tax", "Transfer Duty", "Estate Planning & Estate Duty"],
    prNumber: "PR-2020-01124",
    companyName: "Stellenbosch Property Tax",
    phone: "+27 21 111 2222",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-012",
    fullName: "Nomfundo Zulu",
    region: "Limpopo",
    regions: ["Limpopo"],
    specialisation: ["Employee Benefits & Fringe Benefits Tax", "Payroll Tax / PAYE", "Skills Development Levy"],
    prNumber: "PR-2022-04589",
    companyName: "Polokwane HR & Tax",
    phone: undefined,
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-013",
    fullName: "Robert Williams",
    region: "Gauteng",
    regions: ["Gauteng", "KwaZulu-Natal"],
    specialisation: ["International Tax", "Double Tax Agreements", "Exchange Control"],
    prNumber: "PR-2018-00621",
    companyName: "Global Tax Consulting SA",
    phone: "+27 82 999 0000",
    acceptingClients: false,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-014",
    fullName: "Anita Naidoo",
    region: "KwaZulu-Natal",
    regions: ["KwaZulu-Natal"],
    specialisation: ["Value Added Tax (VAT)", "Tax Compliance & Returns", "SARS Voluntary Disclosure"],
    prNumber: "PR-2021-03002",
    companyName: "Pietermaritzburg VAT Specialists",
    phone: "+27 33 333 4444",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-015",
    fullName: "Morne Nel",
    region: "North West",
    regions: ["North West"],
    specialisation: ["Small Business Tax", "Corporate Income Tax", "Tax Advisory"],
    prNumber: "PR-2023-07234",
    companyName: undefined,
    phone: "+27 14 555 6666",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
  },
  {
    id: "pract-016",
    fullName: "Susan Thompson",
    region: "Western Cape",
    regions: ["Western Cape"],
    specialisation: ["Personal Income Tax"],
    prNumber: "PR-2017-00321",
    companyName: undefined,
    phone: undefined,
    acceptingClients: false,
    isActive: false,
    isOptedIn: false,
  },
  {
    id: "pract-017",
    fullName: "David Mthethwa",
    region: "Gauteng",
    regions: ["Gauteng"],
    specialisation: ["Tax Dispute Resolution & Litigation"],
    prNumber: "PR-2016-00145",
    companyName: undefined,
    phone: undefined,
    acceptingClients: false,
    isActive: false,
    isOptedIn: false,
  },
];

// Mock search results helper
export function getMockPractitioners(filters?: {
  regions?: string[];
  region?: string;
  specialisation?: string[];
  acceptingClients?: boolean;
  prNumber?: string;
}): Practitioner[] {
  let results = mockPractitioners.filter((p) => p.isOptedIn && p.isActive);

  if (filters?.regions && filters.regions.length > 0) {
    results = results.filter((p) => {
      if (!p.regions || p.regions.length === 0 || p.regions.length === 9) return true;
      return p.regions.some((r) => filters.regions!.includes(r));
    });
  }

  if (filters?.region) {
    results = results.filter((p) => {
      if (!p.regions || p.regions.length === 0 || p.regions.length === 9) return true;
      return filters.region ? p.regions.includes(filters.region) : true;
    });
  }

  if (filters?.specialisation && filters.specialisation.length > 0) {
    results = results.filter((p) =>
      p.specialisation.some((s) => filters.specialisation!.includes(s))
    );
  }

  if (filters?.acceptingClients !== undefined) {
    results = results.filter((p) => p.acceptingClients === filters.acceptingClients);
  }

  if (filters?.prNumber) {
    results = results.filter((p) =>
      p.prNumber.toLowerCase().includes(filters.prNumber!.toLowerCase())
    );
  }

  return results;
}

// Mock verification
export function verifyPractitioner(query: string): {
  found: boolean;
  isActive: boolean;
  practitioner?: { fullName: string; prNumber: string; isActive: boolean };
} {
  const lowerQuery = query.toLowerCase();

  const found = mockPractitioners.find(
    (p) =>
      p.fullName.toLowerCase().includes(lowerQuery) ||
      p.prNumber.toLowerCase().includes(lowerQuery)
  );

  if (found) {
    return {
      found: true,
      isActive: found.isActive,
      practitioner: {
        fullName: found.fullName,
        prNumber: found.prNumber,
        isActive: found.isActive,
      },
    };
  }

  return { found: false, isActive: false };
}

// Inactive member verification
export function verifyPractitionerInactive(query: string): {
  found: boolean;
  isActive: boolean;
  practitioner?: { fullName: string; prNumber: string; isActive: boolean };
} {
  const lowerQuery = query.toLowerCase();

  const found = mockPractitioners.find(
    (p) =>
      (p.fullName.toLowerCase().includes(lowerQuery) ||
      p.prNumber.toLowerCase().includes(lowerQuery)) &&
      !p.isActive
  );

  if (found) {
    return {
      found: true,
      isActive: false,
      practitioner: {
        fullName: found.fullName,
        prNumber: found.prNumber,
        isActive: false,
      },
    };
  }

  return { found: false, isActive: false };
}
