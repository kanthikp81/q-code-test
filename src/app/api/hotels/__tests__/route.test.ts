import { GET } from "../route";
import { NextResponse } from "next/server";
import hotelsData from "@/data/mock-hotels-data.json";

jest.mock("next/server", () => ({
  NextResponse: {
    json: jest.fn(),
  },
}));

describe("GET /api/hotels", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should return hotels data", async () => {
    const response = await GET();
    expect(NextResponse.json).toHaveBeenCalledWith(hotelsData);
    expect(response).toEqual(NextResponse.json(hotelsData));
  });
});
