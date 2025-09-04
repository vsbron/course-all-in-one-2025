import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";

import { type Task } from "./types";

function Component() {
  // Create state value for tasks list
  const [tasks, setTasks] = useState<Task[]>([]);

  // Adding a task handler
  const addTask = (task: Task): void => {
    setTasks((curTasks) => [...curTasks, task]);
  };

  // Toggle the completed status of the task
  const toggleTask = (id: string) => {
    setTasks((curTasks) =>
      curTasks.map((task) => {
        if (task.id === id) {
          return { ...task, isCompleted: !task.isCompleted };
        }
        return task;
      })
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
