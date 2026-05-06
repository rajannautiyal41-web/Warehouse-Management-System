import { FaApple, FaGoogle } from "react-icons/fa";
import { SiMicrosoft, SiSlack } from "react-icons/si";

function Sponsors() {
  return (
    <section className="w-full bg-white overflow-hidden">

      <div
        className="
          max-w-[1920px]
          mx-auto

          px-6
          md:px-10
          lg:px-16
          xl:px-24

          py-16
          md:py-20
          lg:py-24
        "
      >

        {/* HEADING */}
        <div className="text-center">

          <div className="relative inline-block">

            <h2
              className="
                relative
                z-10

                text-[#212529]
                font-bold

                text-[34px]
                leading-[42px]

                md:text-[44px]
                md:leading-[52px]

                lg:text-[60px]
                lg:leading-[72px]
              "
            >
              Our sponsors
            </h2>

            {/* UNDERLINE */}
            <span
              className="
                absolute
                left-1/2
                -translate-x-1/2
                bottom-1

                w-[120px]
                md:w-[150px]
                lg:w-[180px]

                h-[8px]
                md:h-[10px]

                bg-[#FFE492]
                rounded-full
                z-0
              "
            ></span>

          </div>

        </div>

        {/* LOGOS */}
        <div
          className="
            mt-14
            md:mt-16
            lg:mt-20

            flex
            flex-col
            lg:flex-row

            items-center
            justify-center

            gap-12
            md:gap-14
            lg:gap-24
            xl:gap-32
          "
        >

          {/* APPLE */}
          <div className="text-black text-[52px] md:text-[64px] lg:text-[72px]">
            <FaApple />
          </div>

          {/* MICROSOFT */}
          <div className="flex items-center gap-3">
            <SiMicrosoft className="text-[42px] md:text-[50px] lg:text-[58px] text-[#7FBA00]" />

            <span
              className="
                text-[#6B6B6B]
                font-semibold

                text-[28px]
                md:text-[34px]
                lg:text-[40px]
              "
            >
              Microsoft
            </span>
          </div>

          {/* SLACK */}
          <div className="flex items-center gap-3">
            <SiSlack className="text-[42px] md:text-[50px] lg:text-[58px] text-[#4A154B]" />

            <span
              className="
                text-black
                font-bold

                text-[28px]
                md:text-[34px]
                lg:text-[40px]
              "
            >
              slack
            </span>
          </div>

          {/* GOOGLE */}
          <div className="text-[52px] md:text-[64px] lg:text-[72px]">
            <FaGoogle className="text-[#4285F4]" />
          </div>

        </div>

      </div>

    </section>
  );
}

export default Sponsors;