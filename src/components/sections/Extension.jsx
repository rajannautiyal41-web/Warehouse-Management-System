function Extension() {
  return (
    <section className="w-full bg-[#043873] py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-white text-5xl font-bold leading-tight">
            Use as Extension
          </h2>

          <p className="text-gray-300 mt-6 leading-8 max-w-lg">
            Use the web clipper extension, available on Chrome and Firefox,
            to save web pages or take screenshots as notes.
          </p>

          <button className="mt-8 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium">
            Let's Go →
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">

          <div className="w-full max-w-xl h-400px bg-[#C4DEFD] rounded-sm">
          </div>

        </div>

      </div>

    </section>
  );
}

export default Extension;