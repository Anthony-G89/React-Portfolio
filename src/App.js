import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/About-Me";
import Connect from "./components/Connect";
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
      <Home
        close={closeSlideNav} />
      <Projects
        close={closeSlideNav} />
      <AboutMe
        close={closeSlideNav} />
      <Connect
        close={closeSlideNav}
      />


    </div>
  );

}

export default App;
