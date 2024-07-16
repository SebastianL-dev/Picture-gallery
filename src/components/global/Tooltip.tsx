export default function Tooltip({
  text,
  color,
}: {
  text: string;
  color: string;
}) {
  return (
    <div
      className={`text-xs h-min ${color} opacity-0 py-1 group-hover/tooltip:opacity-85 w-max text-white font-normal group-hover/tooltip:-top-9 pointer-events-none transition-all ease-tooltip duration-200 px-3 justify-self-center rounded-full absolute -top-5 left-1/2 -translate-x-1/2 before:content-[''] before:absolute before:w-2 before:h-2 before:-bottom-1 before:left-1/2 before:-translate-x-1/2 before:rotate-45`}
    >
      {text}
    </div>
  );
}
