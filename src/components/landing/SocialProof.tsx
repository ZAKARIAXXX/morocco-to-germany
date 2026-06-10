import { Star, Quote, PlayCircle } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { AnimatedCounter } from "./AnimatedCounter";
import { stats } from "./data";
import student1 from "@/assets/student-1.jpg";
import student2 from "@/assets/student-2.jpg";
import student3 from "@/assets/student-3.jpg";

const testimonials = [
  {
    name: "Yassine B.",
    role: "Mechatronics Ausbildung · Stuttgart",
    img: student1,
    quote:
      "I had been rejected twice before. With Ausbildung Bridge my CV and letter finally looked German-professional — I got accepted within weeks.",
  },
  {
    name: "Salma E.",
    role: "Nursing Ausbildung · München",
    img: student2,
    quote:
      "The 1:1 support removed all my visa stress. They guided me through every document and the embassy interview. I'm now living my dream.",
  },
  {
    name: "Othmane R.",
    role: "IT Ausbildung · Berlin",
    img: student3,
    quote:
      "Way cheaper than the agency I almost paid €3000 to — and far more transparent. Every step was clear. Highly recommend to any Moroccan student.",
  },
];

export function SocialProof() {
  return (
    <section id="stories" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Success Stories"
          title="Moroccan Students. Real German Careers."
          subtitle="Hundreds have already made the move. Here's what they say about the journey."
        />

        {/* stats */}
        <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <div className="glass rounded-2xl p-6 text-center">
                <div className="text-3xl font-extrabold text-gradient-gold sm:text-4xl">
                  <AnimatedCounter to={s.to} suffix={s.suffix} decimals={s.decimals ?? 0} />
                </div>
                <p className="mt-2 text-xs font-medium text-muted-foreground sm:text-sm">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* testimonials */}
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="glass group relative flex h-full flex-col rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card">
                <Quote className="size-7 text-gold/40" />
                <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-foreground/90">
                  "{t.quote}"
                </blockquote>
                <div className="mt-5 flex items-center gap-3">
                  <div className="relative">
                    <img
                      src={t.img}
                      alt={t.name}
                      loading="lazy"
                      width={512}
                      height={512}
                      className="size-11 rounded-full object-cover ring-2 ring-gold/40"
                    />
                    <span className="absolute -bottom-1 -right-1 flex size-5 items-center justify-center rounded-full bg-gold text-gold-foreground">
                      <PlayCircle className="size-3.5" />
                    </span>
                  </div>
                  <div>
                    <figcaption className="text-sm font-semibold">{t.name}</figcaption>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: 5 }).map((_, s) => (
                      <Star key={s} className="size-3.5 fill-gold text-gold" />
                    ))}
                  </div>
                </div>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}