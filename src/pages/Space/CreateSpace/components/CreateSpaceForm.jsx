import {
  ChevronDown,
  Upload,
} from "lucide-react";

function CreateSpaceForm() {
  return (
    <div
      className="
        bg-white

        rounded-2xl

        shadow-sm

        overflow-hidden
      "
    >
      {/* HEADER */}
      <div
        className="
          flex flex-col md:flex-row
          md:items-center
          md:justify-between

          gap-4

          px-4 md:px-8
          py-5

          border-b border-gray-200
        "
      >
        <h1
          className="
            text-[26px] md:text-[34px]
            font-bold

            text-[#2563EB]
          "
        >
          Create Space
        </h1>

        {/* BUTTONS */}
        <div className="flex items-center gap-3">
          <button
            className="
              h-[44px]

              px-6

              border border-gray-200

              rounded-lg

              text-gray-500
              text-sm
              font-medium
            "
          >
            Discard
          </button>

          <button
            className="
              h-[44px]

              px-6

              bg-[#2563EB]
              text-white

              rounded-lg

              text-sm
              font-medium
            "
          >
            Add Rack
          </button>
        </div>
      </div>

      {/* FORM */}
      <div className="p-4 md:p-8">
        <div className="space-y-6">
          {/* SPACE TYPE */}
          <ResponsiveSelect
            label="Space Type"
          />

          {/* TYPE */}
          <ResponsiveSelect
            label="Type"
          />

          {/* INPUTS */}
          <FormInput label="Code" />

          <FormInput label="Name" />

          <FormInput label="Weight Limit" />

          {/* DIMENSION */}
          <div
            className="
              grid
              grid-cols-1 md:grid-cols-[180px_1fr]

              gap-4 md:gap-8
            "
          >
            <label
              className="
                text-lg md:text-[28px]
                font-semibold

                text-[#2B2B2B]
              "
            >
              Dimension
            </label>

            <div
              className="
                flex flex-col lg:flex-row

                gap-5
              "
            >
              {/* P */}
              <DimensionInput label="P" />

              {/* L */}
              <DimensionInput label="L" />

              {/* T */}
              <DimensionInput label="T" />
            </div>
          </div>

          {/* IMAGE */}
          <div
            className="
              grid
              grid-cols-1 md:grid-cols-[180px_1fr]

              gap-4 md:gap-8
            "
          >
            <label
              className="
                text-lg md:text-[28px]
                font-semibold

                text-[#2B2B2B]
              "
            >
              Image
            </label>

            <div>
              {/* INPUT */}
              <input
                type="file"
                id="imageUpload"
                className="hidden"
              />

              {/* BUTTON */}
              <label
                htmlFor="imageUpload"
                className="
                  h-[60px]

                  bg-[#667085]

                  rounded-xl

                  text-white

                  flex items-center justify-center gap-3

                  text-sm md:text-lg
                  font-medium

                  cursor-pointer

                  hover:bg-[#596379]

                  transition-all
                "
              >
                Upload Image

                <Upload size={20} />
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* INPUT */

function FormInput({
  label,
}) {
  return (
    <div
      className="
        grid
        grid-cols-1 md:grid-cols-[180px_1fr]

        items-center

        gap-4 md:gap-8
      "
    >
      <label
        className="
          text-lg md:text-[28px]
          font-semibold

          text-[#2B2B2B]
        "
      >
        {label}
      </label>

      <input
        type="text"
        className="
          w-full
          h-[56px]

          border border-[#C9D0E3]

          rounded-xl

          px-5

          outline-none
        "
      />
    </div>
  );
}

/* SELECT */

function ResponsiveSelect({
  label,
}) {
  return (
    <div
      className="
        grid
        grid-cols-1 md:grid-cols-[180px_1fr]

        items-center

        gap-4 md:gap-8
      "
    >
      <label
        className="
          text-lg md:text-[28px]
          font-semibold

          text-[#2B2B2B]
        "
      >
        {label}
      </label>

      <div className="relative">
        <select
          className="
            w-full
            h-[56px]

            border border-[#C9D0E3]

            rounded-xl

            px-5

            appearance-none

            outline-none
          "
        >
          <option>Select</option>
        </select>

        <ChevronDown
          size={20}
          className="
            absolute

            right-5
            top-1/2
            -translate-y-1/2

            text-[#2563EB]
          "
        />
      </div>
    </div>
  );
}

/* DIMENSION */

function DimensionInput({
  label,
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="
          text-lg
          font-semibold
        "
      >
        {label} :
      </span>

      <input
        type="text"
        className="
          w-full lg:w-[180px]
          h-[56px]

          border border-[#C9D0E3]

          rounded-xl

          px-4

          outline-none
        "
      />
    </div>
  );
}

export default CreateSpaceForm;