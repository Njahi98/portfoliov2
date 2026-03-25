import {
  GithubLogoIcon,
  LinkedinLogoIcon,
} from "@phosphor-icons/react/dist/ssr"
import { getT } from "next-i18next/server"
import ThemeSwitcher from "./theme-switcher"
import { LanguageSwitcher } from "./language-switcher"

export default async function Footer() {
  const { t } = await getT("common")

  return (
    <footer className="flex items-center justify-center p-4 ">
      <div className="mb-6 flex w-full max-w-xl flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-lg shadow-slate-200/60 backdrop-blur-2xl sm:flex-row dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10">
        <div className="flex items-center gap-2">
          <p className="text-sm sm:text-base text-slate-600">{t("footer.credit")}</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Njahi98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
          >
            <GithubLogoIcon size={24} />
          </a>
          <a
            href="https://linkedin.com/in/oussama-njahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
          >
            <LinkedinLogoIcon size={24} />
          </a>
          <LanguageSwitcher />
          <ThemeSwitcher />
        </div>
      </div>
    </footer>
  )
}
