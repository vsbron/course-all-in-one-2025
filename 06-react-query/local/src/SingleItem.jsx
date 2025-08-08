import { useEditTask } from "./api/queryHooks";

function SingleItem({ item }) {
  // Getting the data from the server
  const { mutate, isPending } = useEditTask(item.id, !item.isDone);

  // Returned JSX
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={item.isDone}
        onChange={() => mutate()}
        disabled={isPending}
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
        onClick={() => console.log("delete task")}
      >
        delete
      </button>
    </div>
  );
}

export default SingleItem;
