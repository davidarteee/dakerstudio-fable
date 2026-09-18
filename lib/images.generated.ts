// Fitxer generat per scripts/images.mjs — no editar a mà.
export type ImageAsset = { src: string; srcSet: string; width: number; height: number };
export const images = {
  "logo": {
    "src": "/img/logo-192.png",
    "srcSet": "/img/logo-96.png 96w, /img/logo-192.png 192w",
    "width": 192,
    "height": 192
  },
  "team": {
    "src": "/img/team-960.webp",
    "srcSet": "/img/team-640.webp 640w, /img/team-960.webp 960w",
    "width": 960,
    "height": 1200
  },
  "team-close": {
    "src": "/img/team-close-1200.webp",
    "srcSet": "/img/team-close-480.webp 480w, /img/team-close-800.webp 800w, /img/team-close-1200.webp 1200w",
    "width": 1200,
    "height": 1200
  },
  "nfc-cards": {
    "src": "/img/nfc-cards-1024.webp",
    "srcSet": "/img/nfc-cards-640.webp 640w, /img/nfc-cards-1024.webp 1024w",
    "width": 1024,
    "height": 853
  },
  "project-bvs-desktop-1": {
    "src": "/img/project-bvs-desktop-1-1600.webp",
    "srcSet": "/img/project-bvs-desktop-1-800.webp 800w, /img/project-bvs-desktop-1-1200.webp 1200w, /img/project-bvs-desktop-1-1600.webp 1600w",
    "width": 1600,
    "height": 1000
  },
  "project-bvs-desktop-2": {
    "src": "/img/project-bvs-desktop-2-1600.webp",
    "srcSet": "/img/project-bvs-desktop-2-800.webp 800w, /img/project-bvs-desktop-2-1200.webp 1200w, /img/project-bvs-desktop-2-1600.webp 1600w",
    "width": 1600,
    "height": 1000
  },
  "project-bvs-mobile-1": {
    "src": "/img/project-bvs-mobile-1-860.webp",
    "srcSet": "/img/project-bvs-mobile-1-430.webp 430w, /img/project-bvs-mobile-1-860.webp 860w",
    "width": 860,
    "height": 1864
  },
  "project-bvs-mobile-2": {
    "src": "/img/project-bvs-mobile-2-860.webp",
    "srcSet": "/img/project-bvs-mobile-2-430.webp 430w, /img/project-bvs-mobile-2-860.webp 860w",
    "width": 860,
    "height": 1864
  },
  "project-calfranc-desktop-1": {
    "src": "/img/project-calfranc-desktop-1-1600.webp",
    "srcSet": "/img/project-calfranc-desktop-1-800.webp 800w, /img/project-calfranc-desktop-1-1200.webp 1200w, /img/project-calfranc-desktop-1-1600.webp 1600w",
    "width": 1600,
    "height": 1000
  },
  "project-calfranc-desktop-2": {
    "src": "/img/project-calfranc-desktop-2-1600.webp",
    "srcSet": "/img/project-calfranc-desktop-2-800.webp 800w, /img/project-calfranc-desktop-2-1200.webp 1200w, /img/project-calfranc-desktop-2-1600.webp 1600w",
    "width": 1600,
    "height": 1000
  },
  "project-calfranc-mobile-1": {
    "src": "/img/project-calfranc-mobile-1-860.webp",
    "srcSet": "/img/project-calfranc-mobile-1-430.webp 430w, /img/project-calfranc-mobile-1-860.webp 860w",
    "width": 860,
    "height": 1864
  },
  "project-calfranc-mobile-2": {
    "src": "/img/project-calfranc-mobile-2-860.webp",
    "srcSet": "/img/project-calfranc-mobile-2-430.webp 430w, /img/project-calfranc-mobile-2-860.webp 860w",
    "width": 860,
    "height": 1864
  },
  "service-agents-ia": {
    "src": "/img/service-agents-ia-1600.webp",
    "srcSet": "/img/service-agents-ia-800.webp 800w, /img/service-agents-ia-1200.webp 1200w, /img/service-agents-ia-1600.webp 1600w",
    "width": 1600,
    "height": 1065
  },
  "service-aplicacions": {
    "src": "/img/service-aplicacions-1600.webp",
    "srcSet": "/img/service-aplicacions-800.webp 800w, /img/service-aplicacions-1200.webp 1200w, /img/service-aplicacions-1600.webp 1600w",
    "width": 1600,
    "height": 1068
  },
  "service-automatitzacions": {
    "src": "/img/service-automatitzacions-1600.webp",
    "srcSet": "/img/service-automatitzacions-800.webp 800w, /img/service-automatitzacions-1200.webp 1200w, /img/service-automatitzacions-1600.webp 1600w",
    "width": 1600,
    "height": 1133
  },
  "service-xarxes-socials": {
    "src": "/img/service-xarxes-socials-1600.webp",
    "srcSet": "/img/service-xarxes-socials-800.webp 800w, /img/service-xarxes-socials-1200.webp 1200w, /img/service-xarxes-socials-1600.webp 1600w",
    "width": 1600,
    "height": 1065
  }
} as const satisfies Record<string, ImageAsset>;
export type ImageKey = keyof typeof images;
