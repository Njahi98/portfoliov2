import Icons from "@/components/layout/icons"
import Link from "next/link"
export default function Home() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center px-6 pt-10 pb-16 md:pt-0">
      <div className="pointer-events-none absolute inset-x-0 top-24 -z-10 mx-auto h-64 max-w-xl" />

      <section className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <p className="mb-4 text-xs font-semibold tracking-[0.32em] text-fuchsia-300/80 uppercase">
          Full Stack Web Developer
        </p>

        <h1 className="mb-4 text-4xl font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl md:text-6xl">
          Hi, I&apos;m{" "}
          <span className="bg-linear-to-r  bg-clip-text ">
            Oussama Njahi
          </span>
        </h1>

        <p className="mb-8 max-w-2xl text-sm text-balance text-slate-400 sm:text-base">
          I specialize in crafting modern web
          apps with React.js, Express.js, Next.js, integrating AI
          capabilities, and building thoughtful digital experiences —
          from interface to infrastructure.
        </p>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="projects"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm shadow-slate-950/60 transition hover:border-fuchsia-400/70 hover:text-fuchsia-100  duration-500"
          >
            View Projects
            <span className="inline-block text-xs transition-transform group-hover:translate-x-0.5">
              ↗
            </span>
          </Link>
          <Link
            href="contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/60 px-5 py-2.5 text-sm font-medium text-slate-100 shadow-sm shadow-slate-950/60 transition hover:border-fuchsia-400/70 hover:text-fuchsia-100 duration-500"
          >
            Get in Touch
          </Link>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[0.7rem] tracking-[0.24em] text-slate-500 uppercase">
          <span className="inline-flex items-center gap-2">
            <span className="h-px w-8 bg-linear-to-r from-fuchsia-500/60 to-transparent" />
            Available for job opportunities & freelance 
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-fuchsia-400/80 sm:inline-block" />
          <span className="inline-flex items-center gap-2">
            Based in <span className="text-slate-300">Tunisia</span>
          </span>
        </div>
        <Icons />
      </section>
    </section>
  )
}
