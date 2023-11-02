import TopBar from "@/components/TopBar";
import Sidebar from "@/components/sidebar";
import { cn } from "@/lib/utils";
import { useSidebarStore } from "@/stores/sidebar-store";
import React from "react";

const DashboardLayout = (props: { children: React.ReactNode }) => {


  return (
    <div>
      <header>
        <TopBar />
      </header>
      <main className={cn(
        "lg:bg-gray-950 lg:overflow-hidden lg:pl-80 lg:pr-7 lg:py-7 [&:has([is-navbar-minimal])]:lg:pl-20"
      )}>
        <Sidebar userLimitCount={0}/>
        {props.children}
        </main>
    </div>
  );
};

export default DashboardLayout;
