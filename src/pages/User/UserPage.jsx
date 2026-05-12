import { useNavigate } from "react-router-dom";

import {
  Search,
  ChevronDown,
  Pencil,
  Trash2,
  Plus,
} from "lucide-react";

function UserPage() {
  const navigate = useNavigate();

  const users = [
    {
      id: 1,
      username: "Lorem Ipsum",
      password: "Lorem Ipsum",
      email: "Lorem Ipsum",
      role: "Lorem Ipsum",
      warehouse: "Lorem Ipsum",
    },
    {
      id: 2,
      username: "Lorem Ipsum",
      password: "Lorem Ipsum",
      email: "Lorem Ipsum",
      role: "Lorem Ipsum",
      warehouse: "Lorem Ipsum",
    },
    {
      id: 3,
      username: "Lorem Ipsum",
      password: "Lorem Ipsum",
      email: "Lorem Ipsum",
      role: "Lorem Ipsum",
      warehouse: "Lorem Ipsum",
    },
    {
      id: 4,
      username: "Lorem Ipsum",
      password: "Lorem Ipsum",
      email: "Lorem Ipsum",
      role: "Lorem Ipsum",
      warehouse: "Lorem Ipsum",
    },
    {
      id: 5,
      username: "Lorem Ipsum",
      password: "Lorem Ipsum",
      email: "Lorem Ipsum",
      role: "Lorem Ipsum",
      warehouse: "Lorem Ipsum",
    },
  ];

  return (
    <div className="bg-[#F5F6FA] min-h-screen p-4 sm:p-6 lg:p-8">
      {/* TOP */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          Master - User
        </p>

        <h1 className="text-[28px] font-bold text-[#0B3FCF] mt-2">
          User List
        </h1>
      </div>

      {/* FILTER */}
      <div
        className="
          flex flex-col lg:flex-row
          gap-4
          lg:items-center lg:justify-between
          mb-6
        "
      >
        {/* SEARCH */}
        <div className="relative w-full lg:max-w-[420px]">
          <Search
            size={18}
            className="
              absolute
              left-4 top-1/2
              -translate-y-1/2
              text-gray-400
            "
          />

          <input
            type="text"
            placeholder="Search"
            className="
              w-full
              h-[46px]

              rounded-xl
              border border-gray-200

              bg-white

              pl-11 pr-4

              text-sm
              outline-none
            "
          />
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-3">
          {/* FILTER */}
          <button
            className="
              h-[46px]

              px-4

              rounded-xl

              bg-white
              border border-gray-200

              flex items-center gap-2

              text-sm text-gray-500
            "
          >
            Filter by Name

            <ChevronDown size={16} />
          </button>

          {/* ADD BUTTON */}
          <button
            onClick={() =>
              navigate("/create-user")
            }
            className="
              h-[46px]

              px-5

              rounded-xl

              bg-[#0B3FCF]

              flex items-center gap-2

              text-white
              text-sm
              font-medium
            "
          >
            Add User

            <Plus size={16} />
          </button>
        </div>
      </div>

      {/* TABLE */}
      <div
        className="
          bg-white

          rounded-2xl

          overflow-hidden

          border border-gray-200
        "
      >
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            {/* HEAD */}
            <thead className="bg-[#0B3FCF] text-white">
              <tr>
                <th className="px-5 py-4 text-left">
                  <input type="checkbox" />
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Username
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Password
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Email
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Role
                </th>

                <th className="px-5 py-4 text-left text-sm font-medium">
                  Warehouse
                </th>

                <th className="px-5 py-4 text-center text-sm font-medium">
                  Action
                </th>
              </tr>
            </thead>

            {/* BODY */}
            <tbody>
              {users.map((user) => (
                <tr
                  key={user.id}
                  className="border-b border-gray-100"
                >
                  <td className="px-5 py-4">
                    <input type="checkbox" />
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {user.username}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {user.password}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {user.email}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {user.role}
                  </td>

                  <td className="px-5 py-4 text-sm text-gray-600">
                    {user.warehouse}
                  </td>

                  <td
                    className="
                      px-5 py-4

                      flex items-center justify-center gap-4
                    "
                  >
                    <button className="text-blue-500">
                      <Pencil size={18} />
                    </button>

                    <button className="text-red-500">
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* FOOTER */}
        <div
          className="
            flex flex-col sm:flex-row
            gap-4
            items-center justify-between

            p-5
          "
        >
          <p className="text-sm text-gray-500">
            Showing 1 to 10 of 50 entries
          </p>

          {/* PAGINATION */}
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4, 5].map((page) => (
              <button
                key={page}
                className={`
                  w-[36px]
                  h-[36px]

                  rounded-lg

                  text-sm

                  ${
                    page === 1
                      ? "bg-[#0B3FCF] text-white"
                      : "bg-white border border-gray-200 text-gray-600"
                  }
                `}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserPage;