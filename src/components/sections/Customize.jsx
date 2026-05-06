function Customize() {
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

          {/* LEFT IMAGE */}
          <div className="flex justify-center order-2 lg:order-1">

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

                xl:max-w-[680px]
                xl:h-[500px]

                bg-[#C4DEFD]
              "
            ></div>

          </div>

          {/* RIGHT CONTENT */}
          <div
            className="
              text-center
              lg:text-left
              order-1
              lg:order-2
            "
          >

            {/* HEADING */}
            <div className="relative inline-block">

              <h2
                className="
                  relative
                  z-10

                  text-[#212529]
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
                Customise it to
                <br />
                your needs
              </h2>

              {/* YELLOW UNDERLINE */}
              <span
                className="
                  absolute
                  right-0
                  bottom-2

                  w-[150px]
                  md:w-[200px]
                  lg:w-[250px]

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

                text-[#4F4F4F]

                text-[14px]
                leading-[24px]

                md:text-[16px]
                md:leading-[30px]

                max-w-[620px]

                mx-auto
                lg:mx-0
              "
            >
              Customise the app with plugins, custom themes and
              multiple text editors (Rich Text or Markdown). Or create
              your own scripts and plugins using the Extension API.
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

        </div>

      </div>

    </section>
  );
}

export default Customize;