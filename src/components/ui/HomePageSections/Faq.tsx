const CarRentalFaq = () => {
  return (
    <div className="container mt-[150px]">
      <div className="max-w-[570px] mx-auto flex flex-col items-center text-center px-3">
        <button className="bg-[var(--primary-light)] p-1 rounded-full flex items-center">
          <i className="las la-arrow-right p-2 md:p-3 rounded-full bg-primary text-white" />
          <span className="text-base sm:text-lg lg:text-xl font-medium sm:font-semibold px-2 sm:px-3 md:px-4">
            Car Rental FAQs
          </span>
        </button>
        <h2 className="h2 mt-3 leading-snug">
          If you have any questions about car rental, we have the
          answers
        </h2>
        <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
          Car rental provides a convenient way to travel, whether for
          business or leisure. Explore the common questions about our
          car rental services below.
        </p>
      </div>
      <div className="max-w-[856px] flex flex-col gap-4 lg:gap-6 mx-auto px-3 xl:px-0">
        <div className="bg-[var(--secondary-light)] rounded-xl md:rounded-2xl lg:rounded-[30px] p-3 sm:p-5 md:p-6 lg:px-10 cursor-pointer">
          <button className="text-lg select-none md:text-xl w-full font-medium flex items-center text-left justify-between">
            Q: How do I rent a car with your service?{' '}
            <span className="p-1 bg-[#22814B] duration-300 text-white rounded-full rotate-180">
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
                  d="M19.5 12h-15"
                />
              </svg>
            </span>
          </button>
          <div
            aria-hidden="false"
            className="rah-static rah-static--height-auto "
            style={{ height: 'auto', overflow: 'visible' }}>
            <div>
              <p className="border-t border-dash-long pt-4 mt-4">
                A: Renting a car with our service is easy. Simply
                browse our car rental options, choose the vehicle that
                suits your needs, and follow the booking process to
                reserve your car.
              </p>
            </div>
          </div>
        </div>
        {/* <!-- More FAQs about car rental can be added here --> */}
      </div>
    </div>
  );
};

export default CarRentalFaq;
