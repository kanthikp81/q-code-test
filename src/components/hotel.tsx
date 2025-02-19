import React from "react";
import { Hotel } from "@/types/hotel-results";
import HotelImage from "./hotel-image";
import HotelDetails from "./hotel-details";
import HotelPrice from "./hotel-price";

const HotelComponent: React.FC<Hotel> = ({ property, offer }) => {
  return (
    <div className="flex flex-row p-2 m-2 max-w-full border border-gray-200 bg-emerald-100">
      <HotelImage
        imageUrl={property.previewImage.url}
        caption={property.title}
        promoTitle={offer.promotion.title}
      />
      <HotelDetails
        name={property.title}
        address={property.address}
        rating={property.rating}
        cancellationOffer={offer?.cancellationOption?.cancellationType}
        offerName={offer.name}
      />
      <HotelPrice {...offer} />
    </div>
  );
};

export default HotelComponent;
