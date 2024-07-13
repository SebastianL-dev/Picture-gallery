import { createContext, useContext, useEffect, useState } from "react";
import IImagesData from "../interfaces/Images";
import { getPictures } from "../services/Pictures";

export interface IImageContext {
  imageData?: IImagesData[];
  setImageData: (data: IImagesData[]) => void;
}

export const ImageContext = createContext<IImageContext>({} as IImageContext);

export const ImageProvider = ({ children }: { children: React.ReactNode }) => {
  const [imageData, setImageData] = useState<IImagesData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getPictures();
        setImageData(data);
      } catch (error) {
        console.error("Error fetching images:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <ImageContext.Provider value={{ imageData, setImageData }}>
      {children}
    </ImageContext.Provider>
  );
};

export const useImageContext = () => useContext(ImageContext);
