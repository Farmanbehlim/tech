const services = [
  {
    title: "AI Development",
    description:
      "Custom LLM integrations, intelligent agents, predictive analytics, and computer vision accelerators tuned to your data.",
  },
  {
    title: "Software Development",
    description:
      "Enterprise-grade platforms engineered with microservices, event-driven architecture, and secure DevOps pipelines.",
  },
  {
    title: "Web Development",
    description:
      "Marketing sites and web apps built with modern frameworks, accessibility baked in, and performance-first delivery.",
  },
  {
    title: "App Development",
    description:
      "Native and cross-platform mobile apps aligned with product metrics, seamless APIs, and delightful UX flows.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Cloud-native transformations, FinOps, and automation using AWS, Azure, and GCP with zero-downtime releases.",
  },
  {
    title: "Digital Marketing",
    description:
      "Integrated growth campaigns across SEO, paid media, automation, and CRO with transparent data storytelling.",
  },
  {
    title: "Graphic Design",
    description:
      "Brand systems, motion graphics, and product visuals that create emotional resonance and strengthen recognition.",
  },
];

const Experience = ({ isLightMode }) => {
  const sectionBg = isLightMode
    ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
    : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
  const cardBg = isLightMode ? "bg-white border border-black/5 shadow-xl" : "bg-white/5 border border-white/10 shadow-xl";
  const paragraphColor = isLightMode ? "text-gray-700" : "text-gray-200";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";

  return (
    <section id="services" className={`${sectionBg} py-20 px-6 transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${labelColor}`}>Capabilities</p>
          <h2 className="text-4xl font-light">Full-spectrum services for modern IT organizations</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          {services.map(({ title, description }, idx) => (
            <article
              key={title}
              className={`${cardBg} rounded-3xl p-8 hover:-translate-y-1 transition-transform duration-300`}
            >
              <div className="flex items-center justify-between mb-4">
                <h3 className={`text-2xl font-semibold ${labelColor}`}>{title}</h3>
                <span className="text-gray-400 text-sm tracking-widest">0{idx + 1}</span>
              </div>
              <p className={`${paragraphColor} leading-relaxed`}>{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

