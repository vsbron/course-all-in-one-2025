"use client";

import { deleteUser } from "@/utils/action";

function DeleteButton({ id }: { id: string }) {
  // Returned JSX
  return (
    <form action={deleteUser}>
      <input type="hidden" name="id" value={id} />
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
