import { TextareaHTMLAttributes } from "react";

type TextareaProps = {
  name: string;
  placeholder: string;
  rows?: number;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({
  name,
  placeholder,
  rows = 5,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <textarea
      name={name}
      placeholder={placeholder}
      rows={rows}
      id={props.id ?? name}
      className={`w-full rounded-xl border border-hairline bg-card px-4 py-3 text-base text-ink outline-none transition placeholder:text-ink-muted focus:border-brand-forest focus:ring-2 focus:ring-brand-mint ${className}`.trim()}
      {...props}
    />
  );
}
