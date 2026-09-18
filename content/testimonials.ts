// Testimonis reals, tal com els van escriure els clients (en castellà).
export type Testimonial = {
  id: string;
  quote: string;
  author: string;
  projectId: "cal-franc" | "bvs";
};

export const testimonials: Testimonial[] = [
  {
    id: "calfranc-1",
    quote:
      "Han sabido captar perfectamente la esencia de nuestro restaurante, creando una web elegante, funcional y acorde a nuestra identidad. Su profesionalidad, cercanía y dedicación han hecho que todo el proceso fuera fácil.",
    author: "Restaurant Cal Franc · Mataró",
    projectId: "cal-franc",
  },
  {
    id: "bvs-1",
    quote:
      "Muy contentos con el trabajo de Daker. Nos ayudaron a crear una página web moderna, profesional y adaptada a lo que necesitábamos. Desde el principio entendieron nuestra idea y estuvieron pendientes de todos los detalles.",
    author: "BVS Servicio de Limpieza",
    projectId: "bvs",
  },
  {
    id: "calfranc-2",
    quote:
      "Queremos agradecer sinceramente a Daker Studio y a sus colaboradores Iker Fuentes y David Arté por el excelente trabajo realizado en la página web de Cal Franc.",
    author: "Restaurant Cal Franc · Mataró",
    projectId: "cal-franc",
  },
];
