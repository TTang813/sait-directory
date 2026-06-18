import {
  DEFAULT_DISPLAY_FIELDS,
  type Practitioner,
  type PractitionerDisplayFields,
} from "@/types";

// ============================================
// Mock Data — SAIT Practitioner Directory
// Based on South African context
// ============================================

const REGION_TOWNS: Record<string, string[]> = {
  "Eastern Cape": ["Gqeberha", "East London", "Mthatha"],
  "Free State": ["Bloemfontein", "Welkom", "Bethlehem"],
  Gauteng: ["Johannesburg", "Pretoria", "Sandton"],
  "KwaZulu-Natal": ["Durban", "Pietermaritzburg", "Richards Bay"],
  Limpopo: ["Polokwane", "Tzaneen", "Thohoyandou"],
  Mpumalanga: ["Nelspruit", "Witbank", "Secunda"],
  "Northern Cape": ["Kimberley", "Upington", "Springbok"],
  "North West": ["Rustenburg", "Mahikeng", "Klerksdorp"],
  "Western Cape": ["Cape Town", "Stellenbosch", "George"],
};

type RawPractitioner = Omit<
  Practitioner,
  "displayName" | "locatedRegion" | "operatingRegions" | "towns" | "displayFields"
> & {
  displayName?: string;
  locatedRegion?: string;
  operatingRegions?: string[];
  towns?: string[];
  displayFields?: Partial<PractitionerDisplayFields>;
};

function enrichPractitioner(raw: RawPractitioner): Practitioner {
  const operatingRegions = raw.operatingRegions ?? raw.regions ?? [raw.region];
  const locatedRegion = raw.locatedRegion ?? raw.region;
  const defaultTown = REGION_TOWNS[locatedRegion]?.[0] ?? locatedRegion;

  return {
    ...raw,
    displayName: raw.displayName ?? raw.fullName,
    locatedRegion,
    operatingRegions,
    towns: raw.towns ?? [defaultTown],
    regions: raw.regions ?? operatingRegions,
    displayFields: {
      ...DEFAULT_DISPLAY_FIELDS,
      ...raw.displayFields,
    },
  };
}

const rawMockPractitioners: RawPractitioner[] = [
  {
    id: "pract-001",
    fullName: "Thandi Molefe",
    region: "Gauteng",
    regions: ["Gauteng", "Limpopo"],
    towns: ["Johannesburg", "Polokwane"],
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
    towns: ["Cape Town"],
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
    towns: ["Durban"],
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
    towns: ["Pretoria", "Nelspruit"],
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
    towns: ["Durban", "Gqeberha"],
    specialisation: ["Customs & Excise", "SARS Voluntary Disclosure", "Transfer Duty"],
    prNumber: "PR-2020-01547",
    companyName: undefined,
    phone: "+27 83 777 8888",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
    displayFields: { showCompanyName: false },
  },
  {
    id: "pract-006",
    fullName: "Lerato Mokoena",
    region: "Mpumalanga",
    regions: ["Mpumalanga"],
    towns: ["Nelspruit"],
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
    towns: ["Kimberley"],
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
    towns: ["Gqeberha"],
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
    towns: ["Bloemfontein"],
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
    towns: ["Johannesburg", "Rustenburg"],
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
    towns: ["Stellenbosch"],
    specialisation: ["Property Tax", "Transfer Duty", "Estate Planning & Estate Duty"],
    prNumber: "PR-2020-01124",
    companyName: "Stellenbosch Property Tax",
    phone: "+27 21 111 2222",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
    displayFields: { showPRNumber: true },
  },
  {
    id: "pract-012",
    fullName: "Nomfundo Zulu",
    region: "Limpopo",
    regions: ["Limpopo"],
    towns: ["Polokwane"],
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
    towns: ["Sandton", "Durban"],
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
    towns: ["Pietermaritzburg"],
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
    towns: ["Rustenburg"],
    specialisation: ["Small Business Tax", "Corporate Income Tax", "Tax Advisory"],
    prNumber: "PR-2023-07234",
    companyName: undefined,
    phone: "+27 14 555 6666",
    acceptingClients: true,
    isActive: true,
    isOptedIn: true,
    displayFields: { showCompanyName: false },
  },
  {
    id: "pract-016",
    fullName: "Susan Thompson",
    region: "Western Cape",
    regions: ["Western Cape"],
    towns: ["Cape Town"],
    specialisation: ["Personal Income Tax"],
    prNumber: "PR-2017-00321",
    companyName: undefined,
    phone: undefined,
    acceptingClients: false,
    isActive: false,
    isOptedIn: true,
  },
  {
    id: "pract-017",
    fullName: "David Mthethwa",
    region: "Gauteng",
    regions: ["Gauteng"],
    towns: ["Johannesburg"],
    specialisation: ["Tax Dispute Resolution & Litigation"],
    prNumber: "PR-2016-00145",
    companyName: undefined,
    phone: undefined,
    acceptingClients: false,
    isActive: false,
    isOptedIn: false,
  },
  {
    id: "pract-018",
    fullName: "Grace Mabasa",
    region: "Limpopo",
    regions: ["Limpopo", "Mpumalanga"],
    towns: ["Tzaneen", "Nelspruit"],
    specialisation: ["Personal Income Tax", "Small Business Tax"],
    prNumber: "PR-2018-00876",
    companyName: "Mabasa Tax Services",
    phone: undefined,
    acceptingClients: false,
    isActive: false,
    isOptedIn: true,
  },
];

export const mockPractitioners: Practitioner[] =
  rawMockPractitioners.map(enrichPractitioner);

function getOperatingRegions(practitioner: Practitioner): string[] {
  return practitioner.operatingRegions.length > 0
    ? practitioner.operatingRegions
    : practitioner.regions ?? [practitioner.locatedRegion];
}

// Mock search results helper — directory shows all opted-in members (active + inactive)
export function getMockPractitioners(filters?: {
  regions?: string[];
  region?: string;
  specialisation?: string[];
  acceptingClients?: boolean;
  prNumber?: string;
}): Practitioner[] {
  let results = mockPractitioners.filter((p) => p.isOptedIn);

  if (filters?.regions && filters.regions.length > 0) {
    results = results.filter((p) => {
      const operatingRegions = getOperatingRegions(p);
      if (
        operatingRegions.length === 0 ||
        operatingRegions.length === 9
      ) {
        return true;
      }
      return operatingRegions.some((r) => filters.regions!.includes(r));
    });
  }

  if (filters?.region) {
    results = results.filter((p) => {
      const operatingRegions = getOperatingRegions(p);
      if (
        operatingRegions.length === 0 ||
        operatingRegions.length === 9
      ) {
        return true;
      }
      return operatingRegions.includes(filters.region!);
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
