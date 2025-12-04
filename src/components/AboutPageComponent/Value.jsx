import { FaLightbulb, FaStar, FaHandshake, FaShieldAlt } from 'react-icons/fa';

const Value = ({ isLightMode }) => {
    const labelColor = isLightMode ? "text-[#b88c00]" : "text-[#FBD037]";
    const cardBg = isLightMode ? "bg-white border border-black/5 text-gray-800" : "bg-white/5 border border-white/40 text-gray-200";
    const sectionBg = isLightMode
        ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
        : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";

    return (
        <>
        <section className={`${sectionBg}`}>

            <div className={`max-w-[80%] mx-auto py-10 lg:py-16 $ transition-colors duration-500`}>
                <div className=" mx-auto px-4 md:px-10 2xl:px-0 w-full xl:container">
                    <div className="flex flex-col items-center mb-12">
                        <h2 className={`text-2xl md:text-4xl font-bold ${labelColor}`}>
                            Our Core Values
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                title: "Innovation",
                                description: "We constantly push boundaries and explore new technologies to deliver forward-thinking solutions.",
                                icon: <FaLightbulb />
                            },
                            {
                                title: "Excellence",
                                description: "We strive for perfection in every project, ensuring the highest quality standards are met.",
                                icon: <FaStar />
                            },
                            {
                                title: "Collaboration",
                                description: "We believe in the power of teamwork and building strong partnerships with our clients.",
                                icon: <FaHandshake />
                            },
                            {
                                title: "Integrity",
                                description: "We maintain transparency, honesty, and ethical practices in all our business dealings.",
                                icon: <FaShieldAlt />
                            }
                        ].map((value, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-2xl ${cardBg} text-center transition-colors duration-500`}
                            >
                                <div className={`flex justify-center mb-4 ${labelColor}`}>
                                    <div className="text-4xl">
                                        {value.icon}
                                    </div>
                                </div>
                                <h3 className={`text-xl font-bold mb-3 ${isLightMode ? "text-gray-800" : "text-gray-200"}`}>
                                    {value.title}
                                </h3>
                                <p className={`text-sm ${isLightMode ? "text-gray-600" : "text-gray-300"}`}>
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
        </>
    );
};

export default Value;