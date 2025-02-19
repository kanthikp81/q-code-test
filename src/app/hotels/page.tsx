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
    <div className="container">
      <h1>Hotels</h1>

      <div className="grid grid-cols-1 gap-4 mt-4">
        <HotelList hotelList={hotelsData.results} />
      </div>
    </div>
  );
}
