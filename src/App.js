import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';




class App extends React.Component {

  

  render() {
    return (
      <div className="applicationContainer">
        <NavBar />
        <Home />
        <Projects />
      </div>
    );
  }
}

export default App;
