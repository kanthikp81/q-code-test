import React from "react";
import { Offer } from "@/types/hotel-results";

const HotelPrice: React.FC<Offer> = ({ displayPrice, savings }) => {
  return (
    <div className="flex flex-col text-right mt-auto ml-auto content-center">
      <div className="m-0">
        <p className="m-0 text-sm text-gray-500">
          <b>1</b> night total({displayPrice.currency})
        </p>
        <h2 className="text-xl font-bold m-0 before:content-['$']">
          {displayPrice.amount}
        </h2>
      </div>
      <div className="text-base text-red-700 m-0">
        {savings && <p className="savings">Save ${savings.amount}</p>}
      </div>
    </div>
  );
};

export default HotelPrice;
