import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { features } from "./data";

export function Features() {
  return (
    <section id="features" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Features"
          title="Everything You Need to Succeed"
          subtitle="A complete toolkit built specifically for Moroccan students targeting a German Ausbildung."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={(i % 4) * 0.08}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-glow hover:ring-1 hover:ring-gold/40">
                <div className="flex size-12 items-center justify-center rounded-xl bg-surface-2 text-gold ring-1 ring-white/10 transition-all duration-300 group-hover:bg-gold group-hover:text-gold-foreground">
                  <f.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-base font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}