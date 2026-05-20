import { cn } from "@/lib/utils";

export interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  onClick?: () => void;
}

export function Card({ children, className, hover = false, onClick }: CardProps) {
  return (
    <div
      onClick={onClick}
      className={cn(
        `
        bg-[var(--color-white)]
        border border-[var(--color-light-gray)]
        rounded-[var(--radius-md)]
        p-6
        shadow-[var(--shadow-md)]
        transition-all duration-200
        `,
        hover && "cursor-pointer hover:shadow-[var(--shadow-lg)] hover:-translate-y-0.5",
        className
      )}
    >
      {children}
    </div>
  );
}

export function CardHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mb-4", className)}>{children}</div>
  );
}

export function CardContent({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("text-sm text-[var(--color-text-secondary)]", className)}>{children}</div>
  );
}

export function CardFooter({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("mt-4 pt-4 border-t border-[var(--color-light-gray)]", className)}>{children}</div>
  );
}
