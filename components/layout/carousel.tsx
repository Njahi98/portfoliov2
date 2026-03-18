"use client"
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"
import { useEffect, useState } from "react"
import clsx from "clsx"
import { CaretLeftIcon } from "@phosphor-icons/react"
import Link from "next/link"

interface imagesProps {
  images: Array<string>
}

export function CarouselComponent({ images }: imagesProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }
    setCurrent(api.selectedScrollSnap() + 1)
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-4 rounded-xl border border-slate-800/70 bg-slate-950/70 p-4 py-3 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl">
      <Link
        href="/projects"
        className="flex max-w-fit items-center gap-2 hover:opacity-60"
      >
        <CaretLeftIcon />
        <p>Back to Projects</p>
      </Link>
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <Image
              key={index}
              src={image}
              width={1920}
              height={1080}
              alt="image"
              className="mb-4 cursor-pointer rounded-md"
            />
          ))}
        </CarouselContent>
        <div className="flex flex-col items-center md:justify-between md:flex-row gap-4">
          <div className="flex gap-4">
            <CarouselPrevious className="cursor-pointer rounded-full bg-transparent hover:bg-transparent" />
            <CarouselNext className="cursor-pointer rounded-full bg-transparent hover:bg-transparent" />
          </div>
          <div className="flex gap-4 flex-wrap items-center justify-center">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={clsx(
                  "inline-block h-2.5 w-2.5 cursor-pointer rounded-full border transition-all duration-200",
                  {
                    "scale-110 border-slate-200 bg-slate-50 shadow-sm":
                      current - 1 === index,
                    "border-slate-300 bg-transparent hover:border-slate-400":
                      current - 1 !== index,
                  }
                )}
              />
            ))}
          </div>
        </div>
      </Carousel>
    </div>
  )
}
