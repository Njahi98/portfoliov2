"use client"
import { GlobeIcon } from "@phosphor-icons/react"
import { usePathname, useRouter } from "next/navigation"

export function LanguageSwitcher() {
  const pathname = usePathname()
  const router = useRouter()

  const switchLocale = () => {
    const segments = pathname.split("/")
    segments[1] = segments[1] === "en" ? "fr" : "en"
    router.push(segments.join("/"))
  }

  return (
    <div>
      <button
        className="translate-y-0.5 cursor-pointer text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
        onClick={() => switchLocale()}
      >
        <GlobeIcon size={24} />
      </button>
    </div>
  )
}
