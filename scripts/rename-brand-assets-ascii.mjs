import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const pub = path.join(path.dirname(fileURLToPath(import.meta.url)), "..", "public");

const pairs = [
  ["GöReinigungsService-hero-main.svg", "goereinigungsservice-hero-main.svg"],
  ["GöReinigungsService-contact-main.svg", "goereinigungsservice-contact-main.svg"],
  [
    "GöReinigungsService-service-home-cleaning.svg",
    "goereinigungsservice-service-home-cleaning.svg",
  ],
  [
    "GöReinigungsService-service-office-cleaning.svg",
    "goereinigungsservice-service-office-cleaning.svg",
  ],
  [
    "GöReinigungsService-service-deep-cleaning.svg",
    "goereinigungsservice-service-deep-cleaning.svg",
  ],
];

for (const [from, to] of pairs) {
  const a = path.join(pub, from);
  const b = path.join(pub, to);
  if (!fs.existsSync(a)) {
    console.warn("skip missing:", from);
    continue;
  }
  if (fs.existsSync(b)) fs.unlinkSync(b);
  fs.renameSync(a, b);
  console.log(from, "->", to);
}
