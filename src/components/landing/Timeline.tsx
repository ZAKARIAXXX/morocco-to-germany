import { SectionHeading } from "./SectionHeading";
import { timeline } from "./data";
import { useLocale } from "@/lib/i18n/context";

export function Timeline() {
  const { t } = useLocale();
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("timeline.eyebrow")}
          title={t("timeline.title")}
          subtitle={t("timeline.subtitle")}
        />

        <div className="mt-14 space-y-0">
          {timeline.map((tItem, i) => (
            <div key={tItem.title} className="group relative flex gap-5 pb-8 last:pb-0">
              <div className="flex flex-col items-center">
                <div className="z-10 flex size-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-xs font-bold text-muted-foreground">
                  {i + 1}
                </div>
                {i < timeline.length - 1 && <div className="mt-1 w-px flex-1 bg-border" />}
              </div>
              <div className="pt-0.5">
                <h3 className="text-sm font-semibold">{t(`timeline.${i}.title`)}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{t(`timeline.${i}.text`)}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
