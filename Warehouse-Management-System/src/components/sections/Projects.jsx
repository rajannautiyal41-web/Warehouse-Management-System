function Project() {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-5xl font-bold text-[#212529] leading-tight">
            Project
            <br />
            Management
          </h2>

          <p className="mt-6 text-gray-600 leading-8 max-w-lg">
            Images, videos, PDFs and audio files are supported.
            Create math expressions and diagrams directly from the app.
            Take photos with the mobile app and save them to a note.
          </p>

          <button className="mt-8 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium">
            Get Started →
          </button>

        </div>

        {/* RIGHT CONTENT */}
        <div className="flex justify-center">

          <div className="w-full max-w-xl h-[400px] bg-[#C4DEFD]">
          </div>

        </div>

      </div>

    </section>
  );
}

export default Project;