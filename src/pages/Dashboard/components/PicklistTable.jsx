import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import StatusBadge from "./StatusBadge";

function PickListTable() {
  return (
    <div
      className="
        relative

        w-full

        bg-white
        rounded-2xl
        shadow-sm

        p-3
        sm:p-5
        lg:p-6

        overflow-hidden
      "
    >
      {/* TITLE */}
      <h2
        className="
          text-[18px]
          sm:text-[22px]
          lg:text-[24px]

          font-semibold
          text-[#111827]
        "
      >
        Pick List
      </h2>

      {/* TABLE AREA */}
      <div
        className="
          relative

          mt-4
          sm:mt-6

          px-8
          sm:px-12
          lg:px-14
        "
      >
        {/* LEFT BUTTON */}
        <button
          className="
            absolute

            left-0
            top-1/2
            -translate-y-1/2

            w-7
            h-7

            sm:w-8
            sm:h-8

            lg:w-[34px]
            lg:h-[34px]

            rounded-lg

            bg-[#2563EB]
            hover:bg-[#1D4ED8]

            flex
            items-center
            justify-center

            transition-all
            duration-300
          "
        >
          <ChevronLeft
            size={16}
            className="text-white"
          />
        </button>

        {/* RIGHT BUTTON */}
        <button
          className="
            absolute

            right-0
            top-1/2
            -translate-y-1/2

            w-7
            h-7

            sm:w-8
            sm:h-8

            lg:w-[34px]
            lg:h-[34px]

            rounded-lg

            bg-[#2563EB]
            hover:bg-[#1D4ED8]

            flex
            items-center
            justify-center

            transition-all
            duration-300
          "
        >
          <ChevronRight
            size={16}
            className="text-white"
          />
        </button>

        {/* TABLE */}
        <table className="w-full table-fixed">
          <thead>
            <tr className="border-b border-[#E5E7EB]">
              <th
  className="
    w-[70px]
    sm:w-[140px]

    text-left

    py-2
    sm:py-3

    text-[8px]
    sm:text-[11px]
    lg:text-[14px]

    font-medium
    text-[#6B7280]
  "
>
                Status
              </th>

              <th
                className="
                  text-left

                  py-2
                  sm:py-3

                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  font-medium
                  text-[#6B7280]
                "
              >
                Order Number
              </th>

              <th
                className="
                  text-left

                  py-2
                  sm:py-3

                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  font-medium
                  text-[#6B7280]
                "
              >
                Product Description
              </th>

              <th
                className="
                  text-left

                  py-2
                  sm:py-3

                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  font-medium
                  text-[#6B7280]
                "
              >
                Quantity
              </th>

              <th
                className="
                  text-left

                  py-2
                  sm:py-3

                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  font-medium
                  text-[#6B7280]
                "
              >
                S&H
              </th>
            </tr>
          </thead>

          <tbody>
            {/* ROW 1 */}
            <tr className="border-b border-[#F3F4F6]">
             <td className="py-2 sm:py-4 pr-2 sm:pr-4">
                <StatusBadge
                  text="PL Created"
                  color="bg-pink-500"
                />
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Order Number
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Product Description
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Quantity
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                S&H
              </td>
            </tr>

            {/* ROW 2 */}
            <tr className="border-b border-[#F3F4F6]">
              <td className="py-2 sm:py-4 pr-2 sm:pr-4">
                <StatusBadge
                  text="Ready"
                  color="bg-green-500"
                />
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Order Number
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Product Description
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Quantity
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                S&H
              </td>
            </tr>

            {/* ROW 3 */}
            <tr className="border-b border-[#F3F4F6]">
              <td className="py-2 sm:py-4 pr-2 sm:pr-4">
                <StatusBadge
                  text="QC Packed"
                  color="bg-purple-500"
                />
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Order Number
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Product Description
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]

                  text-[#111827]
                "
              >
                Quantity
              </td>

              <td
                className="
                  text-[8px]
                  sm:text-[11px]
                  lg:text-[14px]
                  text-[#111827]
                "
              >
                S&H
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default PickListTable;