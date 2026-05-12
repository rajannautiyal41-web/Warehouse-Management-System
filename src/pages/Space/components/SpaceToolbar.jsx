function SpaceToolbar() {
  return (
    <div
      className="
        flex items-center justify-between

        mt-6
        mb-8

        gap-6
      "
    >
      {/* SEARCH */}
      <div
        className="
          flex-1
          max-w-[620px]

          h-[52px]

          bg-white

          rounded-[14px]

          px-5

          flex items-center gap-3

          shadow-sm
        "
      >
        <span className="text-gray-400 text-[18px]">
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

      {/* BUTTONS */}
      <div className="flex items-center gap-4">
        {/* ADD RACK */}
        <button
          className="
            h-[52px]

            px-8

            bg-[#2563EB]
            text-white

            rounded-[14px]

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

        {/* ADD SLOT */}
        <button
          className="
            h-[52px]

            px-8

            bg-[#2563EB]
            text-white

            rounded-[14px]

            flex items-center gap-4

            text-sm
            font-medium

            hover:bg-[#1E4ED8]

            transition-all duration-300
          "
        >
          Add Slot

          <span className="text-[18px]">
            +
          </span>
        </button>
      </div>
    </div>
  );
}

export default SpaceToolbar;