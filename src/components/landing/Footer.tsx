import { MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { WHATSAPP } from "./Navbar";
import { useLocale } from "@/lib/i18n/context";

const cols = [
  {
    title: "footer.platform",
    links: [
      { label: "navbar.how", href: "#how-it-works" },
      { label: "navbar.features", href: "#features" },
      { label: "navbar.pricing", href: "#pricing" },
      { label: "navbar.faq", href: "#faq" },
    ],
  },
  {
    title: "footer.company",
    links: [
      { label: "navbar.stories", href: "#stories" },
      { label: "footer.contact", href: WHATSAPP },
      { label: "footer.privacy", href: "#" },
      { label: "footer.terms", href: "#" },
    ],
  },
];

export function Footer() {
  const { t, locale, setLocale } = useLocale();
  return (
    <footer className="border-t border-border/50 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2">
              <span className="text-sm font-bold tracking-tight">
                Ausbildung <span className="text-gold">Bridge</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">{t("footer.tagline")}</p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{t(col.title)}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {t(l.label)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold">Social</h4>
            <div className="mt-4 flex gap-3">
              <a
                href={WHATSAPP}
                target="_blank"
                rel="noreferrer"
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="WhatsApp"
              >
                <MessageCircle className="size-4" />
              </a>
              <button
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Instagram"
              >
                <Instagram className="size-4" />
              </button>
              <button
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Facebook"
              >
                <Facebook className="size-4" />
              </button>
              <button
                className="flex size-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground"
                aria-label="LinkedIn"
              >
                <Linkedin className="size-4" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border/50 pt-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Ausbildung Bridge. {t("footer.copyright")}
          </p>
          <button
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="text-xs text-muted-foreground underline transition-colors hover:text-foreground"
          >
            {t("footer.langToggle")}
          </button>
        </div>
      </div>
    </footer>
  );
}
