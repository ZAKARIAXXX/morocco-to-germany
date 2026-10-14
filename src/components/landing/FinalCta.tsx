import { MessageCircle, PenLine } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useContactForm } from "@/hooks/use-contact-form";
import { useLocale } from "@/lib/i18n/context";
import { WHATSAPP } from "./Navbar";

export function FinalCta() {
  const { setOpen: setContactOpen } = useContactForm();
  const { t } = useLocale();

  return (
    <section className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="rounded-3xl border border-border bg-gradient-to-br from-foreground/5 to-surface p-8 text-center sm:p-12">
          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">{t("cta.title")}</h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl" className="group">
              <a href={WHATSAPP} target="_blank" rel="noreferrer">
                <MessageCircle className="size-5" /> {t("cta.button")}
              </a>
            </Button>
            <Button variant="outline" size="xl" onClick={() => setContactOpen(true)}>
              <PenLine className="size-5" /> {t("cta.form")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
