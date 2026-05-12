import { TrendingUp } from "lucide-react";
import SparkLine from "./SparkLine";

function OrdersCard() {
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

      <h3 className="text-[20px] font-semibold text-[#111827]">
        Total Orders
      </h3>

      <p className="text-[#9CA3AF] text-[13px] mt-1">
        Last 7 days
      </p>

      <div className="mt-8 flex items-center justify-between">

        {/* LEFT */}
        <div>

          <h1 className="
              text-[34px]
              sm:text-[48px]

              font-bold
              text-[#111827]

              leading-none
            ">
            25.7K
          </h1>

          <div className="flex items-center gap-2 mt-3">

            <TrendingUp
              size={14}
              className="text-green-500"
            />

            <span className="
                text-green-500

                text-[11px]
                sm:text-[14px]

                font-medium
              ">
              6%
            </span>

            <span className="
                text-[#9CA3AF]

                text-[10px]
                sm:text-[13px]
              ">
              vs last 7 days
            </span>

          </div>

        </div>

        {/* RIGHT GRAPH */}
        <div className="
            w-[90px]
            sm:w-[140px]

            flex
            justify-end

            overflow-hidden
          ">
          <SparkLine />
        </div>

      </div>

    </div>
  );
}

export default OrdersCard;