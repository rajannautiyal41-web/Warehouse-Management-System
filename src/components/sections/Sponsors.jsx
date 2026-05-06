import { FaApple, FaGoogle, FaSlack } from "react-icons/fa";
import { FaMicrosoft } from "react-icons/fa6";
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

                        {/* Yellow underline */}
                        <span className="absolute left-1/2 -translate-x-1/2 bottom-2 w-[180px] h-[10px] bg-[#FFE492] rounded-full -z-10">
                        </span>

                    </div>

                </div>

                {/* Logos */}
                <div className="flex flex-wrap justify-between items-center gap-10">

                    {/* Apple */}
                    <div className="text-black text-6xl cursor-pointer hover:scale-110 transition duration-300">
                        <FaApple />
                    </div>

                    {/* Microsoft */}
                    {/* Microsoft */}
                    <div className="flex items-center gap-4 cursor-pointer hover:scale-105 transition duration-300">

                        {/* 4 Squares */}
                        <div className="grid grid-cols-2 gap-1">

                            <div className="w-4 h-4 bg-[#F25022]"></div>
                            <div className="w-4 h-4 bg-[#7FBA00]"></div>
                            <div className="w-4 h-4 bg-[#00A4EF]"></div>
                            <div className="w-4 h-4 bg-[#FFB900]"></div>

                        </div>

                        <span className="text-[42px] font-semibold text-[#737373]">
                            Microsoft
                        </span>

                    </div>
                    {/* Slack */}
{/* Slack */}
<div className="flex items-center gap-4 cursor-pointer hover:scale-105 transition-all duration-300">

  {/* Slack Icon */}
  <div className="relative w-[52px] h-[52px]">

    {/* TOP LEFT - BLUE */}
    <div className="absolute top-0 left-[18px] w-[12px] h-[24px] bg-[#36C5F0] rounded-full"></div>
    <div className="absolute top-[18px] left-0 w-[24px] h-[12px] bg-[#36C5F0] rounded-full"></div>

    {/* TOP RIGHT - GREEN */}
    <div className="absolute top-0 right-[18px] w-[12px] h-[24px] bg-[#2EB67D] rounded-full"></div>
    <div className="absolute top-[18px] right-0 w-[24px] h-[12px] bg-[#2EB67D] rounded-full"></div>

    {/* BOTTOM LEFT - RED */}
    <div className="absolute bottom-0 left-[18px] w-[12px] h-[24px] bg-[#E01E5A] rounded-full"></div>
    <div className="absolute bottom-[18px] left-0 w-[24px] h-[12px] bg-[#E01E5A] rounded-full"></div>

    {/* BOTTOM RIGHT - YELLOW */}
    <div className="absolute bottom-0 right-[18px] w-[12px] h-[24px] bg-[#ECB22E] rounded-full"></div>
    <div className="absolute bottom-[18px] right-0 w-[24px] h-[12px] bg-[#ECB22E] rounded-full"></div>

  </div>

  {/* Slack Text */}
  <span className="text-[52px] font-bold text-black leading-none">
    slack
  </span>

</div>
                    {/* Google */}
                    <div className="text-[52px] font-semibold cursor-pointer hover:scale-110 transition duration-300">

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