import { CONTACT_RECORDS } from "@/components/data/contact-data"
import ContactItem from "@/components/layout/contact-item"
import { getT } from "next-i18next/server"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact | Njahi Oussama - Full Stack Web Developer",
  description:
    "Get in touch with Njahi Oussama — email, social links, and location.",
}

export default async function page() {
  const { t } = await getT("contact")
  const content = {
    pageTitle: t("pageTitle"),
    pageSubtitle: t("pageSubtitle"),
    locationText: t("locationText"),
  }

  return (
    <section className="mx-auto sm:min-h-[calc(100dvh-7rem)] max-w-4xl px-6 pt-24 sm:pt-32 pb-0">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-4xl dark:text-slate-50">
          {content.pageTitle}
        </h1>
        <div className="mb-4 flex flex-col gap-4">
          <p className="max-w-2xl text-base text-balance text-slate-600 sm:text-lg dark:text-slate-400">
            {content.pageSubtitle}
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
        <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-2 shadow-lg shadow-slate-200/60 backdrop-blur-2xl sm:p-4 dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10">
          {CONTACT_RECORDS.map((item) => (
            <ContactItem
              key={item.id}
              method={t(`methods.${item.id}`)}
              href={item.href}
              text={item.id === "location" ? content.locationText : item.text}
              Icon={item.Icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
