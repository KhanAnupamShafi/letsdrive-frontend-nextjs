const Booking = () => {
  return (
    <div
      className="col-span-12 md:col-span-7 lg:col-span-8 xl:col-span-9"
      style={{ zIndex: 2 }}>
      <ul className="flex flex-col gap-6">
        <li>
          <div className="p-3 sm:p-4 lg:p-6 p-xl-10 rounded-2xl bg-white shadow-3">
            <h3 className="mb-0 h3 flex-grow"> My Bookings </h3>
            <div className="hr-line my-6" />
            <div
              className="col-span-12 border rounded-2xl mb-4 px-4 lg:mb-6 flex flex-wrap justify-between"
              role="tablist"
              aria-orientation="horizontal">
              <button
                className="focus:outline-none flex gap-2 items-center font-medium py-4 px-3 text-primary border-primary border-b"
                id="headlessui-tabs-tab-:r2p:"
                role="tab"
                type="button"
                aria-selected="true"
                tabIndex={0}
                data-headlessui-state="selected"
                aria-controls="upcoming">
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
                    d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                  />
                </svg>
                <span className="inline-block">
                  {' '}
                  Upcoming Booking{' '}
                </span>
              </button>
              <button
                className="focus:outline-none flex gap-2 items-center font-medium py-4 px-3"
                id="headlessui-tabs-tab-:r2q:"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex={-1}
                data-headlessui-state=""
                aria-controls="canceled">
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
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
                <span className="inline-block">
                  {' '}
                  Canceled Booking{' '}
                </span>
              </button>
              <button
                className="focus:outline-none flex gap-2 items-center font-medium py-4 px-3"
                id="headlessui-tabs-tab-:r2r:"
                role="tab"
                type="button"
                aria-selected="false"
                tabIndex={-1}
                data-headlessui-state=""
                aria-controls="completed">
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
                    d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
                  />
                </svg>
                <span className="inline-block">
                  {' '}
                  Completed Booking{' '}
                </span>
              </button>
            </div>
            <div>
              <div
                className="tab-pane fade show active"
                id="upcoming"
                role="tabpanel"
                tabIndex={0}
                data-headlessui-state="selected"
                aria-labelledby="headlessui-tabs-tab-:r2p:">
                <h5 className="mb-4 font-medium">
                  {' '}
                  Upcoming booking (2){' '}
                </h5>
                <ul className="flex flex-col gap-4">
                  <li>
                    <div className="border border-neutral-40 p-4 p-sm-6 xl:p-8 rounded-2xl">
                      <div className="flex gap-4 flex-wrap items-center justify-between">
                        <div className="flex items-center gap-4 flex-wrap">
                          <div className="grid place-content-center w-12 h-12 shadow-lg rounded-full shrink-0">
                            <div className="grid place-content-center w-10 h-10 bg-[var(--primary-light)] text-primary rounded-full">
                              <i className="las la-plane-departure text-2xl" />
                            </div>
                          </div>
                          <div className="flex-grow">
                            <h5 className="font-medium mb-1">
                              Dhaka To Chittagong
                            </h5>
                            <ul className="flex items-center flex-wrap list-divider-half-xs">
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Booking ID :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    AHA12548
                                  </span>
                                </span>
                              </li>
                              <li>
                                <span className="inline-block text-sm">
                                  <span className="inline-block clr-neutral-500">
                                    Travel Class :
                                  </span>
                                  <span className="inline-block text-[var(--neutral-700)] font-medium">
                                    Bussiness
                                  </span>
                                </span>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <a
                          className="btn-outline text-primary font-semibold shrink-0"
                          href="#">
                          Manage Booking
                        </a>
                      </div>
                      <div className="border border-dashed my-6" />
                      <div className="grid grid-cols-12 gap-4">
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500">
                            {' '}
                            Departure time{' '}
                          </p>
                          <h5 className="mb-0 font-medium">
                            Tue 09 Jan 12:00 AM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500">
                            {' '}
                            Arrival time{' '}
                          </p>
                          <h5 className="mb-0 font-medium">
                            Tue 06 Aug 4:00 PM
                          </h5>
                        </div>
                        <div className="col-span-12 lg:col-span-6 xl:col-span-4">
                          <p className="clr-neutral-500">
                            {' '}
                            Booked by{' '}
                          </p>
                          <h5 className="mb-0 font-medium">
                            {' '}
                            Guy Hawkins{' '}
                          </h5>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              <span
                id="canceled"
                role="tabpanel"
                tabIndex={-1}
                style={{
                  position: 'fixed',
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0px, 0px, 0px, 0px)',
                  whiteSpace: 'nowrap',
                  borderWidth: 0,
                }}
                aria-labelledby="headlessui-tabs-tab-:r2q:"
              />
              <span
                id="completed"
                role="tabpanel"
                tabIndex={-1}
                style={{
                  position: 'fixed',
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0px, 0px, 0px, 0px)',
                  whiteSpace: 'nowrap',
                  borderWidth: 0,
                }}
                aria-labelledby="headlessui-tabs-tab-:r2r:"
              />
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Booking;
