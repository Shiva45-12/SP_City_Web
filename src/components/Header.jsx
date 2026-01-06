import { Menu, X, Search } from "lucide-react";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 w-full z-30 bg-black/20 backdrop-blur-md border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-6 flex items-center justify-between text-white">
        
        {/* Logo */}
        <div className="text-xl sm:text-2xl font-bold flex items-center gap-3 hover:scale-105 transition-transform duration-300">
          <Link to="/"><img src="/Logo SVG.svg" alt="Logo" className="w-12 h-12 sm:w-16 sm:h-16 drop-shadow-lg" /></Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8 font-medium">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Our Projects", path: "/project" },
            { name: "Our Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              className={`relative px-4 py-2 rounded-lg transition-all duration-300 group ${
                isActive(item.path) 
                  ? 'text-red-400 bg-white/10' 
                  : 'hover:text-red-400 hover:bg-white/10'
              }`}
            >
              {item.name}
              <span className={`absolute bottom-0 left-0 h-0.5 bg-red-400 transition-all duration-300 ${
                isActive(item.path) ? 'w-full' : 'w-0 group-hover:w-full'
              }`}></span>
            </Link>
          ))}
        </nav>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="w-6 h-6 cursor-pointer hover:text-red-400 hover:scale-110 transition-all duration-300 hidden sm:block" />
          </div>
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-all duration-300"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl text-white px-6 py-8 space-y-6 border-t border-white/10 animate-fade-in-up">
          {[
            { name: "Home", path: "/" },
            { name: "About Us", path: "/about" },
            { name: "Our Projects", path: "/project" },
            { name: "Our Gallery", path: "/gallery" },
            { name: "Contact Us", path: "/contact" }
          ].map((item) => (
            <Link 
              key={item.name} 
              to={item.path} 
              onClick={() => setOpen(false)}
              className={`block text-lg font-medium hover:translate-x-2 transition-all duration-300 ${
                isActive(item.path) ? 'text-red-400' : 'hover:text-red-400'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
};

export default Header;
