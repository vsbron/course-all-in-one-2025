import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

import { createTask, deleteTask, editTask, getTasks } from "./functions";

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

export function useEditTask(id, isDone) {
  // Getting the query client from the hook
  const queryClient = useQueryClient();

  // Getting the data from query function
  const { mutate, isPending } = useMutation({
    mutationFn: () => editTask(id, isDone),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task updated");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  // Returning all the values
  return { mutate, isPending };
}

export function useDeleteTask(id) {
  // Getting the query client from the hook
  const queryClient = useQueryClient();

  // Getting the data from query function
  const { mutate, isPending } = useMutation({
    mutationFn: () => deleteTask(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["tasks"] });
      toast.success("Task deleted");
    },
    onError: (error) => {
      toast.error(error.response.data.msg);
    },
  });

  // Returning all the values
  return { mutate, isPending };
}
