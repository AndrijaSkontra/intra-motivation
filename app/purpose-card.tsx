import IntrinsicMotivatorBaseCard from "@/app/intrinsic-motivator-base-card";
import { CarouselApi } from "@/components/ui/carousel";
import Image from "next/image";

type Props = {
  carouselApi: CarouselApi;
};

export default function PurposeCard({ carouselApi }: Props) {
  return (
    <IntrinsicMotivatorBaseCard carouselApi={carouselApi}>
      <Image src={"purpose.svg"} alt="Purpose image" width={100} height={100} />
      <h2 className="font-dancing-script text-4xl">Purpose</h2>
      <p className="font-dosis mt-6">
        What is the point of the your goals? Are you working to improve human
        kind or do you think you can make a difference? Without purpose do we
        exist?
      </p>
      <p className="font-dosis text-gray-500 mt-6 text-sm">
        People: Jordan Peterson, Friedrick Nietzsche
      </p>
    </IntrinsicMotivatorBaseCard>
  );
}
