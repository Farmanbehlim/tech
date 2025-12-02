const CareerHero = ({ isLightMode }) => {
    const sectionBg = isLightMode
        ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
        : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
    const cardBg = isLightMode ? "bg-white border border-black/5 shadow-xl" : "bg-white/5 border border-white/10 shadow-xl";
    const paragraphColor = isLightMode ? "text-gray-700" : "text-gray-200";
    const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";
    const overlay = isLightMode
        ? "bg-gradient-to-b from-white/90 via-white/80 to-white/70 text-[#0f172a]"
        : "bg-gradient-to-b from-black/80 via-black/85 to-black/95 text-white";
    const subtext = isLightMode ? "text-gray-700" : "text-gray-200";
    const scrollToJobs = () => {
        document.getElementById('jobs').scrollIntoView({
            behavior: 'smooth'
        });
    };
    return (
        <>
            <section
                className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center"
                style={{ backgroundImage: "url(/Images/bg2.jpg)" }}
            >
                <div className={`absolute inset-0 ${overlay}`} />
                <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col gap-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className={`uppercase tracking-[0.5em] text-sm ${labelColor} mb-6`}>Join Our Team</p>
                        <h1 className={`text-4xl md:text-6xl font-black leading-tight ${isLightMode ? "text-[#0f172a]" : "text-white"}`}>
                            Build the Future With Us
                        </h1>
                        <p className={`text-lg md:text-2xl mt-6 ${subtext}`}>
                            At Farman Technologies, we're not just building products - we're shaping the future of digital innovation.
                            Join a team that values creativity, collaboration, and cutting-edge technology.
                        </p>

                        {/* Explore Jobs Button */}
                        <div className="mt-12">
                            <button
                                onClick={scrollToJobs}
                                className={`${isLightMode ? " bg-midyellow text-black":"text-white  bg-yellowcustom"}  py-3 px-8  font-semibold text-lg`}
                            >
                                Explore Job 
                            </button>
                        </div>


 

                    </div>


                </div>
            </section>
        </>
    );
};

export default CareerHero;