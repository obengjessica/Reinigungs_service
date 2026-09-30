import { forwardRef, ReactNode } from "react";

type SectionProps = {
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  id?: string;
};

export const Section = forwardRef<HTMLElement, SectionProps>(function Section(
  { children, className = "", containerClassName = "", id },
  ref,
) {
  return (
    <section ref={ref} id={id} className={`py-16 md:py-24 ${className}`.trim()}>
      <div className={`mx-auto w-full max-w-7xl px-4 md:px-6 ${containerClassName}`.trim()}>
        {children}
      </div>
    </section>
  );
});
