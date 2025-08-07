import axiosFetch from "./utils";

// GET function to get the tasks
export const getTasks = async () => {
  const { data } = await axiosFetch.get("/");
  return data;
};

// POST function to create a new task
export const createTask = async (task) => {
  const { data } = await axiosFetch.post("/", task);
  return data;
};
