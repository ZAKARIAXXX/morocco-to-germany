import { Check, MessageCircle, PenLine } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { pricing } from "./data";
import { cn } from "@/lib/utils";
import { useContactForm } from "@/hooks/use-contact-form";
import { useLocale } from "@/lib/i18n/context";
import { WHATSAPP } from "./Navbar";

export function Pricing() {
  const { setOpen: setContactOpen } = useContactForm();
  const { t } = useLocale();

  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("pricing.eyebrow")}
          title={t("pricing.title")}
          subtitle={t("pricing.subtitle")}
        />

        <div className="mt-14 grid items-stretch gap-4 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <div
              key={plan.name}
              className={cn(
                "flex flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1",
                plan.popular
                  ? "border-foreground/20 bg-gradient-to-b from-foreground/5 to-surface ring-1 ring-gold/30"
                  : "border-border bg-surface",
              )}
            >
              {plan.popular && (
                <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full bg-gold/15 px-4 py-1 text-xs font-bold text-gold">
                  {t("pricing.popularBadge")}
                </span>
              )}
              <h3 className="text-lg font-bold">{t(`pricing.${i}.name`)}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{t(`pricing.${i}.tagline`)}</p>
              <div className="mt-5 flex items-end gap-1">
                <span className="text-4xl font-extrabold">{plan.price}</span>
                <span className="mb-1 text-sm text-muted-foreground">{t("pricing.oneTime")}</span>
              </div>

              <ul className="mt-6 flex-1 space-y-3">
                {plan.features.map((f, j) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <span className="mt-0.5 flex size-4 shrink-0 items-center justify-center text-success">
                      <Check className="size-4" />
                    </span>
                    <span className="text-foreground/90">{t(`pricing.${i}.feat.${j}`)}</span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.popular ? "hero" : "outline"}
                size="lg"
                className="mt-7 w-full"
              >
                <a href={WHATSAPP} target="_blank" rel="noreferrer">
                  <MessageCircle className="size-4" /> {t(`pricing.${i}.cta`)}
                </a>
              </Button>
              <button
                onClick={() => setContactOpen(true)}
                className="mt-2 text-xs text-muted-foreground underline-offset-2 hover:underline"
              >
                <PenLine className="mr-1 inline size-3" />
                {t("cta.form")}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
