"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import {
  DrawLine,
  HoverLift,
  MagneticButton,
  ParallaxHeroBg,
  Reveal,
  StaggerGroup,
  StaggerItem,
  fadeUpItem,
} from "@/components/landing/motion-primitives";
import { CAMPAIGN_GOLD, CAMPAIGN_NAVY, CAMPAIGN_PAGE_BG } from "@/lib/campaign-theme";
import {
  ADVANTAGES,
  PAIN_POINTS,
  SAIT_MEMBERSHIP_URL,
  STATS,
  STEPS,
} from "@/lib/landing-content";
import {
  Search,
  UserPlus,
  ArrowRight,
  Shield,
  ChevronDown,
} from "lucide-react";

export function LandingPage() {
  const reduced = useReducedMotion();

  return (
    <div
      className="campaign-theme min-h-screen flex flex-col"
      style={{ backgroundColor: CAMPAIGN_PAGE_BG }}
    >
      <SiteHeader active="landing" />

      {/* Hero — parallax + staggered entrance */}
      <ParallaxHeroBg imageUrl="/landing-hero.png">
        <div className="relative z-10 w-full py-20 md:py-28">
          <div className="max-w-[1200px] mx-auto px-6">
            <div className="max-w-3xl">
              <motion.div
                initial={reduced ? false : "hidden"}
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.14, delayChildren: 0.1 } },
                }}
              >
                <motion.div variants={fadeUpItem}>
                  <span
                    className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium mb-6"
                    style={{ backgroundColor: "rgba(200, 164, 93, 0.22)", color: CAMPAIGN_GOLD }}
                  >
                    SAIT Campaign 2026
                  </span>
                </motion.div>

                <motion.h1
                  variants={fadeUpItem}
                  className="text-4xl md:text-5xl lg:text-[3.4rem] font-bold leading-[1.08] text-white mb-5"
                >
                  Use a SAIT Practitioner.
                  <br />
                  <span style={{ color: CAMPAIGN_GOLD }}>Get it Right the First Time.</span>
                </motion.h1>

                <motion.p
                  variants={fadeUpItem}
                  className="text-lg md:text-xl leading-relaxed text-white/88 max-w-xl mb-8"
                >
                  When it comes to tax, accuracy isn&apos;t optional. Work with a qualified,
                  regulated, and trusted SAIT professional.
                </motion.p>

                <motion.div variants={fadeUpItem} className="flex flex-col sm:flex-row gap-4">
                  <MagneticButton
                    href="/search"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold"
                    style={{ backgroundColor: CAMPAIGN_GOLD, color: CAMPAIGN_NAVY }}
                  >
                    Find a SAIT Practitioner
                    <Search className="w-5 h-5" />
                  </MagneticButton>
                  <MagneticButton
                    href={SAIT_MEMBERSHIP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border-2 border-white/80 text-white hover:bg-white hover:text-[#0B2C5F]"
                  >
                    Join SAIT
                    <UserPlus className="w-5 h-5" />
                  </MagneticButton>
                </motion.div>

                <motion.div variants={fadeUpItem} className="mt-10">
                  <DrawLine
                    className="h-[3px] w-28 rounded-full mb-3"
                    style={{ backgroundColor: CAMPAIGN_GOLD }}
                  />
                  <p className="text-xs uppercase tracking-[0.22em] text-white/50">
                    Qualified · Regulated · Trusted
                  </p>
                </motion.div>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hidden md:flex flex-col items-center gap-2"
            animate={reduced ? undefined : { y: [0, 6, 0] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          >
            <span className="text-[10px] uppercase tracking-[0.2em]">Scroll</span>
            <ChevronDown className="w-4 h-4" />
          </motion.div>
        </div>
      </ParallaxHeroBg>

      {/* Pain — unified header + equal card grid */}
      <section className="py-14 md:py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal className="max-w-3xl mx-auto text-center mb-10 md:mb-12">
            <p
              className="text-xs font-semibold uppercase tracking-[0.2em] mb-3"
              style={{ color: CAMPAIGN_GOLD }}
            >
              The risk
            </p>
            <h2
              className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-4"
              style={{ color: CAMPAIGN_NAVY }}
            >
              Not All Tax Advice Is Equal
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Choosing the wrong tax practitioner can cost you more than money. From incorrect
              submissions to compliance risks, unqualified advice can lead to penalties, audits,
              and unnecessary stress.
            </p>
            <DrawLine
              className="h-1 w-16 rounded-full mx-auto mt-6"
              style={{ backgroundColor: CAMPAIGN_GOLD }}
            />
          </Reveal>

          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {PAIN_POINTS.map(({ icon: Icon, title, body }) => (
              <StaggerItem key={title} className="h-full">
                <HoverLift className="h-full">
                  <div className="h-full flex flex-col rounded-xl p-5 sm:p-6 bg-[#F8F9FA] border border-gray-100 hover:border-[#C8A45D]/40 hover:shadow-md transition-colors">
                    <div
                      className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 flex-shrink-0"
                      style={{ backgroundColor: "rgba(200, 164, 93, 0.14)" }}
                    >
                      <Icon className="w-5 h-5" style={{ color: CAMPAIGN_GOLD }} />
                    </div>
                    <h3
                      className="text-sm sm:text-base font-bold mb-2"
                      style={{ color: CAMPAIGN_NAVY }}
                    >
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed flex-1">{body}</p>
                  </div>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* Advantages */}
      <section className="py-16 md:py-24 relative" style={{ backgroundColor: CAMPAIGN_PAGE_BG }}>
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <Reveal className="mb-14">
              <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: CAMPAIGN_NAVY }}>
                Why Choose a SAIT Practitioner?
              </h2>
              <p className="text-base text-gray-600 leading-relaxed">
                SAIT practitioners are recognised professionals who meet strict standards of education,
                ethics, and ongoing development.
              </p>
            </Reveal>

            <div className="relative space-y-8">
            <div
              className="hidden md:block absolute left-8 top-4 bottom-4 w-px"
              style={{ backgroundColor: "rgba(200,164,93,0.35)" }}
              aria-hidden
            />
            {ADVANTAGES.map(({ icon: Icon, title, body }, index) => (
              <Reveal
                key={title}
                direction="left"
                delay={index * 0.05}
                className="relative md:pl-16"
              >
                <motion.div
                  className="hidden md:block absolute left-[1.65rem] top-8 h-3 w-3 rounded-full ring-4 ring-[#F8F9FA]"
                  style={{ backgroundColor: CAMPAIGN_GOLD }}
                  whileInView={{ scale: [0, 1.2, 1] }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.45, delay: 0.1 }}
                />
                <HoverLift>
                  <div className="relative bg-white rounded-2xl p-7 md:p-8 border border-gray-100 shadow-sm">
                    <span
                      className="absolute -top-2 left-4 text-5xl font-black opacity-[0.06] select-none"
                      style={{ color: CAMPAIGN_NAVY }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex gap-5 items-start">
                      <div
                        className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center"
                        style={{ backgroundColor: CAMPAIGN_NAVY }}
                      >
                        <Icon className="w-7 h-7" style={{ color: CAMPAIGN_GOLD }} />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold mb-2" style={{ color: CAMPAIGN_NAVY }}>
                          {title}
                        </h3>
                        <p className="text-sm text-gray-600 leading-relaxed">{body}</p>
                      </div>
                    </div>
                  </div>
                </HoverLift>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-12 md:mt-16 pt-10 border-t border-gray-200/70 text-left">
            <blockquote>
              <p className="text-base md:text-lg italic leading-relaxed" style={{ color: CAMPAIGN_NAVY }}>
                <span style={{ color: CAMPAIGN_GOLD }}>&ldquo;</span>
                Being a SAIT member has strengthened my credibility and given my clients confidence in
                my work.
                <span style={{ color: CAMPAIGN_GOLD }}>&rdquo;</span>
              </p>
            </blockquote>
            <p className="mt-4 text-sm text-gray-500">
              — SAIT Tax Professional · Chartered Tax Adviser
            </p>
          </Reveal>
          </div>
        </div>
      </section>

      {/* Stats — full-bleed band */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: CAMPAIGN_NAVY }}
      >
        <motion.div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, rgba(200,164,93,0.4) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255,255,255,0.08) 0%, transparent 40%)",
          }}
          animate={reduced ? undefined : { opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div className="max-w-[1200px] mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 items-center">
            <Reveal direction="left">
              <div className="flex items-center gap-3 mb-5">
                <Shield className="w-8 h-8" style={{ color: CAMPAIGN_GOLD }} />
                <span className="text-xs uppercase tracking-[0.2em] text-white/50">
                  SAIT Authority
                </span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 leading-tight">
                The Standard for Tax Professionals in South Africa
              </h2>
              <p className="text-white/70 leading-relaxed">
                The South African Institute of Taxation is a recognised controlling body that sets
                and maintains the highest standards in the tax profession.
              </p>
            </Reveal>

            <StaggerGroup className="grid sm:grid-cols-3 gap-4">
              {STATS.map(({ value, label }) => (
                <StaggerItem key={label}>
                  <motion.div
                    className="rounded-xl p-5 md:p-6 text-center border border-white/10 backdrop-blur-sm"
                    style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                    whileHover={
                      reduced ? undefined : { y: -4, borderColor: "rgba(200,164,93,0.5)" }
                    }
                  >
                    <div
                      className="text-xl md:text-2xl font-bold mb-1"
                      style={{ color: CAMPAIGN_GOLD }}
                    >
                      {value}
                    </div>
                    <div className="text-xs md:text-sm text-white/65 leading-snug">{label}</div>
                  </motion.div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Choose path — overlapping cards */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal className="mb-12">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CAMPAIGN_NAVY }}>
              Choose Your Path
            </h2>
          </Reveal>

          <div className="relative grid lg:grid-cols-2 gap-6 lg:items-stretch">
            <Reveal direction="left" className="h-full">
              <HoverLift className="h-full">
                <div className="h-full bg-white rounded-2xl p-8 md:p-10 border border-gray-200 shadow-md">
                  <Search className="w-11 h-11 mb-6" style={{ color: CAMPAIGN_NAVY }} />
                  <h3 className="text-2xl font-bold mb-3" style={{ color: CAMPAIGN_NAVY }}>
                    Find a Trusted Tax Practitioner
                  </h3>
                  <p className="text-sm text-gray-600 mb-8 leading-relaxed max-w-md">
                    Search our directory of qualified SAIT practitioners to find the right
                    professional for your tax needs.
                  </p>
                  <MagneticButton
                    href="/search"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold text-white"
                    style={{ backgroundColor: CAMPAIGN_NAVY }}
                  >
                    Search the Directory
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </div>
              </HoverLift>
            </Reveal>

            <Reveal direction="right" delay={0.15} className="h-full">
              <HoverLift className="h-full">
                <div
                  className="h-full rounded-2xl p-8 md:p-10 border-2 shadow-xl"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${CAMPAIGN_NAVY} 0%, #1a4d8f 100%)`,
                    borderColor: CAMPAIGN_GOLD,
                  }}
                >
                  <UserPlus className="w-11 h-11 mb-6" style={{ color: CAMPAIGN_GOLD }} />
                  <h3 className="text-2xl font-bold mb-3 text-white">Become a SAIT Member</h3>
                  <p className="text-sm text-white/85 mb-8 leading-relaxed max-w-md">
                    Join a recognised professional body and elevate your credibility, compliance,
                    and career opportunities.
                  </p>
                  <MagneticButton
                    href={SAIT_MEMBERSHIP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg font-semibold"
                    style={{ backgroundColor: CAMPAIGN_GOLD, color: CAMPAIGN_NAVY }}
                  >
                    Apply for Membership
                    <ArrowRight className="w-5 h-5" />
                  </MagneticButton>
                </div>
              </HoverLift>
            </Reveal>
          </div>
        </div>
      </section>

      {/* How it works — timeline */}
      <section className="py-16 md:py-24 bg-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6">
          <Reveal className="text-center mb-14">
            <h2 className="text-3xl md:text-4xl font-bold" style={{ color: CAMPAIGN_NAVY }}>
              How It Works
            </h2>
          </Reveal>

          <div className="relative">
            <div
              className="hidden md:block absolute top-7 left-1/6 right-1/6 h-0.5 bg-gray-200 z-0"
              aria-hidden
            />
            <StaggerGroup className="grid md:grid-cols-3 gap-8 md:gap-6">
              {STEPS.map(({ step, title, body }) => (
                <StaggerItem key={step} className="relative text-center">
                  <div className="flex flex-col items-center">
                    <div className="relative w-full h-14 flex items-center justify-center mb-5">
                      <div
                        className="w-14 h-14 flex-shrink-0 rounded-2xl flex items-center justify-center text-lg font-bold relative z-10"
                        style={{ backgroundColor: CAMPAIGN_NAVY, color: CAMPAIGN_GOLD }}
                      >
                        {step}
                      </div>
                    </div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: CAMPAIGN_NAVY }}>
                      {title}
                    </h3>
                    <p className="text-sm text-gray-600 leading-relaxed max-w-xs mx-auto">{body}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-16 md:py-20 relative overflow-hidden"
        style={{ backgroundColor: CAMPAIGN_NAVY }}
      >
        <motion.div
          className="absolute -left-20 -bottom-20 h-64 w-64 rounded-full blur-3xl pointer-events-none"
          style={{ backgroundColor: "rgba(200,164,93,0.25)" }}
          animate={reduced ? undefined : { x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          aria-hidden
        />
        <div className="max-w-[1200px] mx-auto px-6 text-center relative z-10">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don&apos;t Take Chances With Your Tax
            </h2>
            <p className="text-base md:text-lg text-white/85 mb-10 max-w-2xl mx-auto leading-relaxed">
              Work with qualified professionals who understand South African tax law and are
              committed to your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <MagneticButton
                href="/search"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold"
                style={{ backgroundColor: CAMPAIGN_GOLD, color: CAMPAIGN_NAVY }}
              >
                Find a SAIT Practitioner
                <Search className="w-5 h-5" />
              </MagneticButton>
              <MagneticButton
                href={SAIT_MEMBERSHIP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg font-semibold border-2 border-white text-white hover:bg-white hover:text-[#0B2C5F]"
              >
                Join SAIT Today
                <UserPlus className="w-5 h-5" />
              </MagneticButton>
            </div>
          </Reveal>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
