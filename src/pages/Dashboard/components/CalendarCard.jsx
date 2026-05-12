import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

function CalendarCard() {
  const rows = [
    {
      day: "Sun",
      date: "30",
      pick: "5",
      packed: "10",
      delivered: "8",
    },
    {
      day: "Mon",
      date: "1",
      pick: "4",
      packed: "31",
      delivered: "1",
    },
    {
      day: "Tue",
      date: "2",
    },
    {
      day: "Wed",
      date: "3",
    },
    {
      day: "Thu",
      date: "4",
    },
    {
      day: "Fri",
      date: "5",
      active: true,
    },
    {
      day: "Sat",
      date: "6",
    },
  ];

  return (
    <div
  className="
        relative

        w-full

        bg-white
        rounded-2xl
        shadow-sm

        p-3
        sm:p-5
        lg:p-6

        overflow-hidden
      "
>
      {/* DATE */}
      <h2
        className="
          text-[11px]
          sm:text-sm

          font-semibold
          text-[#9CA3AF]
        "
      >
        April 11, 2021
      </h2>

      {/* HEADER */}
      <div
        className="
          mt-3

          grid

          grid-cols-[45px_20px_32px_40px_48px]
          sm:grid-cols-[58px_24px_1fr_1fr_1fr]

          items-center

          gap-1
        "
      >
        {/* TODAY */}
        <h3
          className="
            text-[15px]
            sm:text-[22px]

            font-medium
            text-[#111827]
          "
        >
          Today
        </h3>

        <div />

        <span
          className="
            text-[7px]
            sm:text-[11px]

            text-center
            text-[#6B7280]

            truncate
          "
        >
          Pick
        </span>

        <span
          className="
            text-[7px]
            sm:text-[11px]

            text-center
            text-[#6B7280]

            truncate
          "
        >
          Packed
        </span>

        <span
          className="
            text-[7px]
            sm:text-[11px]

            text-center
            text-[#6B7280]

            truncate
          "
        >
          Delivered
        </span>
      </div>

      {/* ROWS */}
      <div className="mt-4 space-y-4">
        {rows.map((item, index) => (
          <div
            key={index}
            className="
              grid

              grid-cols-[45px_20px_32px_40px_48px]
              sm:grid-cols-[58px_24px_1fr_1fr_1fr]

              items-center

              gap-1
            "
          >
            {/* DAY */}
            <span
              className={`
                text-[12px]
                sm:text-[16px]

                ${
                  item.active
                    ? "font-bold text-[#111827]"
                    : "text-[#374151]"
                }
              `}
            >
              {item.day}
            </span>

            {/* DATE */}
            <span
              className={`
                text-[12px]
                sm:text-[16px]

                ${
                  item.active
                    ? "font-bold text-[#111827]"
                    : "text-[#6B7280]"
                }
              `}
            >
              {item.date}
            </span>

            {/* PICK */}
            <span
              className="
                text-[9px]
                sm:text-sm

                text-center
                text-[#111827]
              "
            >
              {item.pick}
            </span>

            {/* PACKED */}
            <span
              className="
                text-[9px]
                sm:text-sm

                text-center
                text-[#111827]
              "
            >
              {item.packed}
            </span>

            {/* DELIVERED */}
            <span
              className="
                text-[9px]
                sm:text-sm

                text-center
                text-[#111827]
              "
            >
              {item.delivered}
            </span>
          </div>
        ))}
      </div>

      {/* BUTTONS */}
      <div
  className="
    flex
    items-center
    justify-end

    gap-2

    mt-4

    w-full
  "
>
        {/* PREVIOUS */}
        <button
          className="
            w-6
            h-6

            sm:w-9
            sm:h-9
            
            rounded-md
            sm:rounded-lg

            bg-[#2563EB]
            hover:bg-[#1D4ED8]

            flex
            items-center
            justify-center

            transition-all
          "
        >
          <ChevronLeft
            size={12}
            className="sm:w-4 sm:h-4 text-white"
          />
        </button>

        {/* NEXT */}
        <button
          className="
            w-6
            h-6

            sm:w-9
            sm:h-9

            rounded-md
            sm:rounded-lg

            bg-[#2563EB]
            hover:bg-[#1D4ED8]

            flex
            items-center
            justify-center

            transition-all
          "
        >
          <ChevronRight
            size={12}
            className="sm:w-4 sm:h-4 text-white"
          />
        </button>
      </div>
    </div>
  );
}

export default CalendarCard;