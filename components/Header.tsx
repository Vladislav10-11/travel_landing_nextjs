import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  const links = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "About us",
      link: "/",
    },
    {
      name: "Destination",
      link: "/",
    },
    {
      name: "Tours",
      link: "/",
    },
    {
      name: "Blog",
      link: "/",
    },
  ];
  return (
    <header>
      <div className="container mx-auto flex justify-between py-10 items-center">
        <div className="font-mono text-2xl font-bold">
          <Link href={"/"}>Salty</Link>
        </div>
        <nav>
          <ul className="flex gap-8">
            {links.map((item) => (
              <li key={item.name} className="font-sans text-base">
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          className="border-2 border-primaryColor rounded-full
        py-4 px-8 font-sans text-primaryColor"
        >
          Book Now
        </button>
      </div>
    </header>
  );
};

export default Header;
