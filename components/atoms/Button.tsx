// components/atoms/Button.tsx
import React from "react";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, ...props }: Props) => (
  <button
    {...props}
    className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
  >
    {children}
  </button>
);
