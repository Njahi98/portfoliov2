import Image from "next/image"

export type StackItemProps = {
  name: string
  src: string
  alt: string
  href: string
}

export function StackItem({ name, src, alt, href }: StackItemProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-4 shadow-lg shadow-slate-200/60 backdrop-blur-2xl transition-all duration-200 hover:-translate-y-1 hover:opacity-70 dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10"
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
      <p className="text-center text-base leading-tight text-slate-600 dark:text-slate-400">
        {name}
      </p>
    </a>
  )
}
