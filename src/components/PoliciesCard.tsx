import { PoliciesItemType } from "@/types/types";

interface PoliciesCardInterface {
  item: PoliciesItemType;
}

export default function PoliciesCard({ item }: PoliciesCardInterface) {
  return (
    <>
      <div className="hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 ease-in-out">
        <img
          src={item.image}
          alt="image"
          className="w-full object-cover aspect-square"
        />
        <div className="space-y-4 p-8">
          <h3 className="text-[#093624] text-xl">{item.title}</h3>
          <p className="text-slate-600">{item.description}</p>
        </div>
      </div>
    </>
  );
}
