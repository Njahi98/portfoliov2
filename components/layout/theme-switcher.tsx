"use client"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useT } from "next-i18next/client"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const { t } = useT("common")

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <div className="size-6" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="cursor-pointer text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
      aria-label={t("toggleTheme")}
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon size={24} />
      ) : (
        <SunIcon size={24} />
      )}
    </button>
  )
}
