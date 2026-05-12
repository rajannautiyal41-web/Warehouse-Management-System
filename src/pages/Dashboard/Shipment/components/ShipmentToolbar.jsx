import {
  Search,
  Plus,
} from "lucide-react";

function ShipmentToolbar() {
  return (
    <div
      className="
        flex flex-col lg:flex-row
        lg:items-center
        lg:justify-between

        gap-4

        px-5 py-4
      "
    >
      {/* SEARCH */}
      <div
        className="
          w-full
          lg:w-[420px]

          h-[48px]

          bg-[#F8F9FC]

          rounded-xl

          px-4

          flex items-center gap-3
        "
      >
        <Search
          size={18}
          className="text-gray-400"
        />

        <input
          type="text"
          placeholder="Search"
          className="
            w-full

            bg-transparent

            outline-none

            text-sm
          "
        />
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-5">
        {/* BUTTON */}
        <button
          className="
            h-[48px]

            px-6

            bg-[#2563EB]
            text-white

            rounded-xl

            flex items-center gap-3

            text-sm
            font-medium

            hover:bg-blue-700

            transition-all
          "
        >
          Add Shipment

          <Plus size={16} />
        </button>

        {/* SORT */}
        <button
          className="
            text-sm
            text-gray-600
          "
        >
          Sort by ↓
        </button>
      </div>
    </div>
  );
}

export default ShipmentToolbar;