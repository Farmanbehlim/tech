const Benefits = ({ isLightMode }) => {
    const subtext = isLightMode ? "text-gray-700" : "text-gray-200";
    
   
     const cardBg = isLightMode ? "bg-white shadow-xl border border-black/5" : "bg-white/5 border border-white/10 shadow-2xl";
    const benefits = [
        {
            icon: "💼",
            title: "Competitive Salary",
            description: "Industry-leading compensation packages"
        },
        {
            icon: "🏥",
            title: "Health Insurance",
            description: "Comprehensive medical, dental, and vision coverage"
        },
        {
            icon: "📚",
            title: "Learning Budget",
            description: "Annual budget for courses and conferences"
        },
        {
            icon: "🏖️",
            title: "Flexible PTO",
            description: "Unlimited paid time off policy"
        },
        {
            icon: "💻",
            title: "Remote Work",
            description: "Flexible remote work options"
        },
        {
            icon: "🚀",
            title: "Career Growth",
            description: "Clear paths for advancement and promotion"
        }
    ];
    return (
        <>
            <section className={`${isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"} py-20  border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-4 ${isLightMode?"text-midyellow":"text-yellowcustom"}`}>Why Join Us?</h2>
                        <p className={`text-lg max-w-2xl mx-auto ${subtext}`}>
                            We invest in our team's growth and well-being with comprehensive benefits and perks.
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {benefits.map((benefit, index) => (
                            <div key={index} className={`${cardBg} rounded-lg p-6 text-center`}>
                                <div className="text-4xl mb-4">{benefit.icon}</div>
                                <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
                                <p className={subtext}>{benefit.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Benefits;

