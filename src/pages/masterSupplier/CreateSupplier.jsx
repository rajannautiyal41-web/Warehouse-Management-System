import { useState } from "react";
import { ChevronDown } from "lucide-react";

function CreateSupplier() {
     const [open, setOpen] = useState(false);
     const [category, setCategory] = useState("Category");
      const options = ["Manufacture", "Trading", "Service"];
  const [form, setForm] = useState({
    company: "",
    mobile: "",
    address1: "",
    address2: "",
    city: "",
    province: "",
    postcode: "",
    country: "",
    email: "",
    webpage: "",
    pic: "",
    date: "",
    category: "",
    itemType: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Form Data:", form);
    alert("Supplier Added!");
  };

  return (
    <div className="bg-gray-50 p-3 sm:p-4 md:p-6 min-h-screen flex justify-center">
     <div className="w-full max-w-[1990px] 2xl:max-w-7xl xl:max-w-6xl lg:max-w-5xl md:max-w-3xl sm:max-w-full">
      {/*Main Card*/}
      <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 shadow-sm">

        {/* HEADER */}
       <div className="bg-white border border-gray-200 rounded-lg px-3 sm:px-4 py-3 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        
  {/* LEFT TITLE */}
  <h2 className="text-blue-600 font-semibold text-sm">
    Create Supplier
  </h2>

  {/* RIGHT ACTIONS */}
  <div className="flex flex-wrap items-center gap-2 sm:gap-3 justify-start sm:justify-end">

    {/* CATEGORY DROPDOWN */}
      <div className="relative">
            <div
              onClick={() => setOpen(!open)}
              className="flex items-center justify-between h-8 w-[120px] sm:w-[140px] md:w-[150px] px-3 text-xs border border-gray-300 rounded-md bg-white cursor-pointer"
            >
              <span className="text-gray-600">{category}</span>
              <ChevronDown size={14} className="text-blue-600" />
            </div>

            {open && (
              <div className="absolute right-0 mt-1 w-[150px] bg-white border border-gray-300 rounded-md shadow-md z-50">
                {options.map((item, i) => (
                  <div
                    key={i}
                    onClick={() => {
                      setCategory(item);
                      setForm({ ...form, category: item });
                      setOpen(false);
                    }}
                    className="px-3 py-1.5 text-xs hover:bg-gray-100 cursor-pointer"
                  >
                    {item}
                  </div>
                ))}
              </div>
            )}
          </div>

    {/* DISCARD BUTTON */}
    <button className="h-8 px-2 sm:px-3 text-xs border border-gray-300 rounded-md text-gray-500 whitespace-nowrap">
            Discard
          </button>
    {/* ADD BUTTON */}
    <button
            onClick={handleSubmit}
            className="h-8 px-3 text-xs bg-blue-600 text-white rounded-md"
          >
            Add Supplier
          </button>

  </div>
</div>

        {/* FORM */}
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-x-4 sm:gap-x-6 gap-y-4 sm:gap-y-5">

 <div>
          <label className="text-xs text-gray-600">Company</label>
          <input name="company" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Mobile No</label>
          <input name="mobile" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Adress 1</label>
          <input name="address1" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Email</label>
          <input name="email" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Adress 2</label>
          <input name="address2" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Email</label>
          <input name="email2" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">City</label>
          <input name="city" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Web Page</label>
          <input name="webpage" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Province</label>
          <input name="province" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">PIC</label>
          <input name="pic" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Post Code</label>
          <input name="postcode" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Date</label>
          <input type="date" name="date" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Country</label>
          <input name="country" onChange={handleChange} className="input" />
        </div>

        <div>
          <label className="text-xs text-gray-600">Item Type</label>
          <select name="itemType" onChange={handleChange} className="input">
            <option>Item Type</option>
            <option>Type 1</option>
            <option>Type 2</option>
          </select>
        </div>

      </div>
      </div>
      {/* STYLE */}
     <style>
{`
  .input {
    width: 100%;
    height: 40px;
    margin-top: 4px;
    padding: 0 10px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 13px;
    background: transparent;
    outline: none;
  }

  .input:focus {
    border-color: #2563eb;
  }
`}
</style>
   </div> 
    </div>
  );
}

export default CreateSupplier;