import type { Lang } from "@/lib/i18n";
import type { ImageKey } from "@/lib/images.generated";

export type ProjectCopy = {
  sector: string;
  service: string;
  tagline: string;
  description: string;
  did: string[];
};

export type Project = {
  id: "cal-franc" | "bvs";
  name: string;
  slug: Record<Lang, string>;
  url: string;
  location: string;
  images: { cover: ImageKey; hover: ImageKey; mobile: ImageKey[] };
  copy: Record<Lang, ProjectCopy>;
};

// Per afegir un projecte: nova entrada aquí + captures a assets-src/projects + `npm run images`.
export const projects: Project[] = [
  {
    id: "cal-franc",
    name: "Restaurant Cal Franc",
    slug: { ca: "restaurant-cal-franc", es: "restaurante-cal-franc" },
    url: "https://www.restaurantcalfranc.com/",
    location: "Mataró",
    images: {
      cover: "project-calfranc-desktop-1",
      hover: "project-calfranc-desktop-2",
      mobile: ["project-calfranc-mobile-1", "project-calfranc-mobile-2"],
    },
    copy: {
      ca: {
        sector: "Restauració",
        service: "Disseny i desenvolupament web",
        tagline: "Vermuteria i arrosseria al Port de Mataró.",
        description:
          "Cal Franc és una vermuteria i arrosseria al Port de Mataró, amb cuina mediterrània i servei de dinars. Necessitaven una web a l'altura del local: clara, elegant i pensada perquè qui hi arriba consulti la carta i reservi sense donar voltes.",
        did: [
          "Web multiidioma",
          "Carta, vermuts i plats",
          "Reserves",
          "Galeria i història del restaurant",
          "Ressenyes de clients",
          "Horari, ubicació i contacte directe per WhatsApp",
        ],
      },
      es: {
        sector: "Restauración",
        service: "Diseño y desarrollo web",
        tagline: "Vermutería y arrocería en el Port de Mataró.",
        description:
          "Cal Franc es una vermutería y arrocería en el Port de Mataró, con cocina mediterránea y servicio de comidas. Necesitaban una web a la altura del local: clara, elegante y pensada para que quien llega consulte la carta y reserve sin dar vueltas.",
        did: [
          "Web multiidioma",
          "Carta, vermuts y platos",
          "Reservas",
          "Galería e historia del restaurante",
          "Reseñas de clientes",
          "Horario, ubicación y contacto directo por WhatsApp",
        ],
      },
    },
  },
  {
    id: "bvs",
    name: "BVS Servei de Neteja",
    slug: { ca: "bvs-servei-de-neteja", es: "bvs-servicio-de-limpieza" },
    url: "https://www.bvsserviciodelimpieza.com/",
    location: "Mataró",
    images: {
      cover: "project-bvs-desktop-1",
      hover: "project-bvs-desktop-2",
      mobile: ["project-bvs-mobile-1", "project-bvs-mobile-2"],
    },
    copy: {
      ca: {
        sector: "Serveis de neteja",
        service: "Disseny i desenvolupament web",
        tagline: "Neteja per a llars i negocis, amb tracte de família.",
        description:
          "BVS és una empresa de neteja de Mataró que treballa a tota la província de Barcelona i la Costa Brava, per a llars i negocis. Vam crear una web moderna i propera que explica els serveis, mostra les opinions dels clients i porta el visitant a demanar pressupost en un clic.",
        did: [
          "Web multiidioma",
          "Serveis i petició de pressupost",
          "Opinions de clients",
          "Zona de servei i horaris",
          "Anunci de promoció destacat",
          "Contacte directe per WhatsApp",
        ],
      },
      es: {
        sector: "Servicios de limpieza",
        service: "Diseño y desarrollo web",
        tagline: "Limpieza para hogares y negocios, con trato de familia.",
        description:
          "BVS es una empresa de limpieza de Mataró que trabaja en toda la provincia de Barcelona y la Costa Brava, para hogares y negocios. Creamos una web moderna y cercana que explica los servicios, muestra las opiniones de los clientes y lleva al visitante a pedir presupuesto en un clic.",
        did: [
          "Web multiidioma",
          "Servicios y petición de presupuesto",
          "Opiniones de clientes",
          "Zona de servicio y horarios",
          "Anuncio de promoción destacado",
          "Contacto directo por WhatsApp",
        ],
      },
    },
  },
];

export const projectName = (p: Project, lang: Lang) =>
  p.id === "bvs" && lang === "es" ? "BVS Servicio de Limpieza" : p.name;

export function findProject(lang: Lang, slug: string) {
  return projects.find((p) => p.slug[lang] === slug);
}
