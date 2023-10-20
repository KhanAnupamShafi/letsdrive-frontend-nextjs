const FilterBar = () => {
  return (
    <div className="p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg">
      <h4 className="mb-0 text-2xl font-semibold">
        Car Rental Filter
      </h4>
      <div className="border-b border-dashed my-6 opacity-50" />
      <div className="flex items-center justify-between rounded-full border bg-[var(--bg-1)] px-5 py-3">
        <input
          className="w-full bg-transparent focus:outline-none"
          placeholder="Car Type..."
          type="text"
        />
        <button
          type="button"
          className="border-0 bg-transparent p-0 lh-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            aria-hidden="true"
            className="w-5 h-5">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </button>
      </div>
      <div className="border-t border-dashed my-6 opacity-50" />
      <p className="mb-4 text-xl font-medium">Car Category</p>
      <ul className="flex items-center gap-6">
        <li>
          <div className="flex items-center gap-2">
            <input
              className="accent-[var(--primary)] scale-125"
              id="compact-category"
              type="radio"
              defaultValue="compact"
              name="car-type"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="compact-category">
              Compact
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input
              className="accent-[var(--primary)] scale-125"
              id="midsize-category"
              type="radio"
              defaultValue="midsize"
              name="car-type"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="midsize-category">
              Midsize
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input
              className="accent-[var(--primary)] scale-125"
              id="fullsize-category"
              type="radio"
              defaultValue="fullsize"
              name="car-type"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="fullsize-category">
              Fullsize
            </label>
          </div>
        </li>
      </ul>
      <div className="border-t border-dashed my-6" />
      <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
        Price Range
      </p>
      <div className="pb-10 pt-4">
        <div className="range-slider">
          <div
            data-testid="element"
            id="range"
            className="range-slider">
            <input
              min={0}
              max={100}
              step={1}
              // disabled=""
              type="range"
              defaultValue={24}
            />
            <input
              min={0}
              max={100}
              step={1}
              // disabled=""
              type="range"
              defaultValue={62}
            />
          </div>
          <div className="flex justify-center gap-4 py-5">
            <span>$24</span>
            <span>-</span>
            <span>$62</span>
          </div>
        </div>
      </div>
      <div className="border-t border-dashed my-6" />
      <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
        Features
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-1 xl:grid-cols-2 gap-4">
        <div className="flex items-center">
          <input
            id="GPS"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="GPS"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-[var(--primary)] w-3 h-3"
              viewBox="0 0 12 9">
              <path
                d="M1 5.03593L5.73333 9L11 3.67859"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>
          <label
            className="text-lg font-medium cursor-pointer"
            htmlFor="GPS">
            GPS
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="leather-interior"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="leather-interior"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-[var(--primary)] w-3 h-3"
              viewBox="0 0 12 9">
              <path
                d="M1 5.03593L5.73333 9L11 3.67859"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>
          <label
            className="text-lg font-medium cursor-pointer"
            htmlFor="leather-interior">
            Leather Interior
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="sunroof"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="sunroof"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-[var(--primary)] w-3 h-3"
              viewBox="0 0 12 9">
              <path
                d="M1 5.03593L5.73333 9L11 3.67859"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>
          <label
            className="text-lg font-medium cursor-pointer"
            htmlFor="sunroof">
            Sunroof
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="bluetooth"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="bluetooth"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-[var(--primary)] w-3 h-3"
              viewBox="0 0 12 9">
              <path
                d="M1 5.03593L5.73333 9L11 3.67859"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
              />
            </svg>
          </div>
          <label
            className="text-lg font-medium cursor-pointer"
            htmlFor="bluetooth">
            Bluetooth
          </label>
        </div>
      </div>
      <div className="flex justify-end pt-6">
        <button
          className="bg-[var(--primary)] text-white px-6 py-2 rounded-lg text-lg font-medium"
          type="button">
          Apply Filters
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
