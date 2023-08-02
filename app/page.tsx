import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Stories from "@/components/Stories";
import { FC } from "react";

const Home: FC = () => {
  return (
    <main>
      <Hero />
      <Categories />
      <Stories />
    </main>
  );
};

export default Home;
