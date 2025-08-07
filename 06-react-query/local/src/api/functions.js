import axiosFetch from "./utils";

// GET function to get the tasks
export const getTasks = async () => {
  const { data } = await axiosFetch("/");
  return data;
};
