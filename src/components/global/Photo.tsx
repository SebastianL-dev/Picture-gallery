import { IoPersonCircleOutline } from "react-icons/io5";
import { usePhotoContext } from "../../contexts/singleImageCtx";
import { MdOutlineFileDownload } from "react-icons/md";
import { useState } from "react";
import { Photo } from "../../interfaces/Images";
import Download from "./Download";
import { ActionB } from "../Buttons";
import { FaHeart } from "react-icons/fa";
import Loader from "./Loader";

export default function SinglePhoto() {
  const { photoData } = usePhotoContext();
  const [visible, setVisible] = useState<boolean>(false);

  const download = async (url: Photo) => {
    const image = await fetch(url.src.large);
    const imgBlob = await image.blob();
    const imgURL = URL.createObjectURL(imgBlob);

    setVisible(true);

    setTimeout(() => {
      const link = document.createElement("a");
      link.href = imgURL;
      link.download = `picture-${url.id}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 250);
  };

  const closeWindow = () => {
    setVisible(false);
  };

  if (!photoData) return <Loader text={<></>} />;
  return (
    <>
      <Download visible={visible} close={closeWindow} />
      <section className="pt-40 pb-36 flex justify-center">
        <div className="flex flex-col gap-4 mx-4">
          <img
            className="rounded-xl"
            src={photoData.src.large}
            alt={photoData.alt}
          />
          <div className="flex gap-2 items-center">
            <IoPersonCircleOutline className="h-12 w-12 text-neutral-600" />
            <div className="flex flex-col gap-0.5">
              <span className="text-neutral-100 text-lg font-bold">
                {photoData.photographer}
              </span>
              <p className="text-neutral-500 text-sm">{photoData.alt}</p>
            </div>
          </div>
          <div className="flex justify-between items-center mt-5">
            <button
              className="flex group gap-2 bg-amber-400 px-3 py-1 rounded-md bg-opacity-80 hover:bg-opacity-100 hover:scale-105 transition-all ease-linear"
              onClick={() => download(photoData)}
            >
              <span className="text-neutral-200 group-hover:text-white transition-all ease-linear">
                Descargar
              </span>
              <MdOutlineFileDownload className="h-6 w-6 text-neutral-200 group-hover:text-white transition-all ease-linear" />
            </button>
            <div className="flex gap-2">
              <ActionB
                icon={<FaHeart className="w-6 h-6 " />}
                tooltext="Like"
                uniqueId={photoData.id.toString()}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
