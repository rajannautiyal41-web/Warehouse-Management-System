import { useState } from "react";
import { Link } from "react-router-dom";
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

function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  const [openMenu, setOpenMenu] = useState({
    master: false,
    inventory: false,
    sales: false,
  });

  const toggleMenu = (menu) => {
    setOpenMenu({
      ...openMenu,
      [menu]: !openMenu[menu],
    });
  };

  return (
    <div
      className={`
        h-screen bg-white shadow-lg
        flex flex-col justify-between
        transition-all duration-300
        ${collapsed ? "w-[80px]" : "w-[260px]"}
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
            active
            collapsed={collapsed}
            to="/dashboard"
          />

          <DropdownItem
            icon={<Grid2x2 size={20} />}
            label="Master"
            collapsed={collapsed}
            open={openMenu.master}
            onClick={() => toggleMenu("master")}
          >
            <SubItem label="Item" to="/items" />
            <SubItem label="Category" />
          </DropdownItem>

          <DropdownItem
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
          />
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
  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3
        px-4 py-3 rounded-lg
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
    </Link>
  );
}

/* ================= DROPDOWN ================= */

function DropdownItem({
  icon,
  label,
  collapsed,
  open,
  onClick,
  children,
}) {
  return (
    <div>
      <div
        onClick={onClick}
        className="
          flex items-center justify-between
          px-4 py-3 rounded-lg cursor-pointer
          text-gray-500 hover:bg-gray-100
        "
      >
        <div className="flex items-center gap-3">
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

      {!collapsed && open && (
        <div className="ml-11 mt-1 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}

/* ================= SUB ITEM ================= */

function SubItem({ label, to }) {
  return (
    <Link
      to={to}
      className="
        block text-sm text-gray-500
        hover:text-blue-600
      "
    >
      {label}
    </Link>
  );
}

export default Sidebar;