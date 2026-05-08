import { Link } from "react-router-dom";
import WMSlogo from "../../assets/LandingPageIcons/WMSlogo.svg";

function ForgotPassword() {
  return (
    <section className="min-h-screen bg-[#F0F1F3] flex items-center justify-center px-4">

      <div className="w-full max-w-[420px]">

        {/* LOGO */}
        <div className="flex justify-center">
          <img
            src={WMSlogo}
            alt="WMS Logo"
            className="w-[120px] sm:w-[140px] h-auto"
          />
        </div>

        {/* HEADING */}
        <div className="mt-6 text-center">

          <h2
            className="
              text-[34px]
              sm:text-[38px]
              font-bold
              text-[#1F2937]
            "
          >
            Forgot Password
          </h2>

          <p className="mt-3 text-[#7B8794] text-[15px]">
            Enter your email to reset your password.
          </p>

        </div>

        {/* FORM */}
        <form className="mt-10">

          <div>

            <label className="text-[14px] font-medium text-[#374151]">
              Email Address
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              className="
                w-full
                mt-2
                h-[52px]
                px-4
                border
                border-[#D1D5DB]
                rounded-md
                bg-white
                outline-none
                focus:border-[#2563EB]
              "
            />

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
              transition-all
              duration-300
            "
          >
            Send Reset Link
          </button>

        </form>

        {/* BACK */}
        <p className="text-center mt-6 text-[14px] text-[#6B7280]">

          Remember your password?{" "}

          <Link
            to="/login"
            className="text-[#2563EB] font-medium hover:underline"
          >
            Log in
          </Link>

        </p>

      </div>

    </section>
  );
}

export default ForgotPassword;