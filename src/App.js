import "./App.css";
import Nav from "./Navigation-bar/Nav.js";
import Home from "./Home/Home";
import Work from "./Work/Work";
import About from "./About/About";
import Skill from "./Skill/Skills";
import Contact from "./Contact/Contact";
function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  );
}

export default App;
