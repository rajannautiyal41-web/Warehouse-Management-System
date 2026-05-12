import SlotCard from "./SlotCard";

function SlotGrid() {
  return (
    <div
      className="
        grid

        grid-cols-1
        sm:grid-cols-2
        md:grid-cols-3
        lg:grid-cols-4
        xl:grid-cols-5

        gap-5

        bg-[#FCFCFD]

        rounded-2xl

        p-6

        shadow-sm
      "
    >
      <SlotCard />
      <SlotCard />
      <SlotCard />
      <SlotCard />
      <SlotCard />
      <SlotCard />
    </div>
  );
}

export default SlotGrid;