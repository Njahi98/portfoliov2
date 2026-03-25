"use client"

import { useT } from "next-i18next/client"
import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NotFound() {
  const { t } = useT("common")

  const pathname = usePathname()
  const lng = pathname.split("/")[1] || "en"

  return (
    <div className="flex min-h-[calc(100dvh-8rem)] flex-col items-center justify-center gap-4">
      <h1 className="text-4xl font-bold">404</h1>

      <p>{t("notFound.message")}</p>

      <Link href={`/${lng}`} className="underline">
        {t("notFound.backHome")}
      </Link>
    </div>
  )
}