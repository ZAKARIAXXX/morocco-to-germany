import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { steps } from "./data";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="How It Works"
          title="Four Simple Steps to Germany"
          subtitle="A guided process that removes the guesswork — from your first profile to your final application."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div className="glass group relative h-full overflow-hidden rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <span className="absolute -right-2 -top-3 text-7xl font-black text-white/5">
                  {s.step}
                </span>
                <div className="relative flex size-12 items-center justify-center rounded-xl bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-110">
                  <s.icon className="size-6" />
                </div>
                <h3 className="relative mt-5 text-lg font-semibold">{s.title}</h3>
                <p className="relative mt-2 text-sm leading-relaxed text-muted-foreground">
                  {s.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}