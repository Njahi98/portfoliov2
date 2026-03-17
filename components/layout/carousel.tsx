"use client"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from "next/image"
import Autoplay from "embla-carousel-autoplay"

interface imagesProps{
    images:Array<string>
}

export function CarouselSize({images}:imagesProps) {
  return (
        <div className=" flex justify-center gap-4 border rounded-xl border-slate-800/70 bg-slate-950/70 shadow-lg shadow-fuchsia-500/10 backdrop-blur-2xl px-6 py-3 max-w-xl w-full mx-auto">
    <Carousel
      opts={{
        align: "start",
      }}
        plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
      className="w-full max-w-48 sm:max-w-xs md:max-w-sm"
    >
      <CarouselContent>
        {images.map((image, index) => (
          <CarouselItem key={index}>
            
              
               
                  <span className="text-3xl font-semibold">
                    <Image src={image} width={1920} height={1080} alt="image"></Image>
                  </span>
               
              
            
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
</div>
  )
}
