import React from "react";

const testimonials = [
  {
    id: 1,
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    highlight: false,
  },
  {
    id: 2,
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
    highlight: true,
  },
  {
    id: 3,
    name: "Oberon Shaw, MCH",
    role: "Head of Talent Acquisition, North America",
    text: "Whitepate is designed as a collaboration tool for businesses that is a full project management solution.",
    image: "https://randomuser.me/api/portraits/men/45.jpg",
    highlight: true,
  },
];

const QuoteIcon = ({ light }) => (
 <svg fill="#ffffff" width="40px" height="40px" viewBox="0 0 8 8" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1zm5 0c-1.65 0-3 1.35-3 3v3h3v-3h-2c0-1.11.89-2 2-2v-1z" transform="translate(0 1)"
      fill={light ? "white" : "#1E3A8A"}
    />
  </svg>
);

export default function Testimonials() {
  return (
    <div className="bg-[#f5f5f5] py-20 px-4 font-sans">
      {/* Heading */}
      <div className="text-center mb-16 relative">
        <h2 className="text-[44px] font-bold text-[#1F2937] inline-block">
          What Our Clients Says
        </h2>
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
        {testimonials.map((item) => (
          <div
            key={item.id}
            className={`p-8 rounded-2xl ${
              item.highlight
                ? "bg-[#4F8FF7] text-white"
                : "bg-white text-gray-700 border border-gray-200"
            }`}
          >
            {/* SVG Quote */}
            <QuoteIcon light={item.highlight} />

            {/* Text */}
            <p className="text-[14px] leading-7 mb-8">
              {item.text}
            </p>

            {/* Divider */}
            <div
              className={`h-1px w-full mb-8 ${
                item.highlight ? "bg-white/40" : "bg-gray-300"
              }`}
            />

            {/* User */}
            <div className="flex items-center gap-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-14 h-14 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-[15px]">
                  {item.name}
                </h4>
                <p className="text-[12px] opacity-80 leading-4">
                  {item.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="flex justify-center mt-10 gap-3">
        <span className="w-2.5 h-2.5 bg-[#4F8FF7] rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
        <span className="w-2.5 h-2.5 bg-gray-400 rounded-full"></span>
      </div>
    </div>
  );
}
