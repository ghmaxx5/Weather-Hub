import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleNavigation = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    if (href.startsWith('#')) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        
        if (mobileMenuOpen) {
          setMobileMenuOpen(false);
        }
      }
    }
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as Element;
      const mobileMenu = document.getElementById('mobileMenu');
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      
      if (mobileMenuOpen && mobileMenu && mobileMenuBtn &&
          !mobileMenu.contains(target) && !mobileMenuBtn.contains(target)) {
        setMobileMenuOpen(false);
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50 header-slide-in">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Code className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold text-gray-800">WebTemplate</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a 
              href="#home" 
              className="nav-link text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={(e) => handleNavigation(e, '#home')}
              data-testid="link-home"
            >
              Home
            </a>
            <a 
              href="#features" 
              className="nav-link text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={(e) => handleNavigation(e, '#features')}
              data-testid="link-features"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="nav-link text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={(e) => handleNavigation(e, '#about')}
              data-testid="link-about"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="nav-link text-gray-700 hover:text-primary transition-colors font-medium"
              onClick={(e) => handleNavigation(e, '#contact')}
              data-testid="link-contact"
            >
              Contact
            </a>
            <button 
              className="btn-primary text-white px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity"
              data-testid="button-get-started-desktop"
            >
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-700 hover:text-primary" 
            id="mobileMenuBtn"
            onClick={toggleMobileMenu}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div 
          className={`mobile-menu md:hidden bg-gray-50 rounded-lg mt-2 ${mobileMenuOpen ? 'open' : ''}`}
          id="mobileMenu"
        >
          <div className="py-4 space-y-3">
            <a 
              href="#home" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              onClick={(e) => handleNavigation(e, '#home')}
              data-testid="link-home-mobile"
            >
              Home
            </a>
            <a 
              href="#features" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              onClick={(e) => handleNavigation(e, '#features')}
              data-testid="link-features-mobile"
            >
              Features
            </a>
            <a 
              href="#about" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              onClick={(e) => handleNavigation(e, '#about')}
              data-testid="link-about-mobile"
            >
              About
            </a>
            <a 
              href="#contact" 
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              onClick={(e) => handleNavigation(e, '#contact')}
              data-testid="link-contact-mobile"
            >
              Contact
            </a>
            <div className="px-4 pt-2">
              <button 
                className="btn-primary w-full text-white py-2 rounded-lg font-medium"
                data-testid="button-get-started-mobile"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
