function Navbar() {
  return (
    <nav className="w-full bg-[#043873]">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">

        {/* Logo */}
        <div className="text-white text-2xl font-bold">
          whitepace
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-white text-sm">

          <a href="#" className="hover:text-blue-200">
            Products
          </a>

          <a href="#" className="hover:text-blue-200">
            Solutions
          </a>

          <a href="#" className="hover:text-blue-200">
            Resources
          </a>

          <a href="#" className="hover:text-blue-200">
            Pricing
          </a>

        </div>

        {/* Buttons */}
        <div className="flex items-center gap-4">

          <button className="bg-[#FFE492] text-black px-5 py-2 rounded-lg text-sm font-medium">
            Login
          </button>

          <button className="bg-[#4F9CF9] text-white px-5 py-2 rounded-lg text-sm font-medium">
            Try Whitepace free →
          </button>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;