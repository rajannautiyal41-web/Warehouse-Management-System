import RackCard from "./RackCard";

function SpaceGrid() {
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
        lg:grid-cols-3
        xl:grid-cols-5

        gap-6
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

export default SpaceGrid;