import { CalendarDays } from "lucide-react";
import { useState } from "react";

import WMSNavbar from "../../Navbar/WMSNavbar";
import WMSSidebar from "../../Main Layout/WMSSidebar";

function CreateShipment() {
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  return (
    <div className="min-h-screen bg-[#F5F6FA]">
      {/* SIDEBAR */}
      <WMSSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* MAIN */}
      <div className="md:ml-[260px]">
        {/* NAVBAR */}
        <WMSNavbar
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
        />

        {/* PAGE */}
        <main
          className="
            pt-[90px]

            px-4
            sm:px-5
            md:px-6
            lg:px-8

            pb-6
          "
        >
          <div
            className="
              bg-white

              rounded-2xl

              shadow-sm

              border border-gray-100

              overflow-hidden
            "
          >
            {/* HEADER */}
            <div
              className="
                flex flex-col
                sm:flex-row

                sm:items-center
                sm:justify-between

                gap-4

                px-4
                sm:px-6
                lg:px-8

                py-5

                border-b border-gray-100
              "
            >
              <h1
                className="
                  text-[22px]
                  sm:text-[24px]

                  font-semibold
                  text-[#2563EB]
                "
              >
                New Shipment
              </h1>

              {/* BUTTONS */}
              <div
                className="
                  flex items-center

                  gap-3

                  w-full
                  sm:w-auto
                "
              >
                <button
                  className="
                    flex-1
                    sm:flex-none

                    h-[44px]

                    px-5

                    border border-gray-200

                    rounded-xl

                    text-sm
                    text-gray-500

                    hover:bg-gray-50

                    transition
                  "
                >
                  Discard
                </button>

                <button
                  className="
                    flex-1
                    sm:flex-none

                    h-[44px]

                    px-5

                    bg-[#2563EB]
                    text-white

                    rounded-xl

                    text-sm
                    font-medium

                    hover:bg-blue-700

                    transition
                  "
                >
                  Add Shipment
                </button>
              </div>
            </div>

            {/* FORM */}
            <div
              className="
                p-4
                sm:p-6
                lg:p-8

                space-y-6
              "
            >
              {/* NAME */}
              <div
                className="
                  grid

                  grid-cols-1
                  lg:grid-cols-[180px_1fr]

                  gap-3
                  lg:gap-6

                  items-center
                "
              >
                <label
                  className="
                    text-[15px]
                    font-semibold
                    text-gray-700
                  "
                >
                  Name
                </label>

                <input
                  type="text"
                  placeholder="Enter shipment name"
                  className="
                    w-full
                    lg:max-w-[420px]

                    h-[50px]

                    border border-gray-200

                    rounded-xl

                    px-4

                    text-sm

                    outline-none

                    focus:border-[#2563EB]
                    focus:ring-2
                    focus:ring-blue-100

                    transition
                  "
                />
              </div>

              {/* DATE */}
              <div
                className="
                  grid

                  grid-cols-1
                  lg:grid-cols-[180px_1fr]

                  gap-3
                  lg:gap-6

                  items-center
                "
              >
                <label
                  className="
                    text-[15px]
                    font-semibold
                    text-gray-700
                  "
                >
                  Invoice Date
                </label>

                <div
                  className="
                    w-full
                    lg:max-w-[420px]

                    h-[50px]

                    border border-gray-200

                    rounded-xl

                    px-4

                    flex items-center gap-3

                    focus-within:border-[#2563EB]
                    focus-within:ring-2
                    focus-within:ring-blue-100

                    transition
                  "
                >
                  <CalendarDays
                    size={18}
                    className="text-gray-400"
                  />

                  <input
                    type="date"
                    className="
                      w-full

                      bg-transparent

                      outline-none

                      text-sm
                      text-gray-600
                    "
                  />
                </div>
              </div>

              {/* API KEY */}
              <div
                className="
                  grid

                  grid-cols-1
                  lg:grid-cols-[180px_1fr]

                  gap-3
                  lg:gap-6

                  items-center
                "
              >
                <label
                  className="
                    text-[15px]
                    font-semibold
                    text-gray-700
                  "
                >
                  API Key
                </label>

                <input
                  type="text"
                  placeholder="Enter API key"
                  className="
                    w-full

                    h-[50px]

                    border border-gray-200

                    rounded-xl

                    px-4

                    text-sm

                    outline-none

                    focus:border-[#2563EB]
                    focus:ring-2
                    focus:ring-blue-100

                    transition
                  "
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default CreateShipment;