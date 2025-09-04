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

  // Returned JSX
  return (
    <section>
      <Form addTask={addTask} />
      <List />
    </section>
  );
}
export default Component;
