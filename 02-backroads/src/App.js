import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Tours from "./components/Tours";

function App() {
  // Returned JSX
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Tours />
      </main>
      <Footer />
    </>
  );
}

export default App;
