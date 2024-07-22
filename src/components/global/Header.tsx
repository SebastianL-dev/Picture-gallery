import { useState } from "react";
import { HeaderB } from "../Buttons";
import { Link } from "react-router-dom";

export default function Header({
  A1,
  A2,
  A3,
}: {
  A1: boolean;
  A2: boolean;
  A3: boolean;
}) {
  const [styles, setStyles] = useState<string>("bg-transparent py-8");

  window.addEventListener("scroll", () => {
    window.scrollY === 0
      ? setStyles("bg-transparent py-8")
      : setStyles("bg-neutral-900 pb-3 pt-2");
  });

  return (
    <header
      className={`fixed w-full top-0 z-20 h-min flex px-[12%] max-md:px-[5%] ease-linear transition-all ${styles} transition-all justify-between ease-linear duration-200 bg-opacity-90 backdrop-blur-sm`}
    >
      <div className="flex gap-24">
        <Link to={"/"}>
          <h1 className="text-white drop-shadow-2xl shad text-4xl font-bold font-tittle h-min hover:-rotate-[5deg] hover:scale-[1.2] cursor-pointer transition-all ease-out duration-200">
            Piucture
          </h1>
        </Link>
        <nav className="flex h-max self-center max-md:hidden">
          <ul className=" flex gap-6 h-min self-center">
            <HeaderB name="Menu" active={A1} route="/" />
            <HeaderB name="Favoritos" active={A2} route="/liked" />
            <HeaderB name="Guardados" active={A3} route="/collections" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
