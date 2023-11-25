"use client";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";
import { CarDetailsProps } from "@/src/types";
import "./slider.css";
import { useRef, useState } from "react";

const ImageSlider = ({ car }: CarDetailsProps) => {
  const sliderRef = useRef<Slider>(null);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const photos = car?.photos?.photo ?? [];

  const goToSlide = (index: number) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index);
    }
  };

  const settings = {
    adaptiveHeight: true,
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 5000,
    afterChange: (index: number) => setCurrentPhotoIndex(index),
  };

  return (
    <>
      {photos && photos.length > 0 && (
        <figure className="relative">
          <Slider {...settings}>
            {photos.map((photo: string, index: number) => (
              <div key={index} className="">
                <Image
                  src={photo}
                  alt={`Photo ${index}-${car?.marque}-${car?.modele}`}
                  width={1200}
                  height={100}
                  objectFit=""
                  objectPosition="center"
                  className="rounded-lg border-2 hover:cursor-pointer"
                  loading="lazy"
                />
              </div>
            ))}
          </Slider>
          <figcaption className="absolute bottom-4  right-2 p-2 text-white  rounded-lg">
            {currentPhotoIndex + 1}/{photos.length}
          </figcaption>
        </figure>
      )}
    </>
  );
};

export default ImageSlider;
