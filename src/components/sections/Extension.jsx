function Extension() {
  return (
    <section className="w-full bg-[#043873] overflow-hidden">

      <div
        className="
          max-w-[1920px]
          mx-auto

          px-6
          md:px-10
          lg:px-16
          xl:px-24
          2xl:px-32

          py-16
          md:py-20
          lg:py-24
          xl:py-28
        "
      >

        <div
          className="
            grid
            lg:grid-cols-2
            gap-14
            xl:gap-24
            items-center
          "
        >

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* HEADING */}
            <div className="relative inline-block">

              <h2
                className="
                  relative
                  z-10

                  text-white
                  font-bold
                  tracking-[-0.02em]

                  text-[36px]
                  leading-[44px]

                  sm:text-[42px]
                  sm:leading-[52px]

                  md:text-[54px]
                  md:leading-[65px]

                  lg:text-[58px]
                  lg:leading-[70px]

                  xl:text-[68px]
                  xl:leading-[82px]
                "
              >
                Use as Extension
              </h2>

              {/* YELLOW UNDERLINE */}
              <span
                className="
                  absolute
                  left-1/2
                  lg:left-[34%]
                  -translate-x-1/2
                  lg:translate-x-0

                  bottom-1

                  w-[140px]
                  md:w-[180px]
                  lg:w-[230px]

                  h-[8px]
                  md:h-[12px]

                  bg-[#FFE492]
                  rounded-full
                  z-0
                "
              ></span>

            </div>

            {/* DESCRIPTION */}
            <p
              className="
                mt-6

                text-[#FFFFFF]

                text-[14px]
                leading-[24px]

                md:text-[16px]
                md:leading-[30px]

                max-w-[620px]

                mx-auto
                lg:mx-0
              "
            >
              Use the web clipper extension, available on Chrome and
              Firefox, to save web pages or take screenshots as notes.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-8

                bg-[#4F9CF9]
                hover:bg-[#3388f5]

                transition-all
                duration-300

                text-white
                font-medium

                rounded-lg

                px-7
                py-4

                md:px-8
                md:py-4

                shadow-md
                cursor-pointer
              "
            >
              Let's Go →
            </button>

          </div>

          {/* RIGHT BOX */}
          <div className="flex justify-center">

            <div
              className="
                w-full

                max-w-[280px]
                h-[200px]

                sm:max-w-[420px]
                sm:h-[280px]

                md:max-w-[520px]
                md:h-[360px]

                lg:max-w-[560px]
                lg:h-[380px]

                xl:max-w-[690px]
                xl:h-[480px]

                bg-[#C4DEFD]
              "
            ></div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Extension;