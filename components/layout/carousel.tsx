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
import { ArrowSquareOutIcon, CaretLeftIcon, GithubLogoIcon } from "@phosphor-icons/react"
import Link from "next/link"

interface imagesProps {
  images: Array<string>,
  githubUrl?: string,
  liveDemoUrl?: string,
  longDescription:string
}

export function CarouselComponent({ images,githubUrl,liveDemoUrl, longDescription }: imagesProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
  if (!api) return

  const onSelect = () => {
    setCurrent(api.selectedScrollSnap() + 1)
  }

  onSelect()
  api.on("select", onSelect)

  return () => {
    api.off("select", onSelect)
  }
}, [api])

  return (
    <div className="mx-auto flex w-full max-w-xl flex-col justify-center gap-4 rounded-xl border border-slate-800/70 bg-slate-950/70 p-4 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl">
      <Link
        href="/projects"
        className="flex max-w-fit items-center gap-2 hover:opacity-60 hover:-translate-x-1.5 transition-all duration-500"
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
              className="mb-4 cursor-pointer rounded-md object-cover"
            />
          ))}
        </CarouselContent>
        <div className="flex flex-col-reverse items-center md:justify-between md:flex-row gap-4 mb-4">
          <div className="flex gap-4">
            <CarouselPrevious className="cursor-pointer rounded-full bg-transparent hover:bg-transparent transition-all duration-300" />
            <CarouselNext className="cursor-pointer rounded-full bg-transparent hover:bg-transparent transition-all duration-300" />
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
        <div className="flex flex-col gap-4 text-sm">
          <p className="whitespace-pre-line max-w-2xl text-sm text-balance text-slate-400 sm:text-base">
            {longDescription}
          </p>

          <div className="flex justify-center gap-4 text-sm">
          {githubUrl && (
            <Link
            href={githubUrl}
            target="_blank"
            className="flex flex-col md:flex-row justify-center items-center gap-2 px-2 py-2 rounded-md bg-slate-800/70 text-slate-50 hover:bg-slate-800/90 transition-colors duration-200 w-24 md:w-auto"
            >
             <p> GitHub</p>  <GithubLogoIcon/>
            </Link>
          )}
          {liveDemoUrl && (
            <Link
            href={liveDemoUrl}
            target="_blank"
            className="flex flex-col md:flex-row justify-center items-center gap-2 px-2 py-2 rounded-md bg-slate-800/70 text-slate-50 hover:bg-slate-800/90 transition-colors duration-200 w-24 md:w-auto"
            >
            <p>Live Demo</p><ArrowSquareOutIcon/>
            </Link>
          )}

          </div>
        </div>
      </Carousel>
    </div>
  )
}
