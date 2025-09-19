"use client";
import React, { useState } from "react";
import Image from "next/image";

interface GameThumbnailProps {
  src: string;
  alt: string;
  fallback?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: { width: "80px", height: "80px" },
  md: { width: "128px", height: "128px" },
  lg: { width: "160px", height: "160px" },
};

export const GameThumbnail = ({ 
  src, 
  alt, 
  fallback = "/api/placeholder/400/400",
  size = "md"
}: GameThumbnailProps) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageSrc(fallback);
    setIsLoading(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  const { width, height } = sizeMap[size];

  return (
    <div 
      className="relative rounded-lg overflow-hidden bg-gray-900 border-2 border-cyan-500/20"
      style={{ width, height }}
    >
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-cyan-400"></div>
        </div>
      )}
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover transition-opacity duration-300"
        onError={handleError}
        onLoadingComplete={handleLoadingComplete}
        style={{ opacity: isLoading ? 0 : 1 }}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
};