import React from "react";
import { Rating } from "@/types/hotel-results";
import Ratings from "./ratings";

interface HotelDetailsProps {
  name: string;
  address: string[];
  rating: Rating;
  cancellationOffer: string;
  offerName: string;
}

const HotelDetails: React.FC<HotelDetailsProps> = ({
  name,
  address,
  rating,
  cancellationOffer,
  offerName,
}) => {
  return (
    <div className="flex flex-col text-left justify-start">
      <div>
        <div className="flex flex-row items-center mt-0">
          <h2 className="text-xl font-bold mb-0 mt-0 overflow-hidden">
            {name.length > 30 ? name.substring(0, 30) + "..." : name}
          </h2>
          <Ratings rating={+rating.ratingValue} type={rating.ratingType} />
        </div>
        <p className="text-sm mt-0">{address.join(", ")}</p>
      </div>

      <p className="text-sm text-red-700 underline mt-0">{offerName}</p>
      <p className="mt-auto text-sm text-green-900">
        {"FREE_CANCELLATION" === cancellationOffer && "Free Cancellation"}
      </p>
    </div>
  );
};

export default HotelDetails;
