// import { useEffect, useState } from "react";
// import Header from "./components/Header";
// import Showcase from "./components/Showcase";
// import Experience from "./components/Experience";
// import About from "./components/About";
// import Projects from "./components/Projects";

// import Skills from "./components/Skills";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import Hiring from "./components/Hiring";

// function App() {
//   const [isLightMode, setIsLightMode] = useState(false);

//   useEffect(() => {
//     document.body.style.backgroundColor = isLightMode ? "#f6f7fb" : "#000";
//     document.body.style.color = isLightMode ? "#0f172a" : "#fff";
//   }, [isLightMode]);

//   const toggleTheme = () => setIsLightMode((prev) => !prev);

//   return (
//     <div className={`min-h-screen font-titillium ${isLightMode ? "bg-[#f6f7fb] text-[#0f172a]" : "bg-black text-white"} transition-colors duration-500`}>
//       <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
//       <main>
//         <Showcase isLightMode={isLightMode} />
//         <Experience isLightMode={isLightMode} />
//         <About isLightMode={isLightMode} />
//         {/* <Projects isLightMode={isLightMode} /> */}
//         <Hiring isLightMode={isLightMode} />
//         <Skills isLightMode={isLightMode} />
//         <Contact isLightMode={isLightMode} />
//       </main>
//       <Footer isLightMode={isLightMode} />
//     </div>
//   );
// }

// export default App;








































import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";

import Footer from "./components/Footer";

import AboutPage from "./pages/AboutPage";
import { HomePage } from "./pages/HomePage";
import CareerPage from "./pages/CareerPage";



function App() {
  const [isLightMode, setIsLightMode] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = isLightMode ? "#f6f7fb" : "#000";
    document.body.style.color = isLightMode ? "#0f172a" : "#fff";
  }, [isLightMode]);

  const toggleTheme = () => setIsLightMode((prev) => !prev);



  return (
    <Router>
      <div className={`min-h-screen font-titillium ${isLightMode ? "bg-[#f6f7fb] text-[#0f172a]" : "bg-black text-white"} transition-colors duration-500`}>
        <Header isLightMode={isLightMode} toggleTheme={toggleTheme} />
        <main>
          <Routes>
            <Route path="/" element={<HomePage isLightMode={isLightMode} />} />
            <Route path="/about" element={<AboutPage isLightMode={isLightMode} />} />
            <Route path="/career" element={<CareerPage isLightMode={isLightMode} />} />
          </Routes>
        </main>
        <Footer isLightMode={isLightMode} />
      </div>
    </Router>
  );
}

export default App;