import NavBar from "./components/NavBar";
import Home from "./components/Home";
import  Projects  from "./components/Projects";
import './App.css';




function App() {
  return (
    <div className="applicationContainer">
     <NavBar />
     <Home />
     <Projects />
    </div>
  );
}

export default App;
