import { createContext, useContext, useEffect, useState } from "react";
import IImagesData from "../interfaces/Images";
import { getPictures } from "../services/Pictures";

export interface IImageContext {
  imageData?: IImagesData;
  setImageData: (data: IImagesData) => void;
}

export const ImageContext = createContext<IImageContext>({} as IImageContext);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [images, setImages] = useState<IImagesData>();

  const setImageData = (data: IImagesData) => {
    setImages(data);
  };

  useEffect(() => {
    const fetchData = async (page: number) => {
      try {
        const data = await getPictures(page);
        if (data) {
          setImageData(data);
        }
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData(0);
  }, []);

  return (
    <ImageContext.Provider value={{ imageData: images, setImageData }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
