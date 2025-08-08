import axiosFetch from "./utils";

// GET function to get the tasks
export const getTasks = async () => {
  // Try to get the task list
  const { data } = await axiosFetch.get("/");

  // If no data - throw error
  if (!data)
    throw new Error(
      "There was some kind of error while getting the task list. Please try again!"
    );

  // Return data
  return data;
};

// POST function to create a new task
export const createTask = async (task) => {
  // Try to create a new task
  const { data } = await axiosFetch.post("/", { title: task });

  // If no data - throw error
  if (!data)
    throw new Error(
      "There was some kind of error while creating the task. Please try again!"
    );

  // Return data
  return data;
};

// PATCH function to edit the task
export const editTask = async ({ id, isDone }) => {
  // Try to edit the task
  const { data } = await axiosFetch.patch(`/${id}`, { isDone: isDone });

  // If no data - throw error
  if (!data)
    throw new Error(
      "There was some kind of error while editing the task. Please try again!"
    );

  // Return data
  return data;
};

// DELETE function to delete the task
export const deleteTask = async (id) => {
  // Try to delete the task
  const { data } = await axiosFetch.delete(`/${id}`);

  // If no data - throw error
  if (!data)
    throw new Error(
      "There was some kind of error while deleting the task. Please try again!"
    );

  // Return data
  return data;
};
