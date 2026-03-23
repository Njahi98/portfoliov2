import { Contact } from "../data/contact-data"

export default function ContactItem({ method, href, text, Icon }: Contact) {
  return (
    <div className="flex w-full items-center gap-4 rounded-lg bg-slate-800/50 p-4 tracking-tighter sm:tracking-normal sm:max-w-xs">
      <Icon className="text-slate-50 shrink-0" size={18} />
      <div className="flex flex-col items-start">
        <p className="text-start text-slate-50">{method}</p>
        {href ? (

          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-slate-400 hover:text-slate-200"
          >
            {text}
            
          </a>
        ) : (
          <p className="text-sm text-slate-400 hover:text-slate-200">{text}</p>
        )}
      </div>
    </div>
  )
}
