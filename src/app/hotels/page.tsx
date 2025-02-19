export default async function HotelsPage() {
  const getHotels = async () => {
    const result = await fetch(process.env.URL + "/api/hotels", {
      method: "GET",
    });

    if (result.ok) {
      return result.json();
    }
    return [];
  };

  const hotelsData = await getHotels();
  console.log(hotelsData);
  return <h1>Hotels Page</h1>;
}
