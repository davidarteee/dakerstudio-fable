import type { ReactNode } from "react";

/** Posa l'última paraula d'un títol en lila (classe .accent). "Sis maneres d'ajudar el teu negoci." → …teu <accent>negoci.</accent> */
export function accentLast(title: string): ReactNode {
  const i = title.trimEnd().lastIndexOf(" ");
  if (i < 0) return <span className="accent">{title}</span>;
  return (
    <>
      {title.slice(0, i + 1)}
      <span className="accent">{title.slice(i + 1)}</span>
    </>
  );
}
