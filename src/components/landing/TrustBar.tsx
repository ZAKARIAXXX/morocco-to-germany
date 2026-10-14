import { useLocale } from "@/lib/i18n/context";

const items = ["trust.0", "trust.1", "trust.2", "trust.3", "trust.4"];

export function TrustBar() {
  const { t } = useLocale();
  return (
    <section className="border-y border-border/50 py-5">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {items.map((item) => (
            <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
              <span className="size-1.5 rounded-full bg-muted-foreground" />
              {t(item)}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
