import Masonry from "react-masonry-css";
import { useImageContext } from "../contexts/imagesCtx";

export default function MainB() {
  const { imageData } = useImageContext();

  if (!imageData) return <p className="text-white">Loading...</p>;

  // Configura los breakpoints para las columnas
  const breakpointColumnsObj = {
    default: 4,
    1100: 2,
    700: 1,
  };

  return (
    <div className="flex flex-col items-center my-36">
      <h1 className="text-neutral-200 font-bold text-5xl">
        ¿Qué quieres ver hoy?
      </h1>
      <Masonry
        breakpointCols={breakpointColumnsObj}
        className="flex mx-[10%] gap-4"
        columnClassName="flex flex-col gap-4"
      >
        {imageData.map((image) => (
          <div
            key={image.id}
            className="rounded-lg cursor-pointer overflow-hidden group"
          >
            <img
              src={image.src.large}
              alt={image.alt}
              className="w-full h-full object-cover group-hover:blur-[3px] group-hover:scale-[1.07] transition-all ease-out duration-300 "
            />
          </div>
        ))}
      </Masonry>
    </div>
  );
}
