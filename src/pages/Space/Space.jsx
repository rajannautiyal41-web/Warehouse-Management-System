import { useState } from "react";

import WMSNavbar from "../Navbar/WMSNavbar";
import WMSSidebar from "../Main Layout/WMSSidebar";

import SpaceHeader from "./components/SpaceHeader";
import SpaceTabs from "./components/SpaceTabs";
import SpaceToolbar from "./components/SpaceToolbar";
import SpaceGrid from "./components/SpaceGrid";

function Space() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* SIDEBAR */}
      <WMSSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN CONTENT */}
      <div className="md:ml-[260px]">
        {/* NAVBAR */}
        <WMSNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* PAGE */}
        <main
          className="
            pt-[95px]

            px-6
            pb-6
          "
        >
          {/* HEADER */}
          <SpaceHeader />

          {/* TABS */}
          <div className="mt-8">
            <SpaceTabs />
          </div>

          {/* TOOLBAR */}
          <SpaceToolbar />

          {/* GRID */}
          <SpaceGrid />
        </main>
      </div>
    </div>
  );
}

export default Space;