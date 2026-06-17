import { Language } from "@/types/global.types";
import en from "@/i18n/en.json";
import he from "@/i18n/he.json";
import ar from "@/i18n/ar.json";

const translations = { en, he, ar };

export type TranslationKeys = keyof typeof en;

export function useTranslation(language: Language) {
  const t = translations[language];
  const direction = language === "en" ? "ltr" : "rtl";

  function translate(key: TranslationKeys, params?: Record<string, string>) {
    let value = t[key] as string;
    if (params) {
      Object.entries(params).forEach(([k, v]) => {
        value = value.replace(`{${k}}`, v);
      });
    }
    return value;
  }

  return { t, direction, translate };
}