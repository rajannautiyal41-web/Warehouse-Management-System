function Customize() {
  return (
    <section className="w-full bg-white py-24">

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE */}
        <div className="flex justify-center">

          <div className="w-full max-w-xl h-[400px] bg-[#C4DEFD] rounded-sm">
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div>

          <h2 className="text-[#212529] text-5xl font-bold leading-tight">
            Customise it to
            <br />
            your needs
          </h2>

          <p className="text-gray-600 mt-6 leading-8 max-w-lg">
            Customise the app with plugins, custom themes and multiple
            text editors (Rich Text or Markdown). Or create your own scripts
            and plugins using the Extension API.
          </p>

          <button className="mt-8 bg-[#4F9CF9] hover:bg-blue-500 transition-all duration-300 text-white px-6 py-3 rounded-lg font-medium">
            Let's Go →
          </button>

        </div>

      </div>

    </section>
  );
}

export default Customize;