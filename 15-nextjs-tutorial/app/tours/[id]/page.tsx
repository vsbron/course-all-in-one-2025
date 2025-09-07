import Image from "next/image";

import mapsImg from "@/images/maps.jpg";

// Image URL
const url = "https://www.course-api.com/images/tours/tour-1.jpeg";

async function page({ params }: { params: { id: string } }) {
  // Await the params
  const { id } = await params;

  // Returned JSX
  return (
    <div>
      <h1 className="text-4xl">ID: {id}</h1>
      <section className="flex gap-x-4 mt-4">
        {/* LOCAL IMAGE */}
        <div>
          <Image
            src={mapsImg}
            width={192}
            height={192}
            priority
            alt="Maps"
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Local image</h2>
        </div>
        {/* REMOTE IMAGE */}
        <div>
          <Image
            src={url}
            width={192}
            height={192}
            priority
            alt="Tour"
            className="w-48 h-48 object-cover rounded"
          />
          <h2>Remote image</h2>
        </div>
      </section>
    </div>
  );
}

export default page;
