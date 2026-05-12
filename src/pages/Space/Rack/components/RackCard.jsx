import {
  Pencil,
  Trash2,
  Layers3,
} from "lucide-react";

function RackCard() {
  return (
    <div
      className="
        bg-white

        border border-gray-100

        rounded-xl

        p-3

        shadow-sm

        hover:shadow-md

        transition-all duration-300
      "
    >
      {/* IMAGE */}
      <img
        src="https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600"
        alt="rack"
        className="
          w-full
          h-[120px]

          object-cover

          rounded-lg
        "
      />

      {/* CONTENT */}
      <div className="mt-3">
        <div className="flex items-center gap-1">
          <Layers3
            size={12}
            className="text-gray-400"
          />

          <p className="text-[11px] text-gray-400">
            Rack Type
          </p>
        </div>

        <h3
          className="
            mt-2

            text-[15px]
            font-semibold

            text-[#111827]
          "
        >
          Rack Name
        </h3>

        <div className="mt-3 space-y-1">
          <p className="text-xs text-gray-400">
            Weight
          </p>

          <p className="text-xs text-gray-400">
            Size
          </p>
        </div>

        {/* ACTIONS */}
        <div
          className="
            flex items-center justify-end

            gap-4

            mt-4
          "
        >
          <button>
            <Pencil
              size={14}
              className="text-blue-500"
            />
          </button>

          <button>
            <Trash2
              size={14}
              className="text-red-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RackCard;