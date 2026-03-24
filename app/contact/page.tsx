import { CONTACT_DATA } from "@/components/data/contact-data"
import ContactItem from "@/components/layout/contact-item"

export default function page() {
  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-900 sm:text-5xl md:text-4xl dark:text-slate-50">
          Reach Out
        </h1>
        <div className="mb-4 flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance text-slate-600 sm:text-base dark:text-slate-400">
            Whether you&apos;re interested in discussing a job opportunity, have
            a project in mind, or just want to say hello, feel free to contact
            through the available means
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
        <div className="flex w-full max-w-xl flex-col items-center justify-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-2 shadow-lg shadow-slate-200/60 backdrop-blur-2xl sm:p-4 dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-fuchsia-500/10">
          {CONTACT_DATA.map((item) => (
            <ContactItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
