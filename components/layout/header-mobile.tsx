"use client"

import Image from "next/image"
import Link from "next/link"
import { useParams, usePathname } from "next/navigation"
import { Activity, useState } from "react"
import { useT } from "next-i18next/client"
import { NAV_ITEMS } from "../data/nav-items"

export default function HeaderMobile() {
  const [open, setOpen] = useState(false)
  const pathname = usePathname()
  const params = useParams()
  const lng = params.lng as string
  const { t } = useT("common")

  return (
    <header className="fixed inset-x-0 top-0 z-30 flex items-center justify-between border-b border-slate-200 bg-white/80 px-4 py-3 backdrop-blur-xl md:hidden dark:border-slate-900/70 dark:bg-slate-950/80">
      <Link
        href={`/${lng}`}
        className="flex items-center gap-2 text-slate-900 dark:text-slate-100/90"
        onClick={() => setOpen(false)}
      >
        <Image
          className="size-7"
          alt={t("logoAlt")}
          height={98}
          width={76}
          src="/favicon.ico"
        />
      </Link>

      <button
        type="button"
        aria-label={t("toggleNav")}
        className="relative flex h-9 w-9 cursor-pointer items-center justify-center rounded-full border border-slate-200 bg-white text-slate-900 shadow-sm shadow-slate-200/60 transition hover:border-sky-500/70 hover:text-sky-700 dark:border-slate-700/70 dark:bg-slate-900/80 dark:text-slate-100 dark:shadow-slate-900/80 dark:hover:text-sky-300"
        onClick={() => setOpen((prev) => !prev)}
      >
        <span className="sr-only">{t("toggleNav")}</span>
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
      <Activity mode={open ? "visible" : "hidden"}>
        <div className="absolute inset-x-4 top-16 animate-in rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-xl shadow-slate-200/60 duration-500 fade-in slide-in-from-top-8 dark:border-slate-800/80 dark:bg-slate-950/95 dark:shadow-slate-950/80 ">
          <nav className="flex flex-col gap-2 text-sm font-medium tracking-[0.24em] text-slate-700 uppercase dark:text-slate-300">
            {NAV_ITEMS.map((item) => {
              const href =
                item.segment === "" ? `/${lng}` : `/${lng}/${item.segment}`
              const isActive =
                item.segment === ""
                  ? pathname === `/${lng}` || pathname === `/${lng}/`
                  : pathname === `/${lng}/${item.segment}` ||
                    pathname.startsWith(`/${lng}/${item.segment}/`)

              return (
                <Link
                  key={item.segment || "home"}
                  href={href}
                  className={`flex items-center justify-between rounded-xl px-3 py-2 transition-colors ${
                    isActive
                      ? "bg-slate-100 text-sky-700 dark:bg-slate-900 dark:text-sky-300"
                      : "hover:bg-slate-100 hover:text-sky-700 dark:hover:bg-slate-900 dark:hover:text-sky-300"
                  }`}
                  onClick={() => setOpen(false)}
                >
                  <div className="flex items-center gap-2">
                    <span>{t(item.labelKey)}</span>
                  </div>
                  <span
                    className={`h-1 w-1 rounded-full bg-linear-to-r from-sky-500 to-cyan-400 ${
                      isActive ? "opacity-100" : "opacity-60"
                    }`}
                  />
                </Link>
              )
            })}
          </nav>
        </div>
      </Activity>
    </header>
  )
}
