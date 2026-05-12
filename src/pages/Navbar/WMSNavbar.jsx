import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

function WMSNavbar({
  sidebarOpen,
  setSidebarOpen,
}) {
  return (
    <header
      className="
        fixed
        top-0
        left-0
        right-0

        h-[72px]

        bg-[#0B3FCF]

        shadow-md

        z-50
      "
    >
      <div
        className="
          h-full

          px-4
          sm:px-6
          lg:px-8

          flex
          items-center
          justify-between
        "
      >
        {/* LEFT SIDE */}
        <div
          className="
            flex items-center

            gap-2 sm:gap-4 lg:gap-10 xl:gap-16   /* ✅ improved spacing */
          "
        >
          {/* LOGO */}
          <h1
            className="
              text-white

              text-[28px]
              sm:text-[32px]

              font-bold

              text-[20px]
              sm:text-[24px]
              md:text-[28px]
              lg:text-[32px]
              xl:text-[34px]

              tracking-[2px] sm:tracking-[3px]

              whitespace-nowrap   /* ✅ prevents breaking */
              tracking-[3px]
            "
          >
            WMS
          </h1>

          {/* TOGGLE BUTTON */}
          <button
            onClick={() =>
              setSidebarOpen(!sidebarOpen)
            }
            className="
              text-white

              text-[28px]

              flex
              items-center
              justify-center

              hover:opacity-80

              transition-all
              duration-300
            "
          >
            <RxHamburgerMenu />
          </button>
        </div>

        {/* RIGHT SIDE */}
        <div
          className="
            bg-white

            rounded-full

            pl-2
            pr-3
            py-1.5

            flex
            items-center

            gap-2
            sm:gap-3

            shadow-sm

            min-w-fit   /* ✅ prevents shrink issue */
          "
        >
          {/* IMAGE */}
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="
              w-[32px] h-[32px]
              sm:w-[36px] sm:h-[36px]
              lg:w-[40px] lg:h-[40px]

              rounded-full

              object-cover
            "
          />

          {/* USER INFO */}
          <div className="hidden sm:block leading-tight">
            <h3
              className="
                text-[#1F2937]

                text-[12px]
                sm:text-[13px]
                lg:text-[14px]

                font-semibold
              "
            >
              Yosia Amado
            </h3>

            <p
              className="
                text-[#6B7280]

                text-[10px]
                sm:text-[11px]
              "
            >
              PT. Aman Sentosa
            </p>
          </div>

          {/* DROPDOWN */}
          <button
            className="
              text-[#6B7280]

              text-[16px]
              sm:text-[18px]

              flex
              items-center
              justify-center
            "
          >
            <IoChevronDown />
          </button>
        </div>
      </div>
    </header>
  );
}

export default WMSNavbar;