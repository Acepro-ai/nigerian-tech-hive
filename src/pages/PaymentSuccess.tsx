import React, { useEffect, useState } from 'react';
import Layout from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Sparkles, ArrowRight, Home, User, Download, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const PaymentSuccess = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [showBurst, setShowBurst] = useState(false);
  const [confettiPieces, setConfettiPieces] = useState<Array<{
    id: number;
    color: string;
    left: number;
    animationDelay: number;
    animationDuration: number;
    shape: 'square' | 'circle' | 'triangle';
    size: number;
  }>>([]);
  const [burstPieces, setBurstPieces] = useState<Array<{
    id: number;
    color: string;
    angle: number;
    distance: number;
    size: number;
  }>>([]);

  useEffect(() => {
    // Trigger animations on mount
    setTimeout(() => setIsVisible(true), 100);
    setTimeout(() => setShowConfetti(true), 500);
    setTimeout(() => setShowBurst(true), 1000);
    
    // Generate confetti pieces
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      color: ['#ef4444', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 6)],
      left: Math.random() * 100,
      animationDelay: Math.random() * 3,
      animationDuration: 3 + Math.random() * 2,
      shape: (['square', 'circle', 'triangle'] as const)[Math.floor(Math.random() * 3)],
      size: 8 + Math.random() * 8, // 8-16px
    }));
    setConfettiPieces(pieces);
    
    // Generate burst pieces (exploding from center)
    const burstPieces = Array.from({ length: 20 }, (_, i) => ({
      id: i + 100,
      color: ['#ef4444', '#10b981', '#f59e0b', '#3b82f6', '#8b5cf6', '#ec4899'][Math.floor(Math.random() * 6)],
      angle: (360 / 20) * i,
      distance: 100 + Math.random() * 100,
      size: 6 + Math.random() * 6,
    }));
    setBurstPieces(burstPieces);
    
    // Clear confetti after 8 seconds
    setTimeout(() => setShowConfetti(false), 8000);
    setTimeout(() => setShowBurst(false), 3000);
  }, []);

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 relative overflow-hidden">
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Confetti Animation */}
          {showConfetti && confettiPieces.map((piece) => (
            <div
              key={piece.id}
              className={`absolute ${
                piece.id % 2 === 0 ? 'animate-confetti-fall' : 'animate-confetti-wiggle'
              } ${
                piece.shape === 'circle' ? 'rounded-full' : 
                piece.shape === 'triangle' ? 'triangle' : ''
              }`}
              style={{
                backgroundColor: piece.color,
                width: `${piece.size}px`,
                height: `${piece.size}px`,
                left: `${piece.left}%`,
                animationDelay: `${piece.animationDelay}s`,
                animationDuration: `${piece.animationDuration}s`,
                top: '-20px',
                clipPath: piece.shape === 'triangle' ? 'polygon(50% 0%, 0% 100%, 100% 100%)' : undefined,
                boxShadow: '0 0 6px rgba(0,0,0,0.1)',
              }}
            />
          ))}
          
          {/* Floating circles */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-green-200 dark:bg-green-800 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-20 w-16 h-16 bg-red-200 dark:bg-red-800 rounded-full opacity-20 animate-bounce"></div>
          <div className="absolute bottom-20 left-20 w-24 h-24 bg-yellow-200 dark:bg-yellow-800 rounded-full opacity-20 animate-pulse"></div>
          <div className="absolute bottom-40 right-10 w-12 h-12 bg-blue-200 dark:bg-blue-800 rounded-full opacity-20 animate-bounce"></div>
          
          {/* Sparkle effects */}
          {showConfetti && (
            <>
              <Sparkles className="absolute top-32 left-1/4 w-6 h-6 text-yellow-400 animate-ping" />
              <Sparkles className="absolute top-48 right-1/4 w-4 h-4 text-green-400 animate-ping animation-delay-200" />
              <Sparkles className="absolute bottom-32 left-1/3 w-5 h-5 text-red-400 animate-ping animation-delay-400" />
              <Sparkles className="absolute bottom-48 right-1/3 w-6 h-6 text-blue-400 animate-ping animation-delay-600" />
            </>
          )}
        </div>

        {/* Main content */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div 
            className={`text-center transition-all duration-1000 transform ${
              isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            {/* Success Icon */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="w-32 h-32 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center animate-scale-in">
                  <CheckCircle2 className="w-16 h-16 text-green-600 dark:text-green-400 animate-bounce-in" />
                </div>
                {/* Pulse ring */}
                <div className="absolute inset-0 w-32 h-32 border-4 border-green-300 dark:border-green-600 rounded-full animate-ping opacity-30"></div>
                
                {/* Burst confetti from center */}
                {showBurst && burstPieces.map((piece) => (
                  <div
                    key={piece.id}
                    className="absolute animate-burst rounded-full"
                    style={{
                      backgroundColor: piece.color,
                      width: `${piece.size}px`,
                      height: `${piece.size}px`,
                      left: '50%',
                      top: '50%',
                      transform: `translate(-50%, -50%) translate(${
                        Math.cos((piece.angle * Math.PI) / 180) * piece.distance
                      }px, ${
                        Math.sin((piece.angle * Math.PI) / 180) * piece.distance
                      }px)`,
                      transformOrigin: 'center',
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Success Message */}
            <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up">
              Payment Successful! 🎉
            </h1>
            
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
              Congratulations! Your premium subscription has been activated successfully. 
              You now have access to all premium features and exclusive opportunities.
            </p>

            {/* Benefits Card */}
            <div 
              className={`bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 mb-12 max-w-2xl mx-auto border border-gray-100 dark:border-gray-700 transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: '400ms' }}
            >
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-yellow-500 mr-2" />
                What's Next?
              </h2>
              
              <div className="grid md:grid-cols-2 gap-6 text-left">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-green-600 dark:text-green-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Premium Profile</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Your profile is now highlighted to top employers</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Priority Support</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Get priority customer support and assistance</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 dark:bg-purple-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Exclusive Jobs</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Access to premium job opportunities</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-red-100 dark:bg-red-900 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <CheckCircle2 className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Direct Contact</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Employers can contact you directly</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div 
              className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: '600ms' }}
            >
              <Link to="/">
                <Button 
                  size="lg" 
                  className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group"
                >
                  <Home className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  Back to Homepage
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              
              <Link to="/candidates">
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-2 border-gray-300 dark:border-gray-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group hover:border-red-500 dark:hover:border-red-400"
                >
                  <User className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                  View Candidates
                </Button>
              </Link>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="border-2 border-green-300 dark:border-green-600 px-8 py-3 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg group hover:border-green-500 dark:hover:border-green-400 text-green-600 dark:text-green-400"
                onClick={() => {
                  // This would trigger a receipt download or email
                  alert('Receipt will be sent to your email shortly!');
                }}
              >
                <Mail className="w-5 h-5 mr-2 group-hover:animate-bounce" />
                Email Receipt
              </Button>
            </div>

            {/* Additional Info */}
            <div 
              className={`mt-12 text-center transition-all duration-700 transform ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ animationDelay: '800ms' }}
            >
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                Need help? Contact our support team anytime.
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Your subscription will auto-renew. You can manage it anytime in your account settings.
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PaymentSuccess;
