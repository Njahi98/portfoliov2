import type { StackItem } from "../data/stack-category"
import { StackItem as StackItemComponent } from "./stack-item"

export type StackCategoryProps = {
  name: string
  items: Array<StackItem & { alt: string }>
}

export default function StackCategory({ name, items }: StackCategoryProps) {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2">
        <p className="text-xl tracking-tight text-balance text-slate-900 dark:text-slate-50">
          {name}
        </p>
        <p className="mx-auto h-px w-20 rounded-full bg-linear-to-r from-sky-800 via-sky-300 to-sky-800" />
      </div>

      <div className="grid grid-cols-2 justify-items-center gap-8 sm:grid-cols-4 md:grid-cols-5">
        {items.map((item) => (
          <StackItemComponent
            key={item.name}
            {...item}
          />
        ))}
      </div>
    </div>
  )
}
