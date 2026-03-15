"use client"

import clsx from "clsx"
import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation"

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/Stack", label: "Stack" },
  { href: "/experience", label: "Experience" },
  { href: "/education", label: "Education" },
  { href: "/contact", label: "Contact" },
]

export default function HeaderDesktop() {
  const pathname = usePathname()

  return (
    <header className="pointer-events-none fixed inset-x-0 top-6 z-30 hidden justify-center md:flex">
      <div className="pointer-events-auto inline-flex items-center gap-8 rounded-full border border-slate-800/70 bg-slate-950/70 px-6 py-3 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl">
        <Link
          href="/"
          className="flex items-center gap-2 pr-4 text-slate-100/90"
        >
          <Image alt="Njahi logo" height={28} width={28} src="/logo.png" />
        </Link>

        <nav className="flex items-center gap-6 text-[0.72rem] font-medium tracking-[0.28em] text-slate-400 uppercase">
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
                    "text-fuchsia-300": isActive === true,
                    "text-slate-400 hover:text-fuchsia-300": isActive === false,
                  }
                )}
              >
                <span>{item.label}</span>
                <span
                  className={clsx(
                    "pointer-events-none absolute inset-x-0 -bottom-1 h-px origin-left bg-linear-to-r from-fuchsia-500 via-violet-400 to-sky-400 transition-transform duration-300",
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
