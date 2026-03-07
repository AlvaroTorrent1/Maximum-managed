import nl from "./nl";
import en from "./en";
import de from "./de";
import es from "./es";

export const locales = ["nl", "en", "de", "es"] as const;
export type Locale = (typeof locales)[number];

export const content = {
  nl,
  en,
  de,
  es,
};
