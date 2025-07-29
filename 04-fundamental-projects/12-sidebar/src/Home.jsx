import { FaBars } from "react-icons/fa";

import { useAppContext } from "./AppContext";

function Home() {
  // Getting the toggle functions from the Context API
  const { toggleModal, toggleSidebar } = useAppContext();

  // Returned JSX
  return (
    <main>
      <button onClick={toggleSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={toggleModal} className="btn">
        Show modal
      </button>
    </main>
  );
}

export default Home;
