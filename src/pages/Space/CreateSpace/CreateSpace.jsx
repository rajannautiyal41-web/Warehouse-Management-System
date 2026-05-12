import { useState } from "react";

import WMSNavbar from "../../Navbar/WMSNavbar";
import WMSSidebar from "../../Main Layout/WMSSidebar";

import CreateSpaceForm from "./components/CreateSpaceForm";

function CreateSpace() {
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
        <main className="pt-[95px] px-6 pb-6">
          <CreateSpaceForm />
        </main>
      </div>
    </div>
  );
}

export default CreateSpace;