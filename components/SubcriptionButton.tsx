"use client";
import React, { useState } from "react";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";
import axios from "axios";
import { useToast } from "./ui/use-toast";

interface SubcriptionButtonProps {
  className?: string;
  isPro?: boolean;
}

const SubcriptionButton: React.FC<SubcriptionButtonProps> = ({
  className,
  isPro,
}) => {
  const [loading, setLoading] = useState<boolean>(false);
  const { toast } = useToast();

  const handleSubcription = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get("/api/stripe");
    } catch (error) {
      toast({
        variant: "destructive",
        description: "Something went wrong. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={className}>
      <Button
        variant={"outline"}
        className="gradient-btn text-white w-full font-semibold flex items-center gap-2 hover:text-white border-none"
        size={"lg"}
        disabled={loading}
        onClick={handleSubcription}
      >
        <span>{isPro ? "Manage Subcription" : "Upgrade to Pro"}</span>
        <Sparkles />
      </Button>
    </div>
  );
};

export default SubcriptionButton;
