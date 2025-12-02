import { useState } from "react";


const Hiring = ({ isLightMode }) => {
    const [activeJob, setActiveJob] = useState(0);
    const [expandedJobs, setExpandedJobs] = useState({});

    const sectionBg = isLightMode
        ? "bg-gradient-to-r from-[#fdf9eb] via-[#fefdf8] to-[#f7f4ff] text-[#1f2933]"
        : "bg-gradient-to-r from-[#111] via-[#151515] to-[#0c0c0c] text-white";
    const cardBg = isLightMode ? "bg-white border border-black/5 shadow-xl" : "bg-white/5 border border-white/10 shadow-xl";
    const toggleReadMore = (jobIndex) => {
        setExpandedJobs(prev => ({
            ...prev,
            [jobIndex]: !prev[jobIndex]
        }));
    };
    // const sectionBg = isLightMode ? "bg-[#F7F9FC]" : "bg-gray-800";
    const jobOpenings = [
        {
            title: "Full Stack Developer",
            position: "Junior Developer - MERN full stack Developer",
            department: "Engineering",
            type: "Full-time",
            location: "Jaipur",
            experience: "3-4 Years",
            salary: "Based on interview",
            description: "We are seeking a highly skilled MERN Full Stack Developer with PostgreSQL to join our dynamic team. The ideal candidate will have 3-4 years of experience in developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js, along with a strong understanding of PostgreSQL. You will be responsible for designing, developing, and deploying scalable and secure applications while ensuring high performance and responsiveness.",
            fullDescription: `We are seeking a highly skilled MERN Full Stack Developer with PostgreSQL to join our dynamic team. The ideal candidate will have 3-4 years of experience in developing and maintaining web applications using MongoDB, Express.js, React.js, and Node.js, along with a strong understanding of PostgreSQL.

**Responsibilities:**
• Design, develop, and maintain robust and scalable web applications
• Collaborate with cross-functional teams to define, design, and ship new features
• Write clean, maintainable, and efficient code
• Implement security and data protection measures
• Optimize applications for maximum speed and scalability
• Participate in code reviews and provide constructive feedback
• Troubleshoot and debug applications

**Requirements:**
• 3-4 years of professional experience with MERN stack
• Strong proficiency in JavaScript, including DOM manipulation and JavaScript object model
• Experience with React.js and its core principles
• Familiarity with newer specifications of EcmaScript
• Experience with RESTful APIs and GraphQL
• Knowledge of modern authorization mechanisms, such as JSON Web Token
• Experience with common front-end development tools such as Babel, Webpack, NPM, etc.
• Ability to understand business requirements and translate them into technical requirements`,
            tags: ["MongoDB", "Express.js", "React.js", "Node.js", "PostgreSQL"]
        },
        {
            title: "UI/UX Designer",
            position: "Senior UI/UX Designer",
            department: "Design",
            type: "Full-time",
            location: "Remote",
            experience: "4-5 Years",
            salary: "Based on interview",
            description: "We are looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.",
            fullDescription: `We are looking for a talented UI/UX Designer to create amazing user experiences. The ideal candidate should have an eye for clean and artful design, possess superior UI skills and be able to translate high-level requirements into interaction flows and artifacts, and transform them into beautiful, intuitive, and functional user interfaces.

**Responsibilities:**
• Create wireframes, storyboards, user flows, process flows and site maps
• Design and deliver wireframes, user stories, user journeys, and mockups
• Identify design problems and devise elegant solutions
• Make strategic design and user-experience decisions related to core functions
• Collaborate with product management and engineering to define innovative solutions
• Execute all visual design stages from concept to final hand-off to engineering
• Present and defend designs and key deliverables to peers and executive level stakeholders

**Requirements:**
• 4-5 years of UX design experience
• Expertise in UX software such as Sketch, OmniGraffle, Axure, InVision, UXPin, Balsamiq, Framer, etc.
• Ability to work with clients to understand detailed requirements
• Extensive experience in using UX design best practices
• A solid grasp of user-centered design and testing methodologies
• Understanding of mobile-first and responsive design
• Be passionate about resolving user pain points through great design`,
            tags: ["Figma", "Adobe XD", "User Research", "Prototyping", "Wireframing"]
        },
        {
            title: "DevOps Engineer",
            position: "Cloud DevOps Specialist",
            department: "Operations",
            type: "Full-time",
            location: "Hybrid",
            experience: "3-5 Years",
            salary: "Based on interview",
            description: "Join our infrastructure team as a DevOps Engineer to build and maintain our cloud infrastructure. You'll work with cutting-edge technologies to ensure our systems are scalable, reliable, and secure. Experience with AWS, Docker, Kubernetes, and CI/CD pipelines is essential.",
            fullDescription: `Join our infrastructure team as a DevOps Engineer to build and maintain our cloud infrastructure. You'll work with cutting-edge technologies to ensure our systems are scalable, reliable, and secure. Experience with AWS, Docker, Kubernetes, and CI/CD pipelines is essential.

**Responsibilities:**
• Build, maintain, and scale infrastructure for Production and Test environments
• Implement and maintain CI/CD pipelines
• Automate infrastructure provisioning and management
• Monitor and troubleshoot system performance and availability
• Ensure security best practices are implemented across all infrastructure
• Collaborate with development teams to improve deployment processes
• Manage cloud resources and optimize costs

**Requirements:**
• 3-5 years of experience in DevOps or infrastructure engineering
• Strong experience with AWS services (EC2, S3, RDS, Lambda, etc.)
• Proficiency with containerization technologies (Docker, Kubernetes)
• Experience with infrastructure as code (Terraform, CloudFormation)
• Knowledge of CI/CD tools (Jenkins, GitLab CI, GitHub Actions)
• Understanding of networking concepts and security protocols
• Experience with monitoring tools (Prometheus, Grafana, CloudWatch)`,
            tags: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"]
        }
    ];
    const getDescription = (job, index) => {
        const isExpanded = expandedJobs[index];
        const displayText = isExpanded ? job.fullDescription : job.description;

        return (
            <div className={`${isLightMode ? "text-gray-700" : "text-gray-300"} leading-relaxed`}>
                {displayText.split('\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-3">
                        {paragraph.startsWith('**') && paragraph.endsWith('**') ? (
                            <strong className="font-semibold">
                                {paragraph.replace(/\*\*/g, '')}
                            </strong>
                        ) : (
                            paragraph
                        )}
                    </p>
                ))}
                <button
                    onClick={() => toggleReadMore(index)}
                    className={`ml-2 text-medium ${isLightMode ? "text-midyellow" : "text-yellowcustom"}  hover:underline transition-colors duration-200`}
                >
                    {isExpanded ? 'Read Less' : 'Read More'}
                </button>
            </div>
        );
    };
    return (
        <>
            <section id="jobs" className={`py-10 lg:py-16 space-y-10 ${sectionBg}`}>
                <div className="flex flex-col items-center">
                    <h2 className={`text-2xl md:text-4xl font-bold italic ${isLightMode ? "text-midyellow" : "text-yellowcustom"}`}>
                        We're Hiring!
                    </h2>
                </div>

                <div className={`mx-auto px-4 md:px-10 2xl:px-0 w-full xl:container`}>
                    <div className="flex lg:flex-row flex-col items-start gap-16">
                        {/* Job Categories Sidebar */}
                        <div className="flex-shrink-0 lg:w-96 w-full text-lg font-medium text-left">
                            {jobOpenings.map((job, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveJob(index)}
                                    className={`px-8 py-4 border-l-4 w-full text-left transition-all duration-300 ${activeJob === index
                                        ? `bg-white ${isLightMode ? "border-midyellow" : "border-yellowcustom"} bg-[#FBD037]/10 font-semibold text-[#212121]`
                                        : `border-transparent ${isLightMode ? "text-[#212121]" : "text-white"}`
                                        }`}
                                >
                                    {job.title}
                                </button>
                            ))}
                        </div>

                        {/* Job Details */}
                        <div className={`${cardBg} w-full`}>
                            <div className={` p-6 space-y-4 rounded-lg`}>
                                <h3 className="text-xl font-semibold">
                                    {jobOpenings[activeJob].position}
                                </h3>

                                <div className="flex flex-wrap whitespace-nowrap gap-2">
                                    <div className={` border px-3 py-1 text-sm ${isLightMode ? "border-black" : "border-white"
                                        }`}>
                                        Experience: {jobOpenings[activeJob].experience}
                                    </div>
                                    <div className={` border px-3 py-1 text-sm ${isLightMode ? "border-black" : "border-white"
                                        }`}>
                                        Job Type: {jobOpenings[activeJob].type}
                                    </div>
                                    <div className={` border px-3 py-1 text-sm ${isLightMode ? "border-black" : "border-white"
                                        }`}>
                                        Location: {jobOpenings[activeJob].location}
                                    </div>
                                    <div className={` border px-3 py-1 text-sm ${isLightMode ? "border-black" : "border-white"
                                        }`}>
                                        Salary: {jobOpenings[activeJob].salary}
                                    </div>
                                </div>

                                {/* Tech Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {jobOpenings[activeJob].tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className={`px-3 py-1 text-sm  ${isLightMode
                                                ? "bg-[#FBD037]/20 text-[#212121] border border-[#FBD037]/30"
                                                : "bg-[#FBD037]/20 text-white border border-[#FBD037]/30"
                                                }`}
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* Description with Read More/Less */}
                                {getDescription(jobOpenings[activeJob], activeJob)}

                                <div className="ml-auto pt-4">
                                    <button className={`${isLightMode ? "bg-midyellow " : "bg-yellowcustom "}text-base font-semibold px-6 py-3  text-[#212121] flex items-center space-x-1.5 transition-colors`}>
                                        <span>Apply Now</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="tabler-icon tabler-icon-arrow-right">
                                            <path d="M5 12l14 0"></path>
                                            <path d="M13 18l6 -6"></path>
                                            <path d="M13 6l6 6"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hiring;

