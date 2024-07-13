export function HeaderB({ name }: { name: string }) {
  return (
    <>
      <li className="text-neutral-400 font-medium cursor-pointer px-2 py-1 hover:text-neutral-100 transition-all ease-linear">
        {name}
      </li>
    </>
  );
}
