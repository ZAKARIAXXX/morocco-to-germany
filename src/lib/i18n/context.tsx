import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Locale } from "./translations";

interface LocaleContextValue {
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const LocaleContext = createContext<LocaleContextValue | null>(null);

export function LocaleProvider({
  children,
  initialLocale = "ar",
}: {
  children: ReactNode;
  initialLocale?: Locale;
}) {
  const [locale, setLocaleState] = useState<Locale>(initialLocale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    document.cookie = `locale=${locale}; path=/; max-age=31536000; samesite=lax`;
  }, [locale]);

  const setLocale = (l: Locale) => setLocaleState(l);
  const t = (key: string): string => translations[locale][key] ?? translations.en[key] ?? key;
  const dir = locale === "ar" ? "rtl" : "ltr";

  return (
    <LocaleContext.Provider value={{ locale, setLocale, t, dir }}>
      {children}
    </LocaleContext.Provider>
  );
}

export function useLocale(): LocaleContextValue {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
