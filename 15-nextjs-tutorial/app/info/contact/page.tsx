import Link from "next/link";

function Contact() {
  // Returned JSX
  return (
    <div>
      <h1 className="text-7xl">Contact page</h1>;
      <Link href="/" className="text-xl text-blue-500 inline-block mt-8">
        Home page
      </Link>
    </div>
  );
}

export default Contact;
