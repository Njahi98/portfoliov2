"use client"

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useState } from "react"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/Stack", label: "Stack" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
]

export default function HeaderMobile() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-slate-900/70 bg-slate-950/80 px-4 py-3 backdrop-blur-xl md:hidden">
      <Link
        href="/"
        className="flex items-center gap-2 text-slate-100/90"
        onClick={() => setOpen(false)}
      >
        <Image alt="Njahi logo" height={24} width={24} src="/logo.png" />
      </Link>

      <button
        type="button"
        aria-label="Toggle navigation"
        className="relative flex h-9 w-9 items-center justify-center rounded-full border border-slate-700/70 bg-slate-900/80 text-slate-100 shadow-sm shadow-slate-900/80 transition hover:border-fuchsia-500/70 hover:text-fuchsia-300"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">Toggle navigation</span>
        <div className="space-y-1.5">
          <span
            className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${
              open ? "translate-y-1.25 rotate-45" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-3.5 rounded-full bg-current transition-opacity ${
              open ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block h-0.5 w-4 rounded-full bg-current transition-transform ${
              open ? "-translate-y-1.25 -rotate-45" : ""
            }`}
          />
        </div>
      </button>

      {open && (
        <div className="animate-fade-in-down absolute inset-x-4 top-16 rounded-2xl border border-slate-800/80 bg-slate-950/95 p-4 shadow-xl shadow-slate-950/80">
          <nav className="flex flex-col gap-2 text-xs font-medium tracking-[0.24em] uppercase text-slate-300">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href)

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-slate-900 text-fuchsia-300"
                      : "hover:bg-slate-900 hover:text-fuchsia-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <span>{item.label}</span>
                  </div>
                  <span
                    className={`h-1 w-1 rounded-full bg-linear-to-r from-fuchsia-500 to-sky-400 ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}

