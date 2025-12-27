import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Network, Wifi, Server, CheckCircle, MapPin, Building2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      id: "zenexa",
      title: "Enterprise Network Infrastructure Deployment & Security Configuration",
      client: "Zenexa Infotech India LLP",
      industry: "Healthcare BPO/Infotech Services",
      location: "Infocity, Gandhinagar",
      description: "Comprehensive network infrastructure deployment for a healthcare BPO/Infotech client operating in a high-compliance environment requiring secure, redundant, and scalable network foundation.",
      icon: Shield,
      color: "bg-blue-500",
      scope: [
        {
          category: "Hardware Supply & Configuration",
          items: [
            "High-Availability (HA) Firewall System (FortiGate 200G equivalent)",
            "Core & Access Layer Switches (Cisco 1300 series equivalent)",
            "Enterprise Wi-Fi Setup with POE switches"
          ]
        },
        {
          category: "Advanced Configuration",
          items: [
            "Dual ISP failover and Network Address Translation (NAT) setup",
            "High-level Access Policy configuration, including Geo-Policy and Group-based Web Filtering",
            "IPsec and SSL VPN tunnels for secure remote access",
            "Antivirus/IPS profiles and general security best practices"
          ]
        }
      ],
      outcome: "Delivery of a secure, redundant, and scalable network foundation critical for high-compliance environments like healthcare IT.",
      highlights: [
        "Secure network infrastructure for healthcare compliance",
        "High-availability firewall system",
        "Enterprise-grade Wi-Fi connectivity",
        "Advanced security policies and VPN access"
      ]
    },
    {
      id: "kavach",
      title: "Structured Cabling and High-Density Wi-Fi Access Point Installation",
      client: "Kavach Global Konnects Private Limited",
      industry: "Technology, IT Services, and Security",
      location: "Office Infrastructure",
      description: "Modern networking and wireless infrastructure installation to enhance office connectivity with high-speed Wi-Fi 6 technology and reliable structured data cabling.",
      icon: Wifi,
      color: "bg-purple-500",
      scope: [
        {
          category: "Wireless Infrastructure",
          items: [
            "Wi-Fi 6 Access Points (Tplink EAP620 HD equivalent)",
            "Power-over-Ethernet (PoE+) Injectors",
            "Comprehensive Wireless Access Point Installation & Configuration"
          ]
        },
        {
          category: "Structured Cabling",
          items: [
            "MOLEX CAT 6A Shielded Data Jacks and wall plates",
            "Professional laying and termination of CAT-6 UTP Cable",
            "High-specification structured data cabling"
          ]
        }
      ],
      outcome: "Enhanced client's office infrastructure with high-speed, modern Wi-Fi 6 connectivity and reliable, high-specification structured data cabling.",
      highlights: [
        "Wi-Fi 6 technology for high-speed connectivity",
        "Professional structured cabling installation",
        "CAT 6A shielded components",
        "Modern office infrastructure upgrade"
      ]
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <section className="pt-20 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our Projects
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Client Case Studies & Success Stories
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {projects.map((project, projectIndex) => {
              const IconComponent = project.icon;
              return (
                <motion.div
                  key={project.id}
                  className="bg-card rounded-2xl shadow-xl overflow-hidden"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.8, delay: projectIndex * 0.3 }}
                >
                  <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-8 border-b border-border">
                    <div className="flex items-start gap-6">
                      <div className={`${project.color} p-4 rounded-xl text-white`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-3xl font-bold text-primary mb-4">
                          {project.title}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Building2 className="w-4 h-4" />
                            <span className="font-semibold text-foreground">Client:</span> {project.client}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <Network className="w-4 h-4" />
                            <span className="font-semibold text-foreground">Industry:</span> {project.industry}
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="w-4 h-4" />
                            <span className="font-semibold text-foreground">Location:</span> {project.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                      {project.scope.map((scopeItem, scopeIndex) => (
                        <motion.div
                          key={scopeIndex}
                          className="bg-muted p-6 rounded-lg"
                          initial={{ opacity: 0, x: -20 }}
                          animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.6, delay: projectIndex * 0.3 + scopeIndex * 0.1 }}
                        >
                          <h3 className="text-xl font-semibold text-primary mb-4">
                            {scopeItem.category}
                          </h3>
                          <ul className="space-y-2">
                            {scopeItem.items.map((item, itemIndex) => (
                              <li key={itemIndex} className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                                <span className="text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      ))}
                    </div>

                    <div className="bg-primary/5 p-6 rounded-lg mb-6">
                      <h3 className="text-xl font-semibold text-primary mb-3">
                        Project Outcome
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {project.outcome}
                      </p>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-primary mb-4">
                        Key Highlights
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {project.highlights.map((highlight, highlightIndex) => (
                          <motion.div
                            key={highlightIndex}
                            className="flex items-center gap-2 bg-muted p-3 rounded-lg"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                            transition={{ duration: 0.4, delay: projectIndex * 0.3 + highlightIndex * 0.05 }}
                          >
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                            <span className="text-muted-foreground">{highlight}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;






