import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CarouselApi } from "@/components/ui/carousel";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

type Props = {
  carouselApi: CarouselApi;
};

export default function IntrinsicMotivatorCard({ carouselApi }: Props) {
  return (
    <Card>
      <CardContent>
        <p>Card Content</p>
      </CardContent>
      <CardFooter>
        <div className="w-full flex justify-between">
          <div className="p-2 border border-stone-300 rounded-full">
            <ArrowLeftIcon
              className="size-4"
              onClick={() => {
                console.log("clicked here");
                carouselApi?.scrollPrev();
              }}
            />
          </div>
          <div
            className="p-2 border border-stone-300 rounded-full"
            onClick={() => {
              console.log("clckk");
              carouselApi?.scrollNext();
            }}
          >
            <ArrowRightIcon className="size-4" />
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}
