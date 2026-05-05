function PricingCard({
  title,
  price,
  description,
  features,
  highlighted,
}) {
  return (
    <div
      className={`
        rounded-2xl p-10 border transition-all duration-300
        ${
          highlighted
            ? "bg-[#043873] text-white scale-105 shadow-2xl border-[#043873]"
            : "bg-white text-[#212529] border-[#FFE492]"
        }
      `}
    >

      <h3 className="text-2xl font-semibold">
        {title}
      </h3>

      <h2 className="text-5xl font-bold mt-6">
        ${price}
      </h2>

      <p className="mt-6 leading-7">
        {description}
      </p>

      <ul className="mt-8 space-y-5">

        {features.map((feature, index) => (
          <li
            key={index}
            className="flex items-start gap-3"
          >
            <span>✓</span>
            <span>{feature}</span>
          </li>
        ))}

      </ul>

      <button
        className={`
          mt-10 px-6 py-3 rounded-lg font-medium transition-all
          ${
            highlighted
              ? "bg-[#4F9CF9] text-white hover:bg-blue-500"
              : "border border-[#FFE492] hover:bg-[#FFE492]"
          }
        `}
      >
        Get Started
      </button>

    </div>
  );
}

export default PricingCard;