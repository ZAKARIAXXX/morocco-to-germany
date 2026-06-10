import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { problems } from "./data";

export function Problem() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The Problem"
          title="Most Moroccan Students Get Stuck Before They Even Apply"
          subtitle="The German system is full of hidden rules. One small mistake can cost you months — or your whole opportunity."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06}>
              <div className="glass group h-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:ring-1 hover:ring-german-red/40">
                <div className="flex size-11 items-center justify-center rounded-xl bg-german-red/15 text-german-red">
                  <p.icon className="size-5" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mx-auto mt-12 max-w-3xl rounded-2xl bg-gradient-to-r from-gold/15 to-transparent p-px">
            <p className="rounded-2xl bg-surface/60 px-6 py-5 text-center text-base font-medium sm:text-lg">
              Stop guessing. Follow a{" "}
              <span className="text-gradient-gold font-bold">proven, step-by-step process</span>{" "}
              used by hundreds of successful Moroccan students.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}