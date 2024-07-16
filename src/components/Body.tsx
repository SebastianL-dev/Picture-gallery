import Masonry from "react-masonry-css";
import { useImageContext } from "../contexts/imagesCtx";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { ActionB } from "./Buttons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import IImagesData from "../interfaces/Images";
import Download from "../components/global/Download";

export default function MainB() {
  const { imageData } = useImageContext();
  const [visible, setvisible] = useState<boolean>(false);

  if (!imageData) return <p className="text-white">Loading...</p>;

  const breakpointColumnsObj = {
    default: 4,
    1920: 4,
    1460: 3,
    1080: 2,
    720: 1,
  };

  useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 600);
  }, []);

  const download = async (url: IImagesData) => {
    const image = await fetch(url.src.large);
    const imgBlob = await image.blob();
    const imgURL = URL.createObjectURL(imgBlob);

    setvisible(true);

    setTimeout(() => {
      var link = document.createElement("a");
      link.href = imgURL;
      link.download = `piucture-${url.id}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 250);
  };

  const closeWindow = () => {
    setvisible(false);
  };

  return (
    <>
      <Download visible={visible} close={closeWindow} />
      <section className="flex flex-col items-center pt-56 pb-36 gap-36">
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
              className="rounded-lg border-2 border-opacity-0 border-white hover:border-opacity-80 cursor-pointer overflow-hidden group dg relative hover:before:opacity-100 before:content-[''] before:rounded-lg  before:absolute before:w-full before:h-full before:opacity-0 before:z-10 before:bottom-0 before:transition-all before:ease-out before:duration-300"
              data-aos="zoom-in-up"
              data-aos-easing="ease-out"
              data-aos-duration="500"
              data-aos-offset="150"
            >
              <img
                src={image.src.large}
                alt={image.alt}
                className="w-full h-full object-cover group-hover:blur-[3px] group-hover:scale-[1.07] transition-all ease-out duration-300 z-0 rounded-lg "
              />
              <div className="px-4 py-3 text-white absolute bottom-0 z-10 transition-all ease-out duration-300 flex justify-between w-full cursor-default">
                <div className="flex gap-1 opacity-0 group-hover:opacity-100 items-center">
                  <IoPersonCircleOutline className="h-6 w-6 opacity-50" />
                  <span className="">{image.photographer}</span>
                </div>
                <div className="flex gap-2 items-center">
                  <ActionB
                    icon={
                      <FaBookmark className=" w-5 h-5 opacity-0 group-hover:opacity-100" />
                    }
                    tooltext="Guardar"
                    action="save"
                  />
                  <ActionB
                    icon={
                      <FaHeart className="w-5 h-5 opacity-0 group-hover:opacity-100" />
                    }
                    tooltext="Like"
                    action="like"
                  />
                </div>
              </div>
              <div className="px-4 py-3 text-white absolute top-0 z-10 opacity-0 group-hover:opacity-100 transition-all ease-out duration-300 flex justify-between w-full cursor-default">
                <button
                  className="flex gap-2 bg-amber-500 px-3 py-1 rounded-md bg-opacity-60 hover:bg-opacity-80 transition-all ease-linear"
                  onClick={() => download(image)}
                >
                  <span className=" ">Descargar</span>
                  <MdOutlineFileDownload className="h-6 w-6" />
                </button>
              </div>
            </div>
          ))}
        </Masonry>
      </section>
    </>
  );
}
