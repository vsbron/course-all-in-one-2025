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
export const createUser = async (prevState: unknown, formData: FormData) => {
  // Get the values (with type assertion MUST)
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  // // Getting all values automatically
  // const rawData = Object.fromEntries(formData);
  // console.log(rawData);

  // Create a new user object
  const newUser: User = { firstName, lastName, id: Date.now().toString() };

  try {
    // Save user to the file
    await saveUser(newUser);

    // Revalidate data
    revalidatePath("/actions");

    // Return the form state message
    return "User created successfully";
  } catch (err) {
    console.log(err);

    // Return the form state error message
    return "Failed to create user";
  }
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

/////////////////
// DELETE USER //
/////////////////

// Delete user function that receives the ID from form data
export const deleteUser = async (formData: FormData) => {
  // Get the values (with type assertion MUST)
  const id = formData.get("id") as string;
  try {
    // Get the current users list
    const currentUsers = await fetchUsers();

    // Filter out the user with the passed ID
    const newUsers = currentUsers.filter((user) => user.id !== id);

    // Save all the data to the actual file
    await writeFile("users.json", JSON.stringify([...newUsers]));

    // Revalidate data
    revalidatePath("/actions");
  } catch (err) {
    console.log(err);
  }
};

// Delete user function that gets the ID as binded param
export const removeUser = async (id: string) => {
  try {
    // Get the current users list
    const currentUsers = await fetchUsers();

    // Filter out the user with the passed ID
    const newUsers = currentUsers.filter((user) => user.id !== id);

    // Save all the data to the actual file
    await writeFile("users.json", JSON.stringify([...newUsers]));

    // Revalidate data
    revalidatePath("/actions");
  } catch (err) {
    console.log(err);
  }
};
