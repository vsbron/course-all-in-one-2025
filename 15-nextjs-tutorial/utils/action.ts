"use server";

import { readFile, writeFile } from "fs/promises";
import { revalidatePath } from "next/cache";
// import { redirect } from "next/navigation";

type User = {
  id: string;
  firstName: string;
  lastName: string;
};

// Create the action for form
export const createUser = async (formData: FormData) => {
  // Get the values (with type assertion MUST)
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  // // Getting all values automatically
  // const rawData = Object.fromEntries(formData);
  // console.log(rawData);

  // Create a new user object
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  // Save user to the file
  await saveUser(newUser);

  // Revalidate data
  revalidatePath("/actions");

  // // OR redirect to force user to fetch data again
  // redirect("/");
};

// Create the function to fetch the users list
export const fetchUsers = async (): Promise<User[]> => {
  const result = await readFile("users.json", { encoding: "utf8" });
  const users = result ? JSON.parse(result) : [];
  return users;
};

// Helper function to save user
const saveUser = async (newUser: User) => {
  // Get the current users list
  const currentUsers = await fetchUsers();

  // Save all the data to the actual file
  await writeFile("users.json", JSON.stringify([...currentUsers, newUser]));
};
