import SingleItem from "./SingleItem";

function Items({ items, removeItem, editItem }) {
  // Returned JSX
  return (
    <div className="items">
      {items.map((item) => (
        <SingleItem
          item={item}
          key={item.id}
          removeItem={removeItem}
          editItem={editItem}
        />
      ))}
    </div>
  );
}

export default Items;
