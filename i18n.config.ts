import type { I18nConfig } from "next-i18next/proxy"

const i18nConfig: I18nConfig = {
  supportedLngs: ["en", "fr"],
  fallbackLng: "en",
  defaultNS: "home",
  ns: ["common", "home", "experience", "projects", "contact"],
  resourceLoader: (language, namespace) =>
    import(`./app/i18n/locales/${language}/${namespace}.json`),
}

export default i18nConfig
