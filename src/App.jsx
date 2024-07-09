import "./App.css";
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import EducationSection from "./sections/EducationSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillSection from "./sections/SkillSection";
import ProjectSection from "./sections/ProjectSection";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import MarqueeText from "./components/Marquee";
function App() {
  return (
    <div className="overflow-y-auto scroll-smooth">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <ExperienceSection />
      <SkillSection />
      <ProjectSection />
      <MarqueeText/>
      <Footer />
    </div>
  );
}

export default App;
