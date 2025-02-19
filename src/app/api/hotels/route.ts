import { NextResponse } from "next/server";
import hotelsData from "@/data/hotels-data.json";

export async function GET() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return NextResponse.json(hotelsData);
}
