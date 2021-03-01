import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Footer from "./components/Footer/Footer";

import ProjectList from "./components/Projects/ProjectList";
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <ProjectList />
      <Footer />
    </div>
  );
}

export default App;
