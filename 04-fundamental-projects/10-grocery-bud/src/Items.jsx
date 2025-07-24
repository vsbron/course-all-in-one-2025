import SingleItem from "./SingleItem";

function Items({ items, removeItem }) {
  // Returned JSX
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem item={item} key={item.id} removeItem={removeItem} />
      ))}
    </div>
  );
}

export default Items;
