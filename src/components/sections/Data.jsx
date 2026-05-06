function Data() {
  return (
    <section className="w-full bg-white overflow-hidden">

      <div
        className="
          max-w-[1920px]
          mx-auto

          px-4
          sm:px-6
          md:px-8
          lg:px-16
          xl:px-24

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
            items-center

            gap-14
            lg:gap-20
            xl:gap-28
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              order-2
              lg:order-1

              text-center
              lg:text-left
            "
          >

            {/* TITLE */}
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

                  sm:text-[44px]
                  sm:leading-[52px]

                  md:text-[54px]
                  md:leading-[65px]

                  lg:text-[60px]
                  lg:leading-[72px]

                  xl:text-[68px]
                  xl:leading-[82px]
                "
              >
                100% your data
              </h2>

              {/* UNDERLINE */}
              <span
                className="
                  absolute
                  left-1/2
                  lg:left-24
                  -translate-x-1/2
                  lg:translate-x-0

                  bottom-1

                  w-[120px]
                  sm:w-[150px]
                  md:w-[180px]

                  h-[8px]
                  md:h-[10px]

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

                text-[15px]
                leading-[28px]

                md:text-[16px]
                md:leading-[30px]

                max-w-[620px]

                mx-auto
                lg:mx-0
              "
            >
              The app is open source and your notes are saved
              to an open format, so you'll always have access
              to them. Uses End-To-End Encryption (E2EE) to
              secure your notes and ensure no-one but yourself
              can access them.
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

                text-[15px]

                px-7
                py-4

                rounded-lg
                shadow-md

                cursor-pointer
              "
            >
              Read more →
            </button>

          </div>

          {/* RIGHT ILLUSTRATION */}
          <div
            className="
              order-1
              lg:order-2

              flex
              justify-center
            "
          >

            <div
              className="
                relative

                w-[260px]
                h-[260px]

                sm:w-[320px]
                sm:h-[320px]

                md:w-[420px]
                md:h-[420px]

                lg:w-[500px]
                lg:h-[500px]
              "
            >

              {/* OUTER DASH CIRCLE */}
              <div
                className="
                  absolute
                  inset-0

                  border-2
                  border-dashed
                  border-[#A7CEFC]

                  rounded-full
                "
              ></div>

              {/* CENTER BOX */}
              <div
                className="
                  absolute
                  left-1/2
                  top-1/2
                  -translate-x-1/2
                  -translate-y-1/2

                  w-20
                  h-20

                  sm:w-24
                  sm:h-24

                  md:w-28
                  md:h-28

                  bg-white
                  rounded-2xl
                  shadow-lg

                  border
                  border-[#E5E5E5]

                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-[32px] md:text-[42px] text-[#4F9CF9]">
                  ⌂
                </span>
              </div>

              {/* TOP LEFT */}
              <div
                className="
                  absolute
                  left-2
                  top-8

                  sm:left-6
                  sm:top-6

                  md:left-10
                  md:top-8

                  w-14
                  h-14

                  md:w-16
                  md:h-16

                  bg-white
                  rounded-2xl
                  shadow-md

                  flex
                  items-center
                  justify-center

                  text-[24px]
                "
              >
                🔑
              </div>

              {/* TOP RIGHT */}
              <div
                className="
                  absolute
                  right-2
                  top-8

                  sm:right-6
                  sm:top-6

                  md:right-10
                  md:top-8

                  w-14
                  h-14

                  md:w-16
                  md:h-16

                  bg-white
                  rounded-2xl
                  shadow-md

                  flex
                  items-center
                  justify-center

                  text-[24px]
                "
              >
                💾
              </div>

              {/* LEFT */}
              <div
                className="
                  absolute
                  left-0
                  top-1/2
                  -translate-y-1/2

                  w-14
                  h-14

                  md:w-16
                  md:h-16

                  bg-white
                  rounded-2xl
                  shadow-md

                  flex
                  items-center
                  justify-center

                  text-[24px]
                "
              >
                🛡️
              </div>

              {/* RIGHT */}
              <div
                className="
                  absolute
                  right-0
                  top-1/2
                  -translate-y-1/2

                  w-14
                  h-14

                  md:w-16
                  md:h-16

                  bg-white
                  rounded-2xl
                  shadow-md

                  flex
                  items-center
                  justify-center

                  text-[24px]
                "
              >
                🔒
              </div>

              {/* BOTTOM */}
              <div
                className="
                  absolute
                  left-1/2
                  bottom-0
                  -translate-x-1/2

                  w-14
                  h-14

                  md:w-16
                  md:h-16

                  bg-white
                  rounded-2xl
                  shadow-md

                  flex
                  items-center
                  justify-center

                  text-[24px]
                "
              >
                ☁️
              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Data;