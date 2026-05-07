import {
  Search,
  Filter,
  Calendar,
  Pencil,
  Trash2,
} from "lucide-react";

function ItemsPage() {
  const items = [
    {
      id: 1,
      name: "Item1",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 2,
      name: "Item2",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
    {
      id: 3,
      name: "Item3",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    },
  ];

  return (
    <div className="flex-1 bg-white min-h-screen p-6 w-full">

      {/* TOP */}
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">

        <h1 className="text-2xl font-bold text-blue-600">
          SKU List
        </h1>

        <div className="flex flex-wrap items-center gap-3">

          {/* SEARCH */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
            />
            <input
              type="text"
              placeholder="Search item by name"
              className="pl-10 pr-4 py-2 border rounded-lg text-sm w-[240px] bg-white outline-none"
            />
          </div>

          <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            <Filter size={16} />
            Filter
          </button>

          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            Create SKU
          </button>
        </div>
      </div>

      {/* SECOND FILTER */}
      <div className="flex flex-wrap gap-4 mt-5 justify-end">

        <select className="border rounded-lg px-4 py-2 text-sm bg-white w-[180px]">
          <option>Type</option>
        </select>

        <div className="relative">
          <Calendar
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="date"
            className="border rounded-lg pl-10 pr-4 py-2 text-sm bg-white w-[220px]"
          />
        </div>
      </div>

      {/* CARDS */}
      <div className="mt-8 space-y-5 w-full">

        {items.map((item) => (
          <div
            key={item.id}
            className="
              bg-gray-100
              rounded-xl
              p-4
              flex items-center gap-6
              w-full
              hover:shadow-md transition
            "
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-[160px] h-[170px] object-cover rounded-lg"
            />

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-between">

              {/* TOP ROW */}
              <div className="flex justify-between items-start">

                <h2 className="text-base font-semibold text-gray-700">
                  {item.name}
                </h2>

                <div className="flex items-center gap-3">
                  <button className="text-blue-500">
                    <Pencil size={16} />
                  </button>
                  <button className="text-red-500">
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>

              {/* DETAILS */}
              <div className="grid grid-cols-2 gap-x-16 mt-3 text-xs text-gray-500">

                <div className="space-y-1">
                  <p>Brand</p>
                  <p>Variant 1</p>
                  <p>Color</p>
                  <p>Unit Weight</p>
                  <p>Unit Dimension</p>
                </div>

                <div className="space-y-1">
                  <p>Variant 1</p>
                  <p>Variant 2</p>
                  <p>Colour</p>
                  <p>UOM</p>
                  <p>UPC Unit</p>
                  <p>UPC Case</p>
                </div>

              </div>

              {/* PRICE */}
              <div className="mt-3">
                <p className="text-sm font-medium text-gray-700">
                  $ Price
                </p>
              </div>

            </div>
          </div>
        ))}

      </div>
    </div>
  );
}

export default ItemsPage;