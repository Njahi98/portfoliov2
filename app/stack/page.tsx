import { stackCategories } from "@/components/data/stack-category"
import StackCategory from "@/components/layout/stack-category"

export default function page() {
  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-4xl dark:text-slate-50">
          Stack
        </h1>
        <div className="mb-6 flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance text-slate-600 sm:text-base dark:text-slate-400">
            A variety of tools I have worked with.
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
        <div className="flex flex-col gap-20 sm:px-6">

        {stackCategories.map((stackCategory) => (
          <StackCategory
          key={stackCategory.name}
          {...stackCategory}
          />
        ))}
        </div>
      </div>
    </section>
  )
}
