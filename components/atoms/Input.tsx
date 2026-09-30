import { InputHTMLAttributes } from "react";

type InputProps = {
  type?: "text" | "email" | "tel";
  name: string;
  placeholder: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export function Input({
  type = "text",
  name,
  placeholder,
  className = "",
  ...props
}: InputProps) {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      id={props.id ?? name}
      className={`w-full rounded-xl border border-hairline bg-card px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink-muted focus:border-brand-forest focus:ring-2 focus:ring-brand-mint ${className}`.trim()}
      {...props}
    />
  );
}
