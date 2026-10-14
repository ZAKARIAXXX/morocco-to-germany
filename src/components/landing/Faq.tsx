import { SectionHeading } from "./SectionHeading";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./data";
import { useLocale } from "@/lib/i18n/context";

export function Faq() {
  const { t } = useLocale();
  return (
    <section id="faq" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t("faq.eyebrow")}
          title={t("faq.title")}
          subtitle={t("faq.subtitle")}
        />

        <div className="mt-12">
          <Accordion type="single" collapsible className="space-y-2">
            {faqs.map((item, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="rounded-xl border border-border bg-surface px-5"
              >
                <AccordionTrigger className="py-4 text-left text-sm font-semibold hover:no-underline">
                  {t(`faq.${i}.q`)}
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-muted-foreground">
                  {t(`faq.${i}.a`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
