import {
  GithubLogoIcon,
  LinkedinLogoIcon,
  TranslateIcon,
} from "@phosphor-icons/react/dist/ssr"
import ThemeSwitcher from "./theme-switcher"

export default function Footer() {
  return (
    <footer className="flex items-center justify-center p-4 ">
      <div className="mb-6 flex flex-col sm:flex-row gap-4 items-center w-full max-w-xl justify-between rounded-xl border border-slate-800/70 bg-slate-950/70 p-4 shadow-fuchsia-500/10 backdrop-blur-2xl">
        <div className="flex items-center gap-2">
          <p className="text-sm text-slate-400/80">Built by Oussama Njahi</p>
        </div>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Njahi98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400/80 transition-all duration-300 hover:scale-110 hover:text-fuchsia-400"
          >
            <GithubLogoIcon size={22} />
          </a>
          <a
            href="https://linkedin.com/in/oussama-njahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400/80 transition-all duration-300 hover:scale-110 hover:text-fuchsia-400"
          >
            <LinkedinLogoIcon size={22} />
          </a>
          <TranslateIcon
            size={22}
            className="text-slate-400/80 transition-all duration-300 hover:scale-110 hover:text-fuchsia-400 cursor-pointer"
          />
          <ThemeSwitcher/>
        </div>
      </div>
    </footer>
  )
}
