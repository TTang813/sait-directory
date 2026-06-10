import Image from "next/image";

type CampaignBannerProps = {
  variant: "search" | "opt-in";
};

const searchFeatures = [
  {
    title: "Qualified",
    body: "Members meet SAIT professional standards and requirements.",
  },
  {
    title: "Regulated",
    body: "Practitioners are linked to a recognised professional body.",
  },
  {
    title: "Trusted",
    body: "Search by region and specialisation to find the right support.",
  },
];

const optInBenefits = [
  "Appear in the public practitioner directory when clients search by region.",
  "Highlight your selected areas of tax specialisation.",
  "Help clients verify your SAIT membership and professional status.",
  "Keep control over which public contact details are displayed.",
];

export function CampaignBanner({ variant }: CampaignBannerProps) {
  const isOptIn = variant === "opt-in";

  return (
    <section
      className="relative overflow-hidden text-white"
      style={{
        background: isOptIn
          ? "radial-gradient(circle at 20% 18%, rgba(226,191,41,0.18), transparent 26%), radial-gradient(circle at 78% 58%, rgba(64,105,255,0.22), transparent 34%), linear-gradient(135deg, #081528 0%, #1F212E 50%, #0B2C5F 100%)"
          : "radial-gradient(circle at 82% 42%, rgba(200,164,93,0.16), transparent 24%), radial-gradient(circle at 22% 20%, rgba(255,255,255,0.06), transparent 26%), linear-gradient(135deg, #1F212E 0%, #172033 48%, #0F1727 100%)",
      }}
    >
      <div
        className={isOptIn ? "absolute inset-0 opacity-70" : "absolute inset-0 opacity-35"}
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,0.14) 1px, transparent 1.5px), radial-gradient(circle, rgba(200,164,93,0.12) 1px, transparent 1.5px)",
          backgroundSize: "18px 18px, 22px 22px",
          backgroundPosition: "0 0, 8px 10px",
          maskImage:
            "linear-gradient(90deg, #000 0%, transparent 30%, transparent 68%, #000 100%)",
        }}
        aria-hidden
      />
      <div
        className={
          isOptIn
            ? "absolute -right-36 -top-20 h-[520px] w-[520px] rounded-full border-[46px] border-[rgba(200,164,93,0.16)]"
            : "absolute -right-24 -top-28 h-[360px] w-[360px] rounded-full border-[34px] border-[rgba(200,164,93,0.10)]"
        }
        style={{
          borderLeftColor: "rgba(93,140,255,0.16)",
          borderBottomColor: "rgba(93,140,255,0.08)",
          transform: "rotate(-16deg)",
        }}
        aria-hidden
      />

      <div className={isOptIn ? "relative z-10 max-w-[1200px] mx-auto px-6 py-12 md:py-16" : "relative z-10 max-w-[1200px] mx-auto px-6 py-8 md:py-10"}>
        <div className={isOptIn ? "grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center" : "grid gap-6 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"}>
          <div>
            <Image
              src="/sait-logo.png"
              alt="SAIT"
              width={132}
              height={46}
              className={isOptIn ? "mb-9 h-auto w-[132px] opacity-90" : "mb-5 h-auto w-[108px] opacity-85"}
              style={{ filter: "brightness(0) invert(1)" }}
              priority
            />

            <div className={isOptIn ? "mb-4 flex items-center gap-3 text-[12px] font-semibold uppercase tracking-[0.22em] text-white/60" : "mb-3 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-white/55"}>
              <span className={isOptIn ? "h-px w-9 bg-[#C8A45D]" : "h-px w-7 bg-[#C8A45D]"} />
              {isOptIn ? "Member Opt-in" : "Public Directory"}
            </div>

            <h1 className={isOptIn ? "mb-5 max-w-[620px] text-[clamp(34px,5vw,56px)] font-semibold leading-[1.04] tracking-[-0.045em]" : "mb-3 max-w-[520px] text-[clamp(26px,3.5vw,40px)] font-semibold leading-[1.08] tracking-[-0.035em]"}>
              {isOptIn ? (
                <>
                  Join the SAIT <br />
                  <span className="text-[#F2C94C]">Directory</span>
                </>
              ) : (
                <>
                  Find a SAIT <br />
                  <span className="text-[#F2C94C]">Practitioner</span>
                </>
              )}
            </h1>

            <p className={isOptIn ? "mb-7 max-w-xl text-[17px] font-medium leading-relaxed text-white/75" : "mb-5 max-w-lg text-[14px] md:text-[15px] font-medium leading-relaxed text-white/68"}>
              {isOptIn
                ? "Make your practice visible to clients looking for qualified and trusted tax professionals."
                : "Search verified tax professionals by region and specialisation across South Africa."}
            </p>

            <div className={isOptIn ? "mb-7 flex flex-wrap gap-2.5" : "mb-5 flex flex-wrap gap-2"}>
              {(isOptIn
                ? ["Increase Visibility", "Showcase Expertise", "Build Trust"]
                : ["Qualified", "Regulated", "Trusted"]
              ).map((label) => (
                <span
                  key={label}
                  className={isOptIn ? "rounded-full border border-[#C8A45D]/35 bg-[#071A36]/30 px-3.5 py-2 text-xs font-semibold tracking-wide text-white/90" : "rounded-full border border-[#C8A45D]/30 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold tracking-wide text-white/82"}
                >
                  {label}
                </span>
              ))}
            </div>

            <div className={isOptIn ? "h-[3px] w-28 rounded-full bg-gradient-to-r from-[#F2C94C] to-[#C8A45D]/0" : "h-[2px] w-20 rounded-full bg-gradient-to-r from-[#F2C94C] to-[#C8A45D]/0"} />
          </div>

          <aside className={isOptIn ? "rounded-[22px] border border-white/20 bg-white/[0.08] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.2)] backdrop-blur-sm" : "rounded-2xl border border-white/15 bg-white/[0.055] p-5 shadow-[0_18px_44px_rgba(0,0,0,0.16)] backdrop-blur-sm"}>
            <div className={isOptIn ? "mb-5 text-[13px] font-extrabold uppercase tracking-[0.12em] text-[#F2C94C]" : "mb-3 text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#F2C94C]"}>
              {isOptIn ? "Why opt in?" : "Why use SAIT?"}
            </div>

            {isOptIn ? (
              <div className="grid gap-4">
                {optInBenefits.map((benefit, index) => (
                  <div key={benefit} className="grid grid-cols-[24px_1fr] gap-3 text-sm leading-relaxed text-white/80">
                    <span className="grid h-6 w-6 place-items-center rounded-full border border-[#C8A45D]/45 text-xs font-extrabold text-[#F2C94C]">
                      {index + 1}
                    </span>
                    <span>{benefit}</span>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid gap-3 md:grid-cols-3">
                {searchFeatures.map((feature) => (
                  <div key={feature.title} className="grid grid-cols-[28px_1fr] gap-2.5">
                    <span className="grid h-7 w-7 place-items-center rounded-full border border-[#C8A45D]/40 bg-[#C8A45D]/10 text-xs font-extrabold text-[#F2C94C]">
                      ✓
                    </span>
                    <div>
                      <strong className="mb-1 block text-[13px] text-white">{feature.title}</strong>
                      <p className="text-[12px] leading-relaxed text-white/60">{feature.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
}
