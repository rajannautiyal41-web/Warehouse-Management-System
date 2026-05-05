function Hero() {
  return (
    <section className="bg-[#043873] overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center min-h-screen">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight">
            Get More Done
            <br />
            with whitepace
          </h1>

          <p className="text-gray-300 mt-6 text-lg leading-8 max-w-xl">
            Project management software that enables your teams
            to collaborate, plan, analyze and manage everyday tasks.
          </p>

          <button className="mt-8 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-7 py-4 rounded-lg font-medium shadow-lg">
            Try Whitepace free →
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">

          <div className="w-full max-w-2xl h-[400px] bg-[#C4DEFD] shadow-xl">
          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;