# dakerstudio.com — Context complet del projecte

Document de referència per a qualsevol persona (o IA) que hagi de continuar aquesta web. Recull el briefing, la direcció d'art, les decisions preses, l'arquitectura tècnica i el que queda pendent.

---

## 1. Qui és DakerStudio

Agència digital catalana creada per **David Arté** i **Iker Fuentes**, dos estudiants universitaris. Ajuden tot tipus de negocis (sense sector fix) a millorar la seva presència digital. Volen transmetre **professionalitat, confiança, proximitat i feina a mida** tot i ser joves.

**Serveis (6, tots amb el mateix pes):** Disseny i desenvolupament web · Xarxes socials · Aplicacions · Agents d'IA · Automatitzacions · Targetes NFC per aconseguir ressenyes de Google.

**Contacte:** WhatsApp David 645 641 876 · WhatsApp Iker 691 463 221 · Instagram @daker.studio · dakerstudio.team@gmail.com.

**Projectes reals (els únics que es mostren):**
- Restaurant Cal Franc (Mataró) — https://www.restaurantcalfranc.com/
- BVS Servei de Neteja (Mataró) — https://www.bvsserviciodelimpieza.com/

**Regla d'or del contingut:** no inventar mai testimonis, mètriques, clients ni resultats. Els 3 testimonis que hi ha són reals (2 de Cal Franc, 1 de BVS) i es mantenen en el castellà original.

## 2. Objectius de la web

Aconseguir clients · generar confiança · mostrar projectes reals · explicar els serveis · fer que contactar per **WhatsApp** sigui molt fàcil (canal principal; el formulari és secundari) · transmetre que s'estudia cada negoci i es proposa una solució a mida.

## 3. Direcció d'art

