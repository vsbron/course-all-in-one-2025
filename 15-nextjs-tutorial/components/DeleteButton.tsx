"use client";

import { removeUser } from "@/utils/action";

function DeleteButton({ id }: { id: string }) {
  // Binding remove user with ID
  const removeUserWithId = removeUser.bind(null, id);

  // Returned JSX
  return (
    <form action={removeUserWithId}>
      <input type="hidden" name="name" value="shakeAndBake" />
      <button
        type="submit"
        className="bg-red-500 text-white text-xs rounded p-2 cursor-pointer"
      >
        Delete
      </button>
    </form>
  );
}

export default DeleteButton;
