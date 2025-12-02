import { useEffect, useRef } from "react";
import Typed from "typed.js";
import Vision from "../components/AboutPageComponent/vision";
import Value from "../components/AboutPageComponent/Value";
import Approach from "../components/AboutPageComponent/Aproach";

const AboutPage = ({ isLightMode }) => {
    const typedEl = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedEl.current, {
            strings: [
                "Digital Innovation",
                "Cutting-Edge Technology",
                "Client Success",
                "Creative Solutions",
                "Future-Forward Thinking"
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
        <div className={isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"}>
            {/* Hero Section */}
            <section
                className="min-h-screen relative bg-cover bg-center bg-no-repeat flex items-center"
                style={{ backgroundImage: "url(/Images/bg2.jpg)" }}
            >
                <div className={`absolute inset-0 ${overlay}`} />
                <div className="relative z-10 container mx-auto px-6 pt-32 pb-20 flex flex-col gap-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <p className={`uppercase tracking-[0.5em] text-sm ${labelColor} mb-6`}>Our Story</p>
                        <h1 className={`text-4xl md:text-6xl font-black leading-tight ${isLightMode ? "text-[#0f172a]" : "text-white"}`}>
                            Pioneering the Future of Digital Solutions
                        </h1>
                        <p className={`text-lg md:text-2xl mt-6 ${subtext}`}>
                            At Farman Technologies, we blend creativity with technology to deliver exceptional digital experiences.
                            Our journey began with a simple vision: to transform businesses through innovative software solutions.
                        </p>

                        <div className="grid md:grid-cols-3 gap-8 mt-12">
                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#FBD037] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-2xl">5+</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Years Experience</h3>
                                <p className={subtext}>Delivering cutting-edge solutions</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#FBD037] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-2xl">50+</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Projects Completed</h3>
                                <p className={subtext}>Across various industries</p>
                            </div>

                            <div className="text-center">
                                <div className="w-20 h-20 bg-gradient-to-br from-[#FBD037] to-[#FF6B35] rounded-full flex items-center justify-center mx-auto mb-4">
                                    <span className="text-white font-bold text-2xl">100%</span>
                                </div>
                                <h3 className="text-xl font-bold mb-2">Client Satisfaction</h3>
                                <p className={subtext}>Dedicated to excellence</p>
                            </div>
                        </div>

                       
                    </div>

                    <div className={`text-2xl font-light ${labelColor} text-center mt-8`}>
                        <span className={`${isLightMode ? "text-gray-600" : "text-white/70"} mr-3`}>Our Focus:</span>
                        <span ref={typedEl} className="auto-type font-semibold" />
                    </div>
                </div>
            </section>

            {/* Vision and Mission Section */}
            <Vision isLightMode={isLightMode} />

            {/* Values Section */}
            <Value isLightMode={isLightMode} />

            {/* Team Approach Section */}
            <Approach isLightMode={isLightMode} />


        </div>
    );
};

export default AboutPage;