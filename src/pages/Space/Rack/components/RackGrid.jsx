import RackCard from "./RackCard";

function RackGrid() {
  return (
    <div
      className="
        bg-white

        rounded-2xl

        p-6

        shadow-sm

        grid
        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5

        gap-5
      "
    >
      <RackCard />
      <RackCard />
      <RackCard />
      <RackCard />
      <RackCard />
      <RackCard />
    </div>
  );
}

export default RackGrid;