import React from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import AboutMe from "./components/AboutMe/AboutMe";
import Projects from "./components/Projects/Projects";
function App() {
  return (
    <div>
      <Header />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;
