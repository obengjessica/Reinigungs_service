import { Star } from "lucide-react";
import { Typography } from "../atoms/Typography";

type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

function initialsFromName(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-brand-mint bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-cardHover md:p-8">
      <div className="mb-4 flex items-center gap-0.5">
        {Array.from({ length: 5 }).map((_, index) => (
          <Star key={index} className="h-4 w-4 fill-amber-400 text-amber-400" strokeWidth={0} />
        ))}
      </div>
      <Typography variant="body" className="mb-6 flex-1 text-ink-muted">
        &ldquo;{quote}&rdquo;
      </Typography>
      <div className="flex items-center gap-4 border-t border-brand-mint/70 pt-5">
        <div
          aria-hidden
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-brand-mintLight font-body text-sm font-bold text-brand-forest ring-2 ring-brand-mint"
        >
          {initialsFromName(author)}
        </div>
        <div>
          <Typography as="p" variant="h3" className="text-base md:text-lg">
            {author}
          </Typography>
          <Typography variant="bodyMuted" className="mt-0.5 text-sm">
            {role}
          </Typography>
        </div>
      </div>
    </article>
  );
}
