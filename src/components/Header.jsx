import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "#services", hasDropdown: true },
  { label: "About", href: "/about" },
  { label: "Career", href: "/career" },
];

const servicesData = [
  {
    name: "Custom Software Development",
    description: "Tailored solutions for your unique business needs",
    image: "/images/custom-software.jpg"
  },
  {
    name: "Mobile App Development",
    description: "Native and cross-platform mobile applications",
    image: "/images/mobile-app.jpg"
  },
  {
    name: "UI/UX Design",
    description: "Intuitive and engaging user experiences",
    image: "/images/ui-ux.jpg"
  },
  {
    name: "E-commerce",
    description: "Complete online store solutions",
    image: "/images/ecommerce.jpg"
  },
  {
    name: "Web Hosting and Development",
    description: "Reliable hosting with powerful web development",
    image: "/images/web-hosting.jpg"
  },
  {
    name: "DevOps Solutions",
    description: "Streamlined development and deployment processes",
    image: "/images/devops.jpg"
  },
  {
    name: "Software Testing",
    description: "Comprehensive quality assurance services",
    image: "/images/software-testing.jpg"
  },
  {
    name: "Digital Marketing",
    description: "Boost your online presence and reach",
    image: "/images/digital-marketing.jpg"
  },
  {
    name: "AI Solutions",
    description: "Intelligent automation and machine learning",
    image: "/images/ai-solutions.jpg"
  },
  {
    name: "Cloud Solutions",
    description: "Scalable and secure cloud infrastructure",
    image: "/images/cloud-solutions.jpg"
  }
];

const Header = ({ isLightMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
  const dropdownRef = useRef(null);
  const servicesButtonRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        isServicesOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target) &&
        servicesButtonRef.current &&
        !servicesButtonRef.current.contains(event.target)
      ) {
        setIsServicesOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  // Close mobile menu when screen width becomes larger than 1024px
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMenuOpen(false);
        setIsMobileServicesOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMobileServicesOpen(false);
  };

  const toggleServices = () => {
    setIsServicesOpen((prev) => !prev);
  };

  const toggleMobileServices = () => {
    setIsMobileServicesOpen((prev) => !prev);
  };

  const handleServiceClick = () => {
    setIsServicesOpen(false);
    closeMenu();
  };

  const wrapperStyles = isLightMode
    ? "bg-white text-black border-black/10"
    : "bg-black text-white border-white/10";
  const navText = isLightMode ? "text-black" : "text-white";
  const mobileOverlay = isLightMode ? "bg-white/95 text-black" : "bg-black/95 text-white";
  const dropdownStyles = isLightMode 
    ? "bg-white border-gray-200 shadow-xl" 
    : "bg-gray-900 border-gray-700 shadow-2xl";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 max-w-7xl mx-auto px-4">
      <div className={`${wrapperStyles} lg:p-10 p-6 lg:py-4 py-3 flex items-center justify-between shadow-2xl backdrop-blur-sm relative xl:container mx-auto font-titillium transition-colors duration-500 `}>
        <a href="#home" className="flex items-center gap-3">
          {/* Logo Image - Replace the src with your actual logo path */}
          <img 
            src="/images/logos/logocomp.png" 
            alt="Company Logo" 
            className="h-12 w-auto object-contain"
            // For dark/light mode variants, you can use:
            // src={isLightMode ? "/logo-light.png" : "/logo-dark.png"}
          />
          {/* Optional: Keep text logo as fallback or remove completely */}
          {/* <div className="leading-tight">
            <p className="text-lg font-semibold">Your Company Name</p>
            <p className={`text-xs uppercase tracking-[0.3em] ${isLightMode ? "text-gray-500" : "text-gray-300"}`}>Tagline</p>
          </div> */}
        </a>

        <nav className={`${navText} space-x-2 text-base items-center lg:flex hidden relative`}>
          {navLinks.map(({ label, href, hasDropdown }) => (
            <div key={label} className="relative">
              {hasDropdown ? (
                <button
                  ref={servicesButtonRef}
                  onClick={toggleServices}
                  className={`px-5 py-2 border ${
                    isServicesOpen
                      ? "border-[#FBD037] bg-[#FBD037]/10 text-[#FBD037]"
                      : "border-transparent hover:border-[#FBD037] hover:bg-[#FBD037]/10"
                  } flex items-center gap-2 transition-colors cursor-pointer`}
                >
                  <span>{label}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className={`transition-transform duration-300 ${isServicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
              ) : (
                <Link
                  to={href}
                  onClick={closeMenu}
                  className={`px-5 py-2 border ${
                    label === "Home"
                      ? "border-[#FBD037] bg-[#FBD037]/10 text-[#FBD037]"
                      : "border-transparent hover:border-[#FBD037] hover:bg-[#FBD037]/10"
                  } flex items-center gap-2 transition-colors`}
                >
                  <span>{label}</span>
                </Link>
              )}

              {/* Services Dropdown - Centered */}
              {hasDropdown && isServicesOpen && (
                <div 
                  ref={dropdownRef}
                  className={`absolute top-full left-1/2 transform -translate-x-1/2 mt-8 w-[1000px] rounded-2xl border ${dropdownStyles} p-6`}
                >
                  <div className="grid grid-cols-5 gap-4">
                    {servicesData.map((service, index) => (
                      <a
                        key={index}
                        href="#services"
                        onClick={handleServiceClick}
                        className="group cursor-pointer transition-all duration-300 hover:scale-105 text-center block"
                      >
                        <div className="relative overflow-hidden rounded-xl mb-3 mx-auto">
                          <div className="w-20 h-20 bg-gradient-to-br from-[#FBD037] to-[#FF6B35] rounded-xl flex items-center justify-center mx-auto">
                            <span className="text-white font-bold text-lg">
                              {service.name.split(' ').map(word => word[0]).join('')}
                            </span>
                          </div>
                          {/* You can replace the above div with an actual image:
                          <img 
                            src={service.image} 
                            alt={service.name}
                            className="w-20 h-20 rounded-xl object-cover group-hover:scale-110 transition-transform duration-300 mx-auto"
                          />
                          */}
                        </div>
                        <h3 className="font-semibold text-sm mb-1 group-hover:text-[#FBD037] transition-colors line-clamp-2">
                          {service.name}
                        </h3>
                        <p className={`text-xs ${isLightMode ? 'text-gray-600' : 'text-gray-300'} line-clamp-2`}>
                          {service.description}
                        </p>
                      </a>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700 text-center">
                    <a 
                      href="#services" 
                      className="inline-flex items-center gap-2 text-[#FBD037] font-semibold hover:gap-3 transition-all"
                      onClick={handleServiceClick}
                    >
                      View All Services
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-12 h-12 border ${isLightMode ? "border-black/20 text-black" : "border-white/20 text-white"} flex items-center justify-center`}
            aria-label="Toggle color mode"
          >
            {isLightMode ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M12 3a9 9 0 0 0 0 18 9 9 0 0 1 0-18Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2m0 16v2m10-10h-2M4 12H2m15.5 6.5L18 18m-12-12-1.5-1.5m12 0L18 6m-12 12-1.5 1.5" />
              </svg>
            )}
          </button>
          <a
            href="#contact"
            className={`${isLightMode?"bg-midyellow":"bg-yellowcustom"} px-8 py-3 text-black text-lg font-medium cursor-pointer`}
          >
            Get In Touch
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-12 h-12 border ${isLightMode ? "border-black/20 text-black" : "border-white/20 text-white"} flex items-center justify-center`}
            aria-label="Toggle color mode"
          >
            {isLightMode ? "☾" : "☀"}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            className={`px-6 py-3 text-lg font-medium ${isLightMode ? "bg-black text-white" : "bg-white/10 border border-white/20 text-white"}`}
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 6l12 12" />
                <path d="M6 18L18 6" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M4 8h16" />
                <path d="M4 16h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu with Close Button */}
      <div
        className={`fixed inset-0 ${mobileOverlay} flex flex-col items-center justify-center gap-6 text-2xl transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {/* Close Button - Top Right */}
        <button
          onClick={closeMenu}
          className="absolute top-8 right-8 p-3 bg-white/10 hover:bg-white/20 transition-colors"
          aria-label="Close menu"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </svg>
        </button>

        {navLinks.map(({ label, href, hasDropdown }) => (
          <div key={label} className="text-center w-full max-w-sm">
            {hasDropdown ? (
              <div>
                <button 
                  onClick={toggleMobileServices}
                  className="tracking-wide block py-2 text-xl font-semibold w-full flex items-center justify-center gap-2"
                >
                  {label}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className={`transition-transform duration-300 ${isMobileServicesOpen ? "rotate-180" : ""}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-4 grid grid-cols-1 gap-3 max-h-60 overflow-y-auto px-4">
                    {servicesData.map((service, index) => (
                      <a
                        key={index}
                        href="#services"
                        onClick={closeMenu}
                        className="flex items-center gap-3 p-3 rounded-lg bg-white/10 text-left"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-[#FBD037] to-[#FF6B35] flex items-center justify-center flex-shrink-0">
                          <span className="text-white font-bold text-xs">
                            {service.name.split(' ').map(word => word[0]).join('')}
                          </span>
                        </div>
                        <div>
                          <h3 className="font-semibold text-base">{service.name}</h3>
                          <p className="text-sm opacity-80 mt-1">{service.description}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <a 
                href={href} 
                onClick={closeMenu} 
                className="tracking-wide block py-2 text-xl font-semibold"
              >
                {label}
              </a>
            )}
          </div>
        ))}
        
        <a
          href="#contact"
          onClick={closeMenu}
          className={`px-8 py-3 ${isLightMode ? "bg-midyellow" : "bg-yellowcustom"} text-black font-semibold mt-4`}
        >
          Get In Touch
        </a>
      </div>

      {/* Backdrop for dropdown */}
      {isServicesOpen && (
        <div 
          className="fixed inset-0 z-40 lg:block hidden"
          onClick={() => setIsServicesOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;