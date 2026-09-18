export const site = {
  name: "DakerStudio",
  domain: "dakerstudio.com",
  email: "dakerstudio.team@gmail.com",
  instagram: { handle: "daker.studio", url: "https://www.instagram.com/daker.studio/" },
  people: [
    { id: "david", name: "David", fullName: "David Arté", phone: "645641876" },
    { id: "iker", name: "Iker", fullName: "Iker Fuentes", phone: "691463221" },
  ],
} as const;

export type Person = (typeof site.people)[number];

export const formatPhone = (p: string) => p.replace(/(\d{3})(\d{3})(\d{3})/, "$1 $2 $3");

export function whatsappUrl(person: Person, text?: string) {
  const base = `https://wa.me/34${person.phone}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
}
