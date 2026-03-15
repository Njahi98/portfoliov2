import ProjectCard from "@/components/app/project-card";

export default function page() {
  return (
<main className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <section className="mx-auto flex flex-col items-center text-center">
      <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl md:text-4xl">
        Featured Projects
      </h1>
       <p className="mb-2 max-w-2xl text-sm text-balance text-slate-400 sm:text-base">
        A variety of projects I have worked on.
       </p>
       <p className="w-20 h-px mx-auto mt-4 bg-linear-to-r from-fuchsia-300 to-fuchsia-800 rounded-full mb-8"/>
       <div className="flex flex-col gap-4">
        <ProjectCard/>
        <ProjectCard/>
       </div>
        
      </section>
    </main>
  )
}
