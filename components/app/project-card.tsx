import Image from "next/image";
import Link from "next/link";
import { projectBase } from "../data/projects";



export default function ProjectCard({title,description,image,link}:projectBase) {
  return (
    <Link href={link ? link : '#'}>
    <div className="h-full flex flex-col gap-4 border rounded-xl border-slate-200 bg-white/70 shadow-lg shadow-slate-200/60 backdrop-blur-2xl p-4 max-w-xl w-full mx-auto hover:-translate-y-1 hover:opacity-70 transition-all duration-200 dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10">
        <p className="text-slate-900 text-start dark:text-slate-50">
          {title}</p>
        <p className="text-start max-w-2xl text-sm text-slate-600 dark:text-slate-400">
         {description}
        </p>
        <Image src={image} width={1920} height={1080} alt="project showcase Image" className=" rounded-xl"/>
    </div>
    </Link>
  )
}
