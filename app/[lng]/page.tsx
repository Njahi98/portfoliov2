import {
  ArrowUpRightIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  PaperPlaneTiltIcon,
  ReadCvLogoIcon,
} from "@phosphor-icons/react/dist/ssr"
import { getT } from "next-i18next/server"
import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Home | Njahi Oussama - Full Stack Web Developer",
  description:
    "Full stack web developer portfolio — projects, experience, stack, and contact.",
}

export default async function page({
  params,
}: {
  params: Promise<{ lng: string }>
}) {
  const { lng } = await params
  const { t } = await getT("home")
  const content = {
    title: t("title"),
    heading: t("heading"),
    intro: t("intro"),
    ctaProjects: t("ctaProjects"),
    ctaResume: t("ctaResume"),
    ctaContact: t("ctaContact"),
    availability: t("availability"),
    basedIn: t("basedIn"),
    country: t("country"),
  }
  return (
    <section className="flex min-h-screen sm:min-h-[calc(100dvh-7rem)] flex-col items-center justify-center px-6 pt-12 md:pt-0">
      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-xs sm:text-sm font-semibold tracking-[0.32em] text-fuchsia-700/80 uppercase dark:text-fuchsia-300/80">
          {content.title}
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-6xl dark:text-slate-50">
          {content.heading}
        </h1>

        <p className="mb-8 max-w-3xl text-sm sm:text-lg text-balance  text-slate-600 dark:text-slate-400">
          {content.intro}
        </p>

        <div className="mb-10 flex w-full max-w-2xl flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={`/${lng}/projects`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-fuchsia-400/70 hover:text-fuchsia-700 dark:border-slate-700/80 dark:bg-slate-950/60 dark:text-slate-100 dark:shadow-slate-950/60 dark:hover:text-fuchsia-100 sm:w-auto sm:flex-1"
          >
            {content.ctaProjects}
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              <ArrowUpRightIcon size={18} />
            </span>
          </Link>
          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-fuchsia-400/70 hover:text-fuchsia-700 dark:border-slate-700/80 dark:bg-slate-950/60 dark:text-slate-100 dark:shadow-slate-950/60 dark:hover:text-fuchsia-100 sm:w-auto sm:flex-1"
          >
            {content.ctaResume}
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              <ReadCvLogoIcon size={18} />
            </span>
          </a>
          <Link
            href={`/${lng}/contact`}
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-slate-200 bg-white/70 px-5 py-2.5 text-sm font-medium text-slate-900 shadow-sm shadow-slate-200/60 transition duration-200 hover:-translate-y-1 hover:border-fuchsia-400/70 hover:text-fuchsia-700 dark:border-slate-700/80 dark:bg-slate-950/60 dark:text-slate-100 dark:shadow-slate-950/60 dark:hover:text-fuchsia-100 sm:w-auto sm:flex-1"
          >
            {content.ctaContact}
            <span className="inline-block transition-transform group-hover:translate-x-0.5">
              <PaperPlaneTiltIcon size={18} />
            </span>
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[0.7rem] sm:text-sm tracking-[0.24em] text-slate-600 uppercase dark:text-slate-500">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-linear-to-r from-fuchsia-500/60 to-transparent" />
            {content.availability}
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-fuchsia-400/80 sm:inline-block" />
          <span className="inline-flex items-center gap-2">
            {content.basedIn}{" "}
            <span className="text-slate-700 dark:text-slate-300">
              {content.country}
            </span>
          </span>
        </div>
        <div className="mt-8 flex justify-center gap-6">
          <a
            href="https://github.com/Njahi98"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-fuchsia-500 dark:text-slate-400 dark:hover:text-fuchsia-400"
          >
            <GithubLogoIcon size={32} />
          </a>
          <a
            href="https://linkedin.com/in/oussama-njahi/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-600 transition-all duration-300 hover:-translate-y-1 hover:text-fuchsia-500 dark:text-slate-400 dark:hover:text-fuchsia-400"
          >
            <LinkedinLogoIcon size={32} />
          </a>
        </div>
      </div>
    </section>
  )
}
