import { projects } from "@/components/data/projects"
import { CarouselSize } from "@/components/layout/carousel"
import { notFound } from "next/navigation"

interface ProjectPageProps {
  params: Promise<{ slug: string }>
}

export default async function page({ params }: ProjectPageProps) {
  const { slug } = await params

  const project = projects.find((project) => project.slug === slug)
  
  if(!project) return notFound();
  
  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-32 text-slate-50 ">
  

<CarouselSize images={project.images}/>

    </section>
  )
}
