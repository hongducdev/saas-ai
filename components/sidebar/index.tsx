"use client";
import { cn } from "@/lib/utils";
import React from "react";
import Logo from "../Logo";
import { useSidebarStore } from "@/stores/sidebar-store";
import SidebarToggle from "./SidebarToggle";

interface SidebarProps {
  className?: string;
  isProPlan?: boolean;
  userLimitCount: number;
}

const Sidebar: React.FC<SidebarProps> = ({
  className,
  isProPlan,
  userLimitCount,
}) => {
  const { isMinimal } = useSidebarStore();

  return (
    <div className={cn("text-white", className)}>
      <div className="h-20 pl-7 pr-6">
        <div className="flex items-center justify-between w-full">
          {!isMinimal && <Logo />}
          <SidebarToggle />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
