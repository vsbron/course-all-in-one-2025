import { memo } from "react";
import Item from "./Person";

const List = ({ people }) => {
  // Returned JSX
  return (
    <div>
      {people.map((person) => {
        return <Item key={person.id} {...person} />;
      })}
    </div>
  );
};

// Exporting with the use of memo
export default memo(List);