**Referència:** Aldena Studio (plantilla de Framer, https://aldena.framer.media/). No és un clon: se n'adopta el llenguatge (tipografia editorial gran, molt espai negatiu, composicions asimètriques, scroll storytelling, microinteraccions) i s'ha revisat secció per secció contra captures que van passar els fundadors.

**Tipografia**
- **Baskervville** (serif, la mateixa família que Aldena) només al titular del hero "Daker Studio", a la frase serif "Agència digital", als noms dins dels requadres de projectes, a la frase del CTA i a la marca gegant del peu.
- **Inter 700** per a tots els títols (tracking negatiu), **Inter 400** per al cos, Inter 600 en majúscules per a etiquetes i botons.
- Els fundadors van rebutjar explícitament una primera versió amb Bodoni Moda + monospace i tipografies "de plantilla" (Poppins, Montserrat…).

**Color:** negre `#0a0a0b`, paper `#f3f1ee` i blanc pur en seccions clares, **lila `#8b5cf6`** només com a accent (cursor, cometes dels testimonis, punt de "Parlem.", última paraula d'alguns títols, paraula "DakerStudio" al text de Qui som). Mai en blocs grans. Les seccions alternen fosc/clar amb `data-theme`.

**Principis:** que no sembli una landing generada per IA ni una plantilla; poques interaccions "signature" fetes bé; cada moviment té una funció; res de gradients decoratius ni graelles de cards SaaS.

## 4. Estructura de la Home (ordre fix)

1. **Hero** — logo fix de fons (queda quiet mentre la pàgina passa per sobre); titular "Daker Studio" que **es descompon en partícules** al voltant del cursor (canvas); a baix a l'esquerra "Agència *digital*" + tres línies en majúscules; a baix a la dreta la **caixa rotadora** dels 6 serveis amb línia de progrés (4,2 s per servei, pausa en hover, fletxes).
2. **Qui som** — foto propera dels fundadors (petita, en color, moviment lent d'esquerra a dreta, vel fosc) amb "DakerStudio" en cursiva a sobre; text gran en Inter bold que es **revela paraula a paraula** amb l'scroll; botó "Més sobre nosaltres".
3. **Serveis** — carrusel de **targetes blanques amb perspectiva 3D** (activa al centre, veïnes inclinades), text a l'esquerra, imatge a la dreta amb fons desenfocat que **s'amplia en hover**; fletxes, swipe i teclat.
4. **Projectes** — carrusel amb el nom del projecte en serif "fantasma" al fons, **portada tipogràfica** (captura desenfocada + nom en cursiva) que s'eixampla en hover; fletxes i swipe.
5. **Procés** — fons negre, 4 passos (Coneixem el teu negoci · Creem una proposta · La veus i decideixes · Continuem amb tu), números petits a l'esquerra, el pas actiu (hover o scroll) s'expandeix.
6. **Testimonis** — sense títol; targetes blanques amb cometes liles que **pugen i s'apilen** amb l'scroll (inclinació només durant la transició).
7. **FAQ** — fons blanc, "Les teves preguntes, *respostes*.", acordió (+/×), a la dreta imatge NFC + text + botó "Contacta'ns".
8. **CTA / Treballa amb nosaltres** — **logo en 3D** (moneda amb vora platejada, flota, gira sol i **es pot fer girar arrossegant**), a sota la frase serif "El gran treball · comença aquí" que **s'ajunta amb l'scroll**, i botó "Comença un projecte".
9. **Peu** — fons clar, "Parlem." + 2 botons WhatsApp, enllaços, telèfons i correu gran, marca "Daker Studio" gegant amb partícules (radi més petit que al hero).

**Menú:** fix a dalt, logo a l'esquerra, enllaços centrats en majúscules (INICI · QUI SOM · PROJECTES · SERVEIS · CONTACTE) i canvi d'idioma a la dreta. Sense hamburguesa. `mix-blend-mode: difference` perquè s'inverteixi sol sobre seccions clares.

**Botó fix de WhatsApp** a baix a la dreta (apareix després de mig scroll, deixa triar David o Iker). No surt a la pàgina de Contacte.

## 5. Pàgines internes

- **Qui som** (`/qui-som/`): titular, foto gran, text, equip amb WhatsApp de cadascú, 4 valors, bloc NFC.
- **Projectes** (`/projectes/`): llista editorial dels projectes.
- **Projecte** (`/projectes/<slug>/`): fitxa (client, sector, servei, lloc, web), portada, descripció, "què vam fer", captures mòbil, testimonis del client, projecte següent.
- **Contacte** (`/contacte/`): WhatsApp prioritari + formulari **sense servidor** (compon el missatge i obre WhatsApp o `mailto:`; no es guarda cap dada).
- **404** global bilingüe.

## 6. Idiomes

Català per defecte a l'arrel; castellà a `/es/` amb slugs propis (`/qui-som/` ↔ `/es/quienes-somos/`, `/projectes/` ↔ `/es/proyectos/`, `/contacte/` ↔ `/es/contacto/`). Tots els textos viuen a `content/dictionary.ts` amb la mateixa estructura en els dos idiomes, **redactats a part** (no traducció mecànica). `hreflang`, canonical, Open Graph, sitemap i robots generats.

## 7. Arquitectura tècnica

- **Next.js 16 (App Router) + Tailwind v4 + TypeScript**, **app Node normal** (com `antonella-web`): SENSE `output: "export"`. Hostinger la construeix a `.next` i la serveix amb `next start`.
- Dos root layouts: `app/(ca)/` i `app/(es)/es/`; `app/global-not-found.tsx` (cal `experimental.globalNotFound`).
- **Cap llibreria d'animació**: tot amb CSS, `IntersectionObserver` (`RevealObserver` + atribut `data-reveal`) i `requestAnimationFrame`. Cursor, partícules, moneda 3D i revelats són components propis.
- **Imatges**: `next/image` no funciona en export estàtic → `scripts/images.mjs` (sharp) genera WebP a diverses mides + icones + OG + `lib/images.generated.ts`; el component `<Picture>` fa `<img srcSet>` amb mides fixes (sense CLS). `public/img/` **es puja al repo** (el build de CI no regenera imatges).
- **Fonts**: `next/font/google` (Baskervville + Inter, subset latin: cobreix CA i ES).
- **Accessibilitat**: navegable amb teclat, `aria-*` als carrusels/acordions, `prefers-reduced-motion` respectat a tot arreu, cursor personalitzat només amb punter fi (`hover: hover` + `pointer: fine`).
- **Mobile**: experiència pròpia (swipe als carrusels, tap als acordions, ona autònoma al titular, sense cursor).

### Fitxers clau

```
app/globals.css                 tokens, tipografia i tots els estils (BEM senzill)
content/dictionary.ts           tots els textos CA/ES
content/projects.ts             projectes (slug per idioma, imatges, textos)
content/testimonials.ts         testimonis reals
content/site.ts                 contacte (telèfons, IG, correu)
components/home/*               seccions de la Home
components/ParticleText.tsx     text amb partícules (hero i peu)
components/home/Logo3D.tsx      moneda 3D
components/home/CtaText.tsx     frase que s'ajunta amb l'scroll
components/Cursor.tsx           cursor lila
lib/i18n.ts, lib/metadata.ts    rutes i SEO
scripts/images.mjs              pipeline d'imatges
assets-src/                     imatges originals (logo, fotos equip, NFC, captures, services/)
public/.htaccess                404 i cache (llegat de l'època estàtica)
.github/workflows/*.yml         backups FTP/ZIP (OBSOLETS: publicaven out/, ja no existeix)
```

### Com ampliar

- **Nou projecte:** captures a `assets-src/projects/<id>-desktop-1/2.png` i `<id>-mobile-1/2.png` → `npm run images` → entrada a `content/projects.ts` (+ testimoni a `content/testimonials.ts` si n'hi ha). Les pàgines es generen soles.
- **Nou servei / canvi de textos:** `content/dictionary.ts` (`hero.services` i `services.items`), en els dos idiomes.

## 8. Desplegament

**Mètode actual: app Next.js Node normal desplegada via el Git deployment de hPanel** (mateix patró que `antonella-web`). Repo `davidarteee/dakerstudio`, branca `main`.

Procediment:
1. Treballar localment i fer `git push` a `main`.
2. Hostinger (hPanel → Git deployment, preajust **Next.js**, **Node 22**) clona el repo, fa `npm run build` i serveix l'app amb `next start`. La sortida és `.next` (NO `out/`: ja no hi ha `output: export`).
3. Cada push a `main` redesplega.

Fixos obligatoris pel glibc antic (< 2.29) de Hostinger — el compilador natiu SWC/Turbopack no carrega:
- **`next.config.mjs`** (mai `.ts`): el `.ts` es compila amb SWC natiu i falla.
- **`"build": "next build --webpack"`**: evita Turbopack (natiu); webpack usa el fallback WASM.
- `"start": "next start"` per servir l'app Node.

Coses que NO funcionen (provades i descartades):
- Que Hostinger construeixi amb `next.config.ts` o Turbopack (glibc).
- `output: "export"` → trencava el desplegament per defecte de Hostinger (per això s'ha tret).

Backups OBSOLETS a `.github/workflows/` (`deploy.yml`, `deploy-ftp.yml`): publicaven la carpeta `out/`
de l'època estàtica, que ja no es genera. Netejar o reescriure si mai calen.

Mantenir sempre `next.config.mjs` (no `.ts`) i `build: next build --webpack`.

## 9. Historial de decisions (resum)

1. Primera versió amb Bodoni Moda + mono i files de serveis desplegables → **rebutjada**: els fundadors volien que s'assemblés molt més a Aldena.
2. Segona versió: Baskervville + Inter bold, menú centrat, partícules al titular, carrusel de serveis amb perspectiva, testimonis apilats, FAQ blanc, CTA amb foto duotò.
3. Ajustos: logo de fons més petit, foto propera amb "DakerStudio" en cursiva, portades tipogràfiques dels projectes (i correcció d'un bug: `data-reveal` en un element amb `key` canviant el deixava invisible), **logo 3D** en lloc de la foto al CTA, frase que s'ajunta amb l'scroll, partícules al peu, tocs de lila.
4. Últims retocs: vel fosc a la foto, noms de projectes en cursiva, frase del CTA sota el logo, marca del peu sense tallar-se.

## 10. Pendent / a revisar pels fundadors

- Revisar els textos redactats (línies del hero, FAQ, descripcions de serveis, procés): són propostes.
- Configurar els 3 secrets FTP al repo per activar el desplegament automàtic.
- Quan hi hagi més projectes, afegir-los seguint la secció 7.
