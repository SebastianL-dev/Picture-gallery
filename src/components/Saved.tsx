import { useEffect, useState } from "react";
import { getPicture } from "../services/Pictures";
import { FaBookmark, FaHeart } from "react-icons/fa";
import { Photo } from "../interfaces/Images";
import { ActionB } from "./Buttons";
import Masonry from "react-masonry-css";
import { Link } from "react-router-dom";
import { usePhotoContext } from "../contexts/singleImageCtx";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import Download from "./global/Download";

export default function SavedSection() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);

  const { setPhotoData } = usePhotoContext();

  useEffect(() => {
    const localStorageKeys = Object.keys(localStorage);
    const savedKeys = localStorageKeys.filter(
      (key) => localStorage.getItem(key) === "true"
    );

    const fetchPhotos = async () => {
      const fetchedPhotos = await Promise.all(
        savedKeys.map(async (key) => {
          const [, id] = key.split("_");
          const data = await getPicture(parseInt(id));
          return data;
        })
      );
      setPhotos(fetchedPhotos);
      setLoading(false);
    };

    fetchPhotos();
  }, []);

  const breakpointColumnsObj = {
    default: 4,
    1920: 4,
    1460: 3,
    1080: 2,
    720: 1,
  };

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

  const setPhoto = async (id: number) => {
    try {
      const data = await getPicture(id);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setPhotoData(data);
    } catch (err) {
      console.error("Failed to fetch images", err);
    }
  };

  if (loading) return <p className="text-white">Loading...</p>;

  return (
    <>
      <Download visible={visible} close={closeWindow} />
      <section className="flex flex-col items-center pt-56 pb-36 gap-36">
        <Masonry
          breakpointCols={breakpointColumnsObj}
          className="flex mx-[10%] gap-4 mb-20"
          columnClassName="flex flex-col gap-4"
        >
          {photos.map((image) => (
            <div
              key={image.id}
              className="rounded-lg border-2 border-opacity-0 border-white hover:border-opacity-80 cursor-pointer overflow-hidden group dg relative hover:before:opacity-100 before:content-[''] before:rounded-lg  before:absolute before:w-full before:h-full before:opacity-0 before:z-10 before:bottom-0 before:transition-all before:ease-out before:duration-300"
              // data-aos="zoom-in-up"
              // data-aos-easing="ease-out"
              // data-aos-duration="500"
              // data-aos-offset="150"
            >
              <Link
                className="w-full h-full absolute z-10"
                to={`/photo/${image.id}`}
                onClick={() => setPhoto(image.id)}
              ></Link>
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
                    uniqueId={`saved_${image.id.toString()}`}
                  />
                  <ActionB
                    icon={
                      <FaHeart className="w-5 h-5 opacity-0 group-hover:opacity-100" />
                    }
                    tooltext="Like"
                    action="like"
                    uniqueId={`liked_${image.id.toString()}`}
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
