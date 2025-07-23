import { nanoid } from "nanoid";

import SingleColor from "./SingleColor";

function ColorList({ colors }) {
  // Returned JSX
  return (
    <section className="colors">
      {colors.map((color, i) => (
        <SingleColor color={color} index={i} key={nanoid()} />
      ))}
    </section>
  );
}

export default ColorList;
