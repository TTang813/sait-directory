"use client";

import { forwardRef, type InputHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  hint?: string;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { className, label, error, hint, leftIcon, rightIcon, id, ...props },
    ref
  ) => {
    const inputId = id || label?.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium text-[var(--color-navy)]"
            style={{ color: "var(--color-navy)" }}
          >
            {label}
            {props.required && (
              <span className="text-[var(--color-error)] ml-0.5">*</span>
            )}
          </label>
        )}

        <div className="relative flex items-center">
          {leftIcon && (
            <div className="absolute left-3.5 text-[var(--color-text-secondary)] pointer-events-none">
              {leftIcon}
            </div>
          )}

          <input
            ref={ref}
            id={inputId}
            className={cn(
              `
              w-full bg-[var(--color-white)] text-[var(--color-navy)]
              border-[1.5px] border-[var(--color-mid-gray)]
              rounded-[var(--radius-sm)]
              py-2.5 px-3.5 text-[15px]
              placeholder:text-[var(--color-text-secondary)]
              transition-all duration-200
              focus:outline-none focus:border-[var(--color-gold)]
              focus:shadow-[0_0_0_3px_rgba(226,191,41,0.15)]
              disabled:opacity-60 disabled:cursor-not-allowed disabled:bg-[var(--color-light-gray)]
            `,
              leftIcon && "pl-10",
              rightIcon && "pr-10",
              error && "border-[var(--color-error)] focus:border-[var(--color-error)] focus:shadow-[0_0_0_3px_rgba(192,57,43,0.1)]",
              className
            )}
            {...props}
          />

          {rightIcon && (
            <div className="absolute right-3.5 text-[var(--color-text-secondary)] pointer-events-none">
              {rightIcon}
            </div>
          )}
        </div>

        {error && (
          <p className="text-xs text-[var(--color-error)] flex items-center gap-1">
            <svg className="w-3 h-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                clipRule="evenodd"
              />
            </svg>
            {error}
          </p>
        )}

        {hint && !error && (
          <p className="text-xs text-[var(--color-text-secondary)]">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export { Input };
