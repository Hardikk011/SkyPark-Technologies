import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Award, Briefcase, Users, Shield } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const achievements = [
    "Implemented Palo Alto Strata Cloud Manager and SCM migration",
    "Successfully migrated Firewall (SonicWALL to Palo alto) in USA Datacentre",
    "Implemented 600+ users New office Setup at Visnagar Infocity and Pune",
    "Successfully moved all DC Network Devices for collocated Primary Data Centre",
    "Implemented BGP ECMP between Primary and Secondary MPLS service provider",
    "Deployed Ahmedabad Smart City DC/DR project with 6000 surveillance cameras"
  ];

  const experience = [
    {
      company: "Advantmed India LLP",
      position: "Sr. Firewall and Network L3 Engineer",
      duration: "2023 - Present",
      type: "Current Position"
    },
    {
      company: "Medusind Solution",
      position: "L3 Network Engineer", 
      duration: "Oct 2022 - April 2023",
      type: "Previous Role"
    },
    {
      company: "Allied Digital Services Ltd (Gujarat Gas Ltd)",
      position: "L3 Network Engineer",
      duration: "Jan 2019 - Sep 2022",
      type: "Previous Role"
    },
    {
      company: "WIPRO Ltd (Gujarat Gas Ltd)",
      position: "L3 Network Engineer",
      duration: "May 2018 - Jan 2019", 
      type: "Previous Role"
    }
  ];

  const certifications = [
    "CCNA (Cisco Certified Network Associate) - 2012",
    "FORTIGATE NSE 1 - 2018",
    "FORTIGATE NSE 2 - 2020"
  ];

  const skills = [
    "Cisco Software Systems (IOS, IOS-XE, NX-OS)",
    "Nexus 9000 Switching & Cisco FEX 2000",
    "Routing Protocols (RIP, EIGRP, OSPF, BGP, MPLS)",
    "Next Generation Firewalls (Check Point, Palo Alto)",
    "Network Infrastructure Management (6000+ Users)",
    "Data Centre Operations (DC & DR Management)"
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Meet Our Founder
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              15+ Years of Network Infrastructure & Security Excellence
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-card p-8 rounded-2xl shadow-lg">
                <h2 className="text-3xl font-bold text-primary mb-6">
                  Rakesh P. Prajapati
                </h2>
                <p className="text-xl text-muted-foreground mb-6">
                  Sr. Firewall and Network L3 Engineer
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  Founder & Chief Technology Officer at Skypark Technologies
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-primary" />
                    <span className="text-lg" data-testid="contact-phone">+91 8511123546</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-primary" />
                    <span className="text-lg">rakesh@skypark.tech</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-primary" />
                    <span className="text-lg">Ahmedabad, Gujarat, India</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Briefcase className="w-6 h-6 text-primary" />
                    <span className="text-lg">15+ Years Experience</span>
                  </div>
                </div>

                {/* Current Position */}
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-3">Current Position</h3>
                  <p className="text-primary font-semibold">Advantmed India LLP</p>
                  <p className="text-muted-foreground">Sr. Firewall and Network L3 Engineer</p>
                  <p className="text-sm text-muted-foreground mt-2">2023 - Present</p>
                </div>
              </div>
            </motion.div>

            {/* Professional Summary */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Professional Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Highly motivated, proactive and results-oriented individual with 15 years of rich IT 
                    experience in Network Infrastructure and security. Dedicated to working in innovative 
                    and challenging environments while utilizing analytical, quantitative and logical skills 
                    to solve complex problems.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-primary mb-4">Key Responsibilities</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>Manage LAN Network of around 6000 Users across multiple locations</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>Manage 14 India & US Locations switches, Firewalls and Routers</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>Manage 2 Data Centres (DC & DR) with core infrastructure</span>
                    </li>
                    <li className="flex items-start">
                      <Shield className="w-5 h-5 text-primary mr-3 mt-1 flex-shrink-0" />
                      <span>Network monitoring, troubleshooting and vendor coordination</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technical Skills */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Technical Expertise</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                >
                  <p className="text-center font-medium">{skill}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Experience Timeline */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Professional Experience</h3>
            <div className="space-y-6">
              {experience.map((exp, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md border-l-4 border-primary"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                  transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold">{exp.position}</h4>
                    <span className="text-sm text-muted-foreground">{exp.duration}</span>
                  </div>
                  <p className="text-primary font-medium">{exp.company}</p>
                  <span className="inline-block mt-2 px-3 py-1 bg-primary/10 text-primary text-xs rounded-full">
                    {exp.type}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Key Achievements */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Key Achievements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-lg shadow-md"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                >
                  <div className="flex items-start space-x-3">
                    <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                    <p className="text-muted-foreground">{achievement}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            className="mt-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: 1.0 }}
          >
            <h3 className="text-2xl font-bold text-primary mb-8 text-center">Certifications</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="bg-primary text-primary-foreground p-6 rounded-lg text-center"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.1 + index * 0.1 }}
                >
                  <Award className="w-8 h-8 mx-auto mb-3" />
                  <p className="font-medium">{cert}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;