import IntrinsicMotivatorBaseCard from "@/app/intrinsic-motivators/intrinsic-motivator-base-card";
import { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  carouselApi: CarouselApi;
};

export default function CuriosityCard({ carouselApi }: Props) {
  return (
    <IntrinsicMotivatorBaseCard carouselApi={carouselApi}>
      <Image
        src={"/curiosity.svg"}
        alt="Curiosity image"
        width={100}
        height={100}
        className="my-2"
      />
      <h2 className="font-dancing-script text-4xl">Curiosity</h2>
      <p className="font-dosis mt-6">
        Finding yourself thinking about your work in your non working hours?
        Books and video content are easily accessible these days.
      </p>
      <p className="font-dosis text-gray-500 mt-6 text-sm">
        People: Isaac Newton, Nikola Tesla
      </p>
    </IntrinsicMotivatorBaseCard>
  );
}
