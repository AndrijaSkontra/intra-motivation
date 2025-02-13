import IntrinsicMotivatorBaseCard from "@/app/intrinsic-motivator-base-card";
import { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  carouselApi: CarouselApi;
};

export default function MasteryCard({ carouselApi }: Props) {
  return (
    <IntrinsicMotivatorBaseCard carouselApi={carouselApi}>
      <Image src={"mastery.svg"} alt="Mastery image" width={100} height={100} />
      <h2 className="font-dancing-script text-4xl">Mastery</h2>
      <p className="font-dosis mt-6">
        Utilizing this intrinsic motivator will require you to be competitive
        and strive to be better today than yesterday.
      </p>
      <p className="font-dosis text-gray-500 mt-6 text-sm">
        People: Albert Einstein, Michael Jordan, Leonardo da Vinci
      </p>
    </IntrinsicMotivatorBaseCard>
  );
}
