import type { ReactNode } from "react";
import { getDict } from "@/content/dictionary";
import type { Lang } from "@/lib/i18n";
import { Cursor } from "./Cursor";
import { Nav } from "./Nav";
import { Footer } from "./Footer";
import { StickyCta } from "./StickyCta";
import { RevealObserver } from "./RevealObserver";

export function SiteShell({ lang, children }: { lang: Lang; children: ReactNode }) {
  const t = getDict(lang);
  return (
    <>
      <Cursor />
      <Nav lang={lang} t={t} />
      <main id="main">{children}</main>
      <Footer lang={lang} t={t} />
      <StickyCta t={t} />
      <RevealObserver />
    </>
  );
}
