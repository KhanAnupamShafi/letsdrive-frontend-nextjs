const FilterBar = () => {
  return (
    <div className="p-4 lg:py-6 lg:px-8 bg-white rounded-2xl shadow-lg">
      <h4 className="mb-0 text-2xl font-semibold"> Filter </h4>
      <div className="border-b border-dashed my-6 opacity-50" />
      <div className="flex items-center justify-between rounded-full border bg-[var(--bg-1)] px-5 py-3">
        <input
          className="w-full bg-transparent focus:outline-none"
          placeholder="Keywords..."
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
      <p className="mb-4 text-xl font-medium"> Category </p>
      <ul className="flex items-center gap-6">
        <li>
          <div className="flex items-center gap-2">
            <input
              className="accent-[var(--primary)] scale-125"
              id="rent-category"
              type="radio"
              defaultValue="rent"
              //               defaultChecked=""
              name="property-type"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="rent-category">
              Rent
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input
              className="accent-[var(--primary)] scale-125"
              id="buy-category"
              type="radio"
              defaultValue="buy"
              name="property-type"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="buy-category">
              Buy
            </label>
          </div>
        </li>
        <li>
          <div className="flex items-center gap-2">
            <input
              className="accent-[var(--primary)] scale-125"
              id="sell-category"
              type="radio"
              defaultValue="sell"
              name="property-type"
            />
            <label
              className="inline-block text-lg font-medium cursor-pointer"
              htmlFor="sell-category">
              Sell
            </label>
          </div>
        </li>
      </ul>
      <div className="border-t border-dashed my-6" />
      <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
        Select Types
      </p>
      <ul className="flex flex-col gap-4">
        <li>
          <div className="rounded-full border bg-[var(--bg-1)] pr-4">
            <select
              className="w-full bg-transparent px-5 py-3 focus:outline-none"
              aria-label="Default select example">
              <option value="">Property Types</option>
              <option value={1}>New York</option>
              <option value={2}>Chicago</option>
              <option value={3}>Atlanta</option>w-full bg-transparent
              px-5 py-3 focus:outline-none
            </select>
          </div>
        </li>
        <li>
          <div className="rounded-full border bg-[var(--bg-1)] pr-4">
            <select
              className="w-full bg-transparent px-5 py-3 focus:outline-none"
              aria-label="Default select example">
              <option value="">Property City</option>
              <option value={1}>New York</option>
              <option value={2}>Chicago</option>
              <option value={3}>Atlanta</option>
            </select>
          </div>
        </li>
        <li>
          <div className="rounded-full border bg-[var(--bg-1)] pr-4">
            <select
              className="w-full bg-transparent px-5 py-3 focus:outline-none"
              aria-label="Default select example">
              <option value="">Property Area</option>
              <option value={1}>New York</option>
              <option value={2}>Chicago</option>
              <option value={3}>Atlanta</option>
            </select>
          </div>
        </li>
        <li>
          <div className="rounded-full border bg-[var(--bg-1)] pr-4">
            <select
              className="w-full bg-transparent px-5 py-3 focus:outline-none"
              aria-label="Default select example">
              <option value="">Rooms Number</option>
              <option value={1}>New York</option>
              <option value={2}>Chicago</option>
              <option value={3}>Atlanta</option>
            </select>
          </div>
        </li>
      </ul>
      <div className="border-t border-dashed my-6" />
      <p className="mb-4 text-[var(--neutral-700)] text-xl font-medium">
        Pricing scale
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
        Amenities
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:gird-cols-1 xl:grid-cols-2 gap-4">
        <div className="flex items-center">
          <input
            id="Laundry"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Laundry"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Laundry"
            className="select-none flex gap-2 cursor-pointer items-center">
            Laundry
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Lawn"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Lawn"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Lawn"
            className="select-none flex gap-2 cursor-pointer items-center">
            Lawn
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Microwave"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Microwave"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Microwave"
            className="select-none flex gap-2 cursor-pointer items-center">
            Microwave
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Refrigerator"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Refrigerator"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Refrigerator"
            className="select-none flex gap-2 cursor-pointer items-center">
            Refrigerator
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="TV Cable"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="TV Cable"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="TV Cable"
            className="select-none flex gap-2 cursor-pointer items-center">
            TV Cable
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Washer"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Washer"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Washer"
            className="select-none flex gap-2 cursor-pointer items-center">
            Washer
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="WiFi"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="WiFi"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="WiFi"
            className="select-none flex gap-2 cursor-pointer items-center">
            WiFi
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Sauna"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Sauna"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Sauna"
            className="select-none flex gap-2 cursor-pointer items-center">
            Sauna
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Air Condition"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Air Condition"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Air Condition"
            className="select-none flex gap-2 cursor-pointer items-center">
            Air Condition
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Barbeque"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Barbeque"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Barbeque"
            className="select-none flex gap-2 cursor-pointer items-center">
            Barbeque
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Dryer"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Dryer"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Dryer"
            className="select-none flex gap-2 cursor-pointer items-center">
            Dryer
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Gym"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Gym"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Gym"
            className="select-none flex gap-2 cursor-pointer items-center">
            Gym
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Internet"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Internet"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Internet"
            className="select-none flex gap-2 cursor-pointer items-center">
            Internet
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Pool"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Pool"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Pool"
            className="select-none flex gap-2 cursor-pointer items-center">
            Pool
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Window"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Window"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Window"
            className="select-none flex gap-2 cursor-pointer items-center">
            Window
          </label>
        </div>
        <div className="flex items-center">
          <input
            id="Outdoor"
            className="opacity-0 absolute h-8 w-8"
            type="checkbox"
            defaultValue="Outdoor"
            name="A3-confirmation"
          />
          <div className="bg-white border border-gray-400 rounded-full w-5 h-5 flex shrink-0 justify-center items-center mr-2 focus-within:border-[var(--primary)]">
            <svg
              className="fill-current hidden w-[10px] h-[10px] text-primary pointer-events-none"
              version="1.1"
              viewBox="0 0 17 12"
              xmlns="http://www.w3.org/2000/svg">
              <g fill="none" fillRule="evenodd">
                <g
                  transform="translate(-9 -11)"
                  fill="#363AED"
                  fillRule="nonzero">
                  <path d="m25.576 11.414c0.56558 0.55188 0.56558 1.4439 0 1.9961l-9.404 9.176c-0.28213 0.27529-0.65247 0.41385-1.0228 0.41385-0.37034 0-0.74068-0.13855-1.0228-0.41385l-4.7019-4.588c-0.56584-0.55188-0.56584-1.4442 0-1.9961 0.56558-0.55214 1.4798-0.55214 2.0456 0l3.679 3.5899 8.3812-8.1779c0.56558-0.55214 1.4798-0.55214 2.0456 0z" />
                </g>
              </g>
            </svg>
          </div>
          <label
            htmlFor="Outdoor"
            className="select-none flex gap-2 cursor-pointer items-center">
            Outdoor
          </label>
        </div>
      </div>
      <div className="border-t border-dashed my-6" />
      <a
        className="btn-outline flex justify-center items-center gap-2 text-primary font-semibold w-full text-center"
        href="#">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          aria-hidden="true"
          className="w-6 h-6">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
          />
        </svg>
        Reset Filters
      </a>
    </div>
  );
};

export default FilterBar;
