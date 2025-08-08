import { useState } from "react";
import { useCreateTask } from "./api/queryHooks";

function Form() {
  // Create state value for task name
  const [newItemName, setNewItemName] = useState("");

  // Getting the mutate function from React Query
  const { mutate: createTask, isPending } = useCreateTask({
    title: newItemName,
  });

  // Form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default behavior
    await createTask(); // Create task
    setNewItemName(""); // Reset the form field
  };

  // Returned JSX
  return (
    <form onSubmit={handleSubmit}>
      <h4>task bud</h4>
      <div className="form-control">
        <input
          type="text "
          className="form-input"
          value={newItemName}
          onChange={(event) => setNewItemName(event.target.value)}
        />
        <button type="submit" className="btn" disabled={isPending}>
          add task
        </button>
      </div>
    </form>
  );
}

export default Form;
