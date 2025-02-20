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
        <div className="m-2">
          <b>{hotels.length}</b> <i>hotels in</i> <b>Sydney</b>
        </div>
        <div>
          <SortBy onChange={sortData} />
        </div>
      </div>
      <div className="flex flex-col justify-between max-w-full">
        {hotels.map((hotel) => (
          <HotelComponent key={hotel.id} {...hotel} />
        ))}
      </div>
    </>
  );
};

export default HotelList;
