import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/About-Me";
import Connect from "./components/Connect";
import Modal from "./components/Modals";
import ProjectDetail from "./projects-Detail.json";
import './App.css';




function App() {

  // State that controls hamburger menu on Mobile
  const [ShowSlide, setShowSlide] = useState(false);
  const closeSlideNav = () => setShowSlide(false);



  //  State that controls the Modals
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => setshowModal(false);

  const [currentProject, setCurrentProject] = useState();

  const openModal = (projectT) => {
    // console.log(projectT);
    setCurrentProject(projectT);
    setshowModal(true);
  };





  return (
    <div className="applicationContainer">


      <NavBar
        show={ShowSlide}
        slideNav={setShowSlide}
        close={closeSlideNav}
      />
      <Home
        close={closeSlideNav} 
        />
      <Modal
        closeModals={closeModal}
        openModal={showModal}
        currentProject={currentProject}
      />
      <Projects
        close={closeSlideNav}
        open={openModal}
        projectsItems={ProjectDetail}
      />
      <AboutMe
        close={closeSlideNav} 
        />
      <Connect
        close={closeSlideNav}
      />


    </div>
  );

}

export default App;
