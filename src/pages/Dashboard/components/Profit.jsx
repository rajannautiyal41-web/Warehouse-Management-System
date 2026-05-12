import { TrendingUp } from "lucide-react";
import SparkLine from "./SparkLine";

function ProfitCard() {
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
      <h3
        className="
          text-[16px]
          sm:text-[20px]

          font-semibold
          text-[#111827]
        "
      >
        Total Profit
      </h3>

      {/* SUBTITLE */}
      <p
        className="
          text-[#9CA3AF]

          text-[11px]
          sm:text-[13px]

          mt-1
        "
      >
        Last 7 days
      </p>

      {/* CONTENT */}
      <div
        className="
          mt-5

          flex
          items-center
          justify-between

          gap-3
        "
      >
        {/* LEFT */}
        <div className="flex-1 min-w-0">
          <h1
            className="
              text-[34px]
              sm:text-[48px]

              font-bold
              text-[#111827]

              leading-none
            "
          >
            50K
          </h1>

          {/* GROWTH */}
          <div
            className="
              flex
              items-center
              gap-1

              mt-3

              flex-wrap
            "
          >
            <TrendingUp
              size={14}
              className="text-green-500"
            />

            <span
              className="
                text-green-500

                text-[11px]
                sm:text-[14px]

                font-medium
              "
            >
              12%
            </span>

            <span
              className="
                text-[#9CA3AF]

                text-[10px]
                sm:text-[13px]
              "
            >
              vs last 7 days
            </span>
          </div>
        </div>

        {/* RIGHT GRAPH */}
        <div
          className="
            w-[90px]
            sm:w-[140px]

            flex
            justify-end

            overflow-hidden
          "
        >
          <SparkLine />
        </div>
      </div>
    </div>
  );
}

export default ProfitCard;