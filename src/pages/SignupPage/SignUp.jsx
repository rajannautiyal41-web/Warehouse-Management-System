import { Link } from "react-router-dom";
import LogoWMS from "../../assets/LogoWMS.svg";
 
function Signup() {
  return (
    <div className="min-h-screen bg-[#F0F1F3] flex items-center justify-center">
     
      <div className="w-full max-w-md px-6">
       
        {/* LOGO */}
        <div className="flex justify-center mb-6">
          <img
            src={LogoWMS}
            alt="WMS Logo"
            className="w-[120px] sm:w-[140px] h-auto object-contain"
          />
        </div>
 
        {/* TITLE */}
        <h2 className="text-center  
              text-[34px]
              sm:text-[38px]
  text-2xl font-bold text-gray-800 mb-8">
          Create an account
        </h2>
 
        {/* FORM */}
        <form className="space-y-5">
 
          {/* USERNAME */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Username*
            </label>
            <input
              type="text"
              required
              placeholder="Enter your username"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
 
          {/* EMAIL */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Email*
            </label>
            <input
              type="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
 
          {/* PASSWORD */}
          <div>
            <label className="block text-sm text-gray-700 mb-2">
              Password*
            </label>
            <input
              type="password"
              required
              placeholder="Create a password"
              className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <p className="text-s text-gray-500 mt-1">
              Must be at least 8 characters.
            </p>
          </div>
 
          {/* BUTTON */}
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition"
          >
            Get started
          </button>
        </form>
 
        {/* LOGIN LINK */}
        <p className="text-center text-sm text-gray-500 mt-8">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 font-medium hover:underline">
            Log in
          </Link>
        </p>
 
      </div>
    </div>
  );
}
 
export default Signup;