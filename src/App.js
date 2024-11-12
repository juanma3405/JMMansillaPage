import Sidebar from "./components/SideBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Sidebar />
      <AboutMe />
      <br />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
