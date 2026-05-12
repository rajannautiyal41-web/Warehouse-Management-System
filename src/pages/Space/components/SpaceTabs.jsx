import { useNavigate, useLocation } from "react-router-dom";

function SpaceTabs() {
  const navigate = useNavigate();
  const location = useLocation();

  const activeClass =
    "pb-3 text-[#2563EB] text-sm font-medium border-b-2 border-[#2563EB]";

  const normalClass =
    "pb-3 text-sm text-gray-400 hover:text-[#2563EB] transition";

  return (
    <div
      className="
        border-b border-gray-200
        mb-6
      "
    >
      {/* TOP ROW */}
      <div
        className="
          flex items-center justify-between
          mb-6
        "
      >
        {/* TABS */}
        <div className="flex items-center gap-10">
          <button
            onClick={() => navigate("/space")}
            className={
              location.pathname === "/space"
                ? activeClass
                : normalClass
            }
          >
            All
          </button>

          <button
            onClick={() => navigate("/rack")}
            className={
              location.pathname === "/rack"
                ? activeClass
                : normalClass
            }
          >
            Rack
          </button>

          <button
            onClick={() => navigate("/slot")}
            className={
              location.pathname === "/slot"
                ? activeClass
                : normalClass
            }
          >
            Slot
          </button>

          <button
            onClick={() => navigate("/bin")}
            className={
              location.pathname === "/bin"
                ? activeClass
                : normalClass
            }
          >
            Bin
          </button>
        </div>

        {/* SORT */}
        <button
          className="
            text-sm
            text-gray-600
          "
        >
          Sort by ↓
        </button>
      </div>
    </div>
  );
}

export default SpaceTabs;