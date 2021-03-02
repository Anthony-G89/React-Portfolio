import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import './App.css';




function App() {


  const [ShowSlide, setShowSlide] = useState(false);
  const closeSlideNav = () => setShowSlide(false);


  return (
    <div className="applicationContainer">
      
      <NavBar
        show={ShowSlide}
        slideNav={setShowSlide}
        close={closeSlideNav}
      />
      <Home />
      <Projects />
    </div>
  );

}

export default App;
