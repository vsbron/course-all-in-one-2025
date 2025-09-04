import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";

import { type Task } from "./types";

// Function that gets the tasks from the local storage
const loadTasks = (): Task[] => {
  const storedTasks = localStorage.getItem("tasksTS");
  return storedTasks ? JSON.parse(storedTasks) : [];
};

// The Component component
function Component() {
  // Create state value for tasks list
  const [tasks, setTasks] = useState<Task[]>(() => loadTasks());

  // Adding a task handler
  const addTask = (task: Task): void => {
    setTasks((curTasks) => [...curTasks, task]);
  };

  // useEffect function that saves the tasks in the local storage
  useEffect(() => {
    localStorage.setItem("tasksTS", JSON.stringify(tasks));
  }, [tasks]);

  // Toggle the completed status of the task
  const toggleTask = (id: string) => {
    setTasks((curTasks) =>
      curTasks.map((task) =>
        task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
      )
    );
  };

  // Returned JSX
  return (
    <section>
      <Form addTask={addTask} />
      <List tasks={tasks} toggleTask={toggleTask} />
    </section>
  );
}
export default Component;
