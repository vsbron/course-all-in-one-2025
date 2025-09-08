import { fetchUsers, saveUser } from "@/utils/action";

export const GET = async () => {
  // Get the users
  const users = await fetchUsers();

  // Return the users as a response
  return Response.json(users);
};
