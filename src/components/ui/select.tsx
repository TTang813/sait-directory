"use client";

import { forwardRef, type SelectHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  hint?: string;
  options: Array<{ value: string; label: string }>;
  placeholder?: string;
  dark?: boolean;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, hint, options, placeholder, dark, id, ...props }, ref) => {
    const selectId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={selectId}
            className={cn(
              "text-sm font-medium",
              dark ? "text-white/80" : "text-[var(--color-navy)]"
            )}
          >
            {label}
            {props.required && (
              <span className="text-[var(--color-error)] ml-0.5">*</span>
            )}
          </label>
        )}

        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              `
              w-full appearance-none
              border-[1.5px] rounded-[var(--radius-sm)]
              py-2.5 pl-3.5 pr-10 text-[15px]
              transition-all duration-200
              focus:outline-none
              disabled:opacity-60 disabled:cursor-not-allowed
              `,
              dark
                ? `
                    bg-white/10 border-white/20 text-white
                    focus:border-[var(--color-gold)]
                    focus:shadow-[0_0_0_3px_rgba(226,191,41,0.2)]
                  `
                : `
                    bg-[var(--color-white)] text-[var(--color-navy)]
                    border-[var(--color-mid-gray)]
                    focus:border-[var(--color-gold)]
                    focus:shadow-[0_0_0_3px_rgba(226,191,41,0.15)]
                    disabled:bg-[var(--color-light-gray)]
                  `,
              error && "border-[var(--color-error)]",
              !dark && !props.value && "text-[var(--color-text-secondary)]",
              dark && !props.value && "text-white/50",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>

          <ChevronDown
            className={cn(
              "absolute right-3.5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none",
              dark ? "text-white/60" : "text-[var(--color-text-secondary)]"
            )}
          />
        </div>

        {error && (
          <p className="text-xs text-[var(--color-error)]">{error}</p>
        )}
        {hint && !error && (
          <p className={cn("text-xs", dark ? "text-white/50" : "text-[var(--color-text-secondary)]")}>
            {hint}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
