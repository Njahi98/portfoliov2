import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TranslateIcon,
} from "@phosphor-icons/react/dist/ssr"
import ThemeSwitcher from "./theme-switcher"

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 ">
      <div className="mb-6 flex w-full max-w-xl flex-col items-center justify-between gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-lg shadow-slate-200/60 backdrop-blur-2xl sm:flex-row dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10">
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-600">Built by Oussama Njahi</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Njahi98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
          >
            <GithubLogoIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/oussama-njahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
          >
            <LinkedinLogoIcon size={22} />
          </a>
          <TranslateIcon
            size={22}
            className="cursor-pointer text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
          />
          <ThemeSwitcher/>
        </div>
      </div>
    </footer>
  )
}
