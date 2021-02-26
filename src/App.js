import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
import ProjectList from "./components/Projects/ProjectList";
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      {/* <Projects /> */}
      <ProjectList />
    </div>
  );
}

export default App;
