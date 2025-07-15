import Person from "./Person";

function List({ people }) {
  // Returned JSX
  return (
    <section>
      {people.map((person) => (
        <Person key={person.id} {...person} />
      ))}
    </section>
  );
}

export default List;
