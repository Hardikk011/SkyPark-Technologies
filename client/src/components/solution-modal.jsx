import { motion, AnimatePresence } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { getSolutionById } from "@/lib/solutions-data";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";

const SolutionModal = ({ solutionId, isOpen, onClose }) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { toast } = useToast();

  const solution = solutionId ? getSolutionById(solutionId) : null;

  const demoRequestMutation = useMutation({
    mutationFn: async (data) => {
      return apiRequest("POST", "/api/demo-requests", data);
    },
    onSuccess: () => {
      toast({
        title: "Demo Request Submitted",
        description: "We'll contact you soon to schedule your demo.",
      });
      setEmail("");
      setMessage("");
      onClose();
    },
    onError: () => {
      toast({
        title: "Error",
        description: "Failed to submit demo request. Please try again.",
        variant: "destructive",
      });
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !solution) return;

    demoRequestMutation.mutate({
      email,
      solution: solution.title,
      message: message || undefined,
    });
  };

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

              <div className="mt-8 bg-muted p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Request a Demo</h3>
                <p className="text-muted-foreground mb-4">
                  Get a personalized demonstration of this solution and see how
                  it can benefit your organization.
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    data-testid="input-demo-email"
                  />
                  <Textarea
                    placeholder="Additional message (optional)"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    rows={3}
                    data-testid="textarea-demo-message"
                  />
                  <Button
                    type="submit"
                    className="w-full"
                    disabled={demoRequestMutation.isPending}
                    data-testid="button-submit-demo"
                  >
                    {demoRequestMutation.isPending
                      ? "Submitting..."
                      : "Schedule Demo"}
                  </Button>
                </form>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SolutionModal;



