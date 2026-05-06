import { RxHamburgerMenu } from "react-icons/rx";
import { IoChevronDown } from "react-icons/io5";

function WMSNavbar() {
  return (
    <header className="w-full bg-[#0B3FCF] shadow-md">
      
      <div
        className="
          h-[72px]
          px-4
          sm:px-6
          lg:px-8
          flex
          items-center
          justify-between
        "
      >

        {/* LEFT SIDE */}
        <div className="flex items-center gap-4 sm:gap-6 lg:gap-22">

          {/* LOGO */}
          <h1
            className="
              text-white
              font-bold
              text-[32px]
              tracking-[3px]
            "
          >
            WMS
          </h1>

         {/* MENU ICON */}
<button
  className="
    text-white

    text-[26px]
    lg:text-[28px]

    ml-2
    sm:ml-4
    lg:ml-6

    flex
    items-center
    justify-center

    hover:opacity-80
    transition-all
    duration-300

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

            px-3
            py-2

            flex
            items-center
            gap-3

            shadow-sm
          "
        >

          {/* USER IMAGE */}
          <img
            src="https://i.pravatar.cc/100"
            alt="Profile"
            className="
              w-[40px]
              h-[40px]

              rounded-full
              object-cover
            "
          />

          {/* USER INFO */}
          <div className="hidden sm:block leading-tight">

            <h3
              className="
                text-[#1F2937]
                text-[14px]
                font-semibold
              "
            >
              Yosia Amado
            </h3>

            <p
              className="
                text-[#6B7280]
                text-[11px]
              "
            >
              PT. Aman Sentosa
            </p>

          </div>

          {/* DROPDOWN */}
          <button
            className="
              text-[#6B7280]
              text-[18px]

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