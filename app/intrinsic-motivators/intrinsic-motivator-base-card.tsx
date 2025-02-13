import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { ReactNode } from "react";

type Props = {
  carouselApi: CarouselApi;
  children: ReactNode;
};

export default function IntrinsicMotivatorBaseCard({
  carouselApi,
  children,
}: Props) {
  return (
    <Card className="min-h-[28rem] flex flex-col justify-end">
      <CardContent className="w-full h-full flex flex-col justify-center items-center">
        {children}
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <button
            type="button"
            className="p-2 border border-stone-300 rounded-full"
            onClick={() => carouselApi?.scrollPrev()}
            aria-label="Previous slide"
          >
            <ArrowLeftIcon className="size-4" />
          </button>
          <button
            type="button"
            className="p-2 border border-stone-300 rounded-full"
            onClick={() => carouselApi?.scrollNext()}
            aria-label="Next slide"
          >
            <ArrowRightIcon className="size-4" />
          </button>
        </div>
      </CardFooter>
    </Card>
  );
}
