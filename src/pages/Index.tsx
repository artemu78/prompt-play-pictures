
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import VideoGenerationForm from '../components/VideoGenerationForm';
import VideoPlayer from '../components/VideoPlayer';
import LoadingAnimation from '../components/LoadingAnimation';
import UserMenu from '../components/UserMenu';
import { useAuth } from '@/hooks/useAuth';
import { LogIn } from 'lucide-react';

const Index = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const { user, loading } = useAuth();

  const handleVideoGenerated = (url: string) => {
    setVideoUrl(url);
    setIsGenerating(false);
    setError(null);
  };

  const handleGenerationStart = () => {
    setIsGenerating(true);
    setVideoUrl(null);
    setError(null);
  };

  const handleError = (errorMessage: string) => {
    setError(errorMessage);
    setIsGenerating(false);
  };

  const handleNewGeneration = () => {
    setVideoUrl(null);
    setError(null);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100 flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {/* Header with auth */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex-1" />
          <div className="text-center">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-4">
              VEO3 Video Generator
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Transform your ideas into stunning videos using fal.ai's advanced VEO3 model
            </p>
          </div>
          <div className="flex-1 flex justify-end">
            {user ? (
              <UserMenu />
            ) : (
              <Link to="/auth">
                <Button variant="outline" className="gap-2">
                  <LogIn className="w-4 h-4" />
                  Sign In
                </Button>
              </Link>
            )}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {!isGenerating && !videoUrl && (
            <div className="animate-fade-in">
              <VideoGenerationForm
                onGenerationStart={handleGenerationStart}
                onVideoGenerated={handleVideoGenerated}
                onError={handleError}
              />
              {error && (
                <div className="mt-6 p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
                  <p className="text-destructive font-medium">Error: {error}</p>
                </div>
              )}
            </div>
          )}

          {isGenerating && (
            <div className="animate-fade-in">
              <LoadingAnimation />
            </div>
          )}

          {videoUrl && !isGenerating && (
            <div className="animate-fade-in">
              <VideoPlayer 
                videoUrl={videoUrl} 
                onNewGeneration={handleNewGeneration}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Index;
