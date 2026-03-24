import { Contact } from "../data/contact-data";

export default function ContactItem({ method, href, text, Icon }: Contact) {
  return href ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center gap-2 sm:gap-4 rounded-lg bg-slate-800/50 p-6 text-sm text-slate-400 transition-colors duration-200 hover:bg-slate-800/90 hover:text-slate-200"
    >
      <Icon className="shrink-0 text-slate-50" size={18} />

      <div className="flex flex-col items-start">
        <p className="text-slate-50">{method}</p>
        <span>{text}</span>
      </div>
    </a>
  ) : (
    <div className="flex w-full items-center gap-4 rounded-lg bg-slate-800/50 transition-colors duration-200 hover:bg-slate-800/90 p-6">
      <Icon className="shrink-0 text-slate-50" size={18} />

      <div className="flex flex-col items-start">
        <p className="text-slate-50">{method}</p>
        <p className="text-sm text-slate-400">{text}</p>
      </div>
    </div>
  )
}