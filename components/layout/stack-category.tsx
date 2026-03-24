import type { StackCategory } from "../data/stack-category"
import { StackItem } from "./stack-item"

export default function StackCategory({ name, items }: StackCategory) {
  return (
    <div className="flex flex-col gap-8">
        <div className="flex flex-col gap-2">

      <p className="text-xl tracking-tight text-balance text-slate-900 dark:text-slate-50">
        {name}
      </p>
      <p className="mx-auto h-px w-20 rounded-full bg-linear-to-r from-fuchsia-800 via-fuchsia-300 to-fuchsia-800" />
        </div>

      <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 md:grid-cols-5 justify-items-center">
        {items.map((item) => (
          <StackItem
            key={item.name}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
