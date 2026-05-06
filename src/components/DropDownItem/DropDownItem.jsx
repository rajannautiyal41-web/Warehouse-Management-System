import { ChevronDown } from "lucide-react";

function DropdownItem({ icon, label, open, onClick }) {
  return (
    <div>
      {/* Parent */}
      <div
        onClick={onClick}
        className="flex items-center justify-between px-4 py-3 rounded-lg cursor-pointer text-gray-600 hover:text-blue-600 transition"
      >
        <div className="flex items-center gap-3">
          {icon}
          <span>{label}</span>
        </div>

        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </div>

      {/* Dropdown */}
      {open && (
        <div className="ml-10 mt-2 space-y-2 text-sm text-gray-500">
          <div className="hover:text-blue-600 cursor-pointer">Option 1</div>
          <div className="hover:text-blue-600 cursor-pointer">Option 2</div>
        </div>
      )}
    </div>
  );
}

export default DropdownItem;