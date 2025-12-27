import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, MapPin, Award, Briefcase, Users, Shield, Send, Loader2 } from "lucide-react";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

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
      <section className="pt-20 pb-16 bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              15+ Years of Network Infrastructure & Security Excellence
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-background" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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

          

          
          
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;



