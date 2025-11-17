const caseStudies = [
  {
    title: "AI Sales Copilot",
    description:
      "Deployed a multilingual GPT-powered copilot that automates qualification workflows and boosts SDR productivity by 38%.",
    impact: "LLM fine-tuning • Secure data gateway • HubSpot integration",
    link: "https://farmanali12.github.io/addntns/",
  },
  {
    title: "Omnichannel Banking Suite",
    description:
      "Modernized a legacy core banking system with micro frontends, role-based portals, and real-time risk dashboards.",
    impact: "Microservices • Kubernetes • SOC2 compliance",
    link: "https://fabulous-pudding-959936.netlify.app/",
  },
  {
    title: "Retail Growth Platform",
    description:
      "Launched a composable commerce stack with personalized campaigns and 300ms storefront performance worldwide.",
    impact: "Next.js • Edge delivery • Marketing automation",
    link: "https://helpful-blancmange-b8cb13.netlify.app/",
  },
];

const Projects = ({ isLightMode }) => {
  const sectionClasses = isLightMode ? "bg-white text-[#0f172a] border-black/5" : "bg-black text-white border-white/10";
  const cardClasses = isLightMode
    ? "bg-white border border-black/5 text-gray-800"
    : "bg-white/5 border border-white/10 text-gray-200";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";
  const impactColor = isLightMode ? "text-gray-500" : "text-gray-400";

  return (
    <section id="projects" className={`${sectionClasses} py-20 px-6 border-t transition-colors duration-500`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className={`uppercase text-xs tracking-[0.4em] mb-3 ${labelColor}`}>Recent Impact</p>
          <h2 className="text-4xl font-light">Case studies that demonstrate measurable outcomes</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {caseStudies.map(({ title, description, impact, link }) => (
            <article key={title} className={`${cardClasses} rounded-3xl p-8 flex flex-col justify-between transition-colors duration-500`}>
              <div>
                <h3 className={`text-2xl font-semibold mb-3 ${labelColor}`}>{title}</h3>
                <p className="leading-relaxed mb-6">{description}</p>
                <p className={`text-sm uppercase tracking-wide ${impactColor}`}>{impact}</p>
              </div>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex items-center font-semibold gap-2 ${labelColor}`}
              >
                View details
                <span aria-hidden="true">↗</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

