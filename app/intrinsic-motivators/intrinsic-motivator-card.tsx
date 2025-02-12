import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

type Props = {
  carouselApi: CarouselApi;
};

export default function IntrinsicMotivatorCard({ carouselApi }: Props) {
  return (
    <Card>
      <CardContent className="w-full h-full flex flex-col justify-center items-center">
        <Image
          src={"mastery.svg"}
          alt="Mastery image"
          width={100}
          height={100}
        />
        <h2 className="font-dancing-script text-4xl">Mastery</h2>
        <p className="font-dosis mt-6">
          Utilizing this intrinsic motivator will require to you to be
          competative and look be better today than yesterday.
        </p>
        <p className="font-dosis text-gray-500 mt-6 text-sm">
          People: Albert Einstein, Michael Jordan, Leonardo da Vinci
        </p>
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
