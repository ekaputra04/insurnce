import { Button } from "./ui/button";

export default function Home() {
  return (
    <>
      <div className="flex justify-between items-center bg-gradient-to-br from-[#1F8058] to-[#0D4A31] w-screen h-screen">
        <div className="space-y-8 px-16 w-1/2">
          <h2 className="bg-clip-text bg-gradient-to-b from-slate-300 to-white font-bold text-transparent text-3xl lg:text-5xl">
            Are You Covered? Home, Life, & Auto Insurance.
          </h2>
          <p className="text-slate-50">
            Proin eget tortor risus. Praesent sapien massa, convallis a
            pellentesque nec, egestas non nisi. Donec rutrum congue leo eget
            malesuada.
          </p>
          <Button className="bg-[#F7C85A] hover:bg-[#f7c85ad6] px-6 py-4 text-black uppercase">
            Get Started
          </Button>
        </div>
        <div className="w-1/2">
          <img
            src="/images/hero.png"
            alt="hero"
            className="h-screen object-cover"
          />
        </div>
      </div>
    </>
  );
}
