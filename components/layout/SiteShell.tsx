"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BUSINESS_CONTACT } from "@/lib/business";
import { useLanguage } from "@/lib/i18n/LanguageProvider";
import { useTheme } from "../providers/ThemeProvider";
import { Button } from "../atoms/Button";
import { Icon } from "../atoms/Icon";

type SiteShellProps = {
  children: ReactNode;
};

const serviceLinks = [
  { href: "/reinigungsservice-goettingen", label: "Reinigungsservice" },
  { href: "/bueroreinigung-goettingen", label: "Büroreinigung" },
  { href: "/grundreinigung-goettingen", label: "Grundreinigung" },
  { href: "/gebaeudereinigung-goettingen", label: "Gebäudereinigung" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function ThemeToggle({ compact = false }: { compact?: boolean }) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();
  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={t.theme.toggle}
      aria-pressed={theme === "dark"}
      className={`inline-flex cursor-pointer items-center justify-center rounded-xl border border-hairline bg-card text-ink-muted shadow-sm transition hover:text-brand-forest ${
        compact ? "h-10 w-10" : "h-11 w-11"
      }`}
    >
      <Icon name={theme === "dark" ? "sun" : "moon"} className="h-[18px] w-[18px]" strokeWidth={2} />
    </button>
  );
}

function LanguageToggle({ compact = false }: { compact?: boolean }) {
  const { locale, setLocale } = useLanguage();
  return (
    <div
      className={`inline-flex items-center rounded-xl border border-hairline bg-card p-0.5 shadow-sm ${
        compact ? "text-xs" : "text-sm"
      }`}
      role="group"
      aria-label="DE | EN"
    >
      <button
        type="button"
        onClick={() => setLocale("de")}
        aria-pressed={locale === "de"}
        className={`cursor-pointer rounded-[10px] px-2.5 py-1.5 font-semibold transition ${
          locale === "de" ? "bg-brand-forest text-white" : "text-ink-muted hover:text-brand-forest"
        }`}
      >
        DE
      </button>
      <button
        type="button"
        onClick={() => setLocale("en")}
        aria-pressed={locale === "en"}
        className={`cursor-pointer rounded-[10px] px-2.5 py-1.5 font-semibold transition ${
          locale === "en" ? "bg-brand-forest text-white" : "text-ink-muted hover:text-brand-forest"
        }`}
      >
        EN
      </button>
    </div>
  );
}

