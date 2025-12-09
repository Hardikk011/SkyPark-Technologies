import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    {
      name: "Reliance",
      subtitle: "Industries Limited",
      logo: "RELIANCE",
      logoType: "text",
    },
    {
      name: "Polycab",
      subtitle: "India Limited",
      logo: "POLYCAB",
      logoType: "text",
    },
    {
      name: "Zydus",
      subtitle: "Lifesciences",
      logo: "ZYDUS",
      logoType: "text",
    },
    {
      name: "Netziya",
      subtitle: "K IT Infra Services Pvt. Ltd.",
      tagline: "Smarter IP Address Management (IPAM) Software Solutions",
      description: "Next-generation, centralized, and intelligent IPAM software tool designed to efficiently monitor, track, and optimize IP resources for secure enterprise networks.",
      website: "https://www.kitinfraservices.com",
      logo: "/netziya-logo.png", // Placeholder - update with actual logo path
      logoType: "image",
    },
  ];

  return (
    <section id="partners" className="py-20 bg-background" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Trusted Partners
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver comprehensive
            technology solutions and enterprise-grade services.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-start justify-items-center">
          {partners.map((partner, index) => {
            const PartnerCard = ({ partner, index }) => {
              const [imageError, setImageError] = useState(false);
              
              return (
                <motion.div
                  key={partner.name}
                  className="bg-card p-6 rounded-2xl shadow-lg w-full max-w-sm flex flex-col items-center justify-center group cursor-pointer h-full"
                  initial={{ opacity: 0, y: 50 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
                  data-testid={`partner-${partner.name.toLowerCase()}`}
                  onClick={() => partner.website && window.open(partner.website, '_blank', 'noopener,noreferrer')}
                >
                  <div className="partner-logo text-center w-full">
                    {partner.logoType === "image" && !imageError ? (
                      <div className="mb-4 flex justify-center">
                        <img 
                          src={partner.logo} 
                          alt={`${partner.name} Logo`}
                          className="h-16 w-auto object-contain group-hover:scale-110 transition-transform duration-300"
                          onError={() => setImageError(true)}
                        />
                      </div>
                    ) : (
                      <div className="text-3xl font-bold text-primary group-hover:scale-110 transition-transform duration-300 mb-2">
                        {partner.logoType === "image" ? partner.name.substring(0, 2).toUpperCase() : partner.logo}
                      </div>
                    )}
                    <div className="text-lg font-semibold text-primary mb-1">
                      {partner.name}
                    </div>
                    <div className="text-sm text-muted-foreground mb-2">
                      {partner.subtitle}
                    </div>
                    {partner.tagline && (
                      <div className="text-xs text-muted-foreground italic mb-2">
                        {partner.tagline}
                      </div>
                    )}
                    {partner.description && (
                      <div className="text-xs text-muted-foreground mt-2">
                        {partner.description}
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            };
            
            return <PartnerCard key={partner.name} partner={partner} index={index} />;
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-lg text-muted-foreground">
            Join{" "}
            <span className="font-semibold text-primary" data-testid="client-count">
              500+
            </span>{" "}
            enterprises who trust Skypark Technologies for their digital
            infrastructure needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default PartnersSection;
