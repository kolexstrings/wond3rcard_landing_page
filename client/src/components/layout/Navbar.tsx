import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.svg";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="flex items-center">
              <img
                src={logo}
                alt="Wond3rCard Logo"
                className="h-10 w-auto mr-2"
              />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a
              href="#features"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Features
            </a>
            <a
              href="#how-it-works"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              How it Works
            </a>
            <a
              href="#pricing"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              Pricing
            </a>
            <a
              href="#faq"
              className="text-gray-700 hover:text-purple-600 font-medium"
            >
              FAQ
            </a>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-purple-700 font-medium">
              Login
            </Button>
            <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium">
              Sign Up
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              <a
                href="#features"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={closeMobileMenu}
              >
                Features
              </a>
              <a
                href="#how-it-works"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={closeMobileMenu}
              >
                How it Works
              </a>
              <a
                href="#pricing"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={closeMobileMenu}
              >
                Pricing
              </a>
              <a
                href="#faq"
                className="px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50"
                onClick={closeMobileMenu}
              >
                FAQ
              </a>
              <div className="pt-4 flex flex-col space-y-3">
                <Button
                  variant="ghost"
                  className="text-purple-700 font-medium justify-start"
                >
                  Login
                </Button>
                <Button className="bg-purple-600 hover:bg-purple-700 text-white font-medium w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
