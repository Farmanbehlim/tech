import { useEffect, useState } from "react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Service", href: "#services", hasDropdown: true },
  { label: "About", href: "#about" },
  { label: "Career", href: "#career" },
];

const Header = ({ isLightMode, toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  const wrapperStyles = isLightMode
    ? "bg-white text-black border-black/10"
    : "bg-black text-white border-white/10";
  const navText = isLightMode ? "text-black" : "text-white";
  const mobileOverlay = isLightMode ? "bg-white/95 text-black" : "bg-black/95 text-white";

  return (
    <header className="fixed top-4 left-0 right-0 z-50 px-4">
      <div className={`${wrapperStyles} lg:p-10 p-6 lg:py-4 py-3 rounded-full flex items-center justify-between shadow-2xl backdrop-blur-sm relative xl:container mx-auto font-titillium transition-colors duration-500`}>
        <a href="#home" className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center text-black font-bold text-xl tracking-tight">
            FA
          </div>
          <div className="leading-tight">
            <p className="text-lg font-semibold">Farman Technologies</p>
            <p className={`text-xs uppercase tracking-[0.3em] ${isLightMode ? "text-gray-500" : "text-gray-300"}`}>Innovation Lab</p>
          </div>
        </a>

        <nav className={`${navText} space-x-2 text-base items-center lg:flex hidden`}>
          {navLinks.map(({ label, href, hasDropdown }) => (
            <a
              key={label}
              href={href}
              onClick={closeMenu}
              className={`px-5 py-2 rounded-full border ${
                label === "Home"
                  ? "border-[#FBD037] bg-[#FBD037]/10 text-[#FBD037]"
                  : "border-transparent hover:border-[#FBD037] hover:bg-[#FBD037]/10"
              } flex items-center gap-2 transition-colors`}
            >
              <span>{label}</span>
              {hasDropdown && (
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
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              )}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-12 h-12 rounded-full border ${isLightMode ? "border-black/20 text-black" : "border-white/20 text-white"} flex items-center justify-center`}
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
            className="bg-[#FBD037] px-8 py-3 rounded-full text-black text-lg font-medium cursor-pointer"
          >
            Get In Touch
          </a>
        </div>

        <div className="lg:hidden flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            className={`w-12 h-12 rounded-full border ${isLightMode ? "border-black/20 text-black" : "border-white/20 text-white"} flex items-center justify-center`}
            aria-label="Toggle color mode"
          >
            {isLightMode ? "☾" : "☀"}
          </button>
          <button
            type="button"
            aria-label="Toggle menu"
            className={`px-6 py-3 rounded-full text-lg font-medium ${isLightMode ? "bg-black text-white" : "bg-white/10 border border-white/20 text-white"}`}
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

      <div
        className={`fixed inset-0 ${mobileOverlay} flex flex-col items-center justify-center gap-6 text-2xl transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navLinks.map(({ label, href }) => (
          <a key={label} href={href} onClick={closeMenu} className="tracking-wide">
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={closeMenu}
          className="px-8 py-3 rounded-full bg-[#FBD037] text-black font-semibold"
        >
          Get In Touch
        </a>
      </div>
    </header>
  );
};

export default Header;

