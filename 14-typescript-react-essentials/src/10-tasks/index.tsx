import { useState, useEffect } from "react";

import Form from "./Form";
import List from "./List";

import { type Task } from "./types";

function Component() {
  // Create state value for tasks list
  const [tasks, setTasks] = useState<Task[]>([]);

  // Returned JSX
  return (
    <section>
      <Form />
      <List />
    </section>
  );
}
export default Component;
