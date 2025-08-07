import { useQuery } from "@tanstack/react-query";

import axiosFetch from "./utils";

export function useTasks() {
  // Getting the query function
  const { data, isLoading, error } = useQuery({
    queryKey: ["tasks"],
    queryFn: () => axiosFetch("/"),
  });

  // Returning all the values
  return { data, isLoading, error };
}
