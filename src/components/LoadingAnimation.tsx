
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const LoadingAnimation = () => {
  return (
    <Card className="w-full max-w-2xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardContent className="py-12">
        <div className="text-center space-y-6">
          <div className="relative">
            {/* Main spinning circle */}
            <div className="w-20 h-20 mx-auto border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
            
            {/* Inner pulsing circle */}
            <div className="absolute inset-0 w-12 h-12 mx-auto mt-4 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full animate-pulse opacity-60"></div>
          </div>
          
          <div className="space-y-2">
            <h3 className="text-xl font-semibold text-foreground">
              Generating Your Video
            </h3>
            <p className="text-muted-foreground">
              Our AI is crafting your video... This may take a few minutes.
            </p>
          </div>
          
          {/* Progress dots */}
          <div className="flex justify-center space-x-2">
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
            <div className="w-3 h-3 bg-purple-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
          </div>
          
          {/* Background animation */}
          <div className="absolute inset-0 -z-10 overflow-hidden rounded-lg">
            <div className="absolute top-0 left-1/4 w-32 h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-32 h-32 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default LoadingAnimation;
