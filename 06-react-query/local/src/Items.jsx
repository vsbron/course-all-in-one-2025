import SingleItem from "./SingleItem";

import { useTasks } from "./queryHooks";

function Items({ items }) {
  // Getting the data from the server
  const { data, isLoading, error } = useTasks();

  // Returned JSX
  return (
    <div className="items">
      {items.map((item) => {
        return <SingleItem key={item.id} item={item} />;
      })}
    </div>
  );
}

export default Items;
