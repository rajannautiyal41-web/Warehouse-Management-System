import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

function PickListTable() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        relative
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-[24px]
          font-semibold
          text-[#111827]
        "
      >
        Pick List
      </h2>

      {/* LEFT BUTTON */}
      <button
        className="
          absolute

          left-3
          top-1/2
          -translate-y-1/2

          w-[34px]
          h-[34px]

          rounded-lg

          bg-[#2563EB]
          hover:bg-[#1D4ED8]

          flex
          items-center
          justify-center
          cursor-pointer

          transition-all
          duration-300
        "
      >
        <ChevronLeft
          size={18}
          className="text-white"
        />
      </button>

      {/* RIGHT BUTTON */}
      <button
        className="
          absolute

          right-3
          top-1/2
          -translate-y-1/2

          w-[34px]
          h-[34px]

          rounded-lg

          bg-[#2563EB]
          hover:bg-[#1D4ED8]
            cursor-pointer
          flex
          items-center
          justify-center

          transition-all
          duration-300
        "
      >
        <ChevronRight
          size={18}
          className="text-white"
        />
      </button>

      {/* TABLE */}
      <div className="overflow-x-auto mt-6 px-10">

        <table className="w-full">

          <thead>

            <tr className="border-b border-[#E5E7EB]">

              <th className="text-left py-4 text-[14px] text-[#6B7280]">
                Status
              </th>

              <th className="text-left py-4 text-[14px] text-[#6B7280]">
                Order Number
              </th>

              <th className="text-left py-4 text-[14px] text-[#6B7280]">
                Product Description
              </th>

              <th className="text-left py-4 text-[14px] text-[#6B7280]">
                Quantity
              </th>

              <th className="text-left py-4 text-[14px] text-[#6B7280]">
                S&H
              </th>

            </tr>

          </thead>

          <tbody>

            {/* ROW 1 */}
            <tr className="border-b border-[#F3F4F6]">

              <td className="py-4">

                <StatusBadge
                  text="PL Created"
                  color="bg-pink-500"
                />

              </td>

              <td>Order Number</td>

              <td>Product Description</td>

              <td>Quantity</td>

              <td>S&H</td>

            </tr>

            {/* ROW 2 */}
            <tr className="border-b border-[#F3F4F6]">

              <td className="py-4">

                <StatusBadge
                  text="Ready"
                  color="bg-green-500"
                />

              </td>

              <td>Order Number</td>

              <td>Product Description</td>

              <td>Quantity</td>

              <td>S&H</td>

            </tr>

            {/* ROW 3 */}
            <tr className="border-b border-[#F3F4F6]">

              <td className="py-4">

                <StatusBadge
                  text="QC Packed"
                  color="bg-purple-500"
                />

              </td>

              <td>Order Number</td>

              <td>Product Description</td>

              <td>Quantity</td>

              <td>S&H</td>

            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}

export default PickListTable;