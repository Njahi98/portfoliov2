import Image from "next/image";
import Link from "next/link";

type projectCardType = {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function ProjectCard({title,description,image,link}:projectCardType) {
  return (
    <Link href={link ? link : '#'}>
    <div className=" flex flex-col gap-4 border rounded-xl border-slate-800/70 bg-slate-950/70 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl px-6 py-3 max-w-xl w-full mx-auto">
        <p className="text-slate-50 text-start">
          {title}</p>
        <p className="text-start max-w-2xl text-sm text-slate-400">
         {description}
        </p>
        <Image src={image} width={1920} height={1080} alt="project 1 showcase" className=" rounded-xl"/>
    </div>
    </Link>
  )
}
