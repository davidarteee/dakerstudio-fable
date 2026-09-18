# dakerstudio.com

Web de DakerStudio. Next.js 16 (App Router) amb **exportació estàtica** (`out/`), desplegada a Hostinger per FTP amb GitHub Actions.

## Comandes

```bash
npm run dev      # servidor local (http://localhost:3000)
npm run images   # regenera public/img i lib/images.generated.ts des d'assets-src/
npm run build    # exportació estàtica a out/
npm run lint
```

## Estructura

```
app/
  (ca)/            rutes en català  → /, /qui-som/, /projectes/, /projectes/[slug]/, /contacte/
  (es)/es/         rutes en castellà → /es/, /es/quienes-somos/, /es/proyectos/, /es/proyectos/[slug]/, /es/contacto/
  global-not-found.tsx, sitemap.ts, robots.ts, icon.png, opengraph-image.png
  globals.css      tokens, tipografia i tots els estils dels components
components/
  home/            seccions de la Home (Hero + HeroTitle, ServiceRotator, About, Services, ProjectsShowcase, Process, Testimonials, Faq, Cta)
  pages/           pàgines completes (HomePage, AboutPage, ProjectsPage, ProjectPage, ContactPage)
  Cursor, Nav, StickyCta, Footer, SiteShell, Picture, ContactForm, RevealObserver, Icons
content/
  dictionary.ts    tots els textos en CA i ES (mateixa estructura, redactats per separat)
  projects.ts      projectes (slug per idioma, imatges, textos)
  testimonials.ts  testimonis reals (text original en castellà)
  site.ts          contacte: WhatsApp David/Iker, Instagram, correu
lib/
  i18n.ts          rutes localitzades, SITE_URL
  metadata.ts      metadades SEO (canonical, hreflang, Open Graph)
  fonts.ts         Baskervville (hero/CTA/peu) · Inter (títols bold, cos, etiquetes)
  images.generated.ts  manifest d'imatges (generat, no editar)
assets-src/        imatges originals (logo, equip, NFC, captures dels projectes, services/ amb 4 fotos d'Unsplash ja usades abans per DakerStudio)
scripts/images.mjs pipeline d'imatges (sharp → WebP en diverses mides + icones + OG)
public/.htaccess   404 i cache per a Apache/Hostinger
```

## Afegir un projecte

1. Captures a `assets-src/projects/` amb el patró `<id>-desktop-1.png`, `<id>-desktop-2.png`, `<id>-mobile-1.png`, `<id>-mobile-2.png`.
2. `npm run images`.
3. Nova entrada a `content/projects.ts` (slug en CA i ES, textos, claus d'imatge `project-<id>-...`).
4. Si té testimoni, afegir-lo a `content/testimonials.ts` amb el `projectId`.

Les pàgines `/projectes/<slug>/` i `/es/proyectos/<slug>/` es generen soles.

## Afegir o canviar un servei

Editar `content/dictionary.ts` (`hero.services` per al rotador i `services.items` per a les files), en tots dos idiomes.

## Desplegament

Cada push a `main` executa `.github/workflows/deploy.yml`: `npm ci` → `npm run build` → puja `out/` per FTP a l'arrel del `public_html`.
Secrets necessaris al repo: `FTP_SERVER`, `FTP_USERNAME`, `FTP_PASSWORD`.

## Decisions de disseny

- Referència: Aldena Studio (Framer). Serif **Baskervville** només al hero, al CTA i a la marca del peu; **títols en Inter 700**, cos en Inter 400.
- Hero: logo fix de fons (`.hero__bg`, per això `<html>` no té background) i titular en canvas que es descompon en partícules al voltant del cursor (`components/home/HeroTitle.tsx`).
- Cursor personalitzat només amb punter fi (`hover: hover` + `pointer: fine`); al mòbil no existeix.
- Totes les animacions respecten `prefers-reduced-motion`.
- Cap dependència d'animació: tot amb CSS + IntersectionObserver + `requestAnimationFrame`.
- Formulari de contacte sense servidor: obre WhatsApp o el correu amb el missatge compost.
