import { createI18n } from "vue-i18n";
import es from "../locales/es/index";
import en from "../locales/en/index";
import fr from "../locales/fr/index";

const i18n = createI18n({
  legacy: false,
  locale: import.meta.env.VITE_I18N_LOCALE || "es",
  fallbackLocale: import.meta.env.VITE_I18N_FALLBACK_LOCALE || "en",
  availableLocalesObj: [
    {
      lang: "Español",
      value: "es",
    },
    {
      lang: "Inglés",
      value: "en",
    },
    {
      lang: "Francés",
      value: "fr",
    },
  ],
  messages: {
    es,
    en,
    fr,
  },
});

export default i18n;
