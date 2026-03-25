import { projects } from "@/components/data/projects"
import { CarouselComponent } from "@/components/layout/carousel"
import { getT } from "@/lib/i18n-server"
import type { Metadata } from "next"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: Promise<{ slug: string; lng: string }>
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) {
    return { title: "Project not found" }
  }
  const { t } = await getT("projects")
  const title = t(`items.${project.slug}.title`)
  const description = t(`items.${project.slug}.description`)
  return {
    title: `${title} | Njahi Oussama - Full Stack Web Developer`,
    description,
  }
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default async function page({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) return notFound()

  const { t } = await getT("projects")

  const title = t(`items.${project.slug}.title`)
  const longDescription = t(`items.${project.slug}.longDescription`)

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-6 py-32 text-slate-900 dark:text-slate-50">
      <h1 className="mb-4 text-center text-2xl font-semibold tracking-tight text-balance text-slate-900 dark:text-slate-50">
        {title}
      </h1>
      <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
      <CarouselComponent
        images={project.images}
        githubUrl={project.githubUrl}
        liveDemoUrl={project.liveDemoUrl}
        longDescription={longDescription}
      />
    </section>
  )
}
