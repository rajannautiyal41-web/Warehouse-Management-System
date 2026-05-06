import { ChevronDown, Menu } from "lucide-react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="w-full bg-[#043873]">
      
      {/* CONTAINER */}
      <div className="max-w-[1920px] mx-auto">

        {/* NAVBAR INNER */}
        <div
          className="
            max-w-[1440px]
            mx-auto
            flex
            items-center
            justify-between

            px-4
            sm:px-6
            md:px-8
            lg:px-10
            xl:px-14

            py-4
            md:py-5
          "
        >

          {/* LOGO */}
          <div className="text-white font-bold tracking-wide">

            {/* 1920 / 1440 */}
            <h1 className="hidden lg:block text-[28px]">
              whitepace
            </h1>

            {/* TABLET */}
            <h1 className="hidden md:block lg:hidden text-[24px]">
              whitepace
            </h1>

            {/* MOBILE */}
            <h1 className="block md:hidden text-[20px]">
              whitepace
            </h1>

          </div>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden xl:flex items-center gap-10 text-white text-[16px]">

            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-200 transition-all duration-300"
            >
              Products
              <ChevronDown size={16} />
            </a>

            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-200 transition-all duration-300"
            >
              Solutions
              <ChevronDown size={16} />
            </a>

            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-200 transition-all duration-300"
            >
              Resources
              <ChevronDown size={16} />
            </a>

            <a
              href="#"
              className="flex items-center gap-1 hover:text-blue-200 transition-all duration-300"
            >
              Pricing
              <ChevronDown size={16} />
            </a>

          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3 md:gap-4">

            {/* LOGIN BUTTON */}
            <Link to="/login" className="hidden
                lg:block
                bg-[#FFE492]
                text-black
                px-6
                py-3
                rounded-lg
                text-[16px]
                font-medium
                hover:bg-[#ffd86b]
                transition-all
                duration-300
                cursor-pointer">
                        Log in
                      </Link>

            {/* TRY BUTTON */}
            <button
              className="
                hidden
                md:block
                bg-[#4F9CF9]
                text-white

                px-5
                lg:px-6

                py-3
                rounded-lg

                text-[14px]
                lg:text-[16px]

                font-medium

                hover:bg-[#3388f5]
                transition-all
                duration-300
                cursor-pointer
              "
            >
              Try Whitepace free →
            </button>

            {/* HAMBURGER */}
            <button className="text-white xl:hidden">
              <Menu
                className="
                  w-8 h-8
                  md:w-10 md:h-10
                "
              />
            </button>

          </div>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;