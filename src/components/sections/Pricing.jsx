import { useRef, useState } from "react";
import PricingCard from "../common/PricingCard";

function Pricing() {
  const sliderRef = useRef(null);
  const [active, setActive] = useState(1);

  const plans = [
    {
      title: "Free",
      price: "0",
      description: "Capture ideas and find them quickly",
      highlighted: false,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
         "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates,reminders,and notifications to your tasks",
      ],
    },

    {
      title: "Personal",
      price: "11.2",
      description: "Keep home and family on track",
      highlighted: true,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates,reminders,and notifications to your tasks",
      ],
    },

    {
      title: "Organization",
      price: "49.99",
      description: "Capture ideas and find them quickly",
      highlighted: false,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
         "200 MB max. note size",
        "Customize Home dashboard and access extra widgets",
        "Connect primary Google Calendar account",
        "Add due dates,reminders,and notifications to your tasks",
      ],
    },
  ];

  const scrollToCard = (index) => {
    const container = sliderRef.current;

    if (!container) return;

    const cardWidth =
      container.querySelector(".pricing-card").offsetWidth + 24;

    container.scrollTo({
      left: index * cardWidth,
      behavior: "smooth",
    });

    setActive(index);
  };

  return (
    <section className="w-full bg-white overflow-hidden">

      <div
        className="
          max-w-[1920px]
          mx-auto

          px-6
          md:px-10
          lg:px-16
          xl:px-24
          2xl:px-32

          py-16
          md:py-20
          lg:py-24
          xl:py-28
        "
      >

        {/* HEADING */}
        <div className="text-center">

          <div className="relative inline-block">

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, Evernote has the right plan for you.
          </p>

        </div>

        {/* DESKTOP */}
        <div
          className="
            hidden
            lg:grid

            grid-cols-3
            gap-8
            xl:gap-10

            mt-20
          "
        >
          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}
        </div>

        {/* MOBILE + TABLET */}
        <div
          ref={sliderRef}
          className="
            lg:hidden

            mt-16

            flex
            gap-6

            overflow-x-auto
            scroll-smooth
            snap-x
            snap-mandatory
            scrollbar-hide

            px-2
            pb-4
          "
        >
          {plans.map((plan, index) => (
            <div
              key={index}
              className="
                pricing-card

                snap-center
                shrink-0

                w-[85%]
                sm:w-[70%]
                md:w-[48%]
              "
            >
              <PricingCard {...plan} />
            </div>
          ))}
        </div>

        {/* BULLETS */}
        <div className="lg:hidden flex justify-center gap-3 mt-8">

          {plans.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToCard(index)}
              className={`
                w-3 h-3 rounded-full transition-all duration-300 cursor-pointer
                ${
                  active === index
                    ? "bg-[#4F9CF9] scale-110"
                    : "bg-[#4F9CF9]/40"
                }
              `}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;