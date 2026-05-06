import { Link } from "react-router-dom";
function Hero() {
  return (
    <section className="w-full bg-[#043873] overflow-hidden">

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-[1920px]
          mx-auto
        "
      >

        {/* HERO INNER */}
        <div
          className="
            max-w-[1440px]
            mx-auto

            px-5
            sm:px-8
            md:px-10
            lg:px-14
            xl:px-16

            pt-10
            md:pt-16
            lg:pt-20

            pb-16
            md:pb-20
            lg:pb-24

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
              relative
              z-10

              text-center
              md:text-left
            "
          >

            {/* HEADING */}
            <h1
  className="
    text-white
    font-bold

    leading-[110%]

    tracking-[-1.5px]

    text-[38px]
    sm:text-[52px]
    md:text-[54px]
    lg:text-[64px]
    xl:text-[64px]

    max-w-[650px]
  "
>
  Get More Done
  <br />
  with whitepace
</h1>

            {/* DESCRIPTION */}
            <p
              className="
                text-[#D9E1F2]

                mt-5
                md:mt-6

                mx-auto
                md:mx-0

                max-w-[300px]
                sm:max-w-[500px]
                lg:max-w-[550px]

                leading-7
                md:leading-8

                text-[15px]
                md:text-[17px]
              "
            >
              Project management software that enables your teams
              to collaborate, plan, analyze and manage everyday tasks.
            </p>

            {/* BUTTON */}
            <div className="fixed top-5 right-5">
  <Link to="/signup" className="bg-blue-500 text-white px-4 py-2 rounded">
    Signup
  </Link>
</div>
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
                md:px-8

                py-3
                md:py-4

                rounded-lg
                shadow-lg
                cursor-pointer

                text-[15px]
                md:text-[16px]
              "
            >
              Try Whitepace free →
            </button>

          </div>

          {/* RIGHT BOX */}
          <div className="flex justify-center md:justify-end">

            <div
              className="
                bg-[#C4DEFD]

                w-full

                max-w-[280px]
                sm:max-w-[450px]
                md:max-w-[500px]
                lg:max-w-[600px]
                xl:max-w-[685px]

                h-[200px]
                sm:h-[300px]
                md:h-[320px]
                lg:h-[380px]
                xl:h-[448px]

                shadow-xl
              "
            >
            </div>

          </div>
          

        </div>

      </div>

    </section>
  );
}

export default Hero;