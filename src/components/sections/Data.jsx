function Data() {
  return (
    <section className="w-full bg-white py-28">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT CONTENT */}
        <div>

          <h2 className="text-[#212529] text-5xl md:text-6xl font-bold leading-tight">
            100% your data
          </h2>

          <p className="text-gray-600 mt-6 leading-8 max-w-lg">
            The app is open source and your notes are saved to an open format,
            so you'll always have access to them. Uses End-To-End Encryption
            (E2EE) to secure your notes and ensure no-one but yourself can
            access them.
          </p>

          <button className="mt-8 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-7 py-4 rounded-lg font-medium cursor-pointer">
            Read more →
          </button>

        </div>

        {/* RIGHT ILLUSTRATION */}
        <div className="flex justify-center">

          <div className="relative w-full max-w-xl h-[350px]">

            {/* CENTER BOX */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border-2 border-dashed border-blue-300 rounded-xl flex items-center justify-center bg-white shadow-sm">
              <span className="text-4xl text-blue-500">⌂</span>
            </div>

            {/* TOP LEFT */}
            <div className="absolute left-10 top-0 w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
              🔑
            </div>

            {/* TOP RIGHT */}
            <div className="absolute right-10 top-0 w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
              💾
            </div>

            {/* LEFT */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
              🛡️
            </div>

            {/* RIGHT */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 bg-white shadow-md rounded-xl flex items-center justify-center">
              🔒
            </div>

            {/* CONNECTION LINES */}
            <div className="absolute inset-0 border-2 border-dashed border-blue-200 rounded-full">
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Data;