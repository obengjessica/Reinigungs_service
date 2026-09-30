import { SelectHTMLAttributes } from "react";

type SelectProps = {
  name: string;
  className?: string;
  children: React.ReactNode;
} & SelectHTMLAttributes<HTMLSelectElement>;

export function Select({ name, className = "", children, ...props }: SelectProps) {
  return (
    <select
      name={name}
      id={props.id ?? name}
      className={`w-full rounded-xl border border-hairline bg-card px-4 py-3 text-base text-ink outline-none transition focus:border-brand-forest focus:ring-2 focus:ring-brand-mint ${className}`.trim()}
      {...props}
    >
      {children}
    </select>
  );
}
