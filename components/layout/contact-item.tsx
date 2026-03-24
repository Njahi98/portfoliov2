import { IconProps } from "@phosphor-icons/react"

export type ContactItemProps = {
  method: string
  href?: string
  text: string
  Icon: React.ComponentType<IconProps>
}

export default function ContactItem({
  method,
  href,
  text,
  Icon,
}: ContactItemProps) {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-2 rounded-lg bg-slate-100/70 p-6 text-sm text-slate-600 transition-colors duration-200 hover:bg-slate-200/70 hover:text-slate-900 sm:gap-4 dark:bg-slate-800/50 dark:text-slate-400 dark:hover:bg-slate-800/90 dark:hover:text-slate-200"
    >
      <Icon className="shrink-0 text-slate-900 dark:text-slate-50" size={18} />

      <div className="flex flex-col items-start">
        <p className="text-slate-900 dark:text-slate-50">{method}</p>
        <span>{text}</span>
      </div>
    </a>
  ) : (
    <div className="flex w-full items-center gap-4 rounded-lg bg-slate-100/70 p-6 transition-colors duration-200 hover:bg-slate-200/70 dark:bg-slate-800/50 dark:hover:bg-slate-800/90">
      <Icon className="shrink-0 text-slate-900 dark:text-slate-50" size={18} />

      <div className="flex flex-col items-start">
        <p className="text-slate-900 dark:text-slate-50">{method}</p>
        <p className="text-sm text-slate-600 dark:text-slate-400">{text}</p>
      </div>
    </div>
  )
}
