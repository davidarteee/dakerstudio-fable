import { Baskervville, Inter } from "next/font/google";

// Display: Baskervville (serif transicional, el mateix llenguatge que la referència Aldena).
// Només per al titular del hero, la frase del CTA i la marca gegant del peu.
export const display = Baskervville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

// Inter (variable): títols en bold, cos en regular, etiquetes en semibold majúscules.
export const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const fontClass = `${display.variable} ${sans.variable}`;
