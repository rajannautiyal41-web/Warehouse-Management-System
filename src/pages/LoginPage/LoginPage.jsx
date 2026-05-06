import WMSlogo from '../../assets/WMSlogo.svg'
function LoginPage() {
  return (
    <section className="min-h-screen bg-[#f0f1f3] flex items-center justify-center px-4">

      <div
        className="
          w-full
          max-w-[420px]
          py-10
          px-6
          sm:px-8
        "
      >

        {/* LOGO */}
        <div className="flex justify-center">
  <img
    src={WMSlogo}
    alt="WMS Logo"
    className="
      w-[120px]
      sm:w-[140px]
      h-auto
      object-contain
    "
  />
</div>

        {/* HEADING */}
        <div className="mt-6 text-center">

          <h2
            className="
              text-[#1F2937]
              font-bold

              text-[34px]
              sm:text-[38px]

              leading-tight
            "
          >
            Log in to your account
          </h2>

          <p
            className="
              mt-3

              text-[#7B8794]

              text-[15px]
              sm:text-[16px]
            "
          >
            Welcome back! Please enter your details.
          </p>

        </div>

        {/* FORM */}
        <form className="mt-10">

          {/* USERNAME */}
          <div>

            <label
              className="
                text-[#374151]
                text-[14px]
                font-medium
              "
            >
              Username
            </label>

            <input
              type="text"
              placeholder="Enter your username"
              className="
                w-full
                mt-2

                h-[52px]

                px-4

                border
                border-[#D1D5DB]

                rounded-md

                outline-none

                text-[15px]
                bg-[#ffffff]
                focus:border-[#2563EB]
              "
            />

          </div>

          {/* PASSWORD */}
          <div className="mt-5">

            <label
              className="
                text-[#374151]
                text-[14px]
                font-medium
              "
            >
              Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="
                w-full
                mt-2

                h-[52px]

                px-4

                border
                border-[#D1D5DB]

                rounded-md

                outline-none

                text-[15px]
                bg-[#ffffff]
                focus:border-[#2563EB]
              "
            />

          </div>

          {/* OPTIONS */}
          <div className="flex items-center justify-between mt-5">

            <label className="flex items-center gap-2 cursor-pointer">

              <input
                type="checkbox"
                className="w-4 h-4"
              />

              <span
                className="
                  text-[14px]
                  text-[#4B5563]
                "
              >
                Remember me
              </span>

            </label>

            <button
              type="button"
              className="
                text-[#2563EB]
                text-[14px]
                font-medium
                cursor-pointer
              "
            >
              Forgot password
            </button>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              w-full

              h-[52px]

              mt-7

              bg-[#2563EB]
              hover:bg-[#1D4ED8]

              rounded-md

              text-white
              font-medium
              text-[16px]

              transition-all
              duration-300

              cursor-pointer
            "
          >
            Sign in
          </button>

          {/* SIGNUP */}
          <p
            className="
              text-center

              mt-6

              text-[14px]
              text-[#6B7280]
            "
          >
            Don&apos;t have an account?{" "}

            <span
              className="
                text-[#2563EB]
                font-medium
                cursor-pointer
              "
            >
              Sign up
            </span>

          </p>

        </form>

      </div>

    </section>
  );
}

export default LoginPage;