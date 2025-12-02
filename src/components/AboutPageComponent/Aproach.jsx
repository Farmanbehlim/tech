const Approach = ({ isLightMode }) => {
  const sectionBg = isLightMode
    ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
    : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
  const cardBg = isLightMode ? "bg-white border border-black/5 shadow-xl" : "bg-white/5 border border-white/10 shadow-xl";
  const paragraphColor = isLightMode ? "text-gray-700" : "text-gray-200";
  const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";

  return (
    <>
      <section className={`${isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"} py-10 lg:py-16 border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
        <div className="mx-auto px-4 md:px-10 2xl:px-0 w-full xl:container">
          <div className="items-center gap-6 lg:gap-10 grid grid-cols-1 sm:grid-cols-2">
            <div>
              <div className="space-y-4 lg:space-y-8">
                <div className="space-y-2">
                  <h2 className={`font-bold ${labelColor} text-2xl md:text-4xl`}>
                    Our Approach
                  </h2>
                  <p className={`w-full ${paragraphColor} text-sm md:text-base`}>
                    We believe in a collaborative approach where we work closely with our clients to understand
                    their unique challenges and goals. Our agile methodology ensures flexibility, transparency,
                    and continuous improvement throughout the development process.
                  </p>
                  <p className={`w-full ${paragraphColor} text-sm md:text-base mt-4`}>
                    From initial concept to final deployment and beyond, we partner with you to create solutions
                    that not only meet but exceed your expectations, driving tangible business results.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center w-full">
              <img
                alt="our-approach"
                loading="lazy"
                width="640"
                height="426"
                decoding="async"
                className="rounded-3xl w-full h-auto object-cover"
                src="/images/our-approach.webp"
                srcSet="/images/our-approach.webp?w=640&q=75 1x, /images/our-approach.webp?w=1920&q=75 2x"
                style={{ color: 'transparent' }}
                
              />
              {/* Fallback gradient background */}
              <div
                className="hidden w-full h-64 lg:h-80 bg-gradient-to-br from-[#FBD037] via-[#FF6B35] to-purple-600 rounded-3xl flex items-center justify-center"
                style={{ display: 'none' }}
              >
                <span className="text-white text-2xl font-bold text-center p-4">
                  Collaborative Approach
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Approach;