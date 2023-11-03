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
    autoplaySpeed: 5000,
    autoplay: true,
  };
  const photos = car?.photos?.[0]?.photo ?? [];

  console.log("car", car);

  return (
    <>
      {photos && photos.length > 0 && (
        <Slider {...settings} className="relative">
          {photos.map((photo: string, index: number) => (
            <div key={index} className="">
              <Image
                src={photo}
                alt={`Photo ${index}-${car?.marque}-${car?.modele}`}
                width={1000}
                height={500}
                objectFit=""
                objectPosition="center"
                className="rounded-lg"
              />
            </div>
          ))}
        </Slider>
      )}
    </>
  );
};

export default PhotoSlider;
