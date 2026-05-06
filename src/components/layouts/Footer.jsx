import React, { useState } from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState(false);

  return (
    <div className="bg-[#043873] border-t border-white/10 text-white">
      
      {/* MAIN CONTAINER */}
      <div className="
        max-w-[1400px] mx-auto px-6 py-4
        flex flex-wrap items-center justify-between gap-4
      ">

        {/* LEFT SIDE */}
        <div className="
          flex flex-wrap items-center gap-3
          text-[11px] sm:text-[12px] md:text-[13px]
          text-[#B9C6D2]
        ">

          {/* LANGUAGE */}
          <div className="relative">
            <button
              onClick={() => setOpen(!open)}
              className="flex items-center gap-1.5 hover:text-white whitespace-nowrap"
            >
              {/* Globe Icon */}
              <svg
                className="w-[14px] h-[14px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C7 2 3 6 3 11c0 4.5 3.5 8.2 8 8.9V22h2v-2.1c4.5-.7 8-4.4 8-8.9 0-5-4-9-9-9z" />
                <path d="M3 11h18" />
                <path d="M12 2c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9c-2.5-2.5-4-5.5-4-9s1.5-6.5 4-9z" />
              </svg>

              <span>English</span>

              {/* Arrow */}
              <svg
                className="w-[10px] h-[10px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M6 15l6-6 6 6" />
              </svg>
            </button>

            {/* DROPDOWN */}
            {open && (
              <div className="absolute bottom-7 left-0 bg-white text-black rounded shadow text-[12px] w-20">
                <div className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  English
                </div>
                <div className="px-3 py-1 hover:bg-gray-100 cursor-pointer">
                  Hindi
                </div>
              </div>
            )}
          </div>

          <span className="hover:text-white cursor-pointer whitespace-nowrap">
            Terms & privacy
          </span>
          <span className="hover:text-white cursor-pointer whitespace-nowrap">
            Security
          </span>
          <span className="hover:text-white cursor-pointer whitespace-nowrap">
            Status
          </span>

          <span className="text-[#8EA3B7] whitespace-nowrap">
            ©2021 Whitepace LLC.
          </span>
        </div>

        {/* RIGHT SIDE (ICONS) */}
        <div className="
          flex items-center gap-5 text-[#B9C6D2]
          w-full sm:w-auto
          justify-start sm:justify-end
        ">
          <FaFacebookF className="text-[13px] hover:text-white cursor-pointer" />
          <FaTwitter className="text-[13px] hover:text-white cursor-pointer" />
          <FaLinkedinIn className="text-[13px] hover:text-white cursor-pointer" />
        </div>

      </div>
    </div>
  );
}