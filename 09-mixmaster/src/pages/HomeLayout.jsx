import { Outlet, useNavigation } from "react-router-dom";

import Navbar from "../components/Navbar";

function HomeLayout() {
  // Checking the loading state using Navigation hook
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <>
      <Navbar />
      <section className="page">
        {isLoading ? <div className="loading" /> : <Outlet />}
      </section>
    </>
  );
}

export default HomeLayout;
