import React from "react";

export interface CardBaseProps {
  children: React.ReactNode;
  className?: string;
}

export const CardBase: React.FC<CardBaseProps> = ({
  children,
  className = "",
}) => {
  return (
    <div
      className={`
        w-[280px] h-[420px] 
        bg-gray-800 
        border border-gray-700 
        rounded-lg 
        shadow-lg 
        transition-all duration-300 ease-in-out 
        hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/20
        cursor-pointer
        ${className}
      `}
    >
      {children}
    </div>
  );
};
