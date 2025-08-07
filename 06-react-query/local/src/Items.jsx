import SingleItem from "./SingleItem";

import { useTasks } from "./api/queryHooks";

function Items() {
  // Getting the data from the server
  const { data, isLoading, error } = useTasks();

  // Guard clause
  if (isLoading) return <p style={{ marginTop: "1rem" }}>Loading...</p>;

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
