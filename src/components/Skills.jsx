const skills = [
  { name: "Html", image: "/Images/logos/icons8-html-5.svg" },
  { name: "Css", image: "/Images/logos/icons8-css3.svg" },
  { name: "JavaScript", image: "/Images/logos/Unofficial_JavaScript_logo_2.svg.png", rounded: true },
  { name: "Bootstrap", image: "/Images/logos/icons8-bootstrap.svg" },
  { name: "React", image: "/Images/logos/react.svg" },
  { name: "Redux", image: "/Images/logos/icons8-redux.svg" },
  { name: "Firebase", image: "/Images/logos/icons8-firebase.svg" },
  { name: "Vs code", image: "/Images/logos/icons8-visual-studio-code-2019.svg" },
  { name: "Git", image: "/Images/logos/icons8-git.svg" },
];

const Skills = ({ isLightMode }) => {
  const sectionClasses = isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white";
  const cardClasses = isLightMode
    ? "bg-white text-gray-900 border border-black/5"
    : "bg-white/5 text-white border border-white/10";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";
  const firstRow = skills.slice(0, Math.ceil(skills.length / 2));
  const secondRow = skills.slice(Math.ceil(skills.length / 2));

  const renderRow = (items, direction) => (
    <div className="overflow-hidden">
      <div
        className={`flex gap-6 w-max ${direction === "left" ? "animate-marqueeLeft" : "animate-marqueeRight"}`}
      >
        {[...items, ...items].map(({ name, image, rounded }, index) => (
          <div
            key={`${name}-${index}`}
            className={`${cardClasses} rounded-2xl p-6 flex flex-col items-center gap-3 w-40 shadow-lg`}
          >
            <img
              src={image}
              alt={name}
              className={`w-16 h-16 object-contain ${rounded ? "rounded" : ""}`}
            />
            <h4 className="text-lg font-semibold whitespace-nowrap">{name}</h4>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <section id="skills" className={`${sectionClasses} py-20 px-6 transition-colors duration-500`}>
      <div className="text-center mb-12">
        <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${labelColor}`}>Tech Stack</p>
        <h2 className="text-4xl font-light">Tools we lean on to ship confident releases</h2>
      </div>
      <div className=" mx-auto space-y-10">
        {renderRow(firstRow, "left")}
        {renderRow(secondRow, "right")}
      </div>
    </section>
  );
};

export default Skills;

