import React from "react";

export default function Sponsors() {
  return (
    <div className="bg-[#F5F5F5] py-24 px-6 text-center font-sans">
      
      {/* Heading */}
      <div className="relative inline-block mb-20">
        <h2 className="text-[44px] md:text-[52px] font-bold text-[#2B2B2B] relative z-10">
          Our sponsors
        </h2>

        {/* Yellow brush underline */}
        <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-220px h-12px bg-[#F4D35E] rounded-full z-0"></span>
      </div>

      {/* Logos */}
      <div className="flex justify-center items-center gap-20 md:gap-28 flex-wrap">

        {/* Apple */}
        <div className="w-70px h-70px flex items-center justify-center">
          {/* 🔽 PASTE APPLE SVG HERE */}
        </div>

        {/* Microsoft */}
        <div className="flex items-center gap-4">
          <div className="w-36px h-36px">
            {/* 🔽 MICROSOFT ICON SVG */}
          </div>
          <div className="w-150px h-40px">
            {/* 🔽 MICROSOFT TEXT SVG */}
          </div>
        </div>

        {/* Slack */}
        <div className="flex items-center gap-4">
          <div className="w-36px h-36px">
            {/* 🔽 SLACK ICON SVG */}
          </div>
          <div className="w-110px h-40px">
            {/* 🔽 SLACK TEXT SVG */}
          </div>
        </div>

        {/* Google */}
        <div className="w-150px h-50px flex items-center justify-center">
          {/* 🔽 GOOGLE SVG */}
        </div>

      </div>
    </div>
  );
}