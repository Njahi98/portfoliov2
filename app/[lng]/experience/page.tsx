import { EXPERIENCES } from "@/components/data/experience"
import ExperienceItem from "@/components/layout/experience-item"

export default function page() {
  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-4xl dark:text-slate-50">
          Experience
        </h1>
        <div className="mb-6 flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance text-slate-600 sm:text-base dark:text-slate-400">
            The steps I&apos;ve taken to grow in software development.
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
      </div>

      <div className="mx-auto flex w-full flex-col text-left sm:px-8">
        {EXPERIENCES.map((experience) => (
          <ExperienceItem key={experience.id} {...experience} />
        ))}
      </div>
    </section>
  )
}
