import { useRef } from "react";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/use-contact-form";
import { useLocale } from "@/lib/i18n/context";
import { WHATSAPP } from "./Navbar";
import heroVideo from "@/assets/Student_studying_at_German_unive…_202606101246.mp4";

export function Hero() {
  const { setOpen: setContactOpen } = useContactForm();
  const { t } = useLocale();
  const videoRef = useRef<HTMLVideoElement>(null);

  return (
    <section id="top" className="relative flex min-h-screen items-center overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 size-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/40" />
      <div className="absolute inset-0 bg-background/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-[#DD0000]/10" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFCC00]/10" />

      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              {t("hero.badge")}
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl"
          >
            {t("hero.title.start")}
            <span className="text-gold">{t("hero.title.highlight")}</span>
            {t("hero.title.end")}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row"
          >
            <Button asChild variant="hero" size="xl" className="group">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" /> {t("hero.cta")}
              </a>
            </Button>
            <Button variant="outline" size="xl" onClick={() => setContactOpen(true)}>
              <PenLine className="size-5" /> {t("hero.seeHow")}
            </Button>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-4 text-sm text-gold"
          >
            {t("hero.fastResponse")}
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-8 flex items-center justify-center gap-6 text-xs text-muted-foreground"
          >
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-success" />
              {t("hero.successRate")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-success" />
              {t("hero.noMistakes")}
            </span>
            <span className="flex items-center gap-1.5">
              <span className="size-1.5 rounded-full bg-success" />
              {t("hero.studentsHelped")}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-xs text-muted-foreground"
        >
          <span>{t("hero.scroll")}</span>
          <div className="h-6 w-[1px] bg-border" />
        </motion.div>
      </motion.div>
    </section>
  );
}
