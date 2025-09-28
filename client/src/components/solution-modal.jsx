import { motion, AnimatePresence } from "framer-motion";
import { X, Check, Shield, Clock, Award, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getSolutionById } from "@/lib/solutions-data";

const SolutionModal = ({ solutionId, isOpen, onClose }) => {
  const solution = solutionId ? getSolutionById(solutionId) : null;

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!solution) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 modal-backdrop z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={handleBackdropClick}
          data-testid="modal-backdrop"
        >
          <motion.div
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3 }}
            data-testid={`modal-${solution.id}`}
          >
            <div className="p-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-bold text-primary">
                  {solution.title}
                </h2>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={onClose}
                  data-testid="button-close-modal"
                >
                  <X className="w-6 h-6" />
                </Button>
              </div>

              <p className="text-lg text-muted-foreground mb-8">
                {solution.description}
              </p>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {solution.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <Check className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold mb-4">
                    Technical Specifications
                  </h3>
                  <div className="space-y-3">
                    {Object.entries(solution.specs).map(([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between py-2 border-b border-gray-200"
                      >
                        <span className="font-medium">{key}:</span>
                        <span className="text-muted-foreground">{value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 space-y-6">
                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Shield className="w-5 h-5 mr-2 text-primary" />
                    Security & Compliance
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">ISO 27001 Certified</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">SOC 2 Type II</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">GDPR Compliant</span>
                    </div>
                    <div className="flex items-center">
                      <Check className="w-4 h-4 text-green-600 mr-2" />
                      <span className="text-sm">PCI DSS Certified</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-primary" />
                    Implementation Timeline
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Initial Assessment:</span>
                      <span className="text-muted-foreground">1-2 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Solution Design:</span>
                      <span className="text-muted-foreground">2-3 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Deployment:</span>
                      <span className="text-muted-foreground">3-4 weeks</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Testing & Training:</span>
                      <span className="text-muted-foreground">1-2 weeks</span>
                    </div>
                  </div>
                </div>

                <div className="bg-muted p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Users className="w-5 h-5 mr-2 text-primary" />
                    Contact Information
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Sales Team:</span>
                      <span className="text-muted-foreground">sales@skypark.tech</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Technical Support:</span>
                      <span className="text-muted-foreground">support@skypark.tech</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Phone:</span>
                      <span className="text-muted-foreground">+1 (555) 123-4567</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Business Hours:</span>
                      <span className="text-muted-foreground">Mon-Fri 9AM-6PM EST</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionModal;



