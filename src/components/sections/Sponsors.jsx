import { FaApple } from "react-icons/fa";

function Sponsors() {
  return (
    <section className="w-full bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <div className="relative inline-block">
            <h2 className="text-[52px] font-bold text-[#212529] relative z-10">
              Our sponsors
            </h2>

            <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[180px] h-[10px] bg-[#FFE492] rounded-full -z-10"></span>
          </div>
        </div>

        {/* Logos */}
        <div className="flex flex-wrap justify-between items-center gap-16">

          {/* Apple */}
          <div className="text-black text-[56px] hover:scale-110 transition cursor-pointer">
            <FaApple />
          </div>

          {/* Microsoft */}
         <div className="flex items-center gap-4 hover:scale-105 transition cursor-pointer">
             <div className="grid grid-cols-2 gap-[3px] w-[28px] h-[28px]">
    <div className="bg-[#F25022]"></div>
    <div className="bg-[#7FBA00]"></div>
    <div className="bg-[#00A4EF]"></div>
    <div className="bg-[#FFB900]"></div>
  </div>


            <span className="text-[40px] font-semibold text-[#737373]">
              Microsoft
            </span>
          </div>

          {/* Slack */}
          
            <div className="flex items-center gap-4 hover:scale-105 transition cursor-pointer">
            <svg width="44" height="44" viewBox="-2.45 0 2452.5 2452.5">
              <g fillRule="evenodd" clipRule="evenodd">
                <path d="m897.4 0c-135.3.1-244.8 109.9-244.7 245.2-.1 135.3 109.5 245.1 244.8 245.2h244.8v-245.1c.1-135.3-109.5-245.1-244.9-245.3m0 654h-652.6c-135.3.1-244.9 109.9-244.8 245.2-.2 135.3 109.4 245.1 244.7 245.3h652.7c135.3-.1 244.9-109.9 244.8-245.2.1-135.4-109.5-245.2-244.8-245.3z" fill="#36c5f0"/>
                <path d="m2447.6 899.2c.1-135.3-109.5-245.1-244.8-245.2-135.3.1-244.9 109.9-244.8 245.2v245.3h244.8c135.3-.1 244.9-109.9 244.8-245.3zm-652.7 0v-654c.1-135.2-109.4-245-244.7-245.2-135.3.1-244.9 109.9-244.8 245.2v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.3z" fill="#2eb67d"/>
                <path d="m1550.1 2452.5c135.3-.1 244.9-109.9 244.8-245.2.1-135.3-109.5-245.1-244.8-245.2h-244.8v245.2c-.1 135.2 109.5 245 244.8 245.2zm0-654.1h652.7c135.3-.1 244.9-109.9 244.8-245.2.2-135.3-109.4-245.1-244.7-245.3h-652.7c-135.3.1-244.9 109.9-244.8 245.2-.1 135.4 109.4 245.2 244.7 245.3z" fill="#ecb22e"/>
                <path d="m0 1553.2c-.1 135.3 109.5 245.1 244.8 245.2 135.3-.1 244.9-109.9 244.8-245.2v-245.2h-244.8c-135.3.1-244.9 109.9-244.8 245.2zm652.7 0v654c-.2 135.3 109.4 245.1 244.7 245.3 135.3-.1 244.9-109.9 244.8-245.2v-653.9c.2-135.3-109.4-245.1-244.7-245.3-135.4 0-244.9 109.8-244.8 245.1" fill="#e01e5a"/>
              </g>
            </svg>

            <span className="text-[40px] font-bold text-black">
              slack
            </span>
          </div>

          {/* Google */}
          <div className="text-[44px] font-semibold hover:scale-110 transition cursor-pointer">
            <span className="text-[#4285F4]">G</span>
            <span className="text-[#EA4335]">o</span>
            <span className="text-[#FBBC05]">o</span>
            <span className="text-[#4285F4]">g</span>
            <span className="text-[#34A853]">l</span>
            <span className="text-[#EA4335]">e</span>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Sponsors;