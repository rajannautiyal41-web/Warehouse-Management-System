import { useState } from "react";

import WMSNavbar from "../../Navbar/WMSNavbar";
import WMSSidebar from "../../Main Layout/WMSSidebar";

import SlotHeader from "./components/SlotHeader";
import SlotTabs from "./components/SlotTabs";
import SlotToolbar from "./components/SlotToolbar";
import SlotGrid from "./components/SlotGrid";
import SlotCard from "./components/SlotCard"

function Slot() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* SIDEBAR */}
      <WMSSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN */}
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
          <SlotHeader />

          <div className="mt-8">
            <SlotTabs />
          </div>

          <SlotToolbar />

          <SlotGrid />
        </main>
      </div>
    </div>
  );
}

export default Slot;