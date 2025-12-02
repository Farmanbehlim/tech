import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hiring from "../components/Hiring";
import Showcase from "../components/Showcase";
import Skills from "../components/Skills";

 export const HomePage = ({isLightMode}) => (
    <>
      <Showcase isLightMode={isLightMode} />
      <Experience isLightMode={isLightMode} />
      <About isLightMode={isLightMode} />
      <Hiring isLightMode={isLightMode} />
      <Skills isLightMode={isLightMode} />
      <Contact isLightMode={isLightMode} />
    </>
  );