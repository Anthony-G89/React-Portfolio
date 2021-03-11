import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Projects from "./components/Projects";
import AboutMe from "./components/About-Me";
import Connect from "./components/Connect";
import Modal from "./components/Modals";
// import ProjectDetail from "./projects-Detail.json";
import './App.css';




function App() {

  // Grabbing projectDetail Json and using as a State
  // const [detail, setDetail] = useState(ProjectDetail);

  // const checkingProjectDetail = (id) => {
  //   const project = this.state.ProjectDetail.find(rightDetail => rightDetail.id === id);
  //   console.log(project);
  // };

  // State that controls hamburger menu on Mobile
  const [ShowSlide, setShowSlide] = useState(false);
  const closeSlideNav = () => setShowSlide(false);


  //  State that controls the Modals
  const [showModal, setshowModal] = useState(false);
  const closeModal = () => setshowModal(false);
  const openModal = () => setshowModal(true);


  return (
    <div className="applicationContainer">


      <NavBar
        show={ShowSlide}
        slideNav={setShowSlide}
        close={closeSlideNav}
      />

      <Home
        close={closeSlideNav} />

      {/* {this.state.ProjectDetail.find(items => ( */}
         <Modal 
        //  checking={checkingProjectDetail}
         closeModals={closeModal}
         openModal={showModal}
        //  id={items.id}
        //  title={items.Title}
        //  description={items.Description}
        //  video={items.Video}
        //  GitHub={items.GitHubLink}
        //  Link = {items.LinkToApplication}

          />
      {/* ))}; */}
     

      <Projects
        close={closeSlideNav}
        open={openModal} />

      <AboutMe
        close={closeSlideNav} />

      <Connect
        close={closeSlideNav}
      />


    </div>
  );

}

export default App;
