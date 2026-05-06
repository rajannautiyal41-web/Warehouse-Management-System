import {
  Home,
  Grid,
  Box,
  ShoppingCart,
  Truck,
  Settings,
} from "lucide-react";

function Sidebar() {
  return (
    <div className="h-screen w-[90px] bg-[#F5F6F8] flex flex-col items-center py-6 border-r">

      {/* ICONS */}
      <div className="flex flex-col items-center gap-10 mt-10">

        {/* Active Icon */}
        <div className="text-blue-600">
          <Home size={28} />
        </div>

        <div className="text-gray-500 hover:text-blue-600 cursor-pointer">
          <Grid size={28} />
        </div>

        <div className="text-gray-500 hover:text-blue-600 cursor-pointer">
          <Box size={28} />
        </div>

        <div className="text-gray-500 hover:text-blue-600 cursor-pointer">
          <ShoppingCart size={28} />
        </div>

        <div className="text-gray-500 hover:text-blue-600 cursor-pointer">
          <Truck size={28} />
        </div>

        <div className="text-gray-500 hover:text-blue-600 cursor-pointer mt-auto">
          <Settings size={28} />
        </div>

      </div>
    </div>
  );
}

export default Sidebar;