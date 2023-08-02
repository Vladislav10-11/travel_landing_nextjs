import { FC } from "react";
import StoriesCard from "./StoriesCard";

const Stories: FC = () => {
  return (
    <section className="my-28">
      <div className="container mx-auto flex gap-32">
        <div className="flex w-1/2 bg-primaryColor"></div>
        <div className="flex-col">
          <p className="text-xl font-sans text-primaryColor">Our Experience</p>
          <h2 className="text-6xl font-sans text-blackColor font-semibold py-5">
            Our Stories Have Adventures
          </h2>
          <p className="text-base font-sans text-textColor">
            We are experienced in bringing adventures to stay their journey,
            with all outdoor destinations in the world as our specialties. Start
            your adventure now! Nature has already called you!
          </p>
          <div className="flex flex-row gap-5 pt-10">
            <StoriesCard />
            <StoriesCard />
            <StoriesCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
