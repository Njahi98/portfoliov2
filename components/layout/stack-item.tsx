import Image from "next/image"
import type { StackItem } from "../data/stack-category"

export function StackItem({ name, src, alt, href }:StackItem) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center justify-center gap-4 rounded-xl border border-slate-800/70 bg-slate-950/70 p-4 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:opacity-70"
    >
      <div className="flex h-12 w-12 items-center justify-center">
        <Image
          src={src}
          alt={alt}
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
      <p className="text-slate-400">{name}</p>
    </a>
  )
}
