import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "../src/compnents/Footer";
import { Topnav } from "./compnents/Topnav";
import { About } from "./compnents/About";
import { Services } from "./compnents/Services";
import { Hero } from "./compnents/Hero";
import { Team } from "./compnents/Team";
import { Contact } from "./compnents/Contact";

function App() {
  return (
    <div>
      <Topnav />
      <Hero />
      <About />
      <Team />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
