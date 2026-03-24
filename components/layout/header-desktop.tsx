"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { NAV_ITEMS } from "../data/nav-items"

export default function HeaderDesktop() {
  const pathname = usePathname()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-30 hidden justify-center md:flex">
      <div className="pointer-events-auto inline-flex items-center gap-8 rounded-full border border-slate-200 bg-white/70 px-6 py-3 shadow-lg shadow-slate-200/60 backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10">
        <Link
          href="/"
          className="flex items-center gap-2 pr-4 text-slate-900 dark:text-slate-100/90"
        >
          <Image className="size-7" alt="Njahi logo" height={98} width={76} src="/logo.png" />
        </Link>

        <nav className="flex items-center gap-6 text-[0.72rem] font-medium tracking-[0.28em] text-slate-600 uppercase dark:text-slate-400">
          {NAV_ITEMS.map((item) => {
            const isActive =
              item.href === "/"
                ? pathname === "/"
                : pathname.startsWith(item.href)

            return (
              <Link
                key={item.href}
                href={item.href}
                className={clsx(
                  "group relative flex items-center gap-2 transition-colors",

                  {
                    "text-fuchsia-700 dark:text-fuchsia-300": isActive === true,
                    "text-slate-600 hover:text-fuchsia-700 dark:text-slate-400 dark:hover:text-fuchsia-300":
                      isActive === false,
                  }
                )}
              >
                <span>{item.label}</span>
                <span
                  className={clsx(
                    "pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left bg-linear-to-r from-fuchsia-300 via-violet-400 to-fuchsia-950 transition-transform duration-300",
                    {
                      "scale-x-100": isActive === true,
                      "scale-x-0 group-hover:scale-x-100": isActive === false,
                    }
                  )}
                />
              </Link>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
