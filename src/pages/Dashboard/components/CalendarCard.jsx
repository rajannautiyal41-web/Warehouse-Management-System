import { ChevronLeft, ChevronRight } from "lucide-react";

function CalendarCard() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm

        p-5

        min-h-[290px]

        flex
        flex-col
        justify-between
      "
    >

      {/* TOP */}
      <div>

        {/* DATE */}
        <h2
          className="
            text-[15px]
            font-semibold
            text-[#9CA3AF]
          "
        >
          April 11, 2021
        </h2>

        {/* CONTENT */}
        <div className="mt-4 flex justify-between">

          {/* LEFT SIDE */}
          <div>

            {/* TODAY */}
            <h3
              className="
                text-[30px]
                font-medium
                text-[#111827]
              "
            >
              Today
            </h3>

            {/* DAYS */}
            <div className="mt-6 space-y-5">

              <div className="flex items-center gap-4">
                <span className="text-[18px] text-[#111827]">
                  Sun
                </span>

                <span className="text-[18px] text-[#6B7280]">
                  30
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[18px] text-[#111827]">
                  Mon
                </span>

                <span className="text-[18px] text-[#6B7280]">
                  1
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[18px] text-[#111827]">
                  Tue
                </span>

                <span className="text-[18px] text-[#6B7280]">
                  2
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[18px] text-[#111827]">
                  Wed
                </span>

                <span className="text-[18px] text-[#6B7280]">
                  3
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[18px] font-bold text-[#111827]">
                  Fri
                </span>

                <span className="text-[18px] font-bold text-[#111827]">
                  5
                </span>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-[18px] text-[#111827]">
                  Sat
                </span>

                <span className="text-[18px] text-[#6B7280]">
                  6
                </span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="pr-2">

            {/* HEADER */}
            <div
              className="
                flex
                items-center
                gap-6

                text-[12px]
                text-[#6B7280]
              "
            >

              <span>Pick List</span>
              <span>Packed</span>
              <span>Delivered</span>

            </div>

            {/* VALUES */}
            <div className="mt-8 space-y-7">

              <div className="flex items-center gap-12">

                <span className="text-[14px] text-[#111827]">
                  5
                </span>

                <span className="text-[14px] text-[#111827]">
                  10
                </span>

                <span className="text-[14px] text-[#111827]">
                  8
                </span>

              </div>

              <div className="flex items-center gap-12">

                <span className="text-[14px] text-[#111827]">
                  4
                </span>

                <span className="text-[14px] text-[#111827]">
                  31
                </span>

                <span className="text-[14px] text-[#111827]">
                  1
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* BOTTOM BUTTONS */}
      <div className="flex justify-end gap-2 mt-6">

        {/* PREVIOUS */}
        <button
          className="
            w-[32px]
            h-[32px]

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
            size={16}
            className="text-white"
          />
        </button>

        {/* NEXT */}
        <button
          className="
            w-[32px]
            h-[32px]

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
          <ChevronRight
            size={16}
            className="text-white"
          />
        </button>

      </div>

    </div>
  );
}

export default CalendarCard;