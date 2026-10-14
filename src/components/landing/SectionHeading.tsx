import type { ReactNode } from "react";

interface Props {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}

export function SectionHeading({ eyebrow, title, subtitle, center = true }: Props) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {eyebrow}
        </span>
      )}
      <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-base leading-relaxed text-muted-foreground">{subtitle}</p>
      )}
    </div>
  );
}
