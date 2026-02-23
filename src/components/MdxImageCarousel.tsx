"use client";

import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

type CarouselImage = {
  src: string;
  alt: string;
  caption?: string;
};

interface MdxImageCarouselProps {
  images: CarouselImage[];
}

export function MdxImageCarousel({ images }: MdxImageCarouselProps) {
  if (!images?.length) {
    return null;
  }

  return (
    <figure className="my-10 not-prose">
      <Carousel className="w-full" opts={{ align: "start", loop: images.length > 1 }}>
        <CarouselContent>
          {images.map((image) => (
            <CarouselItem key={image.src}>
              <div className="overflow-hidden rounded-xl border border-border bg-card">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={1600}
                  height={900}
                  className="h-auto w-full"
                />
              </div>
              {image.caption ? (
                <figcaption className="mt-2 text-center text-sm text-muted-foreground">
                  {image.caption}
                </figcaption>
              ) : null}
            </CarouselItem>
          ))}
        </CarouselContent>

        {images.length > 1 ? (
          <>
            <CarouselPrevious className="-left-2 md:-left-10" />
            <CarouselNext className="-right-2 md:-right-10" />
          </>
        ) : null}
      </Carousel>
    </figure>
  );
}
