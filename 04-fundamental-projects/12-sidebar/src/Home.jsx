import { FaBars } from "react-icons/fa";

import { useAppContext } from "./AppContext";

function Home() {
  // Getting the open functions from the Context API
  const { openModal, openSidebar } = useAppContext();

  // Returned JSX
  return (
    <main>
      <button onClick={openSidebar} className="sidebar-toggle">
        <FaBars />
      </button>
      <button onClick={openModal} className="btn">
        Show modal
      </button>
    </main>
  );
}

export default Home;
