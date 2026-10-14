import { SectionHeading } from "./SectionHeading";
import { problems } from "./data";
import { useLocale } from "@/lib/i18n/context";

export function Problem() {
  const { t } = useLocale();
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("problem.eyebrow")}
          title={t("problem.title")}
          subtitle={t("problem.subtitle")}
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <div
              key={p.title}
              className="group rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-gold/30 hover:-translate-y-1"
            >
              <div className="flex size-10 items-center justify-center rounded-lg bg-german-red/15 text-german-red">
                <p.icon className="size-5" />
              </div>
              <h3 className="mt-4 text-base font-semibold">{t(`problem.${i}.title`)}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {t(`problem.${i}.text`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mx-auto mt-12 max-w-3xl rounded-2xl border border-gold/20 bg-gradient-to-r from-gold/5 to-transparent p-px">
          <p className="rounded-2xl bg-background px-6 py-5 text-center text-base font-medium sm:text-lg">
            {t("problem.cta")}
          </p>
        </div>
      </div>
    </section>
  );
}
