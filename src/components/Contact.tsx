import { Mail, MapPin, Phone } from "lucide-react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

export default function Contact() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-start gap-16 bg-[#0D4A31] px-8 md:px-16 lg:px-48 py-24">
        <div className="space-y-8 md:w-1/2">
          <h3 className="font-semibold text-white text-xl md:text-2xl lg:text-3xl">
            Contact Us
          </h3>
          <p className="font-thin text-slate-100">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
            quam soluta nihil maxime exercitationem repudiandae similique et
            reprehenderit eaque optio.
          </p>
          <div className="flex justify-start items-center gap-8">
            <a
              href="#"
              className="block p-4 border border-slate-100 rounded-full"
            >
              <Mail color="#f1f5f9" />
            </a>
            <a
              href="#"
              className="block p-4 border border-slate-100 rounded-full"
            >
              <Phone color="#f1f5f9" />
            </a>
            <a
              href="#"
              className="block p-4 border border-slate-100 rounded-full"
            >
              <MapPin color="#f1f5f9" />
            </a>
          </div>
        </div>
        <div className="space-y-4 bg-white p-8 rounded-xl md:w-1/2">
          <div className="">
            <Label className="text-[#0D4A31]" htmlFor="name">
              Name
            </Label>
            <Input type="text" id="name" placeholder="John Doe" />
          </div>
          <div className="">
            <Label className="text-[#0D4A31]" htmlFor="email">
              Email Address
            </Label>
            <Input type="email" id="email" placeholder="johndoe@example.com" />
          </div>
          <div className="">
            <Label className="text-[#0D4A31]" htmlFor="phoneNumber">
              Phone Number
            </Label>
            <Input type="tel" id="phoneNumber" placeholder="08123456789" />
          </div>
          <div className="">
            <Label className="text-[#0D4A31]" htmlFor="message">
              Your Message
            </Label>
            <Textarea placeholder="Hello" id="message" />
          </div>
          <Button className="bg-[#0D4A31] hover:bg-[#0D4A31]">Submit</Button>
        </div>
      </div>
    </>
  );
}
