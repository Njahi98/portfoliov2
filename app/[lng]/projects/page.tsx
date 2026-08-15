import ProjectCard from "@/components/layout/project-card"
import { projects } from "@/components/data/projects"
import { getT } from "@/lib/i18n-server"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Njahi Oussama - Full Stack Web Developer",
  description:
    "Selected web development projects — demos, repositories, and case notes.",
}

export default async function page({
  params,
}: {
  params: Promise<{ lng: string }>
}) {
  const { lng } = await params
  const { t } = await getT("projects")
  const content = {
    pageTitle: t("pageTitle"),
    pageSubtitle: t("pageSubtitle"),
    projectImageAlt: t("projectImageAlt"),
  }

  return (
    <section className="mx-auto min-h-screen max-w-5xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-4xl dark:text-slate-50">
          {content.pageTitle}
        </h1>
        <div className="flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance text-slate-600 sm:text-lg dark:text-slate-400">
            {content.pageSubtitle}
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-sky-800 via-sky-300 to-sky-800" />
        </div>

        <div className="grid gap-4 sm:px-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard
              key={project.slug}
              lng={lng}
              slug={project.slug}
              title={t(`items.${project.slug}.title`)}
              description={t(`items.${project.slug}.description`)}
              image={project.image}
              imageAlt={content.projectImageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
