import { useImageContext } from "../contexts/imagesCtx";

export default function MainB() {
  const { imageData } = useImageContext();
  if (!imageData) return <p>Loading...</p>;
  return (
    <div className="flex flex-col items-center my-36">
      <h1 className="text-neutral-200 font-bold text-5xl">
        ¿Qué quieres ver hoy?
      </h1>
      <div>
        {imageData.map((image) => (
          <div key={image.id} className="image-item">
            <img src={image.src.medium} alt={image.alt} />
            <p>{image.photographer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
