import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, XCircle, Star, Zap, Crown } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    PaystackPop: {
      setup(options: any): { openIframe(): void };
    };
  }
}

interface EmployerPaymentModalProps {
  open: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
  userEmail: string;
  selectedPlan: 'basic' | 'professional' | 'enterprise';
}

const EmployerPaymentModal = ({
  open,
  onClose,
  onPaymentSuccess,
  userEmail,
  selectedPlan,
}: EmployerPaymentModalProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "failed"
  >("idle");
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const planDetails = {
    basic: {
      name: 'Basic Plan',
      price: 25000,
      amount: 2500000, // in kobo
      icon: Star,
      features: ['1 job posting for 30 days', 'Basic candidate filtering', 'Email support']
    },
    professional: {
      name: 'Professional Plan',
      price: 75000,
      amount: 7500000, // in kobo
      icon: Zap,
      features: ['5 job postings for 60 days', 'Advanced filtering', 'Priority support', 'Featured listings']
    },
    enterprise: {
      name: 'Enterprise Plan',
      price: 150000,
      amount: 15000000, // in kobo
      icon: Crown,
      features: ['Unlimited job postings for 90 days', 'AI-powered matching', '24/7 support', 'Premium placement']
    }
  };

  const currentPlan = planDetails[selectedPlan];
  const IconComponent = currentPlan.icon;

  useEffect(() => {
    if (!open) return;

    const script = document.createElement("script");
    script.src = "https://js.paystack.co/v1/inline.js";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
      setScriptLoaded(false);
    };
  }, [open]);

  const initializePayment = () => {
    if (!scriptLoaded) {
      toast({
        title: "Payment System Loading",
        description: "Please wait a moment and try again",
        variant: "destructive",
      });
      return;
    }

    setStatus("processing");

    const handler = window.PaystackPop.setup({
      key: "pk_live_60e482d0d8784edb5bb19b5f812d8bc07f8a1817", // You should use environment variables for this
      email: userEmail,
      amount: currentPlan.amount,
      ref: `EMPLOYER_${selectedPlan.toUpperCase()}_${Date.now()}`,
      metadata: {
        plan_type: selectedPlan,
        user_type: 'employer',
        plan_name: currentPlan.name
      },
      onClose: () => {
        setStatus("failed");
        toast({
          title: "Payment Cancelled",
          description: "You can complete your payment later to start posting jobs",
          variant: "default",
        });
      },
      callback: (response: any) => {
        if (response.reference) {
          setStatus("success");
          onPaymentSuccess();
          toast({
            title: "Payment Successful!",
            description: "You can now start posting jobs to find top talent",
          });
          // Redirect to success page after a short delay
          setTimeout(() => {
            onClose();
            navigate("/employer-payment-success");
          }, 1500);
        } else {
          setStatus("failed");
          toast({
            title: "Payment Failed",
            description: "Please try again or contact our support team",
            variant: "destructive",
          });
        }
      },
    });

    handler.openIframe();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-lg">
        {status === "success" ? (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto h-16 w-16 text-green-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Successful!</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your {currentPlan.name} has been activated. Redirecting to confirmation page...
            </p>
            <div className="flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-green-500" />
            </div>
          </div>
        ) : status === "failed" ? (
          <div className="text-center space-y-4">
            <XCircle className="mx-auto h-16 w-16 text-red-500" />
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Payment Not Completed</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your payment was not processed. You can try again or contact our support team.
            </p>
            <div className="flex justify-center gap-3 mt-6">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={initializePayment}>
                Try Again
              </Button>
            </div>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-red-100 dark:bg-red-900">
                  <IconComponent className="h-10 w-10 text-red-600" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Complete Your {currentPlan.name} Purchase
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Start hiring top Nigerian tech talent today
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 rounded-lg p-4 mb-6">
              <div className="flex justify-between items-center mb-4">
                <span className="font-semibold text-gray-900 dark:text-white">
                  {currentPlan.name}
                </span>
                <span className="text-2xl font-bold text-red-600">
                  ₦{currentPlan.price.toLocaleString()}
                </span>
              </div>
              
              <div className="space-y-2">
                {currentPlan.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle2 className="h-4 w-4 text-green-500 mr-2" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mb-6 space-y-2">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                • Payment is processed securely through Paystack
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                • You'll get instant access to post jobs after payment
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                • Full refund available within 7 days if not satisfied
              </p>
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={initializePayment}
                disabled={status === "processing" || !scriptLoaded}
                className="bg-red-600 hover:bg-red-700"
                size="lg"
              >
                {status === "processing" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing Payment...
                  </>
                ) : (
                  `Pay ₦${currentPlan.price.toLocaleString()}`
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default EmployerPaymentModal;