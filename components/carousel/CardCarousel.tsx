"use client";

import { FC } from "react";

interface ICard {
  title: string;
}
interface ICardCarousel {
  cards: ICard[];
  currentIndex: number;
}
const CardCarousel: FC<ICardCarousel> = ({ cards, currentIndex }) => {
  return (
    <div
      className="relative w-full overflow-hidden "
      style={{ transform: `translateX(-${currentIndex * 100}%)` }}
    >
      <div className="flex transition-transform duration-300">
        {cards.map((card, index) => (
          <div
            key={index}
            className={`w-full ${index === currentIndex ? "active " : ""}`}
          >
            <div className="bg-white rounded-full "></div>
            <h3 className="text-2xl font-sans ">{card.title}</h3>
            <div></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardCarousel;
