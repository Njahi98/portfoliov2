import { stackCategories } from "@/components/data/stack-category"
import StackCategory from "@/components/layout/stack-category"
import { getT } from "@/lib/i18n-server"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Stack | Njahi Oussama - Full Stack Web Developer",
  description:
    "Technologies, tools, and languages used for full stack web development.",
}

export default async function page() {
  const { t } = await getT("stack")
  const content = {
    pageTitle: t("pageTitle"),
    pageSubtitle: t("pageSubtitle"),
  }

  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-4xl dark:text-slate-50">
          {content.pageTitle}
        </h1>
        <div className="mb-6 flex flex-col gap-4">
          <p className="max-w-2xl text-base text-balance text-slate-600 sm:text-lg dark:text-slate-400">
            {content.pageSubtitle}
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
        <div className="flex flex-col gap-20 sm:px-6">
          {stackCategories.map((stackCategory) => (
            <StackCategory
              key={stackCategory.categoryKey}
              name={t(`categories.${stackCategory.categoryKey}`)}
              items={stackCategory.items.map((item) => ({
                ...item,
                alt: t("iconAlt", { name: item.name }),
              }))}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
