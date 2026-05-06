import { useState } from "react";

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`h-screen bg-[#0B3C5D] text-white flex flex-col transition-all duration-300 ${collapsed ? "w-[80px]" : "w-[240px]"}`}>

      {/* TOP SECTION */}
      <div className="flex items-center justify-between p-4">
        {!collapsed && <h1 className="text-lg font-semibold">WMS</h1>}

        {/* Toggle Button */}
        <button onClick={() => setCollapsed(!collapsed)}>
          {/* SVG Toggle Icon */}
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* MENU */}
      <div className="flex-1 px-2 space-y-2">

        {/* Dashboard */}
        <SidebarItem collapsed={collapsed} label="Dashboard">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M3 13h8V3H3v10zm10 8h8v-6h-8v6zM3 21h8v-6H3v6zm10-8h8V3h-8v10z"/>
          </svg>
        </SidebarItem>

        {/* Projects */}
        <SidebarItem collapsed={collapsed} label="Projects">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M3 3h18v4H3V3zm0 6h12v12H3V9zm14 0h4v12h-4V9z"/>
          </svg>
        </SidebarItem>

        {/* Analytics */}
        <SidebarItem collapsed={collapsed} label="Analytics">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M5 9h4v12H5V9zm6-6h4v18h-4V3zm6 10h4v8h-4v-8z"/>
          </svg>
        </SidebarItem>

        {/* Settings */}
        <SidebarItem collapsed={collapsed} label="Settings">
          <svg width="20" height="20" fill="white" viewBox="0 0 24 24">
            <path d="M19.14 12.94a7.49 7.49 0 000-1.88l2.03-1.58-1.92-3.32-2.39.96a7.57 7.57 0 00-1.63-.95l-.36-2.54h-3.84l-.36 2.54c-.58.23-1.12.54-1.63.95l-2.39-.96-1.92 3.32 2.03 1.58a7.49 7.49 0 000 1.88l-2.03 1.58 1.92 3.32 2.39-.96c.5.41 1.05.73 1.63.95l.36 2.54h3.84l.36-2.54c.58-.23 1.12-.54 1.63-.95l2.39.96 1.92-3.32-2.03-1.58z"/>
          </svg>
        </SidebarItem>

      </div>

      {/* FOOTER */}
      <div className="p-4 border-t border-white/20">
        {!collapsed && <p className="text-sm">© WMS</p>}
      </div>

    </div>
  );
}

export default Sidebar;