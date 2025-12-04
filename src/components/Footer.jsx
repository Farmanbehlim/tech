// const Footer = ({ isLightMode }) => (
//   <footer className={`${isLightMode ? "bg-white text-[#0f172a] border-black/5" : "bg-black text-white border-white/10"} py-12 text-center border-t transition-colors duration-500`}>
//     <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-center px-6">
//       <p className={isLightMode ? "text-gray-600" : "text-gray-300"}>
//         Copyright &copy; 2025 Farman Ali. All Rights Reserved
//       </p>
//       <div className="flex justify-center md:justify-end gap-5 text-2xl">
//         <a href="https://github.com/FarmanAli12" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
//           <i className="fab fa-github" aria-hidden="true" />
//         </a>
//         <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
//           <i className="fab fa-facebook" aria-hidden="true" />
//         </a>
//         <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
//           <i className="fab fa-instagram" aria-hidden="true" />
//         </a>
//         <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
//           <i className="fa fa-twitter" aria-hidden="true" />
//         </a>
//       </div>
//     </div>
//   </footer>
// );

// export default Footer;



















const Footer = ({ isLightMode }) => (
  <footer className={`${isLightMode ? "bg-white text-[#0f172a]" : "bg-black text-white"} py-12 border-t ${isLightMode ? "border-black/5" : "border-white/10"} transition-colors duration-500`}>
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid grid-cols-1 gap-8 pt-8 sm:grid-cols-2 lg:grid-cols-4">

        {/* Company Info & Social Links */}
        <div className="space-y-6">
          <div className="space-y-6 text-sm capitalize">
            {/* Logo with Image */}
            <div className="flex flex-col items-start">
              <div className="flex items-center space-x-3">
                {/* Logo Image - Replace src with your actual logo */}
                <img 
                  src="/images/logos/logocomp.png" // Replace with your logo path
                  alt="ALIF INFOTECH Logo"
                  className="w-16 h-16 object-contain"
                />
                <div className="flex flex-col">
                  <div className={`text-5xl font-bold font-sans ${isLightMode ? "text-gray-900" : "text-white"}  tracking-wide`}>
                    ALIF
                  </div>
                  <div className={`text-xs ${isLightMode ? "text-gray-600" : "text-white/80"} font-medium tracking-wider`}>
                    INFOTECH
                  </div>
                </div>
              </div>
              
            </div>
            
            <div className="flex transition duration-150 cursor-pointer items-center">
              <p className={isLightMode ? "text-gray-600" : "text-white/70"}>
                Alif Infotech is powered by a passionate developer dedicated to shaping the future of technology in the digital age.
              </p>
            </div>
            <div className="flex transition duration-150 cursor-pointer items-center space-x-4 *:text-[#7D818D]">
              <a
                href="https://github.com/FarmanAli12"
                target="_blank"
                rel="noopener noreferrer"
                className={`transition-colors ${isLightMode
                  ? "hover:text-[#b88c00]"
                  : "hover:text-[#FBD037]"
                  }`}
              >
                <i className="fab fa-github text-xl" aria-hidden="true" />
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isLightMode
                ? "hover:text-[#b88c00]"
                : "hover:text-[#FBD037]"
                }`}>
                <i className="fab fa-facebook text-xl" aria-hidden="true" />
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isLightMode
                ? "hover:text-[#b88c00]"
                : "hover:text-[#FBD037]"
                }`}>
                <i className="fab fa-instagram text-xl" aria-hidden="true" />
              </a>
              <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isLightMode
                ? "hover:text-[#b88c00]"
                : "hover:text-[#FBD037]"
                }`}>
                <i className="fab fa-twitter text-xl" aria-hidden="true" />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className={`transition-colors ${isLightMode
                ? "hover:text-[#b88c00]"
                : "hover:text-[#FBD037]"
                }`}>
                <i className="fab fa-linkedin text-xl" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        {/* Services */}
        <div className="space-y-6 border-r border-white/10">
          <p className={`text-sm font-normal capitalize ${isLightMode ? "text-gray-600" : "text-white/70"}`}>
            Services
          </p>
          <div className="space-y-3 text-base capitalize">
            {[
              "Custom Software Development",
              "Mobile App Development",
              "UI/UX Design",
              "E-commerce Solutions",
              "Web Development",
              "Frontend Development",
              "Backend Development",
              "Full Stack Development",
              "API Development"
            ].map((service, index) => (
              <div key={index} className="flex transition duration-150 cursor-pointer items-center">
                <a className={`text-md font-medium transition-all duration-150 hover:ml-2 ${isLightMode ? "text-gray-800 hover:text-[#b88c00]" : "text-white hover:text-[#FBD037] "}`}
                  href={`/${service.toLowerCase().replace(/\s+/g, '-')}`}>
                  {service}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Useful Links */}
        <div className="space-y-6 border-r border-white/10">
          <p className={`text-sm font-normal capitalize ${isLightMode ? "text-gray-600" : "text-white/70"}`}>
            Useful Links
          </p>
          <div className="space-y-3 text-base capitalize">
            {[
              { name: "About us", href: "/about" },
              { name: "Contact us", href: "/contact" },
              { name: "Portfolio", href: "/portfolio" },
              { name: "My blog", href: "/blog" },
              { name: "Projects", href: "/projects" },
              { name: "Testimonials", href: "/testimonials" }
            ].map((link, index) => (
              <div key={index} className="flex transition duration-150 cursor-pointer items-center">
                <a className={`text-md font-medium  transition-all duration-150 hover:ml-2 ${isLightMode ? "text-gray-800 hover:text-[#b88c00] " : "text-white hover:text-[#FBD037]"}`}
                  href={link.href}>
                  {link.name}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          <p className={`text-sm font-normal capitalize ${isLightMode ? "text-gray-600" : "text-white/70"}`}>
            Contact info
          </p>
          <div className="space-y-3 text-base">
            <a className="flex transition duration-150 cursor-pointer items-center space-x-3"
              target="_blank"
              href="tel:+1234567890">
              <i className={`fas fa-phone w-6  ${isLightMode ? "text-gray-600" : "text-white/70"}`}></i>
              <p className={isLightMode ? "text-gray-800" : "text-white"}>+919079372272</p>
            </a>
            <a className="flex transition duration-150 cursor-pointer items-center space-x-3"
              href="mailto:farman1.behlim@gmail.com">
              <i className={`fas fa-envelope w-6  ${isLightMode ? "text-gray-600" : "text-white/70"}`}></i>
              <p className={isLightMode ? "text-gray-800" : "text-white"}>farman1.behlim@gmail.com</p>
            </a>
            <a className="flex transition duration-150 items-center space-x-3"
              target="_blank"
              href="https://maps.app.goo.gl/">
              <i className={`fas fa-map-marker-alt w-6  ${isLightMode ? "text-gray-600" : "text-white/70"}`}></i>
              <p className={isLightMode ? "text-gray-800" : "text-white"}>
                Fatehpur Rajasthan, India,332301
              </p>
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-12 pt-8 border-t border-white/10 text-center">
        <p className={isLightMode ? "text-gray-600" : "text-gray-300"}>
          Copyright &copy; 2025 alifinfotech.com All Rights Reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;