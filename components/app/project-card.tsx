import Image from "next/image";

export default function ProjectCard() {
  return (
    <div className="border rounded-xl border-slate-800/70 bg-slate-950/70 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl px-6 py-3 max-w-xl mx-auto">
        <p className="text-slate-50 text-start mb-4">
          projectCard</p>
        <Image src="/projects/project1/proj1S1.webp" width={1920} height={1080} alt="project 1 showcase" className=" rounded-2xl"/>
    </div>
  )
}
