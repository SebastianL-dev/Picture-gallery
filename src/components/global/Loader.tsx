import { ReactElement } from "react";

export default function Loader({ text }: { text: ReactElement }) {
  return (
    <div className="w-full flex h-full pt-56 pb-36 items-center justify-center flex-col gap-8">
      <div className="loader "></div>
      {text}
    </div>
  );
}
