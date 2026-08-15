import Image from "next/image"
import Link from "next/link"

export type ProjectCardProps = {
  lng: string
  slug: string
  title: string
  description: string
  image: string
  imageAlt: string
}

export default function ProjectCard({
  lng,
  slug,
  title,
  description,
  image,
  imageAlt,
}: ProjectCardProps) {
  return (
    <Link href={`/${lng}/projects/${slug}`}>
      <div className="mx-auto flex h-full max-w-xl w-full flex-col gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-lg shadow-slate-200/60 backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:opacity-70 dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-sky-500/10">
        <p className="text-start text-slate-900 dark:text-slate-50 text-base sm:text-lg">{title}</p>
        <p className="text-balance text-start text-sm sm:text-base text-slate-600 dark:text-slate-400">
          {description}
        </p>
        <Image
          src={image}
          width={1920}
          height={1080}
          alt={imageAlt}
          className="rounded-xl"
        />
      </div>
    </Link>
  )
}
