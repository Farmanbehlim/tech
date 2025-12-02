
import React from "react";
const openings = [
  {
    title: "Senior AI Engineer",
    details: "5+ yrs | LLM Ops, Vector DBs, Python, TypeScript",
  },
  {
    title: "Product Designer",
    details: "4+ yrs | Design systems, motion, storytelling",
  },
  {
    title: "Fullstack Engineer",
    details: "3+ yrs | React, Node.js, cloud-native architecture",
  },
];

const Hiring = ({ isLightMode }) => {
  const sectionBg = isLightMode
    ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
    : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
  const cardBg = isLightMode ? "bg-white border border-black/5 text-gray-800" : "bg-white/5 border border-white/40 text-gray-200";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";

  return (
    <section
      id="career"
      className={`${sectionBg} py-20 px-6 transition-colors duration-500`}
    >
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${labelColor}`}>Join Our Team</p>
          <h2 className="text-4xl font-light">Careers with impact, mentorship, and autonomy</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {openings.map(({ title, details }) => (
            <div key={title} className={`${cardBg} rounded-3xl p-6 shadow-lg transition-colors duration-500`}>
              <h3 className="text-xl font-semibold mb-3">{title}</h3>
              <p className="mb-6">{details}</p>
              <button className="w-full py-2 rounded-full border border-[#FBD037] text-[#FBD037] hover:bg-[#FBD037]/10 transition">
                Apply now
              </button>
            </div>
          ))}
        </div>
        <p className={`text-center mt-10 ${isLightMode ? "text-gray-600" : "text-gray-200"}`}>
          Don't see your role? Send your profile to{" "}
          <a href="mailto:farman1.behlim@gmail.com" className={`${labelColor} underline`}>
            farman1.behlim@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default Hiring;








