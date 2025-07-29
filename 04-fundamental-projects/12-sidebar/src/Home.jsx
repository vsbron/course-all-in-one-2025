import { FaBars } from "react-icons/fa";

import { useAppContext } from "./AppContext";

function Home() {
  // Getting the open functions from the Context API
  const { openModal, openSidebar } = useAppContext();

  // Returned JSX
  return <main>Home</main>;
}

export default Home;
