import { NavbarItemType } from "@/types/types";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { AlignRight } from "lucide-react";

const navbarItems: NavbarItemType[] = [
  {
    title: "Home",
    href: "",
  },
  {
    title: "Service",
    href: "",
  },
  {
    title: "Insurance Services",
    href: "",
  },
];

export default function Navbar() {
  return (
    <>
      <div className="hidden top-0 right-0 left-0 absolute lg:flex justify-between items-center px-8 md:px-16 py-8 w-full">
        <h1 className="font-bold text-white text-xl uppercase">Insurnce</h1>
        <div className="flex justify-between items-center gap-8">
          <ul className="flex justify-between items-center gap-16">
            {navbarItems.map((item, index) => (
              <li key={index} className="text-white hover:underline">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <Button className="bg-[#F7C85A] px-6 py-2 text-black">Sign In</Button>
        </div>
      </div>
      <div className="lg:hidden top-0 right-0 left-0 absolute flex justify-between items-center px-8 md:px-16 py-8 w-full">
        <h1 className="font-bold text-white text-xl uppercase">Insurnce</h1>
        <Sheet>
          <SheetTrigger>
            <AlignRight color="white" />
          </SheetTrigger>
          <SheetContent side={"left"}>
            <h1 className="font-bold text-[#0D4A31] text-xl uppercase">
              Insurnce
            </h1>

            <ul className="flex flex-col justify-between items-center gap-16 mt-48">
              {navbarItems.map((item, index) => (
                <li key={index} className="text-[#0D4A31] hover:underline">
                  <a href={item.href}>{item.title}</a>
                </li>
              ))}
            </ul>
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}
