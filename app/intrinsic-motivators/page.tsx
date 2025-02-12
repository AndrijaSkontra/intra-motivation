"use client";
import IntrinsicMotivatorCard from "@/app/intrinsic-motivators/intrinsic-motivator-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function IntraMotivatorsPage() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="p-2">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <IntrinsicMotivatorCard carouselApi={api} />
          </CarouselItem>
          <CarouselItem>
            <IntrinsicMotivatorCard carouselApi={api} />
          </CarouselItem>
          <CarouselItem>
            <IntrinsicMotivatorCard carouselApi={api} />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
