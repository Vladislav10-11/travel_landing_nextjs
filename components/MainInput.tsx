import Image from "next/image";
import { FC } from "react";
import SearchIcon from "@/icons/searchIcon.svg";
const MainInput: FC = () => {
  return (
    <div className="flex justify-between bg-white rounded-full p-5">
      <div className="flex flex-col">
        <p className="font-sans text-lg">Where</p>
        <input
          type="text"
          className="outline-none text-base"
          placeholder="Center Point, Lo..."
        />
      </div>

      <div className="flex flex-col">
        <p className="font-sans text-lg">Date</p>
        <input
          type="text"
          className="outline-none text-base"
          placeholder="09th March,2021"
        />
      </div>

      <Image src={SearchIcon} alt="" />
    </div>
  );
};

export default MainInput;
