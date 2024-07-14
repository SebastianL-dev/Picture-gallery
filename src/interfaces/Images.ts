export default interface IImagesData {
  id: number;
  photographer: string;
  src: {
    small: string;
    medium: string;
    large: string;
    original: string;
  };
  alt: string;
}
