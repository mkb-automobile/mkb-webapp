import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CarDetailsProps } from "@/src/types";
import "./slider.css";

const PhotoSlider = ({ car }: CarDetailsProps) => {
  const settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const photos = car?.photos?.[0]?.photo ?? [];

  return (
    <>
      {photos && photos.length > 0 && (
        <Slider {...settings} className="relative">
          {photos.map((photo: string, index: number) => (
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

export default PhotoSlider;
