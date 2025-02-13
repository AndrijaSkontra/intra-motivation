"use client";
import AutonomyCard from "@/app/intrinsic-motivators/autonomy-card";
import AutotelicityCard from "@/app/intrinsic-motivators/autotelicity-card";
import CuriosityCard from "@/app/intrinsic-motivators/curiosity-card";
import MasteryCard from "@/app/intrinsic-motivators/mastery-card";
import PurposeCard from "@/app/intrinsic-motivators/purpose-card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useState } from "react";

export default function IntraMotivatorsPage() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="p-2 md:p-56">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        setApi={setApi}
      >
        <CarouselContent>
          <CarouselItem>
            <MasteryCard carouselApi={api} />
          </CarouselItem>
          <CarouselItem>
            <AutotelicityCard carouselApi={api} />
          </CarouselItem>
          <CarouselItem>
            <AutonomyCard carouselApi={api} />
          </CarouselItem>
          <CarouselItem>
            <CuriosityCard carouselApi={api} />
          </CarouselItem>
          <CarouselItem>
            <PurposeCard carouselApi={api} />
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}
