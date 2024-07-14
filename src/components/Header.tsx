import { HeaderB } from "./Buttons";

export default function Header() {
  return (
    <header className="w-full flex gap-48 py-6 fixed top-0 justify-center">
      <h1 className="text-white text-4xl font-bold font-tittle">Piucture</h1>
      <nav className="flex h-max self-center pt-2">
        <ul className=" flex gap-8 h-min self-center ">
          <HeaderB name="Menu" />
          <HeaderB name="Favoritos" />
          <HeaderB name="Guardados" />
        </ul>
      </nav>
    </header>
  );
}
