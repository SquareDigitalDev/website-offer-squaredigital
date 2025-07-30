import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";

export const VideoUpload = () => {
  const [videoFile, setVideoFile] = useState<File | null>(null);
  const [videoUrl, setVideoUrl] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('video/')) {
      setVideoFile(file);
      const url = URL.createObjectURL(file);
      setVideoUrl(url);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveVideo = () => {
    if (videoUrl) {
      URL.revokeObjectURL(videoUrl);
    }
    setVideoFile(null);
    setVideoUrl(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="relative aspect-video bg-muted rounded-lg border-2 border-dashed border-muted-foreground/20 overflow-hidden">
      {!videoUrl ? (
        <div 
          className="flex items-center justify-center h-full cursor-pointer group hover:border-muted-foreground/40 transition-colors"
          onClick={handleUploadClick}
        >
          <div className="text-center">
            <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14,2 14,8 20,8"/>
                <path d="M12 18v-6l-3 3 3-3 3 3"/>
              </svg>
            </div>
            <p className="text-muted-foreground font-medium">Upload your video</p>
            <p className="text-sm text-muted-foreground/70 mt-1">Click to select a video file</p>
          </div>
        </div>
      ) : (
        <div className="relative h-full">
          <video 
            src={videoUrl} 
            controls 
            className="w-full h-full object-cover rounded-lg"
            preload="metadata"
          >
            Your browser does not support the video tag.
          </video>
          <Button
            variant="destructive"
            size="sm"
            className="absolute top-2 right-2"
            onClick={handleRemoveVideo}
          >
            Remove
          </Button>
        </div>
      )}
      
      <input
        ref={fileInputRef}
        type="file"
        accept="video/*"
        onChange={handleFileSelect}
        className="hidden"
      />
    </div>
  );
};