"use client";

import { useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import { site, whatsappUrl, type Person } from "@/content/site";
import { Mail, WhatsApp } from "./Icons";

/**
 * Formulari sense servidor: compon el missatge i l'obre a WhatsApp (canal principal)
 * o al programa de correu. No es guarda ni s'envia cap dada a tercers.
 */
export function ContactForm({ t }: { t: Dictionary }) {
  const c = t.contactPage;
  const [name, setName] = useState("");
  const [business, setBusiness] = useState("");
  const [message, setMessage] = useState("");
  const [person, setPerson] = useState<Person>(site.people[0]);
  const [error, setError] = useState<string | null>(null);

  const compose = () => {
    const who = [name.trim(), business.trim()].filter(Boolean).join(" · ");
    return [who ? `${who}` : null, message.trim()].filter(Boolean).join("\n\n");
  };

  const validate = () => {
    if (!message.trim()) {
      setError(c.required);
      return false;
    }
    setError(null);
    return true;
  };

  const sendWhatsapp = () => {
    if (!validate()) return;
    window.open(whatsappUrl(person, compose()), "_blank", "noopener");
  };

  const sendEmail = () => {
    if (!validate()) return;
    const subject = business.trim() || name.trim() || site.name;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(compose())}`;
  };

  return (
    <form
      className="grid gap-8"
      onSubmit={(e) => {
        e.preventDefault();
        sendWhatsapp();
      }}
      noValidate
    >
      <div className="field">
        <label htmlFor="cf-name" className="t-label">
          {c.name}
        </label>
        <input id="cf-name" name="name" autoComplete="name" value={name} onChange={(e) => setName(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="cf-business" className="t-label">
          {c.business}
        </label>
        <input id="cf-business" name="business" autoComplete="organization" value={business} onChange={(e) => setBusiness(e.target.value)} />
      </div>
      <div className="field">
        <label htmlFor="cf-message" className="t-label">
          {c.message}
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          placeholder={c.messagePlaceholder}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={!!error}
          aria-describedby={error ? "cf-error" : undefined}
        />
        {error && (
          <p id="cf-error" role="alert" className="text-sm text-violet-soft">
            {error}
          </p>
        )}
      </div>

      <fieldset className="grid gap-3">
        <legend className="t-label mb-3">
          {c.sendWhatsapp} {c.to}
        </legend>
        <div className="flex flex-wrap gap-2">
          {site.people.map((p) => (
            <label key={p.id} className={`btn ${person.id === p.id ? "btn--solid" : ""}`}>
              <input type="radio" name="person" value={p.id} className="sr-only" checked={person.id === p.id} onChange={() => setPerson(p)} />
              {p.name}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="flex flex-wrap gap-3">
        <button type="submit" className="btn btn--primary btn--lg">
          <WhatsApp size={20} /> {c.sendWhatsapp}
        </button>
        <button type="button" className="btn btn--lg" onClick={sendEmail}>
          <Mail size={18} /> {c.sendEmail}
        </button>
      </div>
      <p className="t-label normal-case tracking-normal text-[0.78rem] max-w-[48ch]">{c.hint}</p>
    </form>
  );
}
