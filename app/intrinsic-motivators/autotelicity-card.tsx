import IntrinsicMotivatorBaseCard from "@/app/intrinsic-motivators/intrinsic-motivator-base-card";
import { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  carouselApi: CarouselApi;
};

export default function AutotelicityCard({ carouselApi }: Props) {
  return (
    <IntrinsicMotivatorBaseCard carouselApi={carouselApi}>
      <Image
        src={"/autotelicity.svg"}
        alt="Autotelicity image"
        width={100}
        height={100}
      />
      <h2 className="font-dancing-script text-4xl">Autotelicity</h2>
      <p className="font-dosis mt-6">
        Love what you are doing. Finding yourself being producitive without any
        reason in your free time is a indicator you don't lack this trait.
      </p>
      <p className="font-dosis text-gray-500 mt-6 text-sm">
        People: Elon Musk, Mark Zuckerberg
      </p>
    </IntrinsicMotivatorBaseCard>
  );
}
