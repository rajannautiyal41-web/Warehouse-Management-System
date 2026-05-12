function RackToolbar() {
  return (
    <div
      className="
        flex items-center justify-between

        mt-6
        mb-8
      "
    >
      {/* SEARCH */}
      <div
        className="
          w-[420px]
          h-[46px]

          bg-white

          rounded-xl

          px-4

          flex items-center gap-3

          shadow-sm
        "
      >
        <span className="text-gray-400">
          🔍
        </span>

        <input
          type="text"
          placeholder="Search"
          className="
            w-full

            outline-none

            text-sm

            bg-transparent
          "
        />
      </div>

      {/* BUTTON */}
      <button
        className="
          h-[46px]

          px-7

          bg-[#2563EB]
          text-white

          rounded-xl

          flex items-center gap-4

          text-sm
          font-medium

          hover:bg-[#1E4ED8]

          transition-all duration-300
        "
      >
        Add Rack

        <span className="text-[18px]">
          +
        </span>
      </button>
    </div>
  );
}

export default RackToolbar;