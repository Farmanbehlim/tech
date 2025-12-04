const Vision = ({ isLightMode }) => {
  const sectionBg = isLightMode
    ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
    : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
  const cardBg = isLightMode ? "bg-white border border-black/5 shadow-xl" : "bg-white/5 border border-white/10 shadow-xl";
  const paragraphColor = isLightMode ? "text-gray-700" : "text-gray-200";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";

  return (
    
    <>
    
      <section className={`max-w-[80%]  mx-auto ${isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"} py-10 lg:py-16 border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
        <div className="mx-auto px-4 md:px-10 2xl:px-0 w-full xl:container ">
          {/* Vision */}
          <div className="items-center gap-6 lg:gap-10 grid grid-cols-1 sm:grid-cols-2 mb-16">
            <div>
              <div className="space-y-4 lg:space-y-8">
                <div className="space-y-2">
                  <h2 className={`font-bold ${labelColor} text-2xl md:text-4xl`}>
                    Our Vision
                  </h2>
                  <p className={`w-full ${isLightMode ? "text-[#444444]" : "text-gray-300"} text-sm md:text-base`}>
                    We aim to become a global leader in software development by fostering innovation and ensuring
                    customer satisfaction through exceptional solutions. Our goal is to set new industry standards
                    by consistently delivering cutting-edge software that adapts to our client's evolving needs.
                  </p>
                  <p className={`w-full ${isLightMode ? "text-[#444444]" : "text-gray-300"} text-sm md:text-base mt-4`}>
                    We envision a future where technology seamlessly integrates with business processes, creating
                    opportunities for growth, efficiency, and transformative digital experiences across all industries.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full">
              <img
                alt="our-vision"
                loading="lazy"
                width="640"
                height="426"
                decoding="async"
                className="rounded-3xl w-full h-auto object-cover"
                src="/images/vision.jpg"
                
                style={{ color: 'transparent' }}
              />
            </div>
          </div>

          {/* Mission */}
          <div className="items-center gap-6 lg:gap-10 grid grid-cols-1 sm:grid-cols-2">
            <div className="flex items-center w-full">
              <img
                alt="our-mission"
                loading="lazy"
                width="640"
                height="426"
                decoding="async"
                className="rounded-3xl w-full h-auto object-cover"
                src="/images/mision.avif"
                
                style={{ color: 'transparent' }}
              />
            </div>
            <div>
              <div className="space-y-4 lg:space-y-8">
                <div className="space-y-2">
                  <h2 className={`font-bold ${labelColor} text-2xl md:text-4xl`}>
                    Our Mission
                  </h2>
                  <p className={`w-full ${isLightMode ? "text-[#444444]" : "text-gray-300"} text-sm md:text-base`}>
                    To empower businesses with innovative, scalable, and reliable software solutions that drive growth
                    and digital transformation. We are committed to understanding our clients' unique challenges and
                    delivering tailored solutions that exceed expectations.
                  </p>
                  <ul className={`w-full ${isLightMode ? "text-[#444444]" : "text-gray-300"} text-sm md:text-base space-y-2 mt-4`}>
                    <li className="flex items-start">
                      <span className="text-[#FBD037] mr-2">•</span>
                      Deliver exceptional value through cutting-edge technology
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FBD037] mr-2">•</span>
                      Foster long-term partnerships based on trust and results
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FBD037] mr-2">•</span>
                      Continuously innovate and adapt to emerging technologies
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#FBD037] mr-2">•</span>
                      Maintain the highest standards of quality and reliability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Vision;