import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

const data = [
  { month: "Jan", value: 0 },
  { month: "Feb", value: 14000 },
  { month: "Mar", value: 36000 },
  { month: "Apr", value: 28000 },
  { month: "May", value: 45000 },
  { month: "Jun", value: 26000 },
  { month: "Jul", value: 30000 },
];

function PreviousOrdersChart() {
  return (
    <div
      className="
        bg-white
        rounded-2xl
        shadow-sm

        p-6
        mt-6
      "
    >

      {/* TITLE */}
      <h2
        className="
          text-[20px]
          font-semibold
          text-[#111827]
        "
      >
        Previous Orders
      </h2>

      {/* CHART */}
      <div className="w-full h-[300px] mt-6">

        <ResponsiveContainer width="100%" height="100%">

          <LineChart
            data={data}
            margin={{
              top: 10,
              right: 20,
              left: 0,
              bottom: 0,
            }}
          >

            {/* GRID */}
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#F3F4F6"
            />

            {/* X AXIS */}
            <XAxis
              dataKey="month"
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
            />

            {/* Y AXIS */}
            <YAxis
              tick={{
                fill: "#9CA3AF",
                fontSize: 12,
              }}
              axisLine={false}
              tickLine={false}
              ticks={[0, 10000, 20000, 30000, 40000, 50000]}
              tickFormatter={(value) => `${value / 1000}k`}
            />

            {/* LINE */}
            <Line
              type="linear"
              dataKey="value"
              stroke="#2563EB"
              strokeWidth={3}
              dot={false}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default PreviousOrdersChart;