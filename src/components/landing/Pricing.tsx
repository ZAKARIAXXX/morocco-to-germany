import { Check, Star } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { Button } from "@/components/ui/button";
import { pricing } from "./data";
import { cn } from "@/lib/utils";

export function Pricing() {
  return (
    <section id="pricing" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Pricing"
          title="Simple Plans, Real Results"
          subtitle="Transparent pricing — a fraction of what traditional agencies charge, with clear deliverables."
        />

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
          {pricing.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1} className="h-full">
              <div
                className={cn(
                  "relative flex h-full flex-col rounded-3xl p-7 transition-all duration-300 hover:-translate-y-1.5",
                  plan.popular
                    ? "bg-gradient-to-b from-gold/15 to-surface/40 ring-2 ring-gold shadow-glow"
                    : "glass",
                )}
              >
                {plan.popular && (
                  <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1 rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-gold-foreground">
                    <Star className="size-3 fill-current" /> Most Popular
                  </span>
                )}
                <h3 className="text-lg font-bold">{plan.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{plan.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className="mb-1 text-sm text-muted-foreground">one-time</span>
                </div>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm">
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                        <Check className="size-3.5" />
                      </span>
                      <span className="text-foreground/90">{f}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  asChild
                  variant={plan.popular ? "hero" : "glass"}
                  size="lg"
                  className="mt-7 w-full"
                >
                  <a href="#final-cta">{plan.cta}</a>
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}