import { createContext, useContext, useEffect, useState } from "react";
import { Photo } from "../interfaces/Images";
import { getPicture } from "../services/Pictures";

export interface ISinglePhoto {
  photoData?: Photo;
  setPhotoData: (data: Photo) => void;
}

export const PhotoContext = createContext<ISinglePhoto>({} as ISinglePhoto);

export const PhotoProvider = ({ children }: { children: React.ReactNode }) => {
  const [image, setImage] = useState<Photo>();

  const setPhotoData = (data: Photo) => {
    setImage(data);
  };

  useEffect(() => {
    const fetchData = async (id: number) => {
      try {
        const data = await getPicture(id);
        if (data) {
          setPhotoData(data);
        }
      } catch (error) {
        console.error("Error fetching photo:", error);
      }
    };

    fetchData(26926254);
  }, []);

  return (
    <PhotoContext.Provider value={{ photoData: image, setPhotoData }}>
      {children}
    </PhotoContext.Provider>
  );
};

export const usePhotoContext = () => useContext(PhotoContext);
