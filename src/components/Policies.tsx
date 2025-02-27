import { PoliciesItemType } from "@/types/types";
import PoliciesCard from "./PoliciesCard";

const policiesItems: PoliciesItemType[] = [
  {
    title: "Life Insurance",
    description:
      "Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis",
    image: "/images/policies-1.png",
  },
  {
    title: "Home Isurance",
    description:
      "Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis",
    image: "/images/policies-2.png",
  },
  {
    title: "Auto Insurance",
    description:
      "Donec rutrum congue leo eget malesuada. Curabitur non nulla sit amet nisl tempus convallis",
    image: "/images/policies-3.png",
  },
];

export default function Policies() {
  return (
    <>
      <div className="px-8 md:px-16 lg:px-48 py-16">
        <h2 className="font-semibold text-[#093624] text-xl md:text-2xl lg:text-3xl">
          Individual & Umbrella Policies
        </h2>
        <div className="gap-8 grid grid-cols-1 md:grid-cols-3 mt-8">
          {policiesItems.map((item, index) => (
            <PoliciesCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
