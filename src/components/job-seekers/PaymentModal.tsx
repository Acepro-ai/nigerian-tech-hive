import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Loader2, CheckCircle2, XCircle } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { useNavigate } from "react-router-dom";

declare global {
  interface Window {
    PaystackPop: {
      setup(options: any): { openIframe(): void };
    };
  }
}

interface PaymentModalProps {
  open: boolean;
  onClose: () => void;
  onPaymentSuccess: () => void;
  userEmail: string;
}

const PaymentModal = ({
  open,
  onClose,
  onPaymentSuccess,
  userEmail,
}: PaymentModalProps) => {
  const { toast } = useToast();
  const navigate = useNavigate();
  const [status, setStatus] = useState<
    "idle" | "processing" | "success" | "failed"
  >("idle");
  const [scriptLoaded, setScriptLoaded] = useState(false);

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
      key: "pk_live_60e482d0d8784edb5bb19b5f812d8bc07f8a1817",
      email: userEmail,
      amount: 18400000, // ₦184,000 in kobo
      ref: `PS_${Date.now()}`,
      onClose: () => {
        setStatus("failed");
        toast({
          title: "Payment Cancelled",
          description: "You can complete your payment later",
          variant: "default",
        });
      },
      callback: (response: any) => {
        if (response.reference) {
          setStatus("success");
          onPaymentSuccess();
          toast({
            title: "Payment Successful!",
            description: "Your premium access has been activated",
          });
          // Redirect to success page after a short delay
          setTimeout(() => {
            onClose();
            navigate("/payment-success");
          }, 1500);
        } else {
          setStatus("failed");
          toast({
            title: "Payment Failed",
            description: "Please try again or contact support",
            variant: "destructive",
          });
        }
      },
    });

    handler.openIframe();
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-lg w-full max-w-md">
        {status === "success" ? (
          <div className="text-center space-y-4">
            <CheckCircle2 className="mx-auto h-12 w-12 text-green-500" />
            <h3 className="text-lg font-bold">Payment Successful!</h3>
            <p>Redirecting to confirmation page...</p>
            <div className="flex justify-center">
              <Loader2 className="h-6 w-6 animate-spin text-green-500" />
            </div>
          </div>
        ) : status === "failed" ? (
          <div className="text-center space-y-4">
            <XCircle className="mx-auto h-12 w-12 text-red-500" />
            <h3 className="text-lg font-bold">Payment Not Completed</h3>
            <p>You can try again or contact support.</p>
            <div className="flex justify-center gap-3 mt-4">
              <Button variant="outline" onClick={onClose}>
                Close
              </Button>
              <Button onClick={initializePayment}>Try Again</Button>
            </div>
          </div>
        ) : (
          <>
            <h3 className="text-lg font-bold mb-4">Complete Premium Payment</h3>
            <div className="mb-6 space-y-2">
              <p>
                You're about to upgrade to our premium plan for ₦184,000.00.
              </p>
              <p className="text-sm text-muted-foreground">
                This includes priority profile placement and recruiter access.
              </p>
              x``
            </div>

            <div className="flex justify-end space-x-3">
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button
                onClick={initializePayment}
                disabled={status === "processing" || !scriptLoaded}
              >
                {status === "processing" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Processing...
                  </>
                ) : (
                  "Proceed to Payment"
                )}
              </Button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PaymentModal;
