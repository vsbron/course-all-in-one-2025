import { FaAngleDoubleRight } from "react-icons/fa";
import { v4 as uuid4 } from "uuid";

function Duties({ duties }) {
  // Returned JSX
  return (
    <div>
      {duties.map((duty, i) => (
        <div key={uuid4()} className="job-desc">
          <FaAngleDoubleRight className="job-icon" />
          <p>{duty}</p>
        </div>
      ))}
    </div>
  );
}

export default Duties;
