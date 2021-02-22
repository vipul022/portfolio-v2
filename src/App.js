import React from "react";
import "./App.scss";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
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
