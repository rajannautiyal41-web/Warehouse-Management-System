import { useState } from "react";

import WMSNavbar from "../../Navbar/WMSNavbar";
import WMSSidebar from "../../Main Layout/WMSSidebar";

import ShipmentHeader from "./components/ShipmentHeader";
import ShipmentToolbar from "./components/ShipmentToolbar";
import ShipmentTable from "./components/ShipmentTable";

function Shipment() {
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
        <main className="pt-[95px] px-5 pb-6">
          <div
            className="
              bg-white

              rounded-2xl

              shadow-sm

              overflow-hidden
            "
          >
            <ShipmentHeader />

            <ShipmentToolbar />

            <ShipmentTable />
          </div>
        </main>
      </div>
    </div>
  );
}

export default Shipment;