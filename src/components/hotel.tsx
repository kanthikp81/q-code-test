import React from "react";
import { Hotel } from "@/types/hotel-results";
import Image from "next/image";

const HotelComponent: React.FC<Hotel> = ({ property }) => {
  return (
    <div className="hotel-card">
      <Image
        src={property.previewImage.url}
        alt={property.title}
        width={100}
        height={100}
      />
    </div>
  );
};

export default HotelComponent;
