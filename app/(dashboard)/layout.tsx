import TopBar from "@/components/TopBar";
import UpgradeProModal from "@/components/dashboard/UpgradeProModal";
import Sidebar from "@/components/sidebar";
import MobileSidebar from "@/components/sidebar/MobileSidebar";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import React from "react";

const DashboardLayout = (props: { children: React.ReactNode }) => {
  const isProPlan = false;
  const userLimitCount = 0;

  return (
    <div>
      <header>
        <TopBar />
      </header>
      <main
        className={cn(
          "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
        )}
      >
        <Sidebar
          isProPlan={isProPlan}
          userLimitCount={userLimitCount}
          className={cn(
            "fixed left-0 z-20 w-80 hidden [&:has([is-navbar-minimal])]:w-fit",
            "lg:block"
          )}
        />
        <MobileSidebar isProPlan={isProPlan} userLimitCount={userLimitCount} />
        <UpgradeProModal isProPlan={isProPlan} />
        <div
          className={cn(
            "bg-background h-[calc(100vh-56px)]",
            "lg:rounded-3xl lg:p-7"
          )}
        >
          {props.children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;
