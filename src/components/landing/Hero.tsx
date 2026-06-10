import { motion } from "motion/react";
import { ArrowRight, PlayCircle, FileText, BadgeCheck, Plane, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const journey = [
  { flag: "🇲🇦", label: "Morocco", sub: "Your start" },
  { icon: FileText, label: "Documents", sub: "Done right" },
  { flag: "🇩🇪", label: "Germany", sub: "Paid Ausbildung" },
];

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-16"
    >
      <div className="mx-auto grid w-full max-w-7xl items-center gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:gap-8">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-muted-foreground"
          >
            <Sparkles className="size-3.5 text-gold" />
            Trusted by 500+ Moroccan students 🇲🇦 → 🇩🇪
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-4xl font-extrabold leading-[1.08] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Your Fastest, Safest Path from{" "}
            <span className="text-gradient-gold">Morocco to a German Ausbildung</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Professional documents, expert guidance, and personalized support. Turn your dream of
            studying + earning in Germany into reality — without the stress or costly mistakes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl" className="group">
              <a href="#pricing">
                Start My Application
                <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href="#how-it-works">
                <PlayCircle className="size-5" /> See How It Works
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-success" /> 95% success rate
            </span>
            <span className="flex items-center gap-1.5">
              <BadgeCheck className="size-4 text-success" /> No costly mistakes
            </span>
          </motion.div>
        </div>

        {/* Interactive journey visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="glass relative rounded-3xl p-8 shadow-card">
            <div className="absolute -top-3 left-6 rounded-full bg-gold px-3 py-1 text-[11px] font-bold text-gold-foreground">
              Your 3-step journey
            </div>

            {/* animated path */}
            <svg
              className="absolute inset-x-10 top-[5.5rem] -z-0 h-2 w-[calc(100%-5rem)]"
              preserveAspectRatio="none"
              viewBox="0 0 100 2"
            >
              <line x1="0" y1="1" x2="100" y2="1" stroke="var(--border)" strokeWidth="2" />
              <motion.line
                x1="0"
                y1="1"
                x2="100"
                y2="1"
                stroke="var(--gold)"
                strokeWidth="2"
                strokeDasharray="100"
                initial={{ strokeDashoffset: 100 }}
                animate={{ strokeDashoffset: 0 }}
                transition={{ duration: 1.6, delay: 0.6, ease: "easeInOut" }}
              />
            </svg>

            <div className="relative z-10 mt-2 flex items-start justify-between gap-2">
              {journey.map((step, i) => (
                <motion.div
                  key={step.label}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.35 }}
                  className="flex w-1/3 flex-col items-center text-center"
                >
                  <div className="flex size-16 items-center justify-center rounded-2xl bg-surface-2 text-3xl shadow-card ring-1 ring-white/10">
                    {step.flag ? (
                      <span>{step.flag}</span>
                    ) : step.icon ? (
                      <step.icon className="size-7 text-gold" />
                    ) : null}
                  </div>
                  <p className="mt-3 text-sm font-semibold">{step.label}</p>
                  <p className="text-xs text-muted-foreground">{step.sub}</p>
                </motion.div>
              ))}
            </div>

            {/* floating doc cards */}
            <div className="mt-8 space-y-3">
              {[
                { label: "CV — German standard", status: "Optimized" },
                { label: "Motivation Letter", status: "Reviewed" },
                { label: "Visa documents", status: "Ready" },
              ].map((doc, i) => (
                <motion.div
                  key={doc.label}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 1.4 + i * 0.2 }}
                  className="flex items-center justify-between rounded-xl bg-surface-2/70 px-4 py-3 ring-1 ring-white/5"
                >
                  <span className="flex items-center gap-2.5 text-sm font-medium">
                    <FileText className="size-4 text-gold" />
                    {doc.label}
                  </span>
                  <span className="flex items-center gap-1.5 rounded-full bg-success/15 px-2.5 py-0.5 text-[11px] font-semibold text-success">
                    <BadgeCheck className="size-3.5" />
                    {doc.status}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* floating plane accent */}
          <motion.div
            className="absolute -right-3 -top-4 flex size-14 items-center justify-center rounded-2xl bg-gold text-gold-foreground shadow-[0_12px_40px_-8px_var(--gold)] animate-float"
          >
            <Plane className="size-6" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}