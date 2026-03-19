import { projects } from "@/components/data/projects"
import { CarouselComponent } from "@/components/layout/carousel"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function page({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)

  if (!project) return notFound()

  return (
    <section className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-4 px-6 py-32 text-slate-50">
              <h1 className="mb-4 text-2xl text-center font-semibold tracking-tight text-balance text-slate-50">
          {project.title}
        </h1>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-300 to-fuchsia-800" />
      <CarouselComponent
        images={project.images}
        githubUrl={project.githubUrl}
        liveDemoUrl={project.liveDemoUrl}
        longDescription={project.longDescription}
      />
    </section>
  )
}

