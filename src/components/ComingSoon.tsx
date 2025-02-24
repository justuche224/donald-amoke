"use client";

import { Clock, Bell, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ComingSoonProps {
  title?: string;
  description?: string;
}

const ComingSoon = ({
  title = "Coming Soon",
  description = "We're working hard to bring you something amazing. Stay tuned for updates!",
}: ComingSoonProps) => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="text-center space-y-8 max-w-2xl mx-auto">
        {/* Animated Clock Icon */}
        <div className="relative">
          <div className="text-9xl font-bold text-gray-800 animate-pulse opacity-20">
            Soon
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <Clock className="w-20 h-20 text-purple-500 animate-pulse" />
          </div>
        </div>

        {/* Title and Description Text with Hover Effect */}
        <div className="relative">
          <h2
            className="text-4xl font-bold text-gray-100 mb-2 
                       hover:text-transparent hover:bg-clip-text 
                       hover:bg-gradient-to-r hover:from-purple-400 
                       hover:to-pink-600 transition-all duration-300"
          >
            {title}
          </h2>
          <p className="text-gray-400 max-w-md mx-auto">{description}</p>
        </div>

        {/* Interactive Elements */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8">
          <Button
            variant="outline"
            className="group relative overflow-hidden bg-gray-800 hover:bg-gray-700 
                     text-gray-100 border-gray-700 hover:border-purple-500
                     px-6 py-3 rounded-lg shadow-md 
                     transition-all duration-300 ease-in-out"
            onClick={() => window.history.back()}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Home className="w-4 h-4" />
              Return
            </span>
          </Button>
          <Button
            className="group relative overflow-hidden bg-gradient-to-r 
                     from-purple-500 to-pink-500 hover:from-purple-600 
                     hover:to-pink-600 text-white px-6 py-3 rounded-lg 
                     shadow-md transition-all duration-300 ease-in-out"
            onClick={() => {
              // For a real implementation, you might want to capture emails
              alert("You'll be notified when we launch!");
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Notify Me
            </span>
          </Button>
        </div>

        {/* Animated Progress Bars */}
        <div className="grid grid-cols-3 gap-4 mt-12">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="h-2 rounded-full bg-gradient-to-r from-purple-400 to-pink-500 
                       animate-pulse"
              style={{
                animationDelay: `${i * 200}ms`,
                width: `${100 - i * 15}%`,
                margin: "0 auto",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComingSoon;
