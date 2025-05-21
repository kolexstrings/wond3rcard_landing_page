import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "@/assets/logo.svg";

export function Footer() {
  return (
    <footer className="bg-[#5733A2] text-white pt-16 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-12">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center mb-6">
              <img src={logo} alt="Wond3rCard Logo" className="h-10 w-auto" />
            </div>
            <p className="text-gray-400 mb-6">
              The modern way to share your contact information and build your
              network.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaTwitter size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaFacebook size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaInstagram size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition duration-300"
              >
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Product</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#features"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Integrations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Enterprise
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Help Center
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Guides
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  API Docs
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Terms
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Security
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-400 hover:text-white transition duration-300"
                >
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Wond3rCard. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center items-center space-x-4">
            <a
              href="#"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              Privacy Policy
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              Terms of Service
            </a>
            <span className="text-gray-700 hidden sm:inline">•</span>
            <a
              href="#"
              className="text-gray-500 hover:text-white transition duration-300"
            >
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
