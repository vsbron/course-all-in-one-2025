import Image from "next/image";
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
      <h1 className="text-3xl mb-4">Tours page</h1>
      <div className="grid md:grid-cols-2 gap-8">
        {data.map((tour) => (
          <Link
            href={`tours/${tour.id}`}
            className="hover:text-blue-500"
            key={tour.id}
          >
            <div className="relative h-48 mb-2">
              <Image
                src={tour.image}
                alt={tour.name}
                fill
                sizes="(max-width:768px)100vw,(max-width:1200px)50vw,33vw"
                priority
                className="object-cover rounded"
              />
            </div>
            <h2>{tour.name}</h2>
          </Link>
        ))}
      </div>
    </section>
  );
}

export default ToursPage;
