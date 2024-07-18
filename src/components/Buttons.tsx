import { ReactElement, useState } from "react";
import Tooltip from "./global/Tooltip";
import { Link } from "react-router-dom";

export function HeaderB({
  name,
  active,
  route,
}: {
  name: string;
  active: boolean;
  route: string;
}) {
  const activeS = active
    ? "after:w-full after:left-[-4px] before:opacity-100 text-neutral-100"
    : "after:w-0 after:left-[50%] before:opacity-0 text-neutral-400";

  return (
    <Link to={route}>
      <li
        className={` mt-0.5 font-normal ${activeS} inline-block text-center text-base cursor-pointer px-4 py-2 hover:text-neutral-100 transition-all ease-linear bgBT relative after:content-[''] after:h-0.5 after:rounded-[50px] after:bg-amber-500 after:absolute after:bottom-0 after:transition-all after:ease-linear hover:after:w-full hover:after:left-[-4px] before:content-[''] before:h-full before:w-full before:absolute before:inset-0 before:-skew-x-[13deg] before:rounded-t-sm before:-z-10 before:opacity-0 before:transition-all before:ease-linear hover:before:opacity-100`}
      >
        <span>{name}</span>
      </li>
    </Link>
  );
}

export function ActionB({
  icon,
  tooltext,
  action,
}: {
  icon: ReactElement;
  tooltext: string;
  action: string;
}) {
  const [color, setColor] = useState<string>(
    "text-neutral-300 text-opacity-40"
  );
  const [colorC, setColorC] = useState<boolean>(true);

  const Action = () => {
    setColorC(!colorC);
    if (action == "save" && colorC) {
      setColor("text-amber-400 text-opacity-85");
    } else if (action == "like" && colorC) {
      setColor("text-red-500 text-opacity-85");
    } else if (!colorC) {
      setColor("text-neutral-300 text-opacity-40");
    }
  };

  return (
    <button
      className={`group/tooltip ${color} hover:text-opacity-85 hover:scale-110 transition-all ease-linear relative`}
      onClick={Action}
    >
      {icon}
      <Tooltip text={tooltext} color="bg-neutral-900 before:bg-neutral-900" />
    </button>
  );
}
