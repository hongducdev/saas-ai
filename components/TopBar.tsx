import { cn } from "@/lib/utils";
import React from "react";
import Logo from "./Logo";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

const TopBar = () => {
  return (
    <div
      className={cn(
        "flex items-center p-4 justify-between sticky top-0 z-30",
        "lg:hidden"
      )}
    >
      <Logo />
      <Button variant="ghost" size="icon">
        <Menu />
      </Button>
    </div>
  );
};

export default TopBar;
