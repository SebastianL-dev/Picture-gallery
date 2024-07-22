import { ReactElement, useEffect, useState } from "react";
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
  uniqueId,
}: {
  icon: ReactElement;
  tooltext: string;
  action: string;
  uniqueId: string;
}) {
  const [colorC, setColorC] = useState(() => {
    return localStorage.getItem(uniqueId) === "true";
  });

  useEffect(() => {
    localStorage.setItem(uniqueId, colorC.toString());
  }, [colorC, uniqueId]);

  return (
    <button
      className={`group/tooltip ${
        colorC
          ? action === "save"
            ? "text-amber-400 text-opacity-70 hover:text-opacity-100"
            : "text-red-500 text-opacity-70 hover:text-opacity-100"
          : "text-white text-opacity-40 hover:text-opacity-50"
      } hover:text-opacity-85 hover:scale-110 transition-all ease-linear relative`}
      onClick={() => setColorC(!colorC)}
    >
      {icon}
      <Tooltip text={tooltext} color="bg-neutral-900 before:bg-neutral-900" />
    </button>
  );
}
