import {
  Pencil,
  Trash2,
} from "lucide-react";

function RackCard() {
  return (
    <div
      className="
        bg-white

        border border-gray-100

        rounded-2xl

        p-4

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
          h-[180px]

          object-cover

          rounded-xl
        "
      />

      {/* CONTENT */}
      <div className="mt-4">
        <p className="text-[12px] text-gray-400">
          Rack Type
        </p>

        <h3
          className="
            mt-2

            text-[18px]
            font-semibold

            text-[#111827]
          "
        >
          Rack Name
        </h3>

        <div className="mt-4 space-y-2">
          <p className="text-sm text-gray-400">
            Weight
          </p>

          <p className="text-sm text-gray-400">
            Size
          </p>
        </div>

        {/* ACTIONS */}
        <div
          className="
            flex items-center justify-end

            gap-4

            mt-5
          "
        >
          <button>
            <Pencil
              size={16}
              className="text-blue-500"
            />
          </button>

          <button>
            <Trash2
              size={16}
              className="text-red-400"
            />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RackCard;