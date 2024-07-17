export interface Photo {
  id: number;
  url: string;
  photographer: string;
  photographer_url: string;
  photographer_id: number;
  src: {
    original: string;
    large: string;
    medium: string;
    small: string;
  };
  liked: boolean;
  alt: string;
}

export default interface IImagesData {
  total_results: number;
  page: number;
  per_page: number;
  photos: Photo[];
  next_page: string;
}
