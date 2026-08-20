import { InstagramIcon, TikTokIcon } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-ink py-12 text-white/60">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 px-6 md:flex-row md:items-center md:justify-between md:px-10">
        <div>
          <p className="font-display text-lg font-bold text-white">
            Daker<span className="text-violet-400">.</span>Studio
          </p>
          <p className="mt-2 text-sm">
            © {new Date().getFullYear()}. Todos los derechos reservados.
          </p>
        </div>

        <div className="flex flex-col gap-2 text-sm md:items-end">
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/daker.studio/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <InstagramIcon width={16} height={16} /> daker.studio
            </a>
            <a
              href="https://www.tiktok.com/@dakerstudio"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-white"
            >
              <TikTokIcon width={16} height={16} /> dakerstudio
            </a>
          </div>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-white/40">
            <span>Aviso Legal</span>
            <span>Términos y condiciones</span>
            <span>Políticas de cookies</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
