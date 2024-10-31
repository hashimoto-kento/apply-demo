import { NextPage } from 'next';
import { useEffect, useState } from 'react';

const Index: NextPage = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchImage().then((image) => {
      setImageUrl(image.url);
      setLoading(false);
    });
  }, []);
  return <div>{loading || <img src={imageUrl}/>}</div>;
};
export default Index;

type Image = {
  url: string;
};

const fetchImage = async (): Promise<Image> => {
  const res = await fetch('https://api.thecatapi.com/v1/images/search');
  const images: unknown = await res.json();
  if (!Array.isArray(images)) {
    throw new Error("API response is not an array");
  }
  const image: unknown = images[0];
  if (!isImage(image)) {
    throw new Error("API response is not an image");
  }
    return image;
  };

  const isImage = (value: unknown): value is Image => {
    if (!value || typeof value !== 'object') {
      return false;
    }
    return "url" in value && typeof value["url"] === 'string';
  };
fetchImage();