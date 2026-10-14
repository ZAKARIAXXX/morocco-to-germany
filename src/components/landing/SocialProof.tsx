import { Star, Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { stats } from "./data";
import { useLocale } from "@/lib/i18n/context";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const testimonials = [
  {
    name: "social.0.name",
    role: "social.0.role",
    img: student1,
    quote: "social.0.quote",
  },
  {
    name: "social.1.name",
    role: "social.1.role",
    img: student2,
    quote: "social.1.quote",
  },
  {
    name: "social.2.name",
    role: "social.2.role",
    img: student3,
    quote: "social.2.quote",
  },
];

export function SocialProof() {
  const { t } = useLocale();
  return (
    <section id="stories" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("social.eyebrow")}
          title={t("social.title")}
          subtitle={t("social.subtitle")}
        />

        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="rounded-2xl border border-border bg-surface p-6 text-center"
            >
              <div className="text-3xl font-extrabold text-foreground sm:text-4xl">
                {s.to}
                {s.suffix}
              </div>
              <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                {t(`stats.${i}.label`)}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {testimonials.map((tItem) => (
            <figure
              key={tItem.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:border-gold/30"
            >
              <Quote className="size-6 text-gold/30" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                &ldquo;{t(tItem.quote)}&rdquo;
              </blockquote>
              <div className="mt-5 flex items-center gap-3 border-t border-border/50 pt-4">
                <img
                  src={tItem.img}
                  alt={t(tItem.name)}
                  loading="lazy"
                  className="size-10 rounded-full object-cover ring-2 ring-gold/30"
                />
                <div>
                  <figcaption className="text-sm font-semibold">{t(tItem.name)}</figcaption>
                  <p className="text-xs text-muted-foreground">{t(tItem.role)}</p>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="size-3 fill-muted-foreground text-muted-foreground" />
                  ))}
                </div>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
