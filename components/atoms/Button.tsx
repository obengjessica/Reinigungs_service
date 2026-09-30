import Link from "next/link";
import { ButtonHTMLAttributes, MouseEventHandler, ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "pink" | "ghost";

type ButtonProps = {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
  href?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-brand-actionGreen text-black shadow-sm hover:-translate-y-0.5 hover:bg-brand-actionGreen/90 hover:shadow-md focus-visible:ring-brand-forest dark:bg-brand-forest dark:text-white dark:hover:bg-brand-forestDark",
  secondary:
    "border border-brand-forest bg-transparent text-brand-forest hover:-translate-y-0.5 hover:bg-brand-mintLight focus-visible:ring-brand-forest dark:hover:bg-white/5",
  pink:
    "bg-brand-pink text-white shadow-sm hover:-translate-y-0.5 hover:bg-brand-pinkDark hover:shadow-md focus-visible:ring-brand-pink",
  ghost:
    "bg-white/10 text-white border border-white/30 hover:-translate-y-0.5 hover:bg-white/20 focus-visible:ring-white",
};

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
  type = "button",
  ...props
}: ButtonProps) {
  const classes =
    `inline-flex cursor-pointer items-center justify-center rounded-xl px-6 py-3 text-base font-semibold transition duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${variantClasses[variant]} ${className}`.trim();

  if (href) {
    const linkOnClick = props.onClick as MouseEventHandler<HTMLAnchorElement> | undefined;
    return (
      <Link href={href} className={classes} onClick={linkOnClick}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} className={classes} {...props}>
      {children}
    </button>
  );
}
