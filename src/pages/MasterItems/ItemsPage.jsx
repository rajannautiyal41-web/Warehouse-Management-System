import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  Filter,
  Calendar,
  Pencil,
  Trash2,
} from "lucide-react";

function ItemsPage() {
    const navigate = useNavigate();
  const [showFilter, setShowFilter] = useState(false);

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
    <div className="bg-gray-50 w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-20 py-6">
      <div className="w-full">
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
              className="pl-10 pr-4 py-2 border rounded-lg text-sm w-full sm:w-[220px] lg:w-[260px] bg-white outline-none"
            />
          </div>

          {/* FILTER BUTTON */}
          <button
            onClick={() => setShowFilter(!showFilter)}
            className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
          >
            <Filter size={16} />
            Filter
          </button>
{/* Create SKU button */}
          <button
  onClick={() => navigate("/create-item")}
  className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm"
>
  Create SKU
</button>
        </div>
      </div>

      {/* ✅ YOUR ORIGINAL SECOND FILTER (UNCHANGED) */}
      <div className="flex flex-wrap gap-4 mt-5 justify-start lg:justify-end">

        <select className="border rounded-lg px-4 py-2 text-sm bg-white w-full sm:w-[160px]">
          <option>Type</option>
        </select>

        <div className="relative">
          <Calendar
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="date"
            className="border rounded-lg pl-10 pr-4 py-2 text-sm bg-white w-full sm:w-[200px]"
          />
        </div>
      </div>

      {/* ✅ NEW FILTER PANEL (ADDITIONAL) */}
      <div
        className={`transition-all duration-300 overflow-hidden ${
          showFilter ? "max-h-[200px] mt-5" : "max-h-0"
        }`}
      >
        <div className="bg-gray-100 p-6 rounded-xl">

          <p className="text-sm text-gray-500 mb-4"></p>

          <div className="flex flex-wrap gap-4">

            <input
              type="text"
              placeholder="Name"
              className="border rounded-lg px-4 py-2 text-sm bg-white w-full sm:w-[160px]"
            />

           {/* TYPE INPUT */}
<select className="border rounded-lg px-4 py-2 text-sm bg-white w-full sm:w-[160px]">
  <option>Type</option>
</select>

{/* DATE INPUT WITH ICON */}
<div className="relative">
  <Calendar
    size={16}
    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-700"
  />
  <input
    type="date"
    className="border rounded-lg pl-10 pr-4 py-2 text-sm bg-white w-full sm:w-[200px] text-gray-700"
  />
</div>

          </div>
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
              flex flex-col md:flex-row gap-4 md:gap-6
              w-full
              hover:shadow-md transition
            "
          >

            {/* IMAGE */}
            <img
              src={item.image}
              alt={item.name}
              className="w-full md:w-[160px] h-[160px] sm:h-[150px] object-cover object-cover rounded-lg"
            />

            {/* CONTENT */}
            <div className="flex-1 flex flex-col justify-between">

              <h2 className="text-base font-semibold text-gray-700">
                {item.name}
              </h2>

              <div className="mt-3 text-xs text-gray-600">

  <div className="grid grid-cols-[140px_1fr] gap-y-2 gap-x-4">

    <p className="text-gray-500">Brand</p>
    <p>Variant 1</p>

    <p className="text-gray-500">Variant</p>
    <p>Variant 2</p>

    <p className="text-gray-500">Color</p>
    <p>Colour</p>

    <p className="text-gray-500">Unit Weight</p>
    <p>UOM</p>

    <p className="text-gray-500">Unit Dimension</p>
    <p>UPC Unit</p>

    <p className="text-gray-500">UPC Case</p>
    <p>UPC Case</p>

  </div>

</div>

              <div className="flex items-center justify-between mt-4">

                <p className="text-sm font-medium text-gray-700 whitespace-nowrap">
                  $ Price
                </p>

                <div className="flex items-center gap-3 shrink-0">
                  <button className="text-blue-500 hover:scale-110 transition">
                    <Pencil size={18} />
                  </button>

                  <button className="text-red-500 hover:scale-110 transition">
                    <Trash2 size={18} />
                  </button>
                </div>

              </div>

            </div>
          </div>
        ))}

      </div>
      </div>
    </div>
  );
}

export default ItemsPage;