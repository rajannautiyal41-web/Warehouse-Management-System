import { useState } from "react";
import { Upload } from "lucide-react";
import 
function CreateItem() {
  const [suspended, setSuspended] = useState(true);
  const [items, setItems] = useState([]);
  const [images, setImages] = useState([null, null, null]);
  const [activeTab, setActiveTab] = useState("detail");

  const [form, setForm] = useState({
    sku: "",
    category: "",
    price: "",
  });

  const handleAddItem = () => {
    if (!form.sku) {
      alert("SKU is required");
      return;
    }
   setItems([form, ...items]);
 
    // reset form
    setForm({
      sku: "",
      category: "",
      price: "",
    });
  };
 

  const handleImageUpload = (e, index) => {
    const file = e.target.files[0];
    if (!file) return;
 
    const validTypes = ["image/jpeg", "image/png", "image/jpg"];
    if (!validTypes.includes(file.type)) {
      alert("Only JPG, JPEG, PNG files are allowed");
      return;
    }
 
    const updatedImages = [...images];
    updatedImages[index] = file;
    setImages(updatedImages);
  };
 
 
 
 return (
  <div
    className="
      bg-gray-50 w-full
      p-2 sm:p-3 md:p-5 lg:p-6 xl:p-8 2xl:px-16
    "
  >
 
      {/* HEADER */}
     <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4">
 
        <h1 className="text-lg font-semibold text-blue-600">
          Create SKU
        </h1>
 
        <div className="flex flex-wrap items-center gap-3">
 
          {/* TOGGLE */}
          <div className="flex items-center gap-2">
            <div
              onClick={() => setSuspended(!suspended)}
              className={`w-10 h-5 flex items-center rounded-full cursor-pointer ${
                suspended ? "bg-blue-500" : "bg-gray-300"
              }`}
            >
              <div
                className={`bg-white w-4 h-4 rounded-full shadow transform ${
                  suspended ? "translate-x-5" : "translate-x-1"
                }`}
              />
            </div>
            <span className="text-sm text-black">Suspended</span>
          </div>
 
          {/* BUTTONS */}
          <button className="px-4 py-1.5 rounded-md text-sm border border-gray-200 text-gray-500 bg-white">
            Discard
          </button>
 
          <button
  onClick={handleAddItem}
  className="px-4 py-1.5 rounded-md text-sm bg-blue-600 text-white"
>
  Add Item
</button>
        </div>
      </div>
 
 
      {/* FORM CARD */}
      {items.length > 0 && (
  <div className="bg-white border border-gray-200 rounded-lg p-4 mb-6">
 
    <p className="text-sm font-semibold mb-3 text-black">
      Added Items
    </p>
 
    {items.map((item, index) => (
      <div
        key={index}
        className="flex justify-between border border-gray-200 rounded-md px-3 py-2 text-sm mb-2"
      >
        <span><b>SKU:</b> {item.sku}</span>
        <span><b>Category:</b> {item.category}</span>
        <span><b>Price:</b> {item.price}</span>
      </div>
    ))}
 
  </div>
)}
      <div className="bg-white rounded-lg border border-gray-200 p-6">
 
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
          {/* LEFT */}
          <div className="space-y-4">
 
            <div>
              <label className="text-xs text-black">SKU</label>
              <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
            </div>
 
            <div>
              <label className="text-xs text-black">Category</label>
              <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
            </div>
 
            <div>
              <label className="text-xs text-black">Price</label>
              <div className="flex gap-2 mt-1">
                <select className="border border-gray-300 rounded-md px-2 text-sm text-black bg-white">
                  <option>IDR</option>
                </select>
                <input className="w-full sm:flex-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
              </div>
            </div>
 
          </div>
 
          {/* RIGHT */}
          <div className="space-y-4">
 
            <div>
              <label className="text-xs text-black">Product Description</label>
              <textarea rows={5} className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white resize-none" />
            </div>
 
            <div>
              <label className="text-xs text-black">Brand</label>
              <select className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white">
                <option>Select Brand</option>
              </select>
            </div>
 
          </div>
        </div>
      </div>
 
      {/* TABS */}
      <div className="bg-white rounded-lg border border-gray-200 mt-6">
 
        <div className="flex gap-4 px-4 pt-4 border-b border-gray-200 text-sm overflow-x-auto whitespace-nowrap">
         <button
  onClick={() => setActiveTab("detail")}
  className={`shrink-0 ${
    activeTab === "detail"
      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
      : "text-gray-400 pb-2"
  }`}
>
  Detail
</button>
 
<button
  onClick={() => setActiveTab("dimension")}
  className={`shrink-0 ${
    activeTab === "dimension"
      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
      : "text-gray-400 pb-2"
  }`}
>
  Dimension
</button>
 
<button
  onClick={() => setActiveTab("costing")}
  className={`shrink-0 ${
    activeTab === "costing"
      ? "text-blue-600 border-b-2 border-blue-600 pb-2"
      : "text-gray-400 pb-2"
  }`}
>
  Costing
</button>
        </div>
 
        <div className="p-6">
 
          {/* DETAIL TAB */}
          {activeTab === "detail" && (
            <>
              {/* GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
 
                <div>
                  <label className="text-xs text-black">Variant 1</label>
                  <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
                </div>
 
                <div>
                  <label className="text-xs text-black">Colour</label>
                  <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
                </div>
 
                <div>
                  <label className="text-xs text-black">Material</label>
                  <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
                </div>
 
                <div>
                  <label className="text-xs text-black">Weight (g)</label>
                  <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
                </div>
 
                <div>
                  <label className="text-xs text-black">UOM</label>
                  <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
                </div>
 
                <div>
                  <label className="text-xs text-black">Qty / Case</label>
                  <input className="w-full mt-1 border border-gray-300 rounded-md px-3 py-2 text-sm text-black bg-white" />
                </div>
 
              </div>
 
              {/* RADIO */}
              <div className="mt-6 space-y-3 text-sm text-gray-600">
                {["Serial Number", "Expiry Date", "Batch Number", "Manufacturing Date"].map((item, i) => (
                  <label key={i} className="flex items-center gap-2">
                    <input type="radio" name="option" className="accent-blue-600" />
                    {item}
                  </label>
                ))}
              </div>
 
              {/* UPLOAD */}
              <div className="mt-6">
                <p className="text-sm text-black mb-3">Upload Image</p>
 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {[0, 1, 2].map((i) => (
                    <div key={i} className="flex flex-col items-center">
 
                      <div className="w-full h-40 border border-gray-300 rounded-md bg-gray-50 flex items-center justify-center overflow-hidden">
                        {images[i] && (
                          <img src={URL.createObjectURL(images[i])} className="h-full object-cover" />
                        )}
                      </div>
 
                      <input
                        type="file"
                        accept=".jpg,.jpeg,.png"
                        id={`upload-${i}`}
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, i)}
                      />
 
                      <label
                        htmlFor={`upload-${i}`}
                        className="mt-3 px-4 py-1.5 bg-gray-600 text-white text-sm rounded-md flex items-center gap-2 cursor-pointer"
                      >
                        <Upload size={16} /> Upload
                      </label>
                    </div>
                  ))}
                </div>
 
                <p className="text-red-500 text-xs mt-3">
                  Requirement : .jpeg .jpg .png (300×300px)
                </p>
              </div>
            </>
          )}
 
        {/* DIMENSION TAB */}
{activeTab === "dimension" && (
  <div className="space-y-8">
 
    {/* UNIT DIMENSION */}
    <div>
      <p className="text-sm text-black mb-2">Unit Dimension</p>
 
      <div className="flex flex-col xl:flex-row gap-6">
 
        {/* LEFT: P L T */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full xl:w-auto">
 
          {["P", "L", "T"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-sm text-black">{label}:</span>
              <input className="w-full sm:w-24 h-10 border border-gray-300 rounded-md px-2 text-sm text-black bg-white" />
            </div>
          ))}
 
        </div>
 
        {/* RIGHT: BIG INPUT */}
        <div className="w-full xl:flex-1">
          <label className="text-xs text-black">
            Weight Unit / Weight Case
          </label>
          <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-3 text-sm text-black bg-white" />
        </div>
 
      </div>
    </div>
 
    {/* CASE DIMENSION */}
    <div>
      <p className="text-sm text-black mb-2">Case Dimension</p>
 
      <div className="flex flex-col xl:flex-row gap-6">
 
        {/* LEFT: P L T */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full xl:w-auto">
 
          {["P", "L", "T"].map((label) => (
            <div key={label} className="flex items-center gap-2">
              <span className="text-sm text-black">{label}:</span>
              <input className="w-full sm:w-24 h-10 border border-gray-300 rounded-md px-2 text-sm text-black bg-white" />
            </div>
          ))}
 
        </div>
 
        {/* RIGHT: BIG INPUT */}
        <div className="w-full xl:flex-1">
          <label className="text-xs text-black">
            CBM Seas | Gross Vol Air
          </label>
          <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-3 text-sm text-black bg-white" />
        </div>
 
      </div>
    </div>
 
  </div>
)}
          {/* COSTING */}
          {activeTab === "costing" && (
  <div className="space-y-6">
 
    {/* ROW 1 */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
 
      {/* LEFT */}
      <div>
        <label className="text-xs text-black">Cost Shipment Sea</label>
        <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-3" />
      </div>
 
      {/* RIGHT */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
       
        <div>
          <label className="text-xs text-black">S&H Sea</label>
          <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-2" />
        </div>
 
        <div>
          <label className="text-xs text-black">S&H Air</label>
          <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-2" />
        </div>
 
        <div>
          <label className="text-xs text-black">S&H BC</label>
          <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-2" />
        </div>
 
      </div>
 
    </div>
 
    {/* ROW 2 */}
    <div className="grid grid-cols-2 gap-6">
 
      {/* LEFT */}
      <div>
        <label className="text-xs text-black">Cost Shipment Air</label>
        <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-3" />
      </div>
 
      {/* RIGHT */}
      <div>
        <label className="text-xs text-black">Tax Value</label>
        <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-3" />
      </div>
 
    </div>
 
    {/* ROW 3 */}
    <div className="grid grid-cols-2 gap-6">
 
      {/* EMPTY LEFT (for alignment) */}
      <div></div>
 
      {/* RIGHT */}
      <div>
        <label className="text-xs text-black">Cost Shipment Custom</label>
        <input className="w-full h-10 mt-1 border border-gray-300 rounded-md px-3" />
      </div>
 
    </div>
 
  </div>
)}
 
        </div>
      </div>
 
    </div>
  );
}
 
export default CreateItem;