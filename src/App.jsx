import "./App.css";
import { Hero, About, Menu, Reserving, Contact } from "./container";
import { Navbar, Footer } from "./components";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <About />
      <Menu />
      <Reserving />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
