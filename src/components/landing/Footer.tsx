import { MessageCircle, Instagram, Facebook, Linkedin } from "lucide-react";
import { WHATSAPP } from "./Navbar";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "How it Works", href: "#how-it-works" },
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Success Stories", href: "#stories" },
      { label: "Contact", href: WHATSAPP },
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border/60 py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr_1.2fr]">
          <div>
            <a href="#top" className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gold text-gold-foreground font-black text-lg">
                A
              </span>
              <span className="text-base font-bold tracking-tight">
                Ausbildung <span className="text-gradient-gold">Bridge</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-muted-foreground">
              The trusted bridge from Morocco to a paid German Ausbildung — professional documents,
              expert guidance, real results.
            </p>
          </div>

          {cols.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold">{col.title}</h4>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold">Get in touch</h4>
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-success/15 px-4 py-2.5 text-sm font-medium text-success transition-colors hover:bg-success/25"
            >
              <MessageCircle className="size-4" /> Chat on WhatsApp
            </a>
            <div className="mt-5 flex gap-3">
              {[Instagram, Facebook, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="glass flex size-9 items-center justify-center rounded-xl text-muted-foreground transition-colors hover:text-foreground"
                  aria-label="Social link"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-border/60 pt-6 text-sm text-muted-foreground sm:flex-row">
          <p>© {new Date().getFullYear()} Ausbildung Bridge. All rights reserved.</p>
          <p className="font-medium">Made for Moroccan Dreamers 🇲🇦 → 🇩🇪</p>
        </div>
      </div>
    </footer>
  );
}