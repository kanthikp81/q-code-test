"use client";
import { Hotel } from "@/types/hotel-results";
import React, { useState, useEffect } from "react";
import HotelComponent from "./hotel";
import SortBy from "./sort-by";

interface HotelListProps {
  hotelList: Hotel[];
}

const HotelList: React.FC<HotelListProps> = ({ hotelList }) => {
  const [hotels, setHotels] = useState(hotelList);
  useEffect(() => {
    sortData("h-l");
  }, []);

  const sortData = (value: string) => {
    const sortedHotels = [...hotels];
    if (value === "h-l") {
      sortedHotels.sort(
        (a, b) => b.offer.displayPrice.amount - a.offer.displayPrice.amount
      );
    } else if (value === "l-h") {
      sortedHotels.sort(
        (a, b) => a.offer.displayPrice.amount - b.offer.displayPrice.amount
      );
    }
    setHotels(sortedHotels);
  };

  return (
    <>
      <div className="flex justify-between">
        <div>{hotels.length} hotels found in Sydney</div>
        <div>
          <SortBy onChange={sortData} />
        </div>
      </div>
      <div className="flex flex-col space-y-4">
        {hotels.map((hotel) => (
          <div key={hotel.id} className="flex">
            <HotelComponent {...hotel} />
            <div className="p-4 bg-white shadow-md">
              <h2 className="text-lg font-bold">{hotel.property.title}</h2>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HotelList;
