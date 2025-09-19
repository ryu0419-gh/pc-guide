import React from "react";

interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const headingSizes = {
  1: "text-3xl",
  2: "text-2xl", 
  3: "text-xl",
  4: "text-lg",
  5: "text-base",
  6: "text-sm",
} as const;

export const Heading: React.FC<HeadingProps> = ({
  level = 1,
  children,
  className = "",
  id,
}) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const sizeClass = headingSizes[level];
  
  return (
    <Tag
      className={`font-bold text-gray-800 ${sizeClass} ${className}`}
      id={id}
    >
      {children}
    </Tag>
  );
};
