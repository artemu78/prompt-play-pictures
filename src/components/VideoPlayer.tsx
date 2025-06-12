
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RotateCcw, Download } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  onNewGeneration: () => void;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ videoUrl, onNewGeneration }) => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = videoUrl;
    link.download = 'generated-video.mp4';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <Card className="w-full max-w-4xl mx-auto shadow-xl border-0 bg-white/90 backdrop-blur-sm">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold text-foreground">
          Your Video is Ready!
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="relative w-full rounded-lg overflow-hidden shadow-lg">
          <video
            src={videoUrl}
            controls
            className="w-full h-auto max-h-[70vh] object-contain bg-black"
            playsInline
          >
            Your browser does not support the video tag.
          </video>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Button
            onClick={handleDownload}
            variant="outline"
            className="flex items-center gap-2 border-2 hover:bg-green-50 hover:border-green-500 transition-colors"
          >
            <Download className="w-4 h-4" />
            Download Video
          </Button>
          
          <Button
            onClick={onNewGeneration}
            className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white transition-all duration-200"
          >
            <RotateCcw className="w-4 h-4" />
            Generate Another Video
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default VideoPlayer;
