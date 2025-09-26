import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Shield, Lock, Server, Cloud, Network, Users } from "lucide-react";
import { solutions } from "@/lib/solutions-data";
import SolutionModal from "./solution-modal";

const SolutionsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedSolution, setSelectedSolution] = useState<string | null>(null);

  const iconMap: Record<string, any> = {
    "shield-alt": Shield,
    "lock": Lock,
    "server": Server,
    "cloud": Cloud,
    "network-wired": Network,
    "users-cog": Users,
  };

  const openModal = (solutionId: string) => {
    setSelectedSolution(solutionId);
  };

  const closeModal = () => {
    setSelectedSolution(null);
  };

  return (
    <>
      <section id="solutions" className="py-20 bg-muted" ref={ref}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
              IT Solutions Portfolio
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your
              business operations and enhance digital capabilities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => {
              const IconComponent = iconMap[solution.icon];
              
              return (
                <motion.div
                  key={solution.id}
                  className="tech-grid-item p-8 rounded-2xl shadow-lg cursor-pointer group"
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  onClick={() => openModal(solution.id)}
                  data-testid={`solution-card-${solution.id}`}
                >
                  <div className="w-full h-48 rounded-xl mb-6 overflow-hidden bg-muted">
                    <img
                      src={solution.imageUrl}
                      alt={solution.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="text-center">
                    <IconComponent className="w-10 h-10 text-primary mb-4 mx-auto" />
                    <h3 className="text-2xl font-semibold mb-4">
                      {solution.title}
                    </h3>
                    <p className="text-muted-foreground mb-6">
                      {solution.description}
                    </p>
                    <motion.button
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-gray-800 transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      data-testid={`button-know-more-${solution.id}`}
                    >
                      Know More
                    </motion.button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <SolutionModal
        solutionId={selectedSolution}
        isOpen={!!selectedSolution}
        onClose={closeModal}
      />
    </>
  );
};

export default SolutionsSection;
