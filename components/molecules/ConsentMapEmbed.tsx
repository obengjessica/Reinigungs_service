"use client";

type ConsentMapEmbedProps = {
  title: string;
  src: string;
};

export function ConsentMapEmbed({ title, src }: ConsentMapEmbedProps) {
  return (
    <iframe
      title={title}
      src={src}
      className="h-64 w-full"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
