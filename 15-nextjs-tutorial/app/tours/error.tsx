"use client";

function error({ error }: { error: Error }) {
  // Returned JSX
  return (
    <div className="text-xl text-red-500">
      There was an error ({error.message})
    </div>
  );
}

export default error;
