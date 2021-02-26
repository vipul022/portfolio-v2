import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";

import ProjectList from "./components/Projects/ProjectList";
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <ProjectList />
    </div>
  );
}

export default App;
