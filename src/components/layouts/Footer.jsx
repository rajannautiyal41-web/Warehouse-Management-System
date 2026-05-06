import React from "react";

function Footer() {
  return (
    <div className="bg-[#0e3a6d] border-t border-[#2a5585] px-6 py-3 text-gray-400 text-[11px] font-sans">

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">

        {/* Left Side */}
        <div className="flex items-center gap-6 mb-2 md:mb-0">

          {/* Language */}
          <span className="flex items-center gap-1 cursor-pointer hover:text-white opacity-90">

            {/* Globe SVG */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <circle cx="12" cy="12" r="10" strokeWidth="1.5" />
              <path
                strokeWidth="1.5"
                d="M2 12h20M12 2a15 15 0 010 20M12 2a15 15 0 000 20"
              />
            </svg>

            English

            {/* Dropdown Arrow */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-3 h-3 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeWidth="2" d="M6 9l6 6 6-6" />
            </svg>

          </span>

          <span className="cursor-pointer hover:text-white">
            Terms & privacy
          </span>
          <span className="cursor-pointer hover:text-white">
            Security
          </span>
          <span className="cursor-pointer hover:text-white">
            Status
          </span>
          <span className="cursor-pointer hover:text-white">
            ©2021 Whitepace LLC.
          </span>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">



          {/* Social Icons */}
          <div className="flex gap-4">

            {/* Facebook */}
            <svg
              className="w-4 h-4 cursor-pointer hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2.8v-2.9h2.8V9.5c0-2.8 1.7-4.4 4.2-4.4 1.2 0 2.5.2 2.5.2v2.7h-1.4c-1.4 0-1.8.9-1.8 1.7v2.1h3.1l-.5 2.9h-2.6v7A10 10 0 0022 12z" />
            </svg>

            {/* Twitter */}
            <svg
              className="w-4 h-4 cursor-pointer hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M22 5.9c-.8.4-1.6.6-2.4.8a4.1 4.1 0 001.8-2.3c-.8.5-1.8.9-2.8 1.1A4.1 4.1 0 0015.5 4c-2.3 0-4.1 1.9-4.1 4.1 0 .3 0 .6.1.9-3.4-.2-6.4-1.8-8.4-4.3-.4.6-.6 1.3-.6 2.1 0 1.4.7 2.6 1.8 3.3-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.6 2 2.7 3.8 2.8A8.3 8.3 0 012 19.5 11.7 11.7 0 008.3 21c7.5 0 11.6-6.2 11.6-11.6v-.5c.8-.6 1.5-1.3 2.1-2z" />
            </svg>

            {/* LinkedIn */}
            <svg
              className="w-4 h-4 cursor-pointer hover:text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M4.98 3.5C4.98 4.9 3.87 6 2.49 6S0 4.9 0 3.5 1.11 1 2.49 1s2.49 1.1 2.49 2.5zM.5 8h4V24h-4V8zm7.5 0h3.8v2.2h.1c.5-.9 1.9-2.2 3.9-2.2 4.2 0 5 2.7 5 6.2V24h-4v-8.5c0-2-.1-4.5-2.7-4.5-2.7 0-3.1 2.1-3.1 4.3V24h-4V8z" />
            </svg>

          </div>

        </div>

      </div>
    </div>
  );
}

export default Footer;