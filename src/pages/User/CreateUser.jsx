import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CreateUser() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
    role: "",
    warehouse: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);

    navigate("/users");
  };

  return (
    <div className="bg-[#F5F6FA] min-h-screen p-4 sm:p-6 lg:p-8">
      {/* TOP */}
      <div className="mb-6">
        <p className="text-gray-400 text-sm">
          Master - User - Create
        </p>

        <h1 className="text-[28px] font-bold text-[#0B3FCF] mt-2">
          New User
        </h1>
      </div>

      {/* CARD */}
      <div
        className="
          bg-white

          rounded-2xl

          border border-gray-200

          shadow-sm

          overflow-hidden
        "
      >
        {/* HEADER */}
        <div
          className="
            flex flex-col sm:flex-row
            items-start sm:items-center
            justify-between

            gap-4

            px-6 py-5

            border-b border-gray-100
          "
        >
          <h2 className="text-xl font-semibold text-[#0B3FCF]">
            New User
          </h2>

          <div className="flex items-center gap-3">
            <button
              onClick={() => navigate("/users")}
              className="
                h-[42px]

                px-5

                rounded-lg

                border border-gray-200

                text-sm
                text-gray-500

                bg-white
              "
            >
              Discard
            </button>

            <button
              onClick={handleSubmit}
              className="
                h-[42px]

                px-5

                rounded-lg

                bg-[#0B3FCF]

                text-sm
                text-white
                font-medium
              "
            >
              Add User
            </button>
          </div>
        </div>

        {/* FORM */}
        <div className="p-6 lg:p-10">
          <div className="space-y-6">
            {/* USERNAME */}
            <div
              className="
                grid grid-cols-1
                lg:grid-cols-[140px_1fr]

                gap-3 lg:gap-8

                items-center
              "
            >
              <label className="text-[16px] font-medium text-gray-700">
                Username
              </label>

              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                className="
                  w-full
                  h-[48px]

                  rounded-lg

                  border border-gray-300

                  px-4

                  outline-none
                "
              />
            </div>

            {/* PASSWORD */}
            <div
              className="
                grid grid-cols-1
                lg:grid-cols-[140px_1fr]

                gap-3 lg:gap-8

                items-center
              "
            >
              <label className="text-[16px] font-medium text-gray-700">
                Password
              </label>

              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="
                  w-full
                  h-[48px]

                  rounded-lg

                  border border-gray-300

                  px-4

                  outline-none
                "
              />
            </div>

            {/* EMAIL */}
            <div
              className="
                grid grid-cols-1
                lg:grid-cols-[140px_1fr]

                gap-3 lg:gap-8

                items-center
              "
            >
              <label className="text-[16px] font-medium text-gray-700">
                Email
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="
                  w-full
                  h-[48px]

                  rounded-lg

                  border border-gray-300

                  px-4

                  outline-none
                "
              />
            </div>

            {/* ROLE */}
            <div
              className="
                grid grid-cols-1
                lg:grid-cols-[140px_1fr]

                gap-3 lg:gap-8

                items-center
              "
            >
              <label className="text-[16px] font-medium text-gray-700">
                Role
              </label>

              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="
                  w-full
                  h-[48px]

                  rounded-lg

                  border border-gray-300

                  px-4

                  outline-none
                "
              />
            </div>

            {/* WAREHOUSE */}
            <div
              className="
                grid grid-cols-1
                lg:grid-cols-[140px_1fr]

                gap-3 lg:gap-8

                items-center
              "
            >
              <label className="text-[16px] font-medium text-gray-700">
                Warehouse
              </label>

              <input
                type="text"
                name="warehouse"
                value={formData.warehouse}
                onChange={handleChange}
                className="
                  w-full
                  h-[48px]

                  rounded-lg

                  border border-gray-300

                  px-4

                  outline-none
                "
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateUser;