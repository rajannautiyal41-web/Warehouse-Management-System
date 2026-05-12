import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

function WMSNavbar({ setCollapsed }) {
  return (
    <header
  className="
    bg-[#0B3FCF]
    shadow-md

    fixed top-0 right-0
    left-0 

    z-50
  "
>
      <div
        className="
          h-[64px] sm:h-[68px] lg:h-[72px]

          px-3 sm:px-6 lg:px-8 xl:px-12 2xl:px-16

          flex items-center justify-between
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
              font-bold

              text-[20px]
              sm:text-[24px]
              md:text-[28px]
              lg:text-[32px]
              xl:text-[34px]

              tracking-[2px] sm:tracking-[3px]

              whitespace-nowrap   /* ✅ prevents breaking */
            "
          >
            WMS
          </h1>

          {/* MENU ICON */}
          <button
            onClick={() => setCollapsed(prev => !prev)}
            className="
              text-white

              text-[22px]
              sm:text-[24px]
              lg:text-[26px]
              xl:text-[28px]

              ml-1 sm:ml-2 lg:ml-4   

              flex items-center justify-center

              hover:opacity-80
              transition-all duration-300

              cursor-pointer
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

            px-2 sm:px-3 lg:px-4
            py-1.5 sm:py-2

            flex items-center

            gap-2 sm:gap-3 lg:gap-4

            shadow-sm

            min-w-fit   /* ✅ prevents shrink issue */
          "
        >

          {/* USER IMAGE */}
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

              cursor-pointer
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