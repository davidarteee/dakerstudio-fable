"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicio", label: "Nuestro servicio" },
  { href: "#exitos", label: "Éxitos" },
  { href: "#nosotros", label: "Sobre nosotros" },
  { href: "#blog", label: "Blog" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-paper/80 backdrop-blur-lg shadow-[0_1px_0_0_rgba(10,10,10,0.06)]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 md:px-10">
        <Link
          href="#inicio"
          className="font-display text-lg font-bold tracking-tight text-ink"
        >
          Daker<span className="text-violet-500">.</span>Studio
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#contacto"
          className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-violet-600 md:inline-flex"
        >
          Contacto
        </a>

        <button
          aria-label="Abrir menú"
          onClick={() => setOpen((v) => !v)}
          className="text-ink md:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-ink/5 bg-paper md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-2 py-2.5 text-sm font-medium text-ink/80 hover:bg-mist"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contacto"
                onClick={() => setOpen(false)}
                className="mt-2 rounded-full bg-ink px-5 py-2.5 text-center text-sm font-semibold text-white"
              >
                Contacto
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
