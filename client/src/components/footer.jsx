import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";
import { FaLinkedin, FaTwitter, FaFacebook } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-4">Skypark Technologies</h3>
            <p className="text-gray-300 mb-4">
              Transforming businesses through innovative IT solutions and
              strategic technology partnerships.
            </p>
            <div className="flex space-x-4">
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                data-testid="social-linkedin"
              >
                <FaLinkedin className="text-xl hover:text-gray-300 transition-colors" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                data-testid="social-twitter"
              >
                <FaTwitter className="text-xl hover:text-gray-300 transition-colors" />
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="cursor-pointer"
                data-testid="social-facebook"
              >
                <FaFacebook className="text-xl hover:text-gray-300 transition-colors" />
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Solutions</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-firewall"
                >
                  Firewall Protection
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-cloud"
                >
                  Cloud Infrastructure
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-network"
                >
                  Network Solutions
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("solutions")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-consulting"
                >
                  IT Consulting
                </button>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-about"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("partners")}
                  className="hover:text-white transition-colors text-left"
                  data-testid="footer-link-partners"
                >
                  Partners
                </button>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-careers"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-white transition-colors"
                  data-testid="footer-link-contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                info@skyparktechnologies.com
              </p>
              <p className="flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                support@skyparktechnologies.com
              </p>
              <p className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                +91 85111 23546
              </p>
              <p className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                Mumbai, India
              </p>
            </div>
          </motion.div>
        </div>

        <motion.div
          className="border-t border-gray-700 pt-8 text-center text-gray-300"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p>
            &copy; 2024 Skypark Technologies. All rights reserved. | Privacy
            Policy | Terms of Service
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;



