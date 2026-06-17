"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Locale, type Translations } from "./translations";

type LanguageContextValue = {
  locale: Locale;
  t: Translations;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("pt");

  const toggleLocale = useCallback(() => {
    setLocale((prev) => (prev === "pt" ? "en" : "pt"));
  }, []);

  const value = useMemo(
    () => ({
      locale,
      t: translations[locale],
      setLocale,
      toggleLocale,
    }),
    [locale, toggleLocale],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return context;
}
