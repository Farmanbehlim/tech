const Culture = ({ isLightMode }) => {

    const subtext = isLightMode ? "text-gray-700" : "text-gray-200";

    const cardBg = isLightMode ? "bg-white border border-gray-200" : "bg-gray-900 border border-gray-800";

    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${isLightMode?"text-midyellow":"text-yellowcustom"}`}>Our Culture</h2>
                        <p className={`text-lg mb-8 ${subtext}`}>
                            At Farman Technologies, we foster an environment of innovation, collaboration, and continuous learning.
                            We believe that great ideas can come from anywhere, and we empower every team member to make an impact.
                        </p>

                        <div className="grid md:grid-cols-2 gap-8 mt-12">
                            <div className={`${cardBg} rounded-lg p-6`}>
                                <h3 className="text-xl font-bold mb-4">Our Values</h3>
                                <ul className={`space-y-3 text-left ${subtext}`}>
                                    <li>• Innovation and creativity</li>
                                    <li>• Transparency and honesty</li>
                                    <li>• Continuous learning</li>
                                    <li>• Work-life balance</li>
                                    <li>• Customer obsession</li>
                                </ul>
                            </div>

                            <div className={`${cardBg} rounded-lg p-6`}>
                                <h3 className="text-xl font-bold mb-4">Hiring Process</h3>
                                <ul className={`space-y-3 text-left ${subtext}`}>
                                    <li>1. Initial screening call</li>
                                    <li>2. Technical assessment</li>
                                    <li>3. Team interview</li>
                                    <li>4. Final interview</li>
                                    <li>5. Offer within 48 hours</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Culture;

