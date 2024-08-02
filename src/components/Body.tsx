import Masonry from "react-masonry-css";
import { useImageContext } from "../contexts/imagesCtx";
import { FaHeart } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { ActionB } from "./Buttons";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Photo } from "../interfaces/Images";
import Download from "../components/global/Download";
import ReactPaginate from "react-paginate";
import { getPicture, getPictures } from "../services/Pictures";
import { Link } from "react-router-dom";
import { usePhotoContext } from "../contexts/singleImageCtx";
import Loader from "./global/Loader";

export default function MainB() {
  const { imageData, setImageData } = useImageContext();
  const { setPhotoData } = usePhotoContext();

  useEffect(() => {
    AOS.init();
    window.addEventListener("load", AOS.refresh);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      AOS.refresh();
    }, 600);
  }, []);

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

  // const { setImageData } = useImageContext();

  const fetchData = async (event: any) => {
    await getPictures(event.selected);
    try {
      const data = await getPictures(event.selected);
      setImageData(data);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    } catch (err) {
      console.error("Failed to fetch images", err);
    }
    setTimeout(() => {
      AOS.refresh();
    }, 600);
  };

  const breakpointColumnsObj = {
    default: 4,
    1920: 4,
    1460: 3,
    1080: 2,
    720: 1,
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

  const displayed = window.innerWidth <= 550 ? 1 : 2;

  if (!imageData) return <Loader text={<></>} />;

  return (
    <>
      <Download visible={visible} close={closeWindow} />
      <section className="flex flex-col items-center pt-56 pb-36 gap-36">
        <div className="flex flex-col items-center gap-10 mx-[28%] max-md:mx-[5%]">
          <h1 className="text-neutral-100 font-bold text-5xl text-center max-[450px]:text-3xl">
            Descubre un nuevo universo
          </h1>
          <p className="text-neutral-500 text-center max-[450px]:text-sm">
            Sumérgete en un mundo infinito de imágenes, inspírate con todas las
            diferentes obras en esta página, explora la magia en los detalles y
            lleva tu imaginación y tu creatividad al límite.
          </p>
        </div>
        <section className="flex flex-col items-center gap-12 ">
          <ReactPaginate
            className="flex text-neutral-300 gap-2 slc"
            pageCount={imageData.total_results / imageData.per_page}
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            containerClassName=""
            pageRangeDisplayed={displayed}
            marginPagesDisplayed={displayed}
            onPageChange={fetchData}
            pageClassName="items-center flex py-0.5 bg-neutral-200 bg-opacity-10 rounded-md transition-all ease-linear hover:bg-opacity-15 hover:scale-110 hover:text-white cursor-pointer "
            nextLinkClassName="px-2"
            previousLinkClassName="px-2"
            breakClassName="px-2"
            pageLinkClassName="px-2"
            previousClassName="items-center bg-amber-400 rounded-md flex justiy-center content-center bg-opacity-80 hover:bg-opacity-100 hover:text-white hover:scale-110 transition-all ease-linear cursor-pointer"
            nextClassName="items-center bg-amber-400  rounded-md flex justiy-center content-center bg-opacity-80 hover:bg-opacity-100 hover:text-white hover:scale-110 transition-all ease-linear cursor-pointer"
          />
          <Masonry
            breakpointCols={breakpointColumnsObj}
            className="flex mx-[10%] gap-4 mb-20"
            columnClassName="flex flex-col gap-4"
          >
            {imageData.photos.map((image) => (
              <div
                key={image.id}
                className="rounded-lg border-2 border-opacity-0 border-white hover:border-opacity-80 cursor-pointer overflow-hidden group dg relative hover:before:opacity-100 before:content-[''] before:rounded-lg  before:absolute before:w-full before:h-full before:opacity-0 before:z-10 before:bottom-0 before:transition-all before:ease-out before:duration-300"
                data-aos="zoom-in-up"
                data-aos-easing="ease-out"
                data-aos-duration="500"
                data-aos-offset="150"
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
                        <FaHeart className="w-5 h-5 opacity-0 group-hover:opacity-100" />
                      }
                      tooltext="Like"
                      uniqueId={image.id.toString()}
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
          <ReactPaginate
            className="flex text-neutral-300 gap-2 slc"
            pageCount={imageData.total_results / imageData.per_page}
            previousLabel="<"
            nextLabel=">"
            breakLabel="..."
            containerClassName=""
            onPageChange={fetchData}
            pageRangeDisplayed={displayed}
            marginPagesDisplayed={displayed}
            pageClassName="items-center flex py-0.5 bg-neutral-200 bg-opacity-10 rounded-md transition-all ease-linear hover:bg-opacity-15 hover:scale-110 hover:text-white cursor-pointer "
            activeClassName="items-center text-white flex py-0.5 bg-neutral-200 bg-opacity-15 rounded-md"
            nextLinkClassName="px-2"
            previousLinkClassName="px-2"
            breakClassName="px-2"
            pageLinkClassName="px-2"
            previousClassName="items-center bg-amber-400 rounded-md flex justiy-center content-center bg-opacity-80 hover:bg-opacity-100 hover:text-white hover:scale-110 transition-all ease-linear cursor-pointer"
            nextClassName="items-center bg-amber-400  rounded-md flex justiy-center content-center bg-opacity-80 hover:bg-opacity-100 hover:text-white hover:scale-110 transition-all ease-linear cursor-pointer"
          />
        </section>
      </section>
    </>
  );
}
