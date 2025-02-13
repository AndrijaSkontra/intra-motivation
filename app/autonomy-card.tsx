import IntrinsicMotivatorBaseCard from "@/app/intrinsic-motivator-base-card";
import { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  carouselApi: CarouselApi;
};

export default function AutonomyCard({ carouselApi }: Props) {
  return (
    <IntrinsicMotivatorBaseCard carouselApi={carouselApi}>
      <Image
        src={"/autonomy.png"}
        alt="Autonomy image"
        width={100}
        height={100}
        className="my-2"
      />
      <h2 className="font-dancing-script text-4xl">Autonomy</h2>
      <p className="font-dosis mt-6">
        Being in control of what you are doing. Deciding you own work flow.
        Maybe you are not in the C class. But are you in control of your tools?
      </p>
      <p className="font-dosis text-gray-500 mt-6 text-sm">
        People: George Washington, Winston Churchill
      </p>
    </IntrinsicMotivatorBaseCard>
  );
}
