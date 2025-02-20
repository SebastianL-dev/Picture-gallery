import { BsGithub } from "react-icons/bs";
import Tooltip from "./Tooltip";

export default function Footer() {
  return (
    <footer className="flex mx-[10%] py-6 justify-between items-center max-md:mx-[5%]">
      <p className=" text-neutral-400 font-normal text-sm h-min">
        © 2024 | Creado por{" "}
        <span className="font-bold text-neutral-300">Sebastián Lozano</span>
      </p>
      <a
        className="group/tooltip relative text-neutral-400 hover:text-white transition-all ease-linear"
        href="https://github.com/SebastianL-dev/Picture-gallery"
        target="_blank"
        rel="noopener noreferrer"
      >
        <BsGithub className=" w-9 h-9 " />
        <Tooltip text="GitHub" color="bg-neutral-800 before:bg-neutral-800" />
      </a>
    </footer>
  );
}
