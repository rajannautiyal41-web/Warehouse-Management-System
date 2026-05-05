function CTA() {
  return (
    <section className="w-full bg-[#043873] py-28 overflow-hidden relative">

      {/* LEFT DECORATIVE SHAPE */}
      <div className="absolute left-0 top-0 opacity-20">
        <div className="w-[300px] h-[300px] border-[20px] border-blue-300 rounded-[40%]">
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">

        {/* HEADING */}
        <h2 className="text-white text-2xl md:text-6xl font-bold leading-tight">
          Your work, everywhere you are
        </h2>

        {/* DESCRIPTION */}
        <p className="text-gray-300 mt-8 leading-8 max-w-3xl mx-auto">
          Access your notes from your computer, phone or tablet by
          synchronising with various services, including whitepace,
          Dropbox and OneDrive. The app is available on Windows,
          macOS, Linux, Android and iOS.
        </p>

        {/* BUTTON */}
        <button className="mt-10 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-7 py-4 rounded-lg font-medium">
          Try Taskey →
        </button>

      </div>

    </section>
  );
}

export default CTA;