import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale } from "@/lib/i18n/context";

const links = [
  { label: "navbar.how", href: "#how-it-works" },
  { label: "navbar.features", href: "#features" },
  { label: "navbar.stories", href: "#stories" },
  { label: "navbar.pricing", href: "#pricing" },
  { label: "navbar.faq", href: "#faq" },
];

const WHATSAPP = "https://wa.me/212776987827";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, locale, setLocale } = useLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? "border-b border-border/60 bg-background/80 py-2 backdrop-blur-lg"
          : "bg-transparent py-4",
      )}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="flex items-center gap-2">
          <span className="text-sm font-bold tracking-tight">
            Ausbildung <span className="text-gold">Bridge</span>
          </span>
        </a>

        <div className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(l.label)}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <button
            onClick={() => setLocale(locale === "en" ? "ar" : "en")}
            className="rounded-lg border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            {t("footer.langToggle")}
          </button>
          <Button asChild variant="hero" size="sm">
            <a href={WHATSAPP} target="_blank" rel="noreferrer">
              <MessageCircle className="size-4" /> {t("navbar.startFree")}
            </a>
          </Button>
        </div>

        <button
          className="rounded-lg p-2 text-foreground lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="size-6" /> : <Menu className="size-6" />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden lg:hidden"
          >
            <div className="mx-4 mt-3 flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/95 p-4 backdrop-blur-lg">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-muted-foreground transition-colors hover:bg-surface hover:text-foreground"
                >
                  {t(l.label)}
                </a>
              ))}
              <div className="mt-2 flex flex-col gap-2">
                <button
                  onClick={() => {
                    setLocale(locale === "en" ? "ar" : "en");
                    setOpen(false);
                  }}
                  className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  {t("footer.langToggle")}
                </button>
                <Button asChild variant="hero">
                  <a
                    href={WHATSAPP}
                    target="_blank"
                    rel="noreferrer"
                    onClick={() => setOpen(false)}
                  >
                    <MessageCircle className="size-4" /> {t("navbar.startFree")}
                  </a>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export { WHATSAPP };
