import SingleItem from "./SingleItem";

import { useCreateTask, useTasks } from "./api/queryHooks";

function Items() {
  // Getting the data from the server
  const { data, isLoading, error } = useTasks();

  const {
    data: data1,
    isLoading: isLoading1,
    error: error1,
  } = useCreateTask({ title: "Test" });

  // Guard clauses
  if (isLoading) return <p style={{ marginTop: "1rem" }}>Loading...</p>;
  if (error)
    return <p style={{ marginTop: "1rem" }}>Error: {error.response.data}</p>;

  // Returned JSX
  return (
    <div className="items">
      {data.taskList.map((item) => (
        <SingleItem key={item.id} item={item} />
      ))}
    </div>
  );
}

export default Items;
