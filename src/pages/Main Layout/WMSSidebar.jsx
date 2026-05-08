import {
    LayoutDashboard,
    Boxes,
    PackageCheck,
    ShoppingCart,
    Truck,
    FileText,
    Settings,
    ChevronDown,
} from "lucide-react";

function WMSSidebar() {
    return (
        <aside
            className="
        w-[260px]
        min-h-[calc(100vh-72px)]

        bg-white
        border-r
        border-[#E5E7EB]

        px-4
        py-6

        flex
        flex-col
        justify-between
      "
        >

            {/* TOP MENU */}
            <div>

                {/* DASHBOARD */}
                <button
                    className="
            w-full

            flex
            items-center
            gap-3

            px-3
            py-3

            rounded-lg

            bg-[#EEF4FF]

            text-[#2563EB]
            text-[14px]
            font-medium

            hover:bg-[#E0ECFF]
            transition-all
          "
                >
                    <LayoutDashboard size={18} />
                    Dashboard
                </button>

                {/* MENU LIST */}
                <div className="mt-6 space-y-1">

                    {/* MASTER */}
                    <button
                        className="
              w-full

              flex
              items-center
              justify-between

              px-3
              py-3

              rounded-lg

              text-[#4B5563]
              text-[14px]

              hover:bg-[#F3F4F6]
              transition-all
            "
                    >

                        <div className="flex items-center gap-3">
                            <Boxes size={18} />
                            Master
                        </div>

                        <ChevronDown size={16} />

                    </button>

                    {/* INVENTORY */}
                    <button
                        className="
              w-full

              flex
              items-center
              justify-between

              px-3
              py-3

              rounded-lg

              text-[#4B5563]
              text-[14px]

              hover:bg-[#F3F4F6]
              transition-all
            "
                    >

                        <div className="flex items-center gap-3">
                            <PackageCheck size={18} />
                            Inventory Management
                        </div>

                        <ChevronDown size={16} />

                    </button>

                    {/* SALES */}
                    <button
                        className="
              w-full

              flex
              items-center
              justify-between

              px-3
              py-3

              rounded-lg

              text-[#4B5563]
              text-[14px]

              hover:bg-[#F3F4F6]
              transition-all
            "
                    >

                        <div className="flex items-center gap-3">
                            <ShoppingCart size={18} />
                            Sales
                        </div>

                        <ChevronDown size={16} />

                    </button>

                    {/* DELIVERY */}
                    <button
                        className="
              w-full

              flex
              items-center

              gap-3

              px-3
              py-3

              rounded-lg

              text-[#4B5563]
              text-[14px]

              hover:bg-[#F3F4F6]
              transition-all
            "
                    >
                        <Truck size={18} />
                        Delivery Management
                    </button>

                    {/* SUMMARY */}
                    <button
                        className="
              w-full

              flex
              items-center

              gap-3

              px-3
              py-3

              rounded-lg

              text-[#4B5563]
              text-[14px]

              hover:bg-[#F3F4F6]
              transition-all
            "
                    >
                        <FileText size={18} />
                        Summary
                    </button>

                    {/* CONFIGURATION */}
                    <button
                        className="
              w-full

              flex
              items-center

              gap-3

              px-3
              py-3

              rounded-lg

              text-[#4B5563]
              text-[14px]

              hover:bg-[#F3F4F6]
              transition-all
            "
                    >
                        <Settings size={18} />
                        Configuration
                    </button>

                </div>

            </div>

            {/* BOTTOM ROLE */}
            <div className="px-3">

                <p
                    className="
            text-[11px]
            uppercase
            tracking-wide

            text-[#9CA3AF]
          "
                >
                    Role
                </p>

                <p
                    className="
            mt-1

            text-[13px]
            text-[#6B7280]
          "
                >
                    Supervisor
                </p>

            </div>

        </aside>
    );
}

export default WMSSidebar;