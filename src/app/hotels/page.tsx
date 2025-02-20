import Head from "next/head";
import HotelList from "@/components/hotel-list";

export default async function HotelsPage() {
  const getHotels = async () => {
    const result = await fetch(process.env.URL + "/api/hotels", {
      method: "GET",
    });

    if (result.ok) {
      return result.json();
    }
    return { results: [] };
  };

  const hotelsData = await getHotels();

  return (
    <div className="container mx-auto">
      <Head>
        <title>Hotels</title>
      </Head>
      <div className="grid grid-cols-1 gap-4 m-4">
        <HotelList hotelList={hotelsData.results} />
      </div>
    </div>
  );
}
