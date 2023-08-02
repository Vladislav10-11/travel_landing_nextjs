import { FC } from "react";

const StoriesCard: FC = () => {
  return (
    <div className="bg-white rounded-2xl flex flex-col justify-center items-center p-6">
      <h3 className="text-primaryColor text-5xl font-sans">12K+</h3>
      <p className="text-textColor text-xl font-sans text-left py-5">
        Succes Journey
      </p>
    </div>
  );
};

export default StoriesCard;
