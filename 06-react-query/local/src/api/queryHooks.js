import { useQuery } from "@tanstack/react-query";

import { createTask, getTasks } from "./functions";

export function useTasks() {
  // Getting the data from query function
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  // Returning all the values
  return { data, isLoading, error };
}

export function useCreateTask(task) {
  // Getting the data from query function
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks", task],
    queryFn: () => createTask(task),
  });

  // Returning all the values
  return { data, isLoading, error };
}
