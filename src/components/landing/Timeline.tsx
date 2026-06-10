import { motion } from "motion/react";
import { SectionHeading } from "./SectionHeading";
import { timeline } from "./data";

export function Timeline() {
  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Your Success Journey"
          title="From Application to Arrival"
          subtitle="A clear path forward — so you always know exactly where you are."
        />

        <div className="relative mt-16 pl-2">
          {/* track */}
          <div className="absolute left-[1.15rem] top-2 bottom-2 w-0.5 bg-border sm:left-1/2 sm:-translate-x-1/2" />
          <motion.div
            className="absolute left-[1.15rem] top-2 w-0.5 origin-top bg-gold sm:left-1/2 sm:-translate-x-1/2"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.6, ease: "easeInOut" }}
            style={{ bottom: "0.5rem" }}
          />

          <div className="space-y-8">
            {timeline.map((t, i) => {
              const left = i % 2 === 0;
              return (
                <motion.div
                  key={t.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className={`relative flex items-start gap-5 sm:w-1/2 ${
                    left ? "" : "sm:ml-auto sm:flex-row-reverse sm:text-right"
                  }`}
                >
                  <div
                    className={`absolute top-1.5 z-10 flex size-9 items-center justify-center rounded-full bg-gold text-sm font-bold text-gold-foreground ring-4 ring-background ${
                      left
                        ? "left-0 sm:-right-[1.15rem] sm:left-auto sm:translate-x-1/2"
                        : "left-0 sm:-left-[1.15rem] sm:-translate-x-1/2"
                    }`}
                  >
                    {i + 1}
                  </div>
                  <div
                    className={`glass ml-14 w-full rounded-2xl p-5 sm:ml-0 ${
                      left ? "sm:mr-10" : "sm:ml-10"
                    }`}
                  >
                    <h3 className="text-base font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}