import {
  Pencil,
  Trash2,
} from "lucide-react";

function SlotCard() {
  return (
    <div
      className="
        bg-white

        rounded-xl

        border border-gray-100

        p-3

        shadow-sm

        hover:shadow-md

        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600"
        alt="slot"
        className="
          w-full
          h-[140px]

          object-cover

          rounded-xl
        "
      />

      {/* CONTENT */}
      <div className="mt-3">
        <p className="text-[11px] text-gray-400">
          ⛶ Slot Type
        </p>

        <h3
          className="
            text-sm
            font-semibold
            text-[#111827]

            mt-1
          "
        >
          Slot Name
        </h3>

        <div className="mt-3 space-y-1">
          <p className="text-xs text-gray-400">
            Weight
          </p>

          <p className="text-xs text-gray-400">
            Size
          </p>

          <p className="text-xs text-gray-400">
            Dimension
          </p>
        </div>

        {/* ACTIONS */}
        <div
          className="
            flex items-center justify-end
            gap-3

            mt-4
          "
        >
          <button>
            <Pencil
              size={15}
              className="text-blue-500"
            />
          </button>

          <button>
            <Trash2
              size={15}
              className="text-red-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default SlotCard;