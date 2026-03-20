
export default function page() {
  return (
        <section className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl md:text-4xl">
          Stack
        </h1>
        <div className="flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance text-slate-400 sm:text-base">
            A variety of tools I have worked with.
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
        </div>
        </section>
  )
}
