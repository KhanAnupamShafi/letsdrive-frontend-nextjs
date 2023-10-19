const SortingBar = () => {
  return (
    <div className="col-span-12">
      <div className="bg-white rounded-lg py-2 px-6 shadow-lg">
        <ul className="flex justify-between items-center flex-wrap gap-3 ">
          <li className="hidden xl:block">
            <p className="mb-0 clr-neutral-500">
              Showing 5 of 20 Results
            </p>
          </li>
          <li className="flex-grow">
            <ul className="flex flex-wrap justify-center justify-content-lg-start justify-content-xl-center gap-4">
              <li>
                <a
                  className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                  href="property-grid">
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
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  <span className="inline-block font-medium">
                    Grid
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="link flex items-center gap-2 clr-neutral-500 hover:text-primary text-primary"
                  href="property-list">
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
                      d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                    />
                  </svg>
                  <span className="inline-block font-medium">
                    List
                  </span>
                </a>
              </li>
              <li>
                <a
                  className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                  href="property-map">
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
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <span className="inline-block font-medium">
                    Map
                  </span>
                </a>
              </li>
            </ul>
          </li>
          <li className="hidden lg:flex items-center">
            <p className="mb-0 clr-neutral-500 flex-grow whitespace-nowrap">
              Sort By :
            </p>
            <select className="w-full bg-transparent px-5 py-2 focus:outline-none border-0">
              <option>latest</option>
              <option value={1}>One</option>
              <option value={2}>Two</option>
              <option value={3}>Three</option>
            </select>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SortingBar;
