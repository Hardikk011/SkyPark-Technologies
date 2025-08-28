import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const PartnersSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const partners = [
    {
      name: "Reliance",
      subtitle: "Industries Limited",
      logo: "RELIANCE",
    },
    {
      name: "Polycab",
      subtitle: "India Limited",
      logo: "POLYCAB",
    },
    {
      name: "Zydus",
      subtitle: "Lifesciences",
      logo: "ZYDUS",
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-center justify-items-center">
          {partners.map((partner, index) => (
            <motion.div
              key={partner.name}
              className="bg-card p-8 rounded-2xl shadow-lg w-full max-w-sm flex items-center justify-center group cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -8, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
              data-testid={`partner-${partner.name.toLowerCase()}`}
            >
              <div className="partner-logo text-center">
                <div className="text-4xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">
                  {partner.logo}
                </div>
                <div className="text-sm text-muted-foreground mt-2">
                  {partner.subtitle}
                </div>
              </div>
            </motion.div>
          ))}
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
