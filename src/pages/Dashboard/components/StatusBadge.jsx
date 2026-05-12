function StatusBadge({ text, color }) {
  return (
    <span
      className={`
        inline-flex
        items-center
        justify-center

        px-1.5
        sm:px-3

        py-[px]
        sm:py-1

        rounded-md

        text-[7px]
        sm:text-[10px]

        font-medium
        text-white

        whitespace-nowrap

        ${color}
      `}
    >
      {text}
    </span>
  );
}

export default StatusBadge;