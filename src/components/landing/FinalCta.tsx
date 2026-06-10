import { ArrowRight, MessageCircle, Clock } from "lucide-react";
import { Reveal } from "./Reveal";
import { Button } from "@/components/ui/button";
import { WHATSAPP } from "./Navbar";

export function FinalCta() {
  return (
    <section id="final-cta" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gold/20 via-surface to-surface p-px shadow-glow">
            <div className="relative overflow-hidden rounded-3xl bg-surface/80 px-7 py-14 text-center sm:px-12">
              <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/20 blur-3xl" />
              <span className="relative inline-flex items-center gap-2 rounded-full bg-german-red/15 px-4 py-1.5 text-xs font-semibold text-german-red">
                <Clock className="size-3.5" /> Limited onboarding spots this month
              </span>
              <h2 className="relative mt-5 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Your German Ausbildung <br className="hidden sm:block" />
                <span className="text-gradient-gold">Journey Starts Today</span>
              </h2>
              <p className="relative mx-auto mt-4 max-w-xl text-base text-muted-foreground">
                Join 500+ Moroccan students who stopped guessing and started winning. Build a
                professional application and move toward a paid future in Germany.
              </p>
              <div className="relative mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <Button asChild variant="hero" size="xl" className="group">
                  <a href="#pricing">
                    Start My Application
                    <ArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </Button>
                <Button asChild variant="whatsapp" size="xl">
                  <a href={WHATSAPP} target="_blank" rel="noreferrer">
                    <MessageCircle className="size-5" /> Chat on WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}