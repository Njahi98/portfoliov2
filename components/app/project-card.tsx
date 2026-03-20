import Image from "next/image";
import Link from "next/link";
import { projectBase } from "../data/projects";



export default function ProjectCard({title,description,image,link}:projectBase) {
  return (
    <Link href={link ? link : '#'}>
    <div className=" flex flex-col gap-4 border rounded-xl border-slate-800/70 bg-slate-950/70 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl p-4 max-w-xl w-full mx-auto hover:-translate-y-1 hover:opacity-70 transition-all duration-700">
        <p className="text-slate-50 text-start">
          {title}</p>
        <p className="text-start max-w-2xl text-sm text-slate-400">
         {description}
        </p>
        <Image src={image} width={1920} height={1080} alt="project showcase Image" className=" rounded-xl"/>
    </div>
    </Link>
  )
}
