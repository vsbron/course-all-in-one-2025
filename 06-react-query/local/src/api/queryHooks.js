import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

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
  // Getting the query client from the hook
  const queryClient = useQueryClient();

  // Getting the data from query function
  const { mutate, isPending } = useMutation({
    mutationFn: () => createTask(task),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task added");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  // Returning all the values
  return { mutate, isPending };
}
