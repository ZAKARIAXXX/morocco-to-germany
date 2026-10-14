import { MessageCircle, Search, ClipboardCheck, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { useLocale } from "@/lib/i18n/context";
import { WHATSAPP } from "./Navbar";

const frictionSteps = [
  { icon: MessageCircle, key: "friction.step1" },
  { icon: Search, key: "friction.step2" },
  { icon: ClipboardCheck, key: "friction.step3" },
  { icon: Rocket, key: "friction.step4" },
];

export function FrictionKiller() {
  const { t } = useLocale();

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading eyebrow={t("friction.eyebrow")} title={t("friction.title")} />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {frictionSteps.map((step, i) => (
            <div
              key={step.key}
              className="flex flex-col items-center rounded-2xl border border-border bg-surface p-6 text-center transition-all duration-300 hover:-translate-y-1"
            >
              <span className="flex size-12 items-center justify-center rounded-xl bg-gold/10 text-gold">
                <step.icon className="size-6" />
              </span>
              <span className="mt-3 text-2xl font-bold text-gold">
                {String(i + 1).padStart(2, "0")}
              </span>
              <p className="mt-2 text-sm font-medium">{t(step.key)}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild variant="hero" size="xl">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle className="size-5" /> {t("pricing.0.cta")}
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
