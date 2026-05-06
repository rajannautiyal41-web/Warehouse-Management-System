function WorkTogether() {
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

          {/* LEFT SIDE */}
          <div className="flex justify-center order-2 lg:order-1">

            <div
              className="
                relative

                w-[260px]
                h-[260px]

                sm:w-[320px]
                sm:h-[320px]

                md:w-[420px]
                md:h-[420px]

                lg:w-[420px]
                lg:h-[420px]

                xl:w-[520px]
                xl:h-[520px]
              "
            >

              {/* OUTER CIRCLE */}
              <div className="absolute inset-0 border border-dashed border-[#A7CEFC] rounded-full"></div>

              {/* INNER CIRCLE */}
              <div
                className="
                  absolute
                  inset-[52px]
                  md:inset-[75px]
                  border
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

                  w-10
                  h-10

                  md:w-16
                  md:h-16

                  bg-white
                  shadow-xl
                  rounded-xl

                  flex
                  items-center
                  justify-center
                "
              >
                <span className="text-blue-500 text-xl md:text-3xl">
                  ⌂
                </span>
              </div>

              {/* DOTS */}

              {/* TOP LEFT */}
              <div
                className="
                  absolute
                  top-1
                  left-10

                  md:top-2
                  md:left-16

                  w-5
                  h-5

                  md:w-10
                  md:h-10

                  bg-yellow-400
                  rounded-full
                "
              ></div>

              {/* TOP RIGHT */}
              <div
                className="
                  absolute
                  top-4
                  right-0

                  md:top-6
                  md:right-10

                  w-5
                  h-5

                  md:w-10
                  md:h-10

                  bg-blue-500
                  rounded-full
                "
              ></div>

              {/* LEFT */}
              <div
                className="
                  absolute
                  top-1/2
                  -left-3

                  md:-left-4

                  -translate-y-1/2

                  w-5
                  h-5

                  md:w-10
                  md:h-10

                  bg-red-400
                  rounded-full
                "
              ></div>

              {/* RIGHT */}
              <div
                className="
                  absolute
                  top-[65%]
                  right-0

                  md:right-6

                  w-5
                  h-5

                  md:w-10
                  md:h-10

                  bg-green-500
                  rounded-full
                "
              ></div>

              {/* BOTTOM LEFT */}
              <div
                className="
                  absolute
                  bottom-3
                  left-10

                  md:bottom-8
                  md:left-16

                  w-5
                  h-5

                  md:w-10
                  md:h-10

                  bg-blue-500
                  rounded-full
                "
              ></div>

              {/* BOTTOM CENTER */}
              <div
                className="
                  absolute
                  bottom-8
                  left-1/2
                  -translate-x-1/2

                  md:bottom-12

                  w-5
                  h-5

                  md:w-10
                  md:h-10

                  bg-orange-400
                  rounded-full
                "
              ></div>

              {/* INNER TOP */}
              <div
                className="
                  absolute
                  top-[22%]
                  left-1/2
                  -translate-x-1/2

                  w-4
                  h-4

                  md:w-8
                  md:h-8

                  bg-green-500
                  rounded-full
                "
              ></div>

              {/* INNER LEFT */}
              <div
                className="
                  absolute
                  top-1/2
                  left-[18%]
                  -translate-y-1/2

                  w-4
                  h-4

                  md:w-8
                  md:h-8

                  bg-blue-500
                  rounded-full
                "
              ></div>

              {/* INNER RIGHT */}
              <div
                className="
                  absolute
                  top-1/2
                  right-[18%]
                  -translate-y-1/2

                  w-4
                  h-4

                  md:w-8
                  md:h-8

                  bg-blue-500
                  rounded-full
                "
              ></div>

            </div>

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

            {/* TITLE */}
            <div className="relative inline-block">

              <h2
                className="
                  relative
                  z-10

          <p className="mt-6 text-gray-600 leading-8 max-w-lg">
            With whitepace,share your notes with your colleaues and collaborate on them. You can also publish a note to the internet and share the URL with others.
          </p>

                  sm:text-[42px]
                  sm:leading-[52px]

                  md:text-[54px]
                  md:leading-[65px]

                  lg:text-[58px]
                  lg:leading-[70px]

                  xl:text-[68px]
                  xl:leading-[82px]

                  font-bold
                  tracking-[-0.02em]
                  text-[#212529]
                "
              >
                Work together
              </h2>

              {/* YELLOW UNDERLINE */}
              <span
                className="
                  absolute
                  bottom-1
                  left-1/2
                  lg:left-[62%]
                  -translate-x-1/2
                  lg:translate-x-0

                  w-[140px]
                  md:w-[180px]
                  lg:w-[220px]

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

                text-[14px]
                leading-[24px]

                md:text-[16px]
                md:leading-[30px]

                text-[#4F4F4F]

                max-w-[620px]

                mx-auto
                lg:mx-0
              "
            >
              With whitepace, share your notes with your colleagues and
              collaborate on them. You can also publish a note to the
              internet and share the URL with others.
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
              Try it now →
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}

export default WorkTogether;