import { Button } from "./ui/button";

export default function Consultation() {
  return (
    <>
      <div className="flex md:flex-row flex-col justify-between items-center gap-16 px-8 md:px-16 lg:px-48 py-16">
        <div className="space-y-8 md:w-1/2">
          <h3 className="font-semibold text-[#093624] text-xl md:text-2xl lg:text-3xl">
            Experienced Agents You Can Trust
          </h3>
          <p className="text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus consectetur tempore quia nam recusandae vero tenetur
            eius molestias eum quasi modi animi beatae, corrupti delectus ipsum
            commodi consequuntur facere dolorum!
          </p>
        </div>
        <div className="md:w-1/2">
          <div className="grid grid-cols-2 bg-gradient-to-br from-[#1F8058] to-[#0D4A31] rounded-xl w-full aspect-square">
            <div className="flex flex-col justify-center items-center border border-white aspect-square">
              <h4 className="font-semibold text-white text-2xl">18</h4>
              <p className="text-white text-lg uppercase">Policies</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-white aspect-square">
              <h4 className="font-semibold text-white text-2xl">9</h4>
              <p className="text-white text-lg uppercase">Agents</p>
            </div>
            <div className="flex flex-col justify-center items-center border border-white aspect-square">
              <h4 className="font-semibold text-white text-2xl">10</h4>
              <p className="text-white text-lg uppercase">Years in Business</p>
            </div>
            <div className="relative flex flex-col justify-center items-center space-y-4 bg-white shadow-md p-4 rounded-lg w-full aspect-square scale-110">
              <h3 className="font-semibold text-[#093624] text-2xl text-center">
                Free Consultation
              </h3>
              <p className="text-slate-600 text-xs text-center">
                Proin eget tortor risus. Praesent sapien massa, convallis.
              </p>
              <Button className="bg-[#F7C85A] hover:bg-[#f7c85ad6] mx-auto px-6 py-4 text-black uppercase">
                Chat Now
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex md:flex-row flex-col justify-between items-center gap-16 px-8 md:px-16 lg:px-48 py-16">
        <div className="md:w-1/2">
          <img src="/images/consultation.png" alt="" />
        </div>
        <div className="space-y-8 md:w-1/2">
          <h3 className="font-semibold text-[#093624] text-xl md:text-2xl lg:text-3xl">
            We Got You Covered. Don’t Get Caught Off Guard
          </h3>
          <p className="text-slate-600">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Accusantium cum alias ullam possimus, voluptatibus omnis fugit ipsam
            quam quasi dolorem nisi excepturi enim dolorum esse?
          </p>
        </div>
      </div>
    </>
  );
}
