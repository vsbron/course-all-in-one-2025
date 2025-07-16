import { useState } from "react";
import data from "./data";
import Questions from "./Questions";

const App = () => {
  // Creating state value for questions
  const [questions, setQuestions] = useState(data);

  // Returned JSX
  return (
    <main>
      <Questions questions={questions} />
    </main>
  );
};
export default App;
