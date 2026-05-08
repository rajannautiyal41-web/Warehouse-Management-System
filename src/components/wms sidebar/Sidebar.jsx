import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";


import {
  Home,
  Grid2x2,
  Box,
  ShoppingCart,
  Truck,
  FileText,
  Settings,
  ChevronDown,
  Menu,
} from "lucide-react";

function Sidebar({ collapsed, setCollapsed }) {
  const dropdownRefs = useRef({});
  const sidebarRef = useRef();
  
useEffect(() => {
  const handleClickOutside = (e) => {
    const dropdownElements = Object.values(dropdownRefs.current);

    const isClickInsideDropdown = dropdownElements.some(
      (el) => el && el.contains(e.target)
    );

    const isClickInsideSidebar =
      sidebarRef.current && sidebarRef.current.contains(e.target);

    // ❗ CLOSE ONLY if clicked completely outside
    if (!isClickInsideDropdown && !isClickInsideSidebar) {
      setOpenMenu({
        master: false,
        inventory: false,
        sales: false,
      });
    }
  };

  document.addEventListener("click", handleClickOutside);

  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, []);

  const [openMenu, setOpenMenu] = useState({
    master: false,
    inventory: false,
    sales: false,
  });
const location = useLocation();
const path = location.pathname;

// active checks
const isDashboard = path === "/dashboard";
const isMaster = path.startsWith("/items"); 
const isItem =
  path.startsWith("/items") ||
  path.startsWith("/create-item");
 const toggleMenu = (menu) => {
  setOpenMenu((prev) => ({
    master: false,
    inventory: false,
    sales: false,
    [menu]: !prev[menu],
  }));
};

  return (
  <div
  ref={sidebarRef}
  className={`
  fixed md:static top-0 left-0 z-50
  min-h-screen bg-white
  shadow-[2px_0_10px_rgba(0,0,0,0.05)]
  flex flex-col justify-between
  transition-all duration-300

  w-[260px] 

  ${collapsed ? "-translate-x-full" : "translate-x-0"} md:translate-x-0
`}
>

      {/* TOP + MENU */}
      <div>
        <div className="h-[70px] flex items-center justify-between px-5">
          {!collapsed && (
            <h1 className="text-2xl font-bold text-blue-700">
              WMS
            </h1>
          )}

          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-gray-600"
          >
            <Menu size={22} />
          </button>
        </div>

        {/* MENU */}
        <div className="p-4 space-y-2">

         <MenuItem
  icon={<Home size={20} />}
  label="Dashboard"
  active={isDashboard}
  collapsed={collapsed}
  to="/dashboard"
/>

          <DropdownItem
  icon={<Grid2x2 size={20} />}
  label="Master"
  dropdownRefs={dropdownRefs}   // ✅ ADD THIS
  collapsed={collapsed}
  open={collapsed ? openMenu.master : (openMenu.master || isMaster)} // 🔥 THIS LINE FIXES AUTO OPEN
  onClick={() => toggleMenu("master")}
  active={isMaster}                    // 🔥 THIS LINE FIXES BOLD
>
            <SubItem label="Item" to="/items" active={isItem} />
            <SubItem label="Supplier" to="/suppliers" active={isItem}/>
          </DropdownItem>

          {/*<DropdownItem
            icon={<Box size={20} />}
            label="Inventory"
            collapsed={collapsed}
            open={openMenu.inventory}
            onClick={() => toggleMenu("inventory")}
          >
            <SubItem label="Stock" />
            <SubItem label="Warehouse" />
          </DropdownItem>

          <DropdownItem
            icon={<ShoppingCart size={20} />}
            label="Sales"
            collapsed={collapsed}
            open={openMenu.sales}
            onClick={() => toggleMenu("sales")}
          >
            <SubItem label="Orders" />
            <SubItem label="Invoices" />
          </DropdownItem>

          <MenuItem
            icon={<Truck size={20} />}
            label="Delivery"
            collapsed={collapsed}
          />

          <MenuItem
            icon={<FileText size={20} />}
            label="Summary"
            collapsed={collapsed}
          />

          <MenuItem
            icon={<Settings size={20} />}
            label="Configuration"
            collapsed={collapsed}
          />*/}
        </div>
      </div>

      {/* BOTTOM ROLE */}
      <div className="px-4 pb-6">
        {!collapsed && (
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-sm font-semibold text-gray-700">
              Role
            </p>
            <p className="text-sm text-gray-400">
              Supervisor
            </p>
          </div>
        )}
      </div>

    </div>
  );
}

/* ================= MENU ITEM ================= */

function MenuItem({
  icon,
  label,
  active,
  collapsed,
  to,
}) {
  const content = (
    <div
      title={collapsed ? label : ""}
      className={`
        flex items-center ${collapsed ? "justify-center" : "gap-3 px-4"}
        h-11 rounded-lg
        transition
        ${
          active
            ? "text-blue-600 bg-blue-50"
            : "text-gray-500 hover:bg-gray-100"
        }
      `}
    >
      {icon}
      {!collapsed && (
        <span className="text-sm font-medium">
          {label}
        </span>
      )}
    </div>
  );

  return to ? <Link to={to}>{content}</Link> : content;
}

/* ================= DROPDOWN ================= */

function DropdownItem({
  icon,
  label,
  collapsed,
  open,
  onClick,
  children,
  active,
  dropdownRefs
}) {
  return (
    <div className="relative">
      <div
  onClick={(e) => {
    e.stopPropagation();   // ✅ ADD THIS
    onClick();
  }}
title={collapsed ? label : ""}
        className={`
  flex items-center ${collapsed ? "justify-center" : "justify-between px-4"}
  h-11 rounded-lg cursor-pointer
  transition
  ${
    active
      ? "text-blue-600 bg-blue-50 font-bold"
      : "text-gray-500 hover:bg-gray-100"
  }
`}
      >
       <div
  className={`
    flex items-center 
    ${collapsed ? "" : "gap-3"}
  `}
>
          {icon}

          {!collapsed && (
            <span className="text-sm font-medium">
              {label}
            </span>
          )}
        </div>

        {!collapsed && (
          <ChevronDown
            size={16}
            className={`transition ${
              open ? "rotate-180" : ""
            }`}
          />
        )}
      </div>

     {open && (
  <div
    ref={(el) => (dropdownRefs.current[label] = el)}
    onClick={(e) => e.stopPropagation()}
  className={`
    ${collapsed ? "absolute left-[72px] top-0 bg-white shadow-lg rounded-md p-2 z-50 min-w-[150px]" : "ml-11 mt-1"}
    space-y-2
  `}
>
          {children}
        </div>
      )}
    </div>
  );
}

/* ================= SUB ITEM ================= */

function SubItem({ label, to, active }) {
  return (
    <Link
      to={to}
      className={`
  block text-sm px-2 py-1 rounded
  ${
    active
      ? "text-blue-500 font-medium bg-blue-50"
      : "text-gray-500 hover:text-blue-600"
  }
`}
    >
      {label}
    </Link>
  );
}

export default Sidebar;