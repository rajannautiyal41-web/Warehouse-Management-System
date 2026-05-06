function Work() {
  return (
    <section className="w-full bg-[#043873] overflow-hidden relative">

      {/* LEFT WAVES */}
      <div className="absolute left-0 top-0 h-full opacity-20 pointer-events-none">
        <svg
          width="320"
          height="100%"
          viewBox="0 0 320 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full"
        >
          <path d="M0 0C180 120 180 240 0 360" stroke="white" strokeWidth="2"/>
          <path d="M0 60C150 180 150 300 0 420" stroke="white" strokeWidth="2"/>
          <path d="M0 120C120 240 120 360 0 480" stroke="white" strokeWidth="2"/>
          <path d="M0 180C90 300 90 420 0 540" stroke="white" strokeWidth="2"/>
        </svg>
      </div>

      <div
        className="
          max-w-[1920px]
          mx-auto
          relative
          z-10

          px-5
          sm:px-8
          md:px-10
          lg:px-16
          xl:px-24
          2xl:px-32

          py-20
          md:py-24
          lg:py-28
          xl:py-32
        "
      >

        <div
          className="
            flex flex-col items-start

            md:max-w-[620px]
            lg:max-w-[760px]
            xl:max-w-[1000px]
          "
        >

          {/* TITLE */}
          <div className="relative inline-block">

            <h2
              className="
                relative
                z-10

                font-bold
                text-white
                tracking-[-0.02em]

                text-[42px]
                leading-[52px]

                sm:text-[52px]
                sm:leading-[62px]

                md:text-[64px]
                md:leading-[76px]

                lg:text-[72px]
                lg:leading-[84px]

                xl:text-[76px]
                xl:leading-[92px]
              "
            >
              Your work,
              <br className="sm:hidden" />
              everywhere you are
            </h2>

            {/* UNDERLINE */}
            <span
              className="
                absolute

                left-[110px]
                bottom-[4px]

                sm:left-[150px]
                md:left-[230px]
                lg:left-[290px]
                xl:left-[350px]

                w-[120px]
                sm:w-[160px]
                md:w-[220px]
                lg:w-[260px]

                h-[10px]
                md:h-[14px]

                bg-[#4F9CF9]

                rounded-full
                opacity-90
              "
            ></span>

          </div>

          {/* DESCRIPTION */}
          <p
            className="
              mt-6

              text-white/90

              text-[15px]
              leading-[28px]

              sm:text-[16px]

              md:text-[17px]
              md:leading-[32px]

              max-w-[900px]
            "
          >
            Access your notes from your computer, phone or tablet by
            synchronising with various services, including whitepace,
            Dropbox and OneDrive. The app is available on Windows,
            macOS, Linux, Android and iOS. A terminal app is also
            available!
          </p>

          {/* BUTTON */}
          <button
            className="
              mt-10

              bg-[#4F9CF9]
              hover:bg-[#3B82F6]

              transition-all
              duration-300

              text-white
              font-medium

              rounded-lg

              px-8
              py-4

              text-[15px]

              cursor-pointer
            "
          >
            Try Taskey →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Work;