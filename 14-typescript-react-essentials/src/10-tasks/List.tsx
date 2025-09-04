import { type Task } from "./types";

// Create a type for List props
type ListProps = {
  tasks: Task[];
  toggleTask: (id: string) => void;
};

// The List component
function List({ tasks, toggleTask }: ListProps) {
  // Returned JSX
  return (
    <ul className="list">
      {tasks.map((task) => (
        <li key={task.id}>
          <p className="task-text">{task.description}</p>
          <input
            type="checkbox"
            checked={task.isCompleted}
            onChange={() => toggleTask(task.id)}
          />
        </li>
      ))}
    </ul>
  );
}

export default List;
