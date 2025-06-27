import Author from "./Author";
import Image from "./Image";
import Title from "./Title";

function Book() {
  // Returned JSX
  return (
    <article>
      <Image />
      <Title />
      <Author />
    </article>
  );
}

export default Book;
