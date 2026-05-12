function SlotToolbar() {
  return (
    <div
      className="
        flex items-center justify-between
        gap-6
        mb-6
      "
    >
      {/* SEARCH */}
      <div
        className="
          w-full
          max-w-[420px]

          h-[52px]

          bg-white

          rounded-2xl

          px-5

          flex items-center gap-3

          shadow-sm
        "
      >
        <span className="text-gray-400 text-lg">
          🔍
        </span>

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

      {/* BUTTON */}
      <button
        className="
          h-[52px]

          px-8

          bg-[#2563EB]
          text-white

          rounded-2xl

          flex items-center gap-5

          text-sm
          font-medium

          hover:bg-blue-700

          transition-all
        "
      >
        Add Slot

        <span className="text-[20px]">
          +
        </span>
      </button>
    </div>
  );
}

export default SlotToolbar;