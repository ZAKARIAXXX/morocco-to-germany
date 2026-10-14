import { SectionHeading } from "./SectionHeading";
import { features } from "./data";
import { useLocale } from "@/lib/i18n/context";

export function Features() {
  const { t } = useLocale();
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("features.eyebrow")}
          title={t("features.title")}
          subtitle={t("features.subtitle")}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-muted-foreground transition-all duration-300 group-hover:bg-foreground/10 group-hover:text-foreground">
                <f.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-sm font-semibold">{t(`features.${i}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`features.${i}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
