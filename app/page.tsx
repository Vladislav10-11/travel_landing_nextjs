import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <Categories />
    </main>
  );
};

export default Home;
