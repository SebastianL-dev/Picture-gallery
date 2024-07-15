import { useState } from "react";
import { HeaderB } from "./Buttons";

export default function Header() {
  const [styles, setStyles] = useState<string>("bg-transparent py-8");

  window.addEventListener("scroll", () => {
    window.scrollY === 0
      ? setStyles("bg-transparent py-8")
      : setStyles("bg-neutral-900 pb-3 pt-2");
  });

  return (
    <header
      className={`fixed w-full top-0 z-20 h-min flex px-[12%] ${styles} transition-all justify-between ease-linear duration-200 bg-opacity-90 backdrop-blur-sm`}
    >
      <div className="flex gap-24">
        <h1 className="text-white text-4xl font-bold font-tittle h-min">
          Piucture
        </h1>
        <nav className="flex h-max self-center">
          <ul className=" flex gap-6 h-min self-center">
            <HeaderB name="Menu" />
            <HeaderB name="Favoritos" />
            <HeaderB name="Guardados" />
          </ul>
        </nav>
      </div>
    </header>
  );
}
