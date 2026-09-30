import Image from "next/image";
import { Typography } from "../atoms/Typography";

type FeatureItemProps = {
  title: string;
  description: string;
  imageSrc: string;
};

export function FeatureItem({ title, description, imageSrc }: FeatureItemProps) {
  return (
    <article className="group h-full rounded-2xl border border-brand-mint bg-card p-6 shadow-card transition duration-300 hover:-translate-y-1 hover:border-brand-forest/25 hover:shadow-cardHover md:p-7">
      <div className="relative mb-5 h-32 overflow-hidden rounded-xl bg-brand-mintLight">
        <Image src={imageSrc} alt="" fill sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition duration-500 group-hover:scale-105" />
      </div>
      <Typography as="h3" variant="h3" className="mb-3">
        {title}
      </Typography>
      <Typography variant="bodyMuted">{description}</Typography>
    </article>
  );
}
