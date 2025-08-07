import { useQuery } from "@tanstack/react-query";

import { getTasks } from "./functions";

export function useTasks() {
  // Getting the query function
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: getTasks,
  });

  // Returning all the values
  return { data, isLoading, error };
}
