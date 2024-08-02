import { useState } from "react";
import { HeaderB } from "../Buttons";
import { Link } from "react-router-dom";
import { ImHome } from "react-icons/im";
import { FaHeart } from "react-icons/fa";

export default function Header({ A1, A2 }: { A1: boolean; A2: boolean }) {
  const [styles, setStyles] = useState<string>("bg-transparent py-8");

  window.addEventListener("scroll", () => {
    window.scrollY === 0
      ? setStyles("bg-transparent py-8")
      : setStyles("bg-neutral-900 pb-3 pt-2");
  });

  const setPhoto = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <header
        className={`fixed w-full top-0 z-20 h-min flex px-[12%] max-md:px-[5%] ease-linear transition-all ${styles} transition-all justify-between ease-linear duration-200 bg-opacity-90 backdrop-blur-sm`}
      >
        <div className="flex gap-24 max-md:w-full max-md:justify-between max-md:gap-0">
          <Link to={"/"} onClick={setPhoto}>
            <h1 className="text-white drop-shadow-2xl shad text-4xl font-bold font-tittle h-min hover:-rotate-[5deg] hover:scale-[1.2] cursor-pointer transition-all ease-out duration-200">
              Piucture
            </h1>
          </Link>
          <nav className="flex h-max self-center max-md:hidden">
            <ul className=" flex gap-6 h-min self-center">
              <HeaderB name="Menu" active={A1} route="/" />
              <HeaderB name="Favoritos" active={A2} route="/liked" />
            </ul>
          </nav>
          <div className="h-max self-center max-md:flex hidden">
            <div className=" pt-1 flex gap-6">
              <Link
                to={"/"}
                className="text-white text-opacity-50 hover:text-opacity-80 transition-all ease-linear"
              >
                <ImHome className="h-7 w-7 " />
              </Link>
              <Link
                to={"/liked"}
                className="text-white text-opacity-50 hover:text-opacity-80 transition-all ease-linear"
              >
                <FaHeart className="h-7 w-7" />
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
