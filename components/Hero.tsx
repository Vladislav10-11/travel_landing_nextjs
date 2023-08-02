import { FC } from "react";
import Image from "next/image";
import MainInput from "./MainInput";

const Hero: FC = () => {
  return (
    <section>
      <div className="container mx-auto flex justify-between py-10 items-center gap-56">
        <div className="flex flex-col items-start">
          <h1 className=" text-8xl font-bold font-mono">
            Discover the Best Lovely Places
          </h1>
          <p className="text-lg text-textColor font-sans py-6">
            Plan and book your perfect trip with expert advice, travel tips,
            destination information and inspiration from us.
          </p>
          <MainInput />
        </div>
        <div className="flex">
          <Image src={"/heroImg.png"} width={470} height={596} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
