import React from "react";

export default function Work() {
  return (
    <div className="bg-[#0F3D75] text-white py-24 px-6 relative overflow-hidden">

      {/* Background waves */}
      <div className="absolute inset-0 opacity-20">
        <svg width="100%" height="100%" viewBox="0 0 800 400" preserveAspectRatio="none">
          <path d="M0 200 Q200 0 400 200 T800 200" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M0 250 Q200 50 400 250 T800 250" stroke="white" strokeWidth="0.5" fill="none" />
          <path d="M0 300 Q200 100 400 300 T800 300" stroke="white" strokeWidth="0.5" fill="none" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-16 relative z-10">

        {/* LEFT GRAPHIC */}
        <div className="relative flex justify-center items-center">

          {/* Orbit circle */}
          <div className="absolute w-[320px] h-[320px] border border-dashed border-white/40 rounded-full"></div>

          {/* Center circle */}
          <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-[#0F3D75] font-bold text-xl shadow-lg">
            W
          </div>

          {/* Icons */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
            📧
          </div>

          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
            📅
          </div>

          <div className="absolute left-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
            📥
          </div>

          <div className="absolute right-0 top-1/2 -translate-y-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
            📁
          </div>

          <div className="absolute top-[25%] right-[10%] w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
            💬
          </div>

          <div className="absolute bottom-[25%] left-[10%] w-14 h-14 bg-white rounded-full flex items-center justify-center shadow">
            ✉️
          </div>

        </div>

        {/* RIGHT CONTENT */}
        <div className="text-center md:text-left">
          <h2 className="text-[42px] md:text-[48px] font-bold leading-tight mb-6">
            Work with Your <br />
            Favorite Apps Using <br />
            whitepace
          </h2>

          <p className="text-[16px] text-white/80 mb-8 max-w-xl">
            Whitepace teams up with your favorite software. Integrate with over
            1000+ apps with Zapier to have all the tools you need for your
            project success.
          </p>

          <button className="bg-[#4F9CF9] hover:bg-[#3b82f6] px-7 py-3 rounded-lg text-sm font-medium flex items-center gap-2 mx-auto md:mx-0">
            Read more →
          </button>
        </div>
      </div>
    </div>
  );
}