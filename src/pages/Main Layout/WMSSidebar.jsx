import { useState } from "react";
import { Link } from "react-router-dom";

import {
  Home,
  Grid2x2,
  ChevronDown,
  X,
} from "lucide-react";

function WMSSidebar({
  sidebarOpen,
  setSidebarOpen,
}) {
  const [openMenu, setOpenMenu] =
    useState({
      master: false,
    });

  const toggleMenu = (menu) => {
    setOpenMenu({
      ...openMenu,
      [menu]: !openMenu[menu],
    });
  };

  return (
    <>
      {/* OVERLAY */}
      {sidebarOpen && (
        <div
          className="
            fixed inset-0
            bg-black/30
            z-40
            md:hidden
          "
          onClick={() =>
            setSidebarOpen(false)
          }
        />
      )}

      {/* SIDEBAR */}
      <div
        className={`
          fixed top-[72px] md:top-0 left-0
          z-50

          w-[260px]
          h-[calc(100vh-72px)] md:h-screen

          bg-white

          shadow-[2px_0_10px_rgba(0,0,0,0.05)]

          flex flex-col justify-between

          transition-transform duration-300 ease-in-out

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          md:translate-x-0
        `}
      >
        {/* TOP */}
        <div>
          {/* HEADER */}
          <div
            className="
              h-[72px]

              px-5

              flex items-center justify-between

              border-b border-gray-100
            "
          >
            {/* LOGO */}
            <h1
              className="
                text-[#0B3FCF]
                font-bold
                text-[32px]
                tracking-[3px]
              "
            >
              WMS
            </h1>

            {/* CLOSE BUTTON */}
            <button
              onClick={() =>
                setSidebarOpen(false)
              }
              className="
                md:hidden

                flex items-center justify-center

                w-[36px]
                h-[36px]

                rounded-full

                bg-gray-100

                text-black

                hover:bg-gray-200

                transition-all duration-300
              "
            >
              <X size={22} />
            </button>
          </div>

          {/* MENU */}
          <div className="p-4 space-y-2">
            {/* DASHBOARD */}
            <MenuItem
              icon={<Home size={20} />}
              label="Dashboard"
              active
              to="/dashboard"
            />

            {/* MASTER */}
            <DropdownItem
              icon={<Grid2x2 size={20} />}
              label="Master"
              open={openMenu.master}
              onClick={() =>
                toggleMenu("master")
              }
            >
              <SubItem
                label="Item"
                to="/items"
              />

              <SubItem
                label="Category"
                to="/category"
              />

              <SubItem
                label="Rack"
                to="/rack"
              />

              <SubItem
                label="Slot"
                to="/slot"
              />

              <SubItem
                label="Bin"
                to="/bin"
              />
            </DropdownItem>
          </div>
        </div>

        {/* ROLE */}
        <div className="px-4 pb-6">
          <div className="bg-gray-50 rounded-xl p-3">
            <p className="text-sm font-semibold text-gray-700">
              Role
            </p>

            <p className="text-sm text-gray-400">
              Supervisor
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

/* ================================================= */
/* MENU ITEM */
/* ================================================= */

function MenuItem({
  icon,
  label,
  active,
  to,
}) {
  return (
    <Link
      to={to}
      className={`
        flex items-center gap-3

        px-4 py-3

        rounded-lg

        transition-all duration-300

        ${
          active
            ? "text-blue-600 bg-blue-50"
            : "text-gray-500 hover:bg-gray-100"
        }
      `}
    >
      {icon}

      <span className="text-sm font-medium">
        {label}
      </span>
    </Link>
  );
}

/* ================================================= */
/* DROPDOWN */
/* ================================================= */

function DropdownItem({
  icon,
  label,
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

          px-4 py-3

          rounded-lg

          cursor-pointer

          text-gray-500

          hover:bg-gray-100

          transition-all duration-300
        "
      >
        <div
          className="
            flex items-center gap-3
          "
        >
          {icon}

          <span className="text-sm font-medium">
            {label}
          </span>
        </div>

        <ChevronDown
          size={16}
          className={`transition ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {open && (
        <div className="ml-11 mt-1 space-y-2">
          {children}
        </div>
      )}
    </div>
  );
}

/* ================================================= */
/* SUB ITEM */
/* ================================================= */

function SubItem({
  label,
  to,
}) {
  return (
    <Link
      to={to}
      className="
        block

        text-sm

        text-gray-500

        hover:text-blue-600

        transition-all duration-300
      "
    >
      {label}
    </Link>
  );
}

export default WMSSidebar;