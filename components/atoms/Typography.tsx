import { ReactNode } from "react";

type TypographyVariant =
  | "display"
  | "h1"
  | "h2"
  | "h3"
  | "body"
  | "bodyMuted"
  | "eyebrow";

type TypographyProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  variant?: TypographyVariant;
  className?: string;
  children: ReactNode;
};

const variantClasses: Record<TypographyVariant, string> = {
  display:
    "font-display text-[2.25rem] font-bold leading-[1.12] tracking-[-0.02em] text-ink sm:text-5xl md:text-[3.25rem] md:leading-[1.08]",
  h1: "font-display text-3xl font-bold leading-[1.15] tracking-[-0.01em] text-ink md:text-[2.75rem]",
  h2: "font-display text-2xl font-bold leading-[1.2] text-ink md:text-[2rem]",
  h3: "font-body text-lg font-semibold leading-snug text-ink md:text-xl",
  body: "font-body text-[1.0625rem] leading-[1.7] text-ink-muted md:text-[1.125rem]",
  bodyMuted: "font-body text-[1.0625rem] leading-[1.7] text-ink-muted md:text-[1.125rem]",
  eyebrow:
    "font-body text-xs font-semibold uppercase tracking-[0.06em] text-brand-forest md:text-sm",
};

export function Typography({
  as = "p",
  variant = "body",
  className = "",
  children,
}: TypographyProps) {
  const Component = as;
  return (
    <Component className={`${variantClasses[variant]} ${className}`.trim()}>
      {children}
    </Component>
  );
}
