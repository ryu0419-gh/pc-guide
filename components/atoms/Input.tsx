import React from "react";
import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement>;

export const Input = (props: Props) => (
  <input
    {...props}
    className="border bg-gray-900 rounded px-3 py-2 w-full focus:ring focus:ring-blue-300"
  />
);