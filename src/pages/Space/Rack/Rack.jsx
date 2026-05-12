import { useState } from "react";

import WMSNavbar from "../../Navbar/WMSNavbar";
import WMSSidebar from "../../Main Layout/WMSSidebar";

import RackHeader from "./components/RackHeader";
import RackTabs from "./components/RackTabs";
import RackToolbar from "./components/RackToolbar";
import RackGrid from "./components/RackGrid";

function Rack() {
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
          <RackHeader />

          <div className="mt-8">
            <RackTabs />
          </div>

          <RackToolbar />

          <RackGrid />
        </main>
      </div>
    </div>
  );
}

export default Rack;