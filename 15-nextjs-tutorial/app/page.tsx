import Link from "next/link";

function Homepage() {
  // Returned JSX
  return (
    <div>
      <h1 className="text-7xl">Home page</h1>
      <Link href="/about" className="text-xl text-blue-500 inline-block mt-8">
        About page
      </Link>
    </div>
  );
}

export default Homepage;
