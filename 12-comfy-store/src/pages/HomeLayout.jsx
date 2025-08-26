import { Outlet, useNavigation } from "react-router-dom";
import { Header, Navbar, Loading } from "../components";

function HomeLayout() {
  // Get the navigation object from hook
  const navigation = useNavigation();

  // Get the indicator on whether is something's loading
  const isPageLoading = navigation.state === "loading";

  // Returned JSX
  return (
    <>
      <Header />
      <Navbar />
      <section className="align-element py-20 btn-primary">
        {isPageLoading ? <Loading /> : <Outlet />}
      </section>
    </>
  );
}

export default HomeLayout;
