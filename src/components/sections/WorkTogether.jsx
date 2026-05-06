function WorkTogether() {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT GRAPHIC */}
        <div className="flex justify-center">

          <div className="relative w-[400px] h-[400px] border border-dashed border-blue-300 rounded-full flex items-center justify-center">

            <div className="w-20 h-20 bg-white shadow-lg rounded-xl flex items-center justify-center">
              📘
            </div>

          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-5xl font-bold text-[#212529] leading-tight">
            Work together
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-lg">
            Collaborate with your colleagues and teams in real-time.
            Share warehouse data, inventory updates, and operational workflows.
          </p>

          <button className="mt-8 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium cursor-pointer">
            Try it now →
          </button>

        </div>

      </div>

    </section>
  );
}

export default WorkTogether;