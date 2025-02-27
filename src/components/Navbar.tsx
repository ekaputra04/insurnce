import { NavbarItemType } from "@/types/types";
import { Button } from "./ui/button";

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
      <div className="top-0 right-0 left-0 absolute flex justify-between items-center px-8 md:px-16 py-8 w-full">
        <h1 className="uppercase">Insurnce</h1>

        <div className="flex justify-between items-center gap-8">
          <ul className="flex justify-between items-center gap-16">
            {navbarItems.map((item, index) => (
              <li key={index} className="">
                <a href={item.href}>{item.title}</a>
              </li>
            ))}
          </ul>
          <Button className="bg-[#F7C85A] px-6 py-2 text-black">Sign In</Button>
        </div>
      </div>
    </>
  );
}
