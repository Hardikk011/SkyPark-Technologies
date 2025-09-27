import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link } from "wouter";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId, isRoute) => {
    if (isRoute) {
      setIsMobileMenuOpen(false);
      return;
    }
    
    // Check if we're on the home page
    if (window.location.pathname === '/') {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsMobileMenuOpen(false);
      }
    } else {
      // If not on home page, navigate to home and then scroll
      window.location.href = `/#${sectionId}`;
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: "Home", id: "home", isRoute: true, href: "/" },
    { label: "About Us", id: "about" },
    { label: "Partners", id: "partners" },
    { label: "Solutions", id: "solutions" },
    { label: "Contact", id: "contact", isRoute: true, href: "/contact" },
  ];

  return (
    <motion.nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md border-b border-border"
          : "bg-white/80 backdrop-blur-md border-b border-border"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/">
              <motion.div
                className="text-2xl font-bold text-primary cursor-pointer"
                whileHover={{ scale: 1.05 }}
                data-testid="logo-skypark"
              >
                Skypark <span className="font-light">Technologies</span>
              </motion.div>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item, index) => (
                item.isRoute ? (
                  <motion.div
                    key={item.id}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link href={item.href || "/"}>
                      <span
                        className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
                        data-testid={`nav-${item.id}`}
                      >
                        {item.label}
                      </span>
                    </Link>
                  </motion.div>
                ) : (
                  <motion.button
                    key={item.id}
                    className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
                    onClick={() => scrollToSection(item.id, item.isRoute)}
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    data-testid={`nav-${item.id}`}
                  >
                    {item.label}
                  </motion.button>
                )
              ))}
            </div>
          </div>

          <div className="md:hidden">
            <motion.button
              className="text-foreground hover:text-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.95 }}
              data-testid="mobile-menu-toggle"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white border-t border-border"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                item.isRoute ? (
                  <Link key={item.id} href={item.href || "/"}>
                    <span
                      className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left cursor-pointer"
                      onClick={() => setIsMobileMenuOpen(false)}
                      data-testid={`mobile-nav-${item.id}`}
                    >
                      {item.label}
                    </span>
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary w-full text-left"
                    onClick={() => scrollToSection(item.id, item.isRoute)}
                    data-testid={`mobile-nav-${item.id}`}
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
};

export default Navbar;


