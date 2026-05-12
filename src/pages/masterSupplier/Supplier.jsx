import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ChevronDown, Pencil, Trash2 } from "lucide-react";

function Supplier() {
  const [search, setSearch] = useState("");
  const [sortOpen, setSortOpen] = useState(false);
  const [sortType, setSortType] = useState("");
  const [selectedRows, setSelectedRows] = useState([]);
  const dropdownRef = useRef();
  const navigate = useNavigate();

  const [suppliers, setSuppliers] = useState([
    {
      name: "Supplier 1",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier1@gmail.com",
      value: "Rp. 20,000,000.00",
    },
    {
      name: "Supplier 2",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 3",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 4",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 5",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 6",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 7",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 8",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 9",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
    {
      name: "Supplier 10",
      category: "Category",
      address: "Jl. Pahlawan",
      city: "Central Jakarta",
      province: "DKI Jakarta",
      email: "supplier2@gmail.com",
      value: "+62310480138",
    },
  ]);

  const filteredSuppliers = suppliers
    .filter((s) => {
      const keyword = search.toLowerCase();
      return (
        s.name.toLowerCase().includes(keyword) ||
        s.category.toLowerCase().includes(keyword) ||
        s.address.toLowerCase().includes(keyword) ||
        s.city.toLowerCase().includes(keyword) ||
        s.province.toLowerCase().includes(keyword) ||
        s.email.toLowerCase().includes(keyword) ||
        s.value.toLowerCase().includes(keyword)
      );
    })
    .sort((a, b) => {
      if (sortType === "name-asc") {
        return a.name.localeCompare(b.name);
      }

      if (sortType === "name-desc") {
        return b.name.localeCompare(a.name);
      }

      if (sortType === "city") {
        return a.city.localeCompare(b.city);
      }

      if (sortType === "value") {
        const getNum = (val) =>
          parseInt(val.replace(/[^0-9]/g, "")) || 0;

        return getNum(b.value) - getNum(a.value);
      }

      return 0;
    });

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSortOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

 

  function FilterIcon() {
    return (
      <svg width="14" height="14" viewBox="0 0 20 20" fill="none">
        <path d="M3 5H17" stroke="white" strokeWidth="1.5"/>
        <path d="M6 10H14" stroke="white" strokeWidth="1.5"/>
        <path d="M9 15H11" stroke="white" strokeWidth="1.5"/>
      </svg>
    );
  }

  return (
    <div className="bg-gray-50 w-full p-3 sm:p-4 md:p-6 lg:p-8 xl:p-10">

      <h1 className="text-base sm:text-lg md:text-xl font-semibold mb-4">
        Supplier List
      </h1>

      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-3 mb-4">

        <div className="relative w-full lg:w-[320px]">
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
            🔍
          </span>
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-10 pl-10 pr-4 rounded-full bg-gray-100 text-sm"
          />
        </div>

        <div className="flex flex-wrap gap-2">

          <button
  onClick={() => navigate("/create-supplier")}
  className="h-10 px-4 bg-blue-600 text-white rounded-lg"
>
  Add Supplier +
</button>

          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setSortOpen(!sortOpen)}
              className="h-10 px-4 text-sm flex items-center gap-1 border rounded-lg"
            >
              Sort by <ChevronDown size={16} />
            </button>

            {sortOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow z-10">
                <button onClick={() => setSortType("name-asc")} className="block px-4 py-2 w-full text-left">Name (A-Z)</button>
                <button onClick={() => setSortType("name-desc")} className="block px-4 py-2 w-full text-left">Name (Z-A)</button>
                <button onClick={() => setSortType("city")} className="block px-4 py-2 w-full text-left">City</button>
                <button onClick={() => setSortType("value")} className="block px-4 py-2 w-full text-left">Value</button>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              if (selectedRows.length === 0) {
                alert("Select something");
                return;
              }

              const updated = suppliers.filter(
                (_, index) => !selectedRows.includes(index)
              );

              setSuppliers(updated);
              setSelectedRows([]);
            }}
            className="h-10 px-4 bg-blue-600 text-white rounded-lg"
          >
            BULK ({selectedRows.length})
          </button>
        </div>
      </div>

      <div className="bg-white border rounded-lg overflow-hidden">
        <div className="overflow-x-auto">

          <table className="min-w-[900px] w-full text-sm">

            <thead className="bg-blue-600 text-white">
  <tr>
    <th className="p-3">
      <input type="checkbox" />
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Company Name <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Category <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Address <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        City <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Province <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Email <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      <div className="flex items-center gap-1">
        Value <FilterIcon />
      </div>
    </th>

    <th className="p-3 text-left">
      Action
    </th>
  </tr>
</thead>

            <tbody>
              {filteredSuppliers.map((item, index) => (
                <tr key={index} className="border-b">
                  <td className="p-3">
                    <input type="checkbox" />
                  </td>

                  <td className="p-3">{item.name}</td>
                  <td className="p-3">{item.category}</td>
                  <td className="p-3">{item.address}</td>
                  <td className="p-3">{item.city}</td>
                  <td className="p-3">{item.province}</td>
                  <td className="p-3">{item.email}</td>
                  <td className="p-3">{item.value}</td>
                  <td className="p-3">
  <div className="flex items-center justify-center gap-2">

    {/* EDIT */}
    <button
      onClick={() => alert("Edit " + item.name)}
      className="
        w-8 h-8
        flex items-center justify-center
        bg-gray-100
        hover:bg-blue-100
        rounded
      "
    >
      <Pencil size={14} className="text-blue-600" />
    </button>

    {/* DELETE */}
    <button
      onClick={() => {
        const updated = suppliers.filter((_, i) => i !== index);
        setSuppliers(updated);
      }}
      className="
        w-8 h-8
        flex items-center justify-center
        bg-gray-100
        hover:bg-red-100
        rounded
      "
    >
      <Trash2 size={14} className="text-red-500" />
    </button>

  </div>
</td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      </div>
    </div>
  );
}

export default Supplier;