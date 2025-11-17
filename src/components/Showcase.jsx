import { useEffect, useRef } from "react";
import Typed from "typed.js";

const Showcase = ({ isLightMode }) => {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "AI Development",
        "Enterprise Software",
        "Immersive Web Experiences",
        "Cloud + DevOps",
        "Digital Growth Campaigns",
      ],
      typeSpeed: 45,
      backSpeed: 35,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  const overlay = isLightMode
    ? "bg-gradient-to-b from-white/90 via-white/80 to-white/70 text-[#0f172a]"
    : "bg-gradient-to-b from-black/80 via-black/85 to-black/95 text-white";

  const subtext = isLightMode ? "text-gray-700" : "text-gray-200";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";

  return (
    <section
      id="home"
      className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url(/Images/bg2.jpg)" }}
    >
      <div className={`absolute inset-0 ${overlay}`} />
      <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col gap-10">
        <div className="max-w-4xl">
          <p className={`uppercase tracking-[0.5em] text-sm ${labelColor} mb-6`}>Digital Innovation Studio</p>
          <h1 className={`text-4xl md:text-6xl font-black leading-tight ${isLightMode ? "text-[#0f172a]" : "text-white"}`}>
            Building intelligent products that move businesses forward
          </h1>
          <p className={`text-lg md:text-2xl mt-6 ${subtext}`}>
            We are a full-stack IT company delivering end-to-end solutions across AI, software, web, mobile, cloud,
            digital marketing and visual storytelling.
          </p>
          <div className="flex flex-wrap items-center gap-5 mt-8">
            <a
              href="#services"
              className="px-8 py-3 rounded-full bg-[#FBD037] text-black font-semibold text-lg"
            >
              Explore Services
            </a>
            <a
              href="#about"
              className={`px-8 py-3 rounded-full border font-semibold text-lg transition ${
                isLightMode ? "border-black/20 text-black hover:bg-black/5" : "border-white/40 text-white hover:bg-white/10"
              }`}
            >
              Discover Our Story
            </a>
          </div>
        </div>
        <div className={`text-2xl font-light ${labelColor}`}>
          <span className={`${isLightMode ? "text-gray-600" : "text-white/70"} mr-3`}>Specialties:</span>
          <span ref={typedEl} className="auto-type font-semibold" />
        </div>
      </div>
    </section>
  );
};

export default Showcase;

