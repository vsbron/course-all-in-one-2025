async function page({ params }: { params: { id: string } }) {
  // Await the params
  const { id } = await params;

  // Returned JSX
  return (
    <div>
      <h1 className="text-4xl">ID: {id}</h1>
    </div>
  );
}

export default page;