export function SiteShell({ children }: SiteShellProps) {
  const pathname = usePathname();
  const { t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { href: "/", label: t.nav.home },
    { href: "/services", label: t.nav.services },
    { href: "/about", label: t.nav.about },
    { href: "/contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-hairline bg-card/95 py-2 shadow-[0_4px_24px_-8px_rgba(31,95,74,0.12)] backdrop-blur-xl"
            : "border-b border-transparent bg-card py-3 md:py-3.5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-7xl items-center gap-3 px-4 md:px-6">
          <Link href="/" className="group flex min-w-0 flex-1 items-center gap-3 lg:flex-none">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-brand-actionGreen font-display text-sm font-black text-black shadow-sm ring-1 ring-brand-actionGreen transition group-hover:bg-brand-actionGreen/90 dark:bg-brand-forest dark:text-white dark:ring-brand-forest dark:group-hover:bg-brand-forestDark">
              RSG
            </span>
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold tracking-tight text-brand-forest md:text-lg">
                ReinigungsService-Göttingen
              </span>
              <span className="mt-0.5 hidden truncate text-xs font-medium text-ink-muted sm:block">
                Göttingen &amp; Umgebung
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Hauptnavigation">
            {navItems.map((item) => {
              const active = isActivePath(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`nav-link ${active ? "nav-link-active" : ""}`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex shrink-0 items-center gap-1.5 md:gap-2">
            <Link
              href={BUSINESS_CONTACT.phoneHref}
              className="hidden cursor-pointer items-center gap-2 rounded-xl px-3 py-2 font-body text-sm font-semibold text-brand-forest transition hover:bg-brand-mintLight xl:inline-flex dark:hover:bg-white/5"
            >
              <Icon name="phone" className="h-4 w-4" strokeWidth={2} />
              {BUSINESS_CONTACT.phoneDisplay}
            </Link>
            <div className="hidden items-center gap-1.5 md:flex">
              <LanguageToggle compact />
              <ThemeToggle compact />
            </div>
            <Button
              href="/contact"
              className="hidden px-4 py-2.5 text-sm shadow-sm sm:inline-flex md:px-5 md:py-2.5"
            >
              {t.nav.cta}
            </Button>
            <button
              type="button"
              className="inline-flex cursor-pointer items-center justify-center rounded-xl border border-hairline bg-card p-2.5 text-brand-forest shadow-sm transition hover:bg-brand-mintLight lg:hidden dark:hover:bg-white/5"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
              onClick={() => setMenuOpen((open) => !open)}
            >
              <Icon name={menuOpen ? "close" : "menu"} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-nav"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <button
              type="button"
              className="absolute inset-0 cursor-pointer bg-black/60 backdrop-blur-sm"
              aria-label="Menü schließen"
              onClick={() => setMenuOpen(false)}
            />
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[min(100%,22rem)] flex-col bg-card shadow-2xl"
              aria-label="Mobile Navigation"
            >
              <div className="flex items-center justify-between border-b border-hairline bg-surface px-5 py-4">
                <span className="font-display text-sm font-bold text-brand-forest">Menü</span>
                <button
                  type="button"
                  className="cursor-pointer rounded-lg p-2 text-brand-forest hover:bg-brand-mintLight dark:hover:bg-white/5"
                  aria-label="Menü schließen"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="close" className="h-5 w-5" />
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-1 overflow-y-auto p-4">
                {navItems.map((item, index) => {
                  const active = isActivePath(pathname, item.href);
                  return (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.04 * index }}
                    >
                      <Link
                        href={item.href}
                        className={`flex cursor-pointer items-center rounded-xl px-4 py-3.5 font-body text-base font-semibold transition ${
                          active
                            ? "bg-brand-forest text-white"
                            : "text-ink hover:bg-brand-mintLight hover:text-brand-forest dark:hover:bg-white/5"
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  );
                })}
                <div className="my-3 border-t border-hairline pt-3">
                  <p className="mb-2 px-4 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {t.nav.services}
                  </p>
                  {serviceLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block cursor-pointer rounded-xl px-4 py-2.5 font-body text-sm font-medium text-ink-muted hover:bg-brand-mintLight hover:text-brand-forest dark:hover:bg-white/5"
                      onClick={() => setMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>
              <div className="space-y-3 border-t border-hairline bg-surface p-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs font-semibold uppercase tracking-wider text-ink-muted">
                    {t.lang.label}
                  </span>
                  <div className="flex items-center gap-2">
                    <LanguageToggle />
                    <ThemeToggle />
                  </div>
                </div>
                <Link
                  href={BUSINESS_CONTACT.phoneHref}
                  className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-hairline bg-card px-4 py-3 font-body text-sm font-semibold text-brand-forest"
                  onClick={() => setMenuOpen(false)}
                >
                  <Icon name="phone" className="h-4 w-4" />
                  {t.nav.call}
                </Link>
                <Button href="/contact" className="w-full justify-center" onClick={() => setMenuOpen(false)}>
                  {t.nav.cta}
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        ) : null}
      </AnimatePresence>

      <div className="pb-[4.5rem] md:pb-0">{children}</div>

      {/* Sticky mobile contact bar */}
      <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-hairline bg-card/95 shadow-[0_-8px_24px_-8px_rgba(0,0,0,0.12)] backdrop-blur-xl md:hidden">
        <a
          href={BUSINESS_CONTACT.phoneHref}
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 border-r border-hairline bg-brand-actionGreen py-3.5 font-body text-sm font-semibold text-black dark:bg-brand-forest dark:text-white"
          style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <Icon name="phone" className="h-4 w-4" />
          {t.mobileBar.call}
        </a>
        <Link
          href="/contact"
          className="flex flex-1 cursor-pointer items-center justify-center gap-2 bg-brand-pink py-3.5 font-body text-sm font-semibold text-white"
          style={{ paddingBottom: "calc(0.875rem + env(safe-area-inset-bottom, 0px))" }}
        >
          <Icon name="mail" className="h-4 w-4" />
          {t.mobileBar.quote}
        </Link>
      </div>

      <footer className="border-t border-brand-forestDark/40 bg-brand-charcoal text-white">
        <div className="mx-auto w-full max-w-7xl px-4 py-14 md:px-6 md:py-16">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-4">
              <Link href="/" className="inline-flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-forest font-display text-sm font-black text-white ring-1 ring-brand-forest">
                  RSG
                </span>
                <span className="font-display text-lg font-bold text-white">
                  ReinigungsService-Göttingen
                </span>
              </Link>
              <p className="mt-4 max-w-sm font-body text-sm leading-relaxed text-white/70">
                {t.footer.description}
              </p>
              <div className="mt-6 space-y-3">
                <a
                  href={BUSINESS_CONTACT.emailHref}
                  className="flex cursor-pointer items-center gap-3 font-body text-sm text-white/90 transition hover:text-white"
                >
                  <Icon name="mail" className="h-4 w-4 shrink-0 text-brand-accent" strokeWidth={2} />
                  {BUSINESS_CONTACT.email}
                </a>
                <a
                  href={BUSINESS_CONTACT.phoneHref}
                  className="flex cursor-pointer items-center gap-3 font-body text-sm text-white/90 transition hover:text-white"
                >
                  <Icon name="phone" className="h-4 w-4 shrink-0 text-brand-accent" strokeWidth={2} />
                  {BUSINESS_CONTACT.phoneDisplay}
                </a>
                <p className="flex items-start gap-3 font-body text-sm text-white/90">
                  <Icon name="map" className="mt-0.5 h-4 w-4 shrink-0 text-brand-accent" strokeWidth={2} />
                  Theodor-Heuss-Str. 11, 37075 Göttingen
                </p>
              </div>
            </div>

            <div className="lg:col-span-2 lg:col-start-6">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {t.footer.linksTitle}
              </p>
              <ul className="space-y-2.5">
                <li>
                  <Link href="/" className="font-body text-sm text-white/85 transition hover:text-white">
                    {t.footer.links.home}
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="font-body text-sm text-white/85 transition hover:text-white">
                    {t.footer.links.services}
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="font-body text-sm text-white/85 transition hover:text-white">
                    {t.footer.links.about}
                  </Link>
                </li>
                <li>
                  <Link href="/#vorher-nachher" className="font-body text-sm text-white/85 transition hover:text-white">
                    {t.footer.links.beforeAfter}
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="font-body text-sm text-white/85 transition hover:text-white">
                    {t.footer.links.contact}
                  </Link>
                </li>
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {t.nav.services}
              </p>
              <ul className="space-y-2.5">
                {serviceLinks.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-body text-sm text-white/85 transition hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-3">
              <p className="mb-4 font-body text-xs font-semibold uppercase tracking-wider text-brand-accent">
                {t.nav.cta}
              </p>
              <p className="mb-5 font-body text-sm leading-relaxed text-white/70">
                {t.contact.description}
              </p>
              <Button href="/contact" variant="pink">
                {t.nav.cta}
              </Button>
              <ul className="mt-6 space-y-2.5 border-t border-white/10 pt-6">
                <li>
                  <Link href="/datenschutz" className="font-body text-sm text-white/70 transition hover:text-white">
                    {t.footer.links.datenschutz}
                  </Link>
                </li>
                <li>
                  <Link href="/impressum" className="font-body text-sm text-white/70 transition hover:text-white">
                    {t.footer.links.impressum}
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 font-body text-xs text-white/50 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} ReinigungsService-Göttingen. {t.footer.rights}</p>
          </div>
        </div>
      </footer>
    </>
  );
}
