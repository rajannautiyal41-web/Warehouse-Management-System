import { useState } from "react";
import SidebarItem from "./SideBarComponent/SidebarItem";
import DropdownItem from "./DropDownItem/DropDownItem";
import {
  Home,
  Grid,
  Box,
  ShoppingCart,
  Truck,
  FileText,
  Settings,
  ChevronDown,
} from "lucide-react";

function Sidebar() {
  const [openMenu, setOpenMenu] = useState(null);

  const toggleMenu = (menu) => {
    setOpenMenu(openMenu === menu ? null : menu);
  };

  return (
    <div className="h-screen w-[260px] bg-[#F5F6F8] p-6 border-r">

      {/* Title */}
      <h2 className="text-purple-600 font-semibold mb-8">◆ Side Bar</h2>

      {/* Menu */}
      <div className="space-y-4">

        {/* Dashboard */}
        <SidebarItem icon={<Home size={20} />} label="Dashboard" active />

        {/* Master */}
        <DropdownItem
          icon={<Grid size={20} />}
          label="Master"
          open={openMenu === "master"}
          onClick={() => toggleMenu("master")}
        />

        {/* Inventory */}
        <DropdownItem
          icon={<Box size={20} />}
          label="Inventory Management"
          open={openMenu === "inventory"}
          onClick={() => toggleMenu("inventory")}
        />

        {/* Sales */}
        <DropdownItem
          icon={<ShoppingCart size={20} />}
          label="Sales"
          open={openMenu === "sales"}
          onClick={() => toggleMenu("sales")}
        />

        {/* Delivery */}
        <SidebarItem icon={<Truck size={20} />} label="Delivery Management" />

        {/* Summary */}
        <SidebarItem icon={<FileText size={20} />} label="Summary" />

        {/* Config */}
        <SidebarItem icon={<Settings size={20} />} label="Configuration" />

      </div>
    </div>
  );
}

export default Sidebar;