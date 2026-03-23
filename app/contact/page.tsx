import { CONTACT_DATA } from "@/components/data/contact-data"
import ContactItem from "@/components/layout/contact-item"

export default function page() {
  return (
    <section className="mx-auto min-h-screen max-w-4xl px-6 py-32">
      <div className="mx-auto flex flex-col items-center text-center">
        <h1 className="mb-4 text-2xl font-semibold tracking-tight text-balance text-slate-50 sm:text-5xl md:text-4xl">
          Reach Out
        </h1>
        <div className="mb-4 flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance text-slate-400 sm:text-base">
            Whether you&apos;re interested in discussing a job opportunity, have
            a project in mind, or just want to say hello, feel free to contact
            through the available means
          </p>
          <p className="mx-auto mb-8 h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>
        <div className="flex w-full max-w-md flex-col items-center justify-center gap-4 rounded-xl border border-slate-800/70 bg-slate-950/70 p-2 sm:p-4 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl">
          {CONTACT_DATA.map((item) => (
            <ContactItem key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  )
}
