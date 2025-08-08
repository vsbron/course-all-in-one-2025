import { useDeleteTask, useEditTask } from "./api/queryHooks";

function SingleItem({ item }) {
  // Getting the data from the server
  const { mutate: editTask, isPendingEdit } = useEditTask();
  const { mutate: deleteTask, isPendingDelete } = useDeleteTask();

  // Returned JSX
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => editTask({ id: item.id, isDone: !item.isDone })}
        disabled={isPendingEdit}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: item.isDone && "line-through",
        }}
      >
        {item.title}
      </p>
      <button
        className="btn remove-btn"
        type="button"
        onClick={() => deleteTask(item.id)}
        disabled={isPendingDelete}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
