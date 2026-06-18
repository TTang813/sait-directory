import { mockPractitioners } from "@/lib/mock-data";

export function generateStaticParams() {
  return mockPractitioners.map((practitioner) => ({ id: practitioner.id }));
}

export default function PractitionerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
