import { useState } from "react";
import { type Task } from "./types";

// Type for Form props
type FormProps = { addTask: (task: Task) => void };

// The Form component
function Form({ addTask }: FormProps) {
  // Create the state for the input field
  const [text, setText] = useState("");

  // Form submit handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // Prevent default behavior
    e.preventDefault();

    // Guard clause
    if (!text) {
      alert("Please enter a task name");
      return;
    }

    // Create a new task and add it to the Task array
    const newTask = {
      id: new Date().getTime().toString(),
      description: text,
      isCompleted: false,
    };
    addTask(newTask);

    // Reset the field
    setText("");
  };

  // Returned JSX
  return (
    <form className="form task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        className="form-input"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="btn">
        Add Task
      </button>
    </form>
  );
}

export default Form;
