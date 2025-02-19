"use client";
import React from "react";
import Image from "next/image";

interface HotelImageProps {
  imageUrl: string;
  caption: string;
  promoTitle: string;
}

const HotelImage: React.FC<HotelImageProps> = ({
  imageUrl,
  caption,
  promoTitle,
}) => {
  return (
    <div className="relative text-center">
      <Image
        src={imageUrl}
        alt={caption}
        width={150}
        height={150}
        className="object-cover p-2"
      />
      <div className=" absolute bg-white text-red-700 text-sm top-3 left-2 p-1 ">
        {promoTitle}
      </div>
    </div>
  );
};

export default HotelImage;
