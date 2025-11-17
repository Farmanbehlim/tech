const Footer = ({ isLightMode }) => (
  <footer className={`${isLightMode ? "bg-white text-[#0f172a] border-black/5" : "bg-black text-white border-white/10"} py-12 text-center border-t transition-colors duration-500`}>
    <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2 items-center px-6">
      <p className={isLightMode ? "text-gray-600" : "text-gray-300"}>
        Copyright &copy; 2025 Farman Ali. All Rights Reserved
      </p>
      <div className="flex justify-center md:justify-end gap-5 text-2xl">
        <a href="https://github.com/FarmanAli12" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
          <i className="fab fa-github" aria-hidden="true" />
        </a>
        <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
          <i className="fab fa-facebook" aria-hidden="true" />
        </a>
        <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
          <i className="fab fa-instagram" aria-hidden="true" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="hover:text-[#FBD037] transition-colors">
          <i className="fa fa-twitter" aria-hidden="true" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;

