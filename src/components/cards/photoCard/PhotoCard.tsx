import Image from "next/image";
import React, { useState } from "react";
import "./PhotoCard.css";

interface PhotoCardPros {
  url: string;
  alt: string;
}

const PhotoCard = ({ url, alt }: PhotoCardPros) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <>
      <Image
        src={url}
        alt={alt}
        width={300}
        height={300}
        className="thumbnail rounded-xl border-2 hover:opacity-80 shadow-xl"
        onClick={handleModal}
      />
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleModal}>
          <Image
            src={url}
            alt={alt}
            height={1200}
            width={1200}
            className="rounded-xl shadow-xl"
          />
        </div>
      )}
    </>
  );
};

export default PhotoCard;
