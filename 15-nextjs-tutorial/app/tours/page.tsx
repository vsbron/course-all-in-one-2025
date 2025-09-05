import Link from "next/link";

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
        <Link
          href={`tours/${tour.id}`}
          className="hover:text-blue-500"
          key={tour.id}
        >
          <h2>{tour.name}</h2>
        </Link>
      ))}
    </section>
  );
}

export default ToursPage;
