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
import Link from "next/link"
import {
  ArrowSquareOutIcon,
  CaretLeftIcon,
  GithubLogoIcon,
} from "@phosphor-icons/react"
import { useParams } from "next/navigation"
import { useT } from "next-i18next/client"

interface imagesProps {
  images: Array<string>
  githubUrl?: string
  liveDemoUrl?: string
  longDescription: string
}

export function CarouselComponent({
  images,
  githubUrl,
  liveDemoUrl,
  longDescription,
}: imagesProps) {
  const params = useParams()
  const lng = params.lng as string
  const { t } = useT("projects")
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
    <div className="mx-auto flex w-full flex-col justify-center gap-4 rounded-xl border border-slate-200 bg-white/70 p-6 shadow-lg shadow-slate-200/60 backdrop-blur-2xl dark:border-slate-800/70 dark:bg-slate-950/70 dark:shadow-sky-500/10">
      <Link
        href={`/${lng}/projects`}
        className="flex max-w-fit items-center text-base sm:text-lg gap-2 text-slate-700 transition-all duration-500 hover:-translate-x-1.5 hover:opacity-60 dark:text-slate-200"
      >
        <CaretLeftIcon />
        <p>{t("carousel.back")}</p>
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
              alt={`${t("carousel.slideImageAlt")} ${index + 1}`}
              className="mb-4 cursor-pointer rounded-md object-cover"
            />
          ))}
        </CarouselContent>
        <div className="mb-4 flex flex-col-reverse items-center gap-4 md:flex-row md:justify-between">
          <div className="flex gap-4">
            <CarouselPrevious className="cursor-pointer rounded-full bg-transparent transition-all duration-300 hover:bg-transparent" />
            <CarouselNext className="cursor-pointer rounded-full bg-transparent transition-all duration-300 hover:bg-transparent" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {images.map((_, index) => (
              <span
                key={index}
                onClick={() => api?.scrollTo(index)}
                className={clsx(
                  "inline-block h-2.5 w-2.5 cursor-pointer rounded-full border transition-all duration-200",
                  {
                    "scale-110 border-slate-200 bg-slate-50 shadow-sm dark:border-slate-700 dark:bg-slate-900":
                      current - 1 === index,
                    "border-slate-300 bg-transparent hover:border-slate-400 dark:border-slate-700 dark:hover:border-slate-500":
                      current - 1 !== index,
                  }
                )}
              />
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <p className="max-w-2xl text-sm text-balance whitespace-pre-line text-slate-600 sm:text-base dark:text-slate-400">
            {longDescription}
          </p>

          <div className="flex justify-center gap-4 text-sm sm:text-base">
            {githubUrl && (
              <Link
                href={githubUrl}
                target="_blank"
                className="flex w-24 flex-col items-center justify-center gap-2 rounded-md bg-slate-100 px-2 py-2 text-slate-900 transition-colors duration-200 hover:bg-slate-200 md:w-auto md:flex-row dark:bg-slate-800/70 dark:text-slate-50 dark:hover:bg-slate-800/90"
              >
                <p>{t("carousel.github")}</p> <GithubLogoIcon />
              </Link>
            )}
            {liveDemoUrl && (
              <Link
                href={liveDemoUrl}
                target="_blank"
                className="flex w-24 flex-col items-center justify-center gap-2 rounded-md bg-slate-100 px-2 py-2 text-slate-900 transition-colors duration-200 hover:bg-slate-200 md:w-auto md:flex-row dark:bg-slate-800/70 dark:text-slate-50 dark:hover:bg-slate-800/90"
              >
                <p>{t("carousel.liveDemo")}</p>
                <ArrowSquareOutIcon />
              </Link>
            )}
          </div>
        </div>
      </Carousel>
    </div>
  )
}
