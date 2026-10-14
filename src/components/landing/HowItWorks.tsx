import { SectionHeading } from "./SectionHeading";
import { steps } from "./data";
import { useLocale } from "@/lib/i18n/context";

export function HowItWorks() {
  const { t } = useLocale();
  return (
    <section id="how-it-works" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("how.eyebrow")}
          title={t("how.title")}
          subtitle={t("how.subtitle")}
        />

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-surface-2 text-muted-foreground transition-colors duration-300 group-hover:bg-foreground/10 group-hover:text-foreground">
                <s.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{t(`how.${i}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`how.${i}.text`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
