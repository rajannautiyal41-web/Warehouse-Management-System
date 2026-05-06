function Project() {
  return (
    <section className="w-full bg-white overflow-hidden">

      {/* MAIN CONTAINER */}
      <div className="max-w-[1920px] mx-auto">

        {/* INNER SECTION */}
        <div
          className="
            max-w-[1440px]
            mx-auto

            px-5
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-16

            py-16
            md:py-20
            lg:py-24
            xl:py-28

            grid
            md:grid-cols-2

            gap-12
            lg:gap-16
            xl:gap-24

            items-center
          "
        >

          {/* LEFT CONTENT */}
          <div
            className="
              text-center
              md:text-left
            "
          >

            {/* HEADING */}
            <div className="relative inline-block">

              <h2
                className="
                  text-[#212529]
                  font-bold

                  leading-[110%]

                  tracking-[-1px]

                  text-[36px]
                  sm:text-[48px]
                  md:text-[54px]
                  lg:text-[62px]
                  xl:text-[64px]

                  relative
                  z-10
                "
              >
                Project
                <br />
                Management
              </h2>

              {/* YELLOW UNDERLINE */}
              <span
                className="
                  absolute

                  left-1/2
                  md:left-[52%]

                  -translate-x-1/2

                  bottom-2
                  md:bottom-3

                  w-[180px]
                  sm:w-[220px]
                  md:w-[240px]
                  lg:w-[260px]

                  h-[10px]
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
                mt-5
                md:mt-6

                text-[#4F4F4F]

                leading-7
                md:leading-8

                text-[15px]
                md:text-[17px]

                max-w-[320px]
                sm:max-w-[520px]

                mx-auto
                md:mx-0
              "
            >
              Images, videos, PDFs and audio files are supported.
              Create math expressions and diagrams directly from the app.
              Take photos with the mobile app and save them to a note.
            </p>

            {/* BUTTON */}
            <button
              className="
                mt-8
                md:mt-10

                bg-[#4F9CF9]
                hover:bg-[#3388f5]

                transition-all
                duration-300

                text-white
                font-medium

                px-6
                md:px-7

                py-3
                md:py-4

                rounded-lg
                shadow-md

                cursor-pointer

                text-[15px]
                md:text-[16px]
              "
            >
              Get Started →
            </button>

          </div>

          {/* RIGHT SIDE BOX */}
          <div
            className="
              flex
              justify-center
              md:justify-end
            "
          >

            <div
              className="
                bg-[#C4DEFD]

                w-full

                max-w-[260px]
                sm:max-w-[420px]
                md:max-w-[480px]
                lg:max-w-[560px]
                xl:max-w-[685px]

                h-[180px]
                sm:h-[280px]
                md:h-[320px]
                lg:h-[360px]
                xl:h-[448px]

                shadow-sm
              "
            >
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;