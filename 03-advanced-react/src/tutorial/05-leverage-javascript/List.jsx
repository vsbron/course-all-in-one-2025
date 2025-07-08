import { people } from "../../data";
import Person from "./Person";

function List() {
  // Returned JSX
  return (
    <div>
      <h4>People list</h4>
      <ul style={{ display: "grid", gap: "30px" }}>
        {people.map((person) => (
          <Person key={person.id} person={person} />
        ))}
      </ul>
    </div>
  );
}

export default List;
