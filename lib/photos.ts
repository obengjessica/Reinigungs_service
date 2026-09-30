/**
 * Real client-provided photography, used throughout the site instead of
 * generic stock imagery. Images live in /public/images and were prepared
 * from the assets supplied by ReinigungsService-Göttingen.
 */
export const PHOTOS = {
  hero: "/images/slider-treppenhaus-nachher.jpg",
  about: "/images/mood-alltagsreinigung.jpg",
  contact: "/images/slider-eingang-nachher.jpg",
  contactIntro: "/images/mood-reinigungsausruestung.jpg",
  services: {
    home: "/images/gallery-boden-fliesen.jpg",
    office: "/images/gallery-buero-schreibtische.jpg",
    deep: "/images/gallery-buero-teppich.jpg",
  },
  blog: {
    freshHome: "/images/mood-alltagsreinigung.jpg",
    officeHygiene: "/images/gallery-buero-schreibtische.jpg",
    deepWhen: "/images/gallery-buero-teppich.jpg",
  },
} as const;

export const PHOTO_LICENSE = {
  provider: "Eigene Kundenaufnahmen",
  notice: "Website-Bilder sind vom Kunden bereitgestellte Aufnahmen der eigenen Reinigungsarbeiten.",
} as const;

export function isRemotePhoto(src: string) {
  return src.startsWith("http://") || src.startsWith("https://");
}
