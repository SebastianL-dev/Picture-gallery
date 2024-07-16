export default function Download({
  visible,
  close,
}: {
  visible?: boolean;
  close: () => void;
}) {
  // const [style, setStyle] = useState<string>("opacity-0 pointer-events-none");
  const style = visible ? "opacity-100" : "opacity-0 pointer-events-none";

  return (
    <section
      className={`w-screen h-screen ${style} opacity-0 bg-black bg-opacity-50 inset-0 backdrop-blur-md overflow-hidden fixed z-20 justify-center items-center flex transition-all ease-out duration-300`}
    >
      <div className="bg-neutral-900 px-4 py-8 w-auto h-min rounded-lg flex flex-col gap-8 items-center mx-[34%] border-2 border-neutral-500">
        <h2 className="text-white text-3xl font-bold text-center">
          ¡Gracias por descargar <br /> esta imagen!
        </h2>
        <div className="flex items-center w-auto flex-col gap-4">
          <p className="text-neutral-400 text-center mx-auto mb-4">
            Gracias por usar Piucture para descargar las imágenes que más te
            gustan, esperamos que sigas buscando inspiración aquí. 😊
          </p>
          <button
            className=" bg-amber-400 text-neutral-200 px-4 py-2 bg-opacity-80 rounded-md transition-all ease-linear hover:bg-opacity-100  hover:text-white"
            onClick={close}
          >
            <span className=" font-semibold">Aceptar</span>
          </button>
          <p className="text-neutral-500 text-sm text-center">
            Las imágenes de <span className="text-neutral-300">Piucture</span>{" "}
            son tomadas de{" "}
            <a
              href="https://www.pexels.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-amber-400 hover:text-opacity-70 transition-all ease-linear"
            >
              Pexels
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
