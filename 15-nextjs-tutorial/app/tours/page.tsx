// The URL for fetching data
const url = "https://www.course-api.com/react-tours-project";

// Tour type
type Tour = {
  id: string;
  name: string;
  info: string;
  image: string;
  price: string;
};

// Fetch function with the delay
const fetchTours = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const response = await fetch(url);
  const data: Tour[] = await response.json();
  return data;
};

// Page component with async keyword
async function ToursPage() {
  // Get the fetched data
  const data = await fetchTours();
  console.log(data);

  // Returned JSX
  return (
    <section>
      <h1 className="text-7xl">Tours page</h1>
      {data.map((tour) => (
        <h2 key={tour.id}>{tour.name}</h2>
      ))}
    </section>
  );
}

export default ToursPage;
