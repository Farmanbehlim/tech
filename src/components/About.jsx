const About = ({ isLightMode }) => {
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";
  const textColor = isLightMode ? "text-gray-800" : "text-gray-200";
  const cardBg = isLightMode ? "bg-white shadow-xl border border-black/5" : "bg-white/5 border border-white/10 shadow-2xl";

  return (
    <section id="about" className={`${isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"} py-20 px-6 border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto grid gap-12 md:grid-cols-2 items-center">
        <div>
          <p className={`uppercase tracking-[0.35em] text-xs mb-4 ${labelColor}`}>About Farman Technologies</p>
          <h2 className="text-4xl font-light leading-tight mb-6">
            We craft resilient digital products with strategy, design, and engineering under one roof.
          </h2>
          <p className={`text-lg leading-relaxed ${textColor}`}>
            From concept to launch, our studio blends human-centered design with modern engineering to unlock new revenue
            and reshape customer journeys. We specialize in AI-driven automation, enterprise software, immersive web/mobile
            experiences, and cloud modernization. Every engagement is backed by transparent collaboration, rapid prototyping,
            and secure delivery pipelines.
          </p>
        </div>
        <div className={`${cardBg} rounded-3xl p-8 transition-colors duration-500`}>
          <h3 className={`text-2xl font-semibold mb-4 ${labelColor}`}>Why partners choose us</h3>
          <ul className={`space-y-4 ${textColor}`}>
            <li>• Dedicated pods for AI, cloud, product and growth marketing</li>
            <li>• 50+ successful launches across SaaS, fintech, health, and retail</li>
            <li>• Secure, compliant architecture ready for scale</li>
            <li>• Measurable ROI with performance dashboards and analytics</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;

