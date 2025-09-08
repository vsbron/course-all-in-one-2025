"use client";

import { deleteUser as deleteUserAction } from "@/utils/action";
import { useActionState } from "react";

function DeleteButton({ id }: { id: string }) {
  // Getting the message from form state hook
  const [message, formAction] = useActionState(deleteUserAction, "");

  // Returned JSX
  return (
    <form action={formAction}>
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
