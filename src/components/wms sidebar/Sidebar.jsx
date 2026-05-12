import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

import {
  Home,
  Grid2x2,
  ChevronDown,
} from "lucide-react";

function Sidebar({ collapsed, setCollapsed }) {
  const dropdownRefs = useRef({});
  const sidebarRef = useRef();

  const [openMenu, setOpenMenu] = useState({
    master: false,
    inventory: false,
    sales: false,
  });

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (e.target.closest(".dropdown-trigger")) return;

      const dropdownElements = Object.values(dropdownRefs.current);

      const isClickInsideDropdown = dropdownElements.some(
        (el) => el && el.contains(e.target)
      );

      const isClickInsideSidebar =
        sidebarRef.current && sidebarRef.current.contains(e.target);

      if (!isClickInsideDropdown && !isClickInsideSidebar) {
        setOpenMenu({
          master: false,
          inventory: false,
          sales: false,
        });
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const openSpecificMenu = (menu) => {
    setOpenMenu({
      master: false,
      inventory: false,
      sales: false,
      [menu]: true,
    });
  };

  const closeMenus = () => {
    setOpenMenu({
      master: false,
      inventory: false,
      sales: false,
    });
  };

  const toggleMenu = (menu) => {
    setOpenMenu((prev) => ({
      master: false,
      inventory: false,
      sales: false,
      [menu]: !prev[menu],
    }));
  };

  const location = useLocation();
  const path = location.pathname;

  const isDashboard = path === "/dashboard";

  const isMaster =
  path.startsWith("/items") ||
  path.startsWith("/create-item") ||
  path.startsWith("/suppliers") ||
  path.startsWith("/create-supplier");


  const isItem =
    path.startsWith("/items") ||
    path.startsWith("/create-item");

  const isSupplier =
  path.startsWith("/suppliers") ||
  path.startsWith("/create-supplier");
  

  return (
    <>
      {/* OVERLAY */}
      {!collapsed && (
        <div
          className="fixed left-0 right-0 bottom-0 top-[64px] sm:top-[68px] lg:top-[72px] bg-black/30 z-40 md:hidden"
          onClick={() => setCollapsed(true)}
        />
      )}

      {/* SIDEBAR */}
      <div
        ref={sidebarRef}
        className={`
  fixed left-0 top-0 bottom-0 z-50
  bg-white
  shadow-[2px_0_10px_rgba(0,0,0,0.05)]
  flex flex-col justify-between
  overflow-visible
  transition-all duration-300

  ${collapsed ? "w-[70px]" : "w-[240px] sm:w-[260px]"}
  ${collapsed ? "md:w-[70px]" : "md:w-[260px]"}
  translate-x-0
`}
      >
        {/* TOP SECTION */}
        <div>
          <div className="pt-[64px] sm:pt-[68px] lg:pt-[72px] p-3 sm:p-4 space-y-2">

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
              dropdownRefs={dropdownRefs}
              collapsed={collapsed}
              open={
                collapsed
                  ? openMenu.master === true
                  : openMenu.master || isMaster
              }
              onOpen={() => openSpecificMenu("master")}
              onClose={closeMenus}
              onToggle={() => toggleMenu("master")}
              active={isMaster}
            >
              {/* ✅ ITEMS LIST */}
              <SubItem label="Items List" to="/items" active={path === "/items"} />

              {/* SUPPLIER */}
              <SubItem label="Supplier" to="/suppliers" active={isSupplier} />
            </DropdownItem>

          </div>
        </div>

        {/* BOTTOM SECTION */}
        <div className="px-3 sm:px-4 pb-4 sm:pb-6">
          {!collapsed && (
            <div className="bg-gray-50 rounded-xl p-3">
              <p className="text-sm font-semibold text-gray-700">Role</p>
              <p className="text-sm text-gray-400">Supervisor</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

/* ================= MENU ITEM ================= */

function MenuItem({ icon, label, active, collapsed, to }) {
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
        <span className="text-sm font-medium">{label}</span>
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
  onOpen,
  onClose,
  onToggle,
  children,
  active,
  dropdownRefs,
}) {
  const timeoutRef = useRef(null);

  return (
    <div
      className="relative"
      onMouseEnter={() => {
        if (collapsed) {
          clearTimeout(timeoutRef.current);
          onOpen();
        }
      }}
      onMouseLeave={() => {
        if (collapsed) {
          timeoutRef.current = setTimeout(() => {
            onClose();
          }, 200);
        }
      }}
    >
      {/* BUTTON */}
      <div
        className="dropdown-trigger"
        onClick={(e) => {
          e.stopPropagation();
          if (collapsed) {
            onOpen();
          } else {
            onToggle();
          }
        }}
        title={collapsed ? label : ""}
        className={`
          flex items-center 
          ${collapsed ? "justify-center" : "justify-between px-4"}
          h-11 rounded-lg cursor-pointer
          transition-all duration-200
          ${
            active
              ? "text-blue-600 bg-blue-50"
              : "text-gray-500 hover:bg-gray-100"
          }
          ${collapsed ? "hover:bg-blue-50" : ""}
        `}
      >
        <div className={`flex items-center ${collapsed ? "" : "gap-3"}`}>
          {icon}
          {!collapsed && (
           <span
  className={`text-sm ${
    active ? "font-semibold" : "font-medium"
  }`}
>
  {label}
</span>
          )}
        </div>

        {!collapsed && (
          <ChevronDown
            size={16}
            className={`transition ${open ? "rotate-180" : ""}`}
          />
        )}
      </div>

      {/* DROPDOWN */}
      {open && (
        <div
          ref={(el) => (dropdownRefs.current[label] = el)}
          onClick={(e) => e.stopPropagation()}
          className={`
            ${
              collapsed
                ? `
                  absolute 
                  left-[70px]
                  top-0 
                  bg-white 
                  shadow-xl 
                  rounded-lg 
                  p-2 
                  z-[9999]
                  min-w-[180px]
                  border border-gray-100
                `
                : "ml-11 mt-1"
            }
            space-y-2
          `}
        >
          {collapsed && (
            <div className="absolute -left-2 top-3 w-3 h-3 bg-white rotate-45 border-l border-t border-gray-100 pointer-events-none"></div>
          )}

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
  flex items-center gap-2 text-sm px-3 py-2 rounded-md
        transition-all duration-200
        ${
          active
            ? "text-blue-600 font-semibold bg-blue-50"
            : "text-gray-600 hover:bg-gray-100 hover:text-blue-600"
        }
      `}
    >
      <span className="w-1.5 h-1.5 bg-gray-400 rounded-full"></span>
<span>{label}</span>
    </Link>
  );
}

export default Sidebar;