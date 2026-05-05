import PricingCard from "../common/PricingCard";

function Pricing() {
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
        "Customize dashboard",
        "Connect Google Calendar",
      ],
    },

    {
      title: "Personal",
      price: "11.99",
      description: "Keep home and family on track",
      highlighted: true,
      features: [
        "Sync unlimited devices",
        "10 GB monthly uploads",
        "200 MB max. note size",
        "Customize dashboard",
        "Connect Google Calendar",
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
        "Customize dashboard",
        "Connect Google Calendar",
      ],
    },
  ];

  return (
    <section className="w-full bg-white py-28">

      <div className="max-w-7xl mx-auto px-6">

        {/* HEADING */}
        <div className="text-center">

          <h2 className="text-5xl font-bold text-[#212529]">
            Choose Your Plan
          </h2>

          <p className="mt-6 text-gray-600 max-w-3xl mx-auto leading-8">
            Whether you want to get organized, keep your personal life on track,
            or boost workplace productivity, we have the right plan for you.
          </p>

        </div>

        {/* CARDS */}
        <div className="mt-20 grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <PricingCard
              key={index}
              {...plan}
            />
          ))}

        </div>

      </div>

    </section>
  );
}

export default Pricing;