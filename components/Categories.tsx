"use client";
import { FC, useState } from "react";
import Image from "next/image";
import arrowRight from "@/icons/arrowRight.svg";
import arrowLeft from "@/icons/arrowLeft.svg";

import Link from "next/link";
import CardCarousel from "./carousel/CardCarousel";

const cards = [
  {
    title: "Beach",
  },
  {
    title: "Desert",
  },
  {
    title: "Mountain",
  },
  {
    title: "Temple",
  },
  {
    title: "Tower",
  },
  {
    title: "Pyramid",
  },
];

const Categories: FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === cards.length - 1 ? 0 : prevIndex + 1
    );
  };
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - 1 : prevIndex - 1
    );
  };
  return (
    <section>
      <div className="container mx-auto flex flex-col">
        <div className="flex justify-between">
          <div className="flex flex-col ">
            <h1 className="font-sans font-semibold text-6xl">Categories</h1>
            <p className="text-base font-sans text-textColor p-6">
              Here are lots of interesting destinations to visit, but don’t be
              confused—they’re already grouped by category.
            </p>
          </div>
          <div className=" flex gap-4 ">
            <Link href={"/"} onClick={handlePrev}>
              <Image src={arrowLeft} alt="" />
            </Link>
            <Link href={"/"} onClick={handleNext}>
              <Image src={arrowRight} alt="" />
            </Link>
          </div>
        </div>
        <CardCarousel cards={cards} currentIndex={currentIndex} />
      </div>
    </section>
  );
};

export default Categories;
