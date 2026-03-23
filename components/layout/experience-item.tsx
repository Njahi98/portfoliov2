import {
  CalendarIcon,
  LinkIcon,
  MapPinIcon,
} from "@phosphor-icons/react/dist/ssr"
import { Experience } from "../data/experience"

export default function ExperienceItem({
  title,
  company,
  companyUrl,
  date,
  location,
  locationType,
  description,
}: Experience) {
  return (
    <div className="flex gap-2">
      <div className="flex flex-col items-center">
        <span className="h-3 w-3 rounded-full bg-slate-50" />
        <span className="w-0.5 flex-1 bg-slate-700" />
      </div>
      <div className="mb-4 flex w-full flex-col gap-6 rounded-xl border border-slate-800/70 bg-slate-950/70 p-4 text-slate-50 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl transition-all duration-200 hover:translate-x-1 hover:bg-slate-950/80">
        <div className="flex flex-col gap-4 md:flex-row md:justify-between">
          <div className="">
            <p className="text-md font-semibold tracking-tight md:text-xl">
              {title}
            </p>
            <span className="flex items-center gap-2">
              <LinkIcon />
              <a
                href={companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-slate-400 hover:text-slate-50"
              >
                {company}
              </a>
            </span>
          </div>
          <p className="flex items-center gap-2">
            {" "}
            <CalendarIcon size={18} />
            {date}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MapPinIcon size={18} />
          <p className="text-sm tracking-tighter">{location}</p>
          <span className="h-2 w-2 rounded-full bg-slate-50" />
          <p className="text-sm">{locationType}</p>
        </div>
        <div className="w-full">
          <p className="text-sm tracking-tight text-balance text-slate-400 sm:text-base sm:tracking-normal">
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}
