import { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function SingleQuestion({ title, info }) {
  // Creating state value for show info flag
  const [showInfo, setShowInfo] = useState(false);

  // Create the function to toggle the showInfo
  const toggleShowInfo = () => {
    setShowInfo((sI) => !sI);
  };

  // Returned JSX
  return (
    <article className="question">
      <header>
        <h5>{title}</h5>
        <button className="question-btn" onClick={toggleShowInfo}>
          {showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {showInfo && <p>{info}</p>}
    </article>
  );
}

export default SingleQuestion;
