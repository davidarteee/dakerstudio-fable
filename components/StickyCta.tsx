"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { site, formatPhone, whatsappUrl } from "@/content/site";
import { routes } from "@/lib/i18n";
import { WhatsApp } from "./Icons";

/** Botó fix de WhatsApp: apareix després del primer scroll i deixa triar amb qui parlar. */
export function StickyCta({ t }: { t: Dictionary }) {
  const [show, setShow] = useState(false);
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const onContact = pathname === routes.contact.ca || pathname === routes.contact.es;

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > window.innerHeight * 0.5);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onDoc = (e: MouseEvent) => {
      if (!root.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDoc);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  if (onContact) return null;

  return (
    <div ref={root} className="sticky-wa" data-show={show}>
      <div className="sticky-wa__pop" hidden={!open} role="group" aria-label={t.sticky.title}>
        <p className="t-label px-3 pt-2 pb-1">{t.sticky.title}</p>
        {site.people.map((p) => (
          <a key={p.id} href={whatsappUrl(p)} target="_blank" rel="noopener" className="sticky-wa__opt" onClick={() => setOpen(false)}>
            <span>{p.name}</span>
            <small>{formatPhone(p.phone)}</small>
          </a>
        ))}
      </div>
      <button type="button" className="sticky-wa__btn" aria-expanded={open} aria-haspopup="true" onClick={() => setOpen((v) => !v)}>
        <WhatsApp size={22} className="text-[#25D366]" />
        {t.sticky.label}
      </button>
    </div>
  );
}
