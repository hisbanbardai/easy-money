"use client";

import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className?: string;
  appName: string;
}

export const Button = ({ children, appName }: ButtonProps) => {
  return (
    <button
      className="mt-20 bg-amber-400"
      onClick={() => alert(`Hello from your ${appName} app!`)}
    >
      {children}
    </button>
  );
};
