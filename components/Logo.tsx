import { cn } from "@/lib/utils";
import { BrainCircuit } from "lucide-react";
import React from "react";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: "700",
  subsets: ["latin-ext"],
});

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn("flex items-center", className)}>
      <BrainCircuit size={40} color="#0ea5e9" />
      <span className={cn("ml-2 font-bold text-3xl", poppins.className)}>
        Brainfast
      </span>
    </div>
  );
};

export default Logo;
