import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CarDetailsProps } from "@/src/types";
import "./slider.css";
import { useEffect, useState } from "react";

const ImageSlider = ({ car }: CarDetailsProps) => {
  const [imageArray, setImageArray] = useState<string[]>([]);
  const photos = car?.photos?.[0]?.photo ?? [];

  useEffect(() => {
    if (photos && photos.length > 0) {
      setImageArray(photos);
    }
  }, [photos]);

  const settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    autoplay: true,
  };

  return (
    <>
      {imageArray && imageArray.length > 0 && (
        <Slider {...settings} className="relative">
          {imageArray.map((photo: string, index: number) => (
            <div key={index} className="">
              <Image
                src={photo}
                alt={`Photo ${index}-${car?.marque}-${car?.modele}`}
                width={1200}
                height={100}
                objectFit=""
                objectPosition="center"
                className="rounded-lg border-orange-400 border-2 hover:cursor-pointer"
              />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default ImageSlider;
