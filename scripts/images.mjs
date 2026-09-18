// Genera les imatges optimitzades (WebP a diverses mides) a partir d'assets-src/
// i escriu lib/images.generated.ts amb src/srcSet/width/height per evitar CLS.
// Executa: npm run images
import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "assets-src";
const OUT = "public/img";
await mkdir(OUT, { recursive: true });
await mkdir("app", { recursive: true });

/** @type {Record<string, {src:string; srcSet:string; width:number; height:number}>} */
const manifest = {};

async function variants(name, input, widths, { quality = 80 } = {}) {
  const meta = await input.metadata();
  const ratio = meta.height / meta.width;
  const parts = [];
  let largest;
  for (const w of widths) {
    if (w > meta.width && largest) continue;
    const width = Math.min(w, meta.width);
    const file = `${name}-${width}.webp`;
    await input.clone().resize({ width }).webp({ quality, effort: 5 }).toFile(path.join(OUT, file));
    parts.push(`/img/${file} ${width}w`);
    largest = { file, width };
  }
  manifest[name] = {
    src: `/img/${largest.file}`,
    srcSet: parts.join(", "),
    width: largest.width,
    height: Math.round(largest.width * ratio),
  };
}

// --- Logo: el PNG és un cercle; apliquem màscara circular perquè les cantonades siguin transparents.
const logoIn = sharp(path.join(SRC, "logo.png"));
const lm = await logoIn.metadata();
const size = Math.min(lm.width, lm.height);
const mask = Buffer.from(
  `<svg width="${size}" height="${size}"><circle cx="${size / 2}" cy="${size / 2}" r="${size / 2 - 2}" fill="#fff"/></svg>`,
);
const logoCircle = sharp(await logoIn.resize(size, size, { fit: "cover" }).ensureAlpha().toBuffer()).composite([
  { input: mask, blend: "dest-in" },
]);
const logoBuf = await logoCircle.png().toBuffer();
for (const [file, px] of [
  ["app/icon.png", 512],
  ["app/apple-icon.png", 180],
  [`${OUT}/logo-96.png`, 96],
  [`${OUT}/logo-192.png`, 192],
  [`${OUT}/logo-800.png`, 800], // fons fix del hero i cares del logo 3D
]) {
  await sharp(logoBuf).resize(px, px).png({ compressionLevel: 9 }).toFile(file);
}
manifest.logo = { src: "/img/logo-192.png", srcSet: "/img/logo-96.png 96w, /img/logo-192.png 192w", width: 192, height: 192 };

// --- Open Graph: fons negre + logo centrat.
await sharp({ create: { width: 1200, height: 630, channels: 4, background: "#0a0a0b" } })
  .composite([{ input: await sharp(logoBuf).resize(360, 360).toBuffer(), gravity: "centre" }])
  .png()
  .toFile("app/opengraph-image.png");

// --- Foto de l'equip: retall 4:5 des de dalt (les cares queden al terç superior).
const team = sharp(path.join(SRC, "team.jpg"));
const tm = await team.metadata();
const tw = tm.width;
const th = Math.round((tw * 5) / 4);
await variants("team", sharp(await team.extract({ left: 0, top: 0, width: tw, height: th }).toBuffer()), [640, 960, 1400], { quality: 78 });

// --- Foto propera de l'equip (secció Qui som): retall quadrat amb les cares al centre
const close = sharp(path.join(SRC, "team-close.jpg"));
const cm = await close.metadata();
const side = Math.min(cm.width, cm.height);
await variants(
  "team-close",
  sharp(await close.extract({ left: Math.round((cm.width - side) / 2), top: Math.round((cm.height - side) * 0.25), width: side, height: side }).toBuffer()),
  [480, 800, 1200],
  { quality: 80 },
);

// --- Targetes NFC
await variants("nfc-cards", sharp(path.join(SRC, "nfc-cards.webp")), [640, 1024, 1400]);

// --- Captures dels projectes
const shots = (await readdir(path.join(SRC, "projects"))).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
for (const f of shots) {
  const name = f.replace(/\.[^.]+$/, "");
  const isMobile = /mobile/.test(name);
  await variants(`project-${name}`, sharp(path.join(SRC, "projects", f)), isMobile ? [430, 860] : [800, 1200, 1600], { quality: 82 });
}

// --- Imatges dels serveis (assets-src/services/<nom>.jpg → service-<nom>)
const services = (await readdir(path.join(SRC, "services"))).filter((f) => /\.(png|jpe?g|webp)$/i.test(f));
for (const f of services) {
  const name = f.replace(/\.[^.]+$/, "");
  await variants(`service-${name}`, sharp(path.join(SRC, "services", f)), [800, 1200, 1600], { quality: 78 });
}

const ts = `// Fitxer generat per scripts/images.mjs — no editar a mà.
export type ImageAsset = { src: string; srcSet: string; width: number; height: number };
export const images = ${JSON.stringify(manifest, null, 2)} as const satisfies Record<string, ImageAsset>;
export type ImageKey = keyof typeof images;
`;
await writeFile("lib/images.generated.ts", ts);
console.log(`OK — ${Object.keys(manifest).length} imatges`);
