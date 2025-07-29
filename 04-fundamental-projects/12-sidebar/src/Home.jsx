import { useAppContext } from "./AppContext";

function Home() {
  // Getting the open functions from the Context API
  const { openModal, openSidebar } = useAppContext();

  // Returned JSX
  return <div>Home</div>;
}

export default Home;
