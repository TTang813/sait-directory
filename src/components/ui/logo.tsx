import Image from "next/image";
import Link from "next/link";

interface LogoProps {
  variant?: "dark" | "light";
  width?: number;
  className?: string;
  href?: string;
}

export function Logo({
  variant = "dark",
  width = 160,
  className,
  href = "/",
}: LogoProps) {
  return (
    <Link href={href} className={className}>
      {variant === "light" ? (
        /* Light text logo for dark backgrounds */
        <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <div
            style={{
              background: "var(--color-gold)",
              borderRadius: "6px",
              padding: "4px 8px",
              fontFamily: "var(--font-body)",
              fontSize: "11px",
              fontWeight: 900,
              letterSpacing: "0.08em",
              color: "#1F212E",
              lineHeight: 1,
            }}
          >
            SAIT
          </div>
          <span
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "12px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Practitioner Directory
          </span>
        </div>
      ) : (
        /* Dark logo for light backgrounds */
        <Image
          src="/sait-logo.png"
          alt="SAIT - South African Institute of Taxation"
          width={width}
          height={Math.round((width * 50) / 288)}
          style={{ height: "auto", width: "auto" }}
          priority
        />
      )}
    </Link>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="SAIT"
    >
      <rect width="40" height="40" rx="8" fill="#1F212E" />
      <text
        x="20"
        y="28"
        fontFamily="Montserrat, sans-serif"
        fontSize="22"
        fontWeight="800"
        fill="#E2BF29"
        textAnchor="middle"
      >
        S
      </text>
    </svg>
  );
}
