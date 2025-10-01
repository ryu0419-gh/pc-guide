"use client";
import React, { useState } from "react";
import Image from "next/image";

export interface PartImageProps {
  src: string;
  alt: string;
  fallback?: string;
}

export const PartImage: React.FC<PartImageProps> = ({
  src,
  alt,
  fallback = "/images/parts/no-image.jpg",
}) => {
  const [imageSrc, setImageSrc] = useState(src);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    setImageSrc(fallback);
    setIsLoading(false);
  };

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative w-full h-40 rounded-t-lg overflow-hidden bg-gray-900">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
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
        priority={false}
      />
    </div>
  );
};