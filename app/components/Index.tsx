import { GetServerSideProps, NextPage } from 'next';
import { useEffect, useState } from 'react';

type Props = {
  initialImageUrl: string;
};

// ページ初期画像取得、useEffectを使用するかどうか
const Index: NextPage<Props> = () => {
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetchImage().then((image) => {
      setImageUrl(image.url);
      setLoading(false);
    });
  }, []);

  const handleClick = async () => {
    setLoading(true);
    const newImage = await fetchImage();
    setImageUrl(newImage.url);
    setLoading(false);
  };
  return (
  <div>
    <button onClick={handleClick}>New Image</button>
    <div>{loading || <img src={imageUrl} />}</div>
  </div>
  );
};
export default Index;

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const image = await fetchImage();
  return {
    props: {
      initialImageUrl: image.url,
    },
  };
};

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
// fetchImage();