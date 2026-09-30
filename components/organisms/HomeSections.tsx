"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { BUSINESS_CONTACT } from "@/lib/business";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { fadeInUp, staggerContainer, useMotionSafe } from "@/lib/motion";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";
import { Section } from "../atoms/Section";
import { Typography } from "../atoms/Typography";
import { BeforeAfterSlider } from "../molecules/BeforeAfterSlider";
import { FeatureItem } from "../molecules/FeatureItem";
import { ServiceCard } from "../molecules/ServiceCard";
import { ContactForm } from "./ContactForm";

const serviceIcons = ["sparkle", "clipboard", "shield", "clock", "leaf"] as const;
const serviceHrefs = [
  "/bueroreinigung-goettingen",
  "/bueroreinigung-goettingen",
  "/gebaeudereinigung-goettingen",
  "/reinigungsservice-goettingen",
  "/grundreinigung-goettingen",
];
const serviceImages = [
  "/images/slider-treppenhaus-nachher.jpg",
  "/images/gallery-buero-schreibtische.jpg",
  "/images/gallery-buero-teppich.jpg",
  "/images/slider-eingang-nachher.jpg",
  "/images/gallery-boden-fliesen.jpg",
];

const whyUsImages = [
  "/images/why-reliable.jpg",
  "/images/why-thorough.jpg",
  "/images/why-tailored.jpg",
  "/images/why-personal.jpg",
] as const;

const galleryImages = [
  { src: "/images/gallery-buero-teppich.jpg", w: 1400, h: 933 },
  { src: "/images/gallery-buero-schreibtische.jpg", w: 1000, h: 665 },
  { src: "/images/gallery-boden-fliesen.jpg", w: 1000, h: 1000 },
];

/* ---------------------------------- Hero ---------------------------------- */

export function HeroSection() {
  const { t } = useLanguage();
  const { instant } = useMotionSafe();

  return (
    <section className="relative overflow-hidden bg-brand-charcoal">
      <div className="absolute inset-0">
        <Image
          src="/images/slider-treppenhaus-nachher.jpg"
          alt="Frisch gereinigtes Treppenhaus – ReinigungsService-Göttingen"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal via-brand-charcoal/75 to-brand-charcoal/35" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal/60 via-transparent to-transparent" />
      </div>

      <div className="relative mx-auto flex w-full max-w-7xl flex-col px-4 pb-16 pt-10 md:px-6 md:pb-28 md:pt-16">
        <motion.div
          initial={instant.initial ?? "hidden"}
          animate="visible"
          variants={staggerContainer}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeInUp}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 font-body text-xs font-semibold uppercase tracking-[0.08em] text-white backdrop-blur-sm md:text-sm"
          >
            {t.hero.eyebrow}
          </motion.span>

          <motion.h1 variants={fadeInUp} className="font-display text-[2.1rem] font-bold leading-[1.14] text-white sm:text-5xl md:text-[3.4rem] md:leading-[1.08]">
            {t.hero.title}
          </motion.h1>

          <motion.p variants={fadeInUp} className="mt-4 font-display text-xl italic text-brand-accent md:text-2xl">
            {t.hero.subtitle}
          </motion.p>

          <motion.p variants={fadeInUp} className="mt-5 max-w-xl font-body text-base leading-relaxed text-white/80 md:text-lg">
            {t.hero.description}
          </motion.p>

          <motion.div variants={fadeInUp} className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href="/contact" variant="pink" className="justify-center text-base">
              {t.hero.ctaPrimary}
            </Button>
            <Button href="/services" variant="ghost" className="justify-center text-base">
              {t.hero.ctaSecondary}
            </Button>
          </motion.div>

          <motion.div variants={fadeInUp} className="mt-6">
            <a
              href={BUSINESS_CONTACT.phoneHref}
              className="inline-flex cursor-pointer items-center gap-2 font-body text-sm font-semibold text-white/90 underline-offset-4 hover:underline"
            >
              <Icon name="phone" className="h-4 w-4 text-brand-accent" />
              {t.hero.ctaCall}: {BUSINESS_CONTACT.phoneDisplay}
            </a>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 grid grid-cols-1 gap-3 border-t border-white/15 pt-6 sm:grid-cols-3"
          >
            {[t.hero.trust1, t.hero.trust2, t.hero.trust3].map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <Icon name="check" className="h-4 w-4 shrink-0 text-brand-accent" />
                <span className="font-body text-sm text-white/85">{item}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Reserved slot for client video — replace this comment with a <video> element */}
      {/*
        <video className="h-full w-full object-cover" autoPlay muted loop playsInline>
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
      */}
    </section>
  );
}

/* -------------------------------- Services -------------------------------- */

export function ServicesSection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();

  return (
    <Section id="leistungen" className="bg-surface">
      <motion.div
        initial={instant.initial ?? { opacity: 0, y: 16 }}
        whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
        animate={instant.animate}
        viewport={viewport}
        transition={transition}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="section-eyebrow">{t.services.eyebrow}</span>
        <Typography as="h2" variant="h1" className="mt-4">
          {t.services.title}
        </Typography>
        <Typography variant="bodyMuted" className="mt-4">
          {t.services.description}
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 md:mt-14 md:gap-6"
      >
        {t.services.items.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp} className={index === 3 ? "sm:col-span-2 lg:col-span-1" : ""}>
            <ServiceCard
              title={item.title}
              description={item.description}
              imageSrc={serviceImages[index]}
              href={serviceHrefs[index]}
              ctaLabel={t.services.learnMore}
            />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* -------------------------------- Why Us -------------------------------- */

export function WhyUsSection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();

  return (
    <Section className="section-band">
      <motion.div
        initial={instant.initial ?? { opacity: 0, y: 16 }}
        whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
        animate={instant.animate}
        viewport={viewport}
        transition={transition}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="section-eyebrow">{t.whyUs.eyebrow}</span>
        <Typography as="h2" variant="h1" className="mt-4">
          {t.whyUs.title}
        </Typography>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        variants={staggerContainer}
        className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 md:mt-14"
      >
        {t.whyUs.items.map((item, index) => (
          <motion.div key={item.title} variants={fadeInUp}>
            <FeatureItem title={item.title} description={item.description} imageSrc={whyUsImages[index]} />
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}

/* ----------------------------- Before / After ----------------------------- */

const pairs = (t: ReturnType<typeof useLanguage>["t"]) => [
  {
    key: "treppenhaus",
    label: t.beforeAfter.tabs.treppenhaus,
    before: "/images/slider-treppenhaus-vorher.jpg",
    after: "/images/slider-treppenhaus-nachher.jpg",
  },
  {
    key: "eingang",
    label: t.beforeAfter.tabs.eingang,
    before: "/images/slider-eingang-vorher.jpg",
    after: "/images/slider-eingang-nachher.jpg",
  },
];

export function BeforeAfterSection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();
  const options = pairs(t);
  const [active, setActive] = useState(0);
  const current = options[active];

  return (
    <Section id="vorher-nachher" className="bg-surface">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={instant.initial ?? { opacity: 0, y: 16 }}
          whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
          animate={instant.animate}
          viewport={viewport}
          transition={transition}
        >
          <span className="section-eyebrow">{t.beforeAfter.eyebrow}</span>
          <Typography as="h2" variant="h1" className="mt-4">
            {t.beforeAfter.title}
          </Typography>
          <Typography variant="bodyMuted" className="mt-4">
            {t.beforeAfter.description}
          </Typography>

          <div className="mt-6 inline-flex rounded-xl border border-hairline bg-card p-1 shadow-sm">
            {options.map((option, index) => (
              <button
                key={option.key}
                type="button"
                onClick={() => setActive(index)}
                className={`cursor-pointer rounded-lg px-4 py-2 font-body text-sm font-semibold transition ${
                  active === index
                    ? "bg-brand-forest text-white"
                    : "text-ink-muted hover:text-brand-forest"
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>

          <p className="mt-4 inline-flex items-center gap-2 font-body text-sm text-ink-muted">
            <Icon name="arrow" className="h-4 w-4 text-brand-pink" />
            {t.beforeAfter.dragHint}
          </p>
        </motion.div>

        <motion.div
          initial={instant.initial ?? { opacity: 0, scale: 0.97 }}
          whileInView={instant.animate ? undefined : { opacity: 1, scale: 1 }}
          animate={instant.animate}
          viewport={viewport}
          transition={transition}
          className="mx-auto w-full max-w-md pro-image-frame p-2"
        >
          <BeforeAfterSlider
            key={current.key}
            beforeSrc={current.before}
            afterSrc={current.after}
            beforeAlt={`${current.label} vorher`}
            afterAlt={`${current.label} nachher`}
            beforeLabel={t.beforeAfter.before}
            afterLabel={t.beforeAfter.after}
          />
        </motion.div>
      </div>
    </Section>
  );
}

/* --------------------------------- Local --------------------------------- */

export function LocalSection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();

  return (
    <Section className="section-band">
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={instant.initial ?? { opacity: 0, y: 16 }}
          whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
          animate={instant.animate}
          viewport={viewport}
          transition={transition}
          className="pro-image-frame relative aspect-[4/3] w-full"
        >
          <Image
            src="/images/mood-reinigungsausruestung.jpg"
            alt="Reinigungsausrüstung – ReinigungsService-Göttingen"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 50vw, 100vw"
          />
        </motion.div>

        <motion.div
          initial={instant.initial ?? { opacity: 0, y: 16 }}
          whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
          animate={instant.animate}
          viewport={viewport}
          transition={transition}
        >
          <span className="section-eyebrow">{t.local.eyebrow}</span>
          <Typography as="h2" variant="h1" className="mt-4">
            {t.local.title}
          </Typography>
          <Typography variant="bodyMuted" className="mt-4">
            {t.local.description}
          </Typography>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="glass-panel p-4">
              <p className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-brand-forest">
                <Icon name="map" className="h-4 w-4" />
                {t.local.addressLabel}
              </p>
              <p className="mt-2 font-body text-sm text-ink">
                Theodor-Heuss-Str. 11
                <br />
                37075 Göttingen
              </p>
            </div>
            <div className="glass-panel p-4">
              <p className="flex items-center gap-2 font-body text-xs font-semibold uppercase tracking-wide text-brand-forest">
                <Icon name="sparkle" className="h-4 w-4" />
                {t.local.areaLabel}
              </p>
              <p className="mt-2 font-body text-sm text-ink">{t.local.areaValue}</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
}

/* -------------------------------- Gallery -------------------------------- */

export function GallerySection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();

  return (
    <Section className="bg-surface">
      <motion.div
        initial={instant.initial ?? { opacity: 0, y: 16 }}
        whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
        animate={instant.animate}
        viewport={viewport}
        transition={transition}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="section-eyebrow">{t.gallery.eyebrow}</span>
        <Typography as="h2" variant="h1" className="mt-4">
          {t.gallery.title}
        </Typography>
        <Typography variant="bodyMuted" className="mt-4">
          {t.gallery.description}
        </Typography>
      </motion.div>

      <div className="mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 no-scrollbar md:mt-14 md:grid md:grid-cols-3 md:overflow-visible">
        {t.gallery.items.map((item, index) => (
          <div
            key={item.title}
            className="pro-image-frame relative aspect-[4/3] w-[82%] shrink-0 snap-center md:w-auto"
          >
            <Image
              src={galleryImages[index].src}
              alt={item.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 33vw, 82vw"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4">
              <p className="font-body text-xs font-semibold uppercase tracking-wide text-brand-accent">
                {item.tag}
              </p>
              <p className="font-body text-sm font-semibold text-white">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

/* ---------------------------------- FAQ ---------------------------------- */

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="glass-panel overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-left font-body text-base font-semibold text-ink md:px-6 md:py-5"
      >
        {q}
        <Icon
          name="arrow"
          className={`h-4 w-4 shrink-0 text-brand-forest transition-transform ${open ? "rotate-90" : ""}`}
        />
      </button>
      {open ? (
        <div className="px-5 pb-5 font-body text-sm leading-relaxed text-ink-muted md:px-6 md:pb-6">
          {a}
        </div>
      ) : null}
    </div>
  );
}

export function FaqSection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();

  return (
    <Section className="section-band">
      <motion.div
        initial={instant.initial ?? { opacity: 0, y: 16 }}
        whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
        animate={instant.animate}
        viewport={viewport}
        transition={transition}
        className="mx-auto max-w-2xl text-center"
      >
        <span className="section-eyebrow">{t.faq.eyebrow}</span>
        <Typography as="h2" variant="h1" className="mt-4">
          {t.faq.title}
        </Typography>
      </motion.div>

      <div className="mx-auto mt-10 max-w-3xl space-y-3 md:mt-14">
        {t.faq.items.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>
    </Section>
  );
}

/* -------------------------------- Contact -------------------------------- */

export function ContactSection() {
  const { t } = useLanguage();
  const { viewport, transition, instant } = useMotionSafe();

  return (
    <Section id="kontakt" className="bg-surface">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <motion.div
          initial={instant.initial ?? { opacity: 0, y: 16 }}
          whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
          animate={instant.animate}
          viewport={viewport}
          transition={transition}
        >
          <span className="section-eyebrow">{t.contact.eyebrow}</span>
          <Typography as="h2" variant="h1" className="mt-4">
            {t.contact.title}
          </Typography>
          <Typography variant="bodyMuted" className="mt-4">
            {t.contact.description}
          </Typography>

          <div className="mt-8 space-y-4">
            <a
              href={BUSINESS_CONTACT.phoneHref}
              className="flex cursor-pointer items-center gap-4 rounded-xl border border-hairline bg-card p-4 transition hover:border-brand-forest/30 hover:shadow-card"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mintLight text-brand-forest">
                <Icon name="phone" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {t.contact.phoneLabel}
                </span>
                <span className="block font-body text-sm font-semibold text-ink">
                  {BUSINESS_CONTACT.phoneDisplay}
                </span>
              </span>
            </a>
            <a
              href={BUSINESS_CONTACT.emailHref}
              className="flex cursor-pointer items-center gap-4 rounded-xl border border-hairline bg-card p-4 transition hover:border-brand-forest/30 hover:shadow-card"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mintLight text-brand-forest">
                <Icon name="mail" className="h-5 w-5" />
              </span>
              <span className="min-w-0">
                <span className="block font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {t.contact.emailLabel}
                </span>
                <span className="block truncate font-body text-sm font-semibold text-ink">
                  {BUSINESS_CONTACT.email}
                </span>
              </span>
            </a>
            <div className="flex items-center gap-4 rounded-xl border border-hairline bg-card p-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-brand-mintLight text-brand-forest">
                <Icon name="map" className="h-5 w-5" />
              </span>
              <span>
                <span className="block font-body text-xs font-semibold uppercase tracking-wide text-ink-muted">
                  {t.contact.addressLabel}
                </span>
                <span className="block font-body text-sm font-semibold text-ink">
                  Theodor-Heuss-Str. 11, 37075 Göttingen
                </span>
              </span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={instant.initial ?? { opacity: 0, y: 16 }}
          whileInView={instant.animate ? undefined : { opacity: 1, y: 0 }}
          animate={instant.animate}
          viewport={viewport}
          transition={transition}
          className="glass-panel p-5 md:p-8"
        >
          <ContactForm />
        </motion.div>
      </div>
    </Section>
  );
}
