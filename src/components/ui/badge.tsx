import { cn } from "@/lib/utils";

export type BadgeVariant = "active" | "inactive" | "neutral" | "gold" | "outline";

export interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  active: `
    bg-[var(--color-success-bg)] text-[var(--color-success)]
    border border-[#C5E5D4]
  `,
  inactive: `
    bg-[var(--color-warning-bg)] text-[var(--color-warning)]
    border border-[#F5DFA0]
  `,
  neutral: `
    bg-[var(--color-light-gray)] text-[var(--color-neutral-dark)]
    border border-[var(--color-mid-gray)]
  `,
  gold: `
    bg-[var(--color-gold)] text-[var(--color-navy)]
    border border-[#D4AD1A]
  `,
  outline: `
    bg-transparent text-[var(--color-navy)]
    border border-[var(--color-mid-gray)]
  `,
};

export function Badge({ variant = "neutral", children, className }: BadgeProps) {
  return (
    <span
      className={cn(
        `
        inline-flex items-center gap-1
        text-[12px] font-bold
        px-2.5 py-1
        rounded-[var(--radius-pill)]
        whitespace-nowrap
        `,
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
