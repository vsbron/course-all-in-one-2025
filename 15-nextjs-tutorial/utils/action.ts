"use server";

// Create the action for form
export const createUser = async (formData: FormData) => {
  // Get the values (with type assertion MUST)
  const firstName = formData.get("firstName") as string;
  const lastName = formData.get("lastName") as string;

  const rawData = Object.fromEntries(formData);
  console.log(rawData);

  // Log the results
  console.log({ firstName, lastName });
};
