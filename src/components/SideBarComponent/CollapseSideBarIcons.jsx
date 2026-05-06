import { useState } from "react";
import SidebarIcons from "./SidebarIcons";
import SidebarFull from "./SidebarFull";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(true);

  return (
    <div className="flex">
      {collapsed ? <SidebarIcons /> : <SidebarFull />}

      <button
        onClick={() => setCollapsed(!collapsed)}
        className="absolute top-4 left-4 bg-white px-2 py-1 shadow"
      >
        Toggle
      </button>
    </div>
  );
}

export default Sidebar;