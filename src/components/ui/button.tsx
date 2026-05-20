"use client";

import { forwardRef, type ButtonHTMLAttributes } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      isLoading = false,
      disabled,
      asChild = false,
      children,
      ...props
    },
    ref
  ) => {
    const baseStyles = `
      inline-flex items-center justify-center gap-2
      font-semibold transition-all duration-200 ease-out
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none
    `;

    const variants = {
      primary: `
        bg-[var(--color-gold)] text-[var(--color-navy)]
        hover:bg-[#C9A820] active:bg-[#B8A01A]
        focus-visible:ring-[var(--color-gold)]
        shadow-sm hover:shadow-md
      `,
      secondary: `
        bg-transparent text-[var(--color-navy)]
        border-2 border-[var(--color-navy)]
        hover:bg-[var(--color-navy)] hover:text-[var(--color-white)]
        focus-visible:ring-[var(--color-navy)]
      `,
      ghost: `
        bg-transparent text-[var(--color-navy)]
        hover:bg-[var(--color-light-gray)]
        focus-visible:ring-[var(--color-mid-gray)]
      `,
    };

    const sizes = {
      sm: "text-sm px-4 py-2 rounded-[var(--radius-pill)]",
      md: "text-[15px] px-7 py-3 rounded-[var(--radius-pill)]",
      lg: "text-[16px] px-8 py-4 rounded-[var(--radius-pill)]",
    };

    const buttonClass = cn(baseStyles, variants[variant], sizes[size], className);

    if (asChild && !isLoading) {
      return (
        <Slot ref={ref} className={buttonClass} {...props}>
          {children}
        </Slot>
      );
    }

    return (
      <button
        ref={ref}
        className={buttonClass}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <svg
            className="animate-spin h-4 w-4 flex-shrink-0"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
