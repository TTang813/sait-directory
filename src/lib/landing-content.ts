import {
  Award,
  Shield,
  TrendingUp,
  CheckCircle,
  FileX,
  AlertCircle,
  AlertTriangle,
  DollarSign,
  type LucideIcon,
} from "lucide-react";

export const SAIT_MEMBERSHIP_URL = "https://www.thesait.org.za";

export const PAIN_POINTS: {
  icon: LucideIcon;
  title: string;
  body: string;
}[] = [
  {
    icon: FileX,
    title: "Incorrect Filings",
    body: "Errors that lead to rejected submissions and costly rework.",
  },
  {
    icon: AlertCircle,
    title: "Missed Compliance",
    body: "Failure to meet regulatory requirements and deadlines.",
  },
  {
    icon: AlertTriangle,
    title: "Audit Risk",
    body: "Increased scrutiny from tax authorities and investigations.",
  },
  {
    icon: DollarSign,
    title: "Financial Penalties",
    body: "Costly fines, interest charges, and potential legal consequences.",
  },
];

export const ADVANTAGES = [
  {
    icon: Award,
    title: "Professionally Qualified",
    body: "Rigorous education and certification requirements ensure practitioners have the expertise you need.",
  },
  {
    icon: Shield,
    title: "Bound by Code of Ethics",
    body: "Committed to integrity and professional conduct in every client interaction.",
  },
  {
    icon: TrendingUp,
    title: "Continuous Professional Development",
    body: "Stay current with the latest tax regulations, practices, and legislative changes.",
  },
  {
    icon: CheckCircle,
    title: "Industry-Recognised Designations",
    body: "Credentials that demonstrate expertise, commitment, and professional standing.",
  },
];

export const STATS = [
  { value: "RCB Status", label: "Recognised Controlling Body" },
  { value: "+8000", label: "Qualified Members Nationwide" },
  { value: "Since 2007", label: "Industry Leadership & Excellence" },
];

export const STEPS = [
  {
    step: "1",
    title: "Search or Apply",
    body: "Find a practitioner or start your membership application",
  },
  {
    step: "2",
    title: "Connect or Apply",
    body: "Reach out to a practitioner, or apply for SAIT membership at thesait.org.za",
  },
  {
    step: "3",
    title: "Get Support",
    body: "Receive trusted tax assistance or professional recognition",
  },
];
