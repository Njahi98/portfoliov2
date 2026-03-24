"use client"
import { MoonIcon, SunIcon } from "@phosphor-icons/react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Render a placeholder with the same dimensions during SSR
    // so layout doesn't shift once mounted
    return <div className="size-5.5" />
  }

  return (
    <button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="cursor-pointer text-slate-600 transition-all duration-300 hover:scale-110 hover:text-fuchsia-500 dark:text-slate-400/80 dark:hover:text-fuchsia-400"
      aria-label="Toggle theme"
    >
      {resolvedTheme === "dark" ? (
        <MoonIcon size={22} />
      ) : (
        <SunIcon size={22} />
      )}
    </button>
  )
}