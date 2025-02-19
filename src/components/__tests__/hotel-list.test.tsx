import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import HotelList from "../hotel-list";
import { Hotel } from "@/types/hotel-results";
import hotelsData from "@/data/mock-hotels-data.json";

const mockHotels: Hotel[] = hotelsData.results;

describe("HotelList", () => {
  it("renders the correct number of hotels", () => {
    render(<HotelList hotelList={mockHotels} />);
    expect(
      screen.getByText(
        (_, element) => element?.textContent === "2 hotels found in Sydney"
      )
    ).toBeInTheDocument();
  });

  it("sorts hotels from high to low by default", () => {
    render(<HotelList hotelList={mockHotels} />);
    const hotelComponents = screen.getAllByText(/Hotel/);
    expect(hotelComponents[0]).toHaveTextContent("Hotel #2");
    expect(hotelComponents[1]).toHaveTextContent("Hotel #1");
  });

  it("sorts hotels from low to high when selected", () => {
    render(<HotelList hotelList={mockHotels} />);
    fireEvent.change(screen.getByRole("combobox"), {
      target: { value: "l-h" },
    });
    const hotelComponents = screen.getAllByText(/Hotel/);
    expect(hotelComponents[0]).toHaveTextContent("Hotel #1");
    expect(hotelComponents[1]).toHaveTextContent("Hotel #2");
  });
});
