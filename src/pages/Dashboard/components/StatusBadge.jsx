function StatusBadge({ text, color }) {
  return (
    <span
      className={`
        px-3
        py-1
        rounded-md
        text-white
        text-[12px]
        font-medium
        ${color}
      `}
    >
      {text}
    </span>
  );
}

export default StatusBadge;