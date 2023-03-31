import "./App.css";
import NavBar from "./components/NavBar";
import IntroSection from "./components/IntroSection";
import ExperienceSection from "./components/ExperienceSection";
import EducationSection from "./components/EducationSection";
import SkillSection from "./components/SkillSection";
import InterestSection from "./components/interestSection";

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div id="page-top">
      <NavBar />
      <div className="container-fluid p-0">
        <IntroSection />
        <SkillSection />
        <ExperienceSection />
        <EducationSection />
        <InterestSection />
      </div>
    </div>
  );
}

export default App;
