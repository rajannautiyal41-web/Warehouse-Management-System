import { TrendingUp } from "lucide-react";
import SparkLine from "./SparkLine";

function ProfitCard() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm
        p-6
        min-h-[260px]
      "
    >

      <h3 className="text-[20px] font-semibold text-[#111827]">
        Total Profit
      </h3>

      <p className="text-[#9CA3AF] text-[13px] mt-1">
        Last 7 days
      </p>

      <div className="mt-8 flex items-center justify-between">

        {/* LEFT */}
        <div>

          <h1 className="text-[48px] font-bold text-[#111827]">
            50K
          </h1>

          <div className="flex items-center gap-2 mt-3">

            <TrendingUp
              size={18}
              className="text-green-500"
            />

            <span className="text-green-500 text-[14px] font-medium">
              12%
            </span>

            <span className="text-[#9CA3AF] text-[13px]">
              vs last 7 days
            </span>

          </div>

        </div>

        {/* RIGHT GRAPH */}
        <div className="mt-6">
          <SparkLine />
        </div>

      </div>

    </div>
  );
}

export default ProfitCard;