import SingleQuestion from "./SingleQuestion";

function Questions({ questions }) {
  // Returned JSX
  return (
    <section className="container">
      <h1>Questions</h1>
      {questions.map((q) => (
        <SingleQuestion key={q.id} {...q} />
      ))}
    </section>
  );
}

export default Questions;
