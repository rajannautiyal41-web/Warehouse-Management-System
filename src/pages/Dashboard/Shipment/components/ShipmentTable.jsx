import {
  Pencil,
  Trash2,
} from "lucide-react";

function ShipmentTable() {
  const data = Array(12).fill({
    name: "Lorem Ipsum",
    invoice: "Lorem Ipsum",
    api: "Lorem Ipsum",
  });

   return (
    <div className="px-4 sm:px-5 pb-5">
      {/* DESKTOP TABLE */}
      <div className="hidden lg:block overflow-x-auto">
        <table
          className="
            w-full

            border-separate
            border-spacing-0

            overflow-hidden

            rounded-2xl
          "
        >
          {/* HEADER */}
          <thead>
            <tr className="bg-[#2563EB] text-white">
              <th
                className="
                  px-4 py-4

                  text-left

                  rounded-tl-2xl
                "
              >
                ○
              </th>

              <th className="px-4 py-4 text-left text-sm font-medium">
                Name
              </th>

              <th className="px-4 py-4 text-left text-sm font-medium">
                Invoice Date
              </th>

              <th className="px-4 py-4 text-left text-sm font-medium">
                API Key
              </th>

              <th
                className="
                  px-4 py-4

                  text-center
                  text-sm
                  font-medium

                  rounded-tr-2xl
                "
              >
                Action
              </th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody>
            {data.map((item, index) => (
              <tr
                key={index}
                className="
                  bg-white

                  border-b border-gray-100

                  hover:bg-gray-50

                  transition
                "
              >
                <td
                  className="
                    px-4 py-4

                    text-gray-400
                  "
                >
                  ○
                </td>

                <td
                  className="
                    px-4 py-4

                    text-sm
                    text-gray-500
                  "
                >
                  {item.name}
                </td>

                <td
                  className="
                    px-4 py-4

                    text-sm
                    text-gray-500
                  "
                >
                  {item.invoice}
                </td>

                <td
                  className="
                    px-4 py-4

                    text-sm
                    text-gray-500
                  "
                >
                  {item.api}
                </td>

                {/* ACTION */}
                <td className="px-4 py-4">
                  <div
                    className="
                      flex items-center justify-center

                      gap-4
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
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* MOBILE CARDS */}
      <div className="lg:hidden space-y-4">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              bg-white

              rounded-2xl

              border border-gray-100

              p-4

              shadow-sm
            "
          >
            {/* TOP */}
            <div className="flex items-start justify-between">
              <div>
                <p className="text-xs text-gray-400">
                  Name
                </p>

                <h3
                  className="
                    text-sm
                    font-semibold
                    text-gray-800

                    mt-1
                  "
                >
                  {item.name}
                </h3>
              </div>

              <span className="text-gray-400">
                ○
              </span>
            </div>

            {/* CONTENT */}
            <div className="mt-4 space-y-3">
              <div>
                <p className="text-xs text-gray-400">
                  Invoice Date
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  {item.invoice}
                </p>
              </div>

              <div>
                <p className="text-xs text-gray-400">
                  API Key
                </p>

                <p className="text-sm text-gray-600 mt-1">
                  {item.api}
                </p>
              </div>
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
                  size={17}
                  className="text-blue-500"
                />
              </button>

              <button>
                <Trash2
                  size={17}
                  className="text-red-400"
                />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShipmentTable;