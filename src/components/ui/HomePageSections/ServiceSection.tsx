import { Car, Contact, Gem, Wrench } from 'lucide-react';

const ServiceSection = () => {
  return (
    <div id="category" className="container">
      <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
        <button className="bg-[var(--primary-light)] p-1 rounded-full flex items-center">
          <i className="las la-arrow-right p-2 md:p-3 rounded-full bg-primary text-white" />
          <span className="text-base sm:text-lg lg:text-xl font-medium sm:font-semibold px-2 sm:px-3 md:px-4">
            Category
          </span>
        </button>
        <h2 className="h2 mt-5">Choose Our Category</h2>
        <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
          Find Your Perfect Fit: Discover a selection of packages
          designed to cater to various preferences, from deluxe luxury
          to budget-friendly options....
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6">
        <div className="border rounded-xl max-w-[306px] cursor-pointer group duration-300">
          <div className="p-8 bg-white group-hover:bg-primary rounded-t-xl group-hover:text-white duration-300">
            <i className="las la-city text-7xl group-hover:text-white duration-300 text-primary false false">
              <Car size={40} />
            </i>
            <h4 className="font-semibold text-xl pt-2 pb-3 text-neutral-700 group-hover:text-white">
              Economy
            </h4>
            <p>
              Budget-friendly Cost-effective Fuel-efficient Practical
              Affordable transportation
            </p>
          </div>
          <div className="bg-[var(--bg-1)] p-8 rounded-b-xl group-hover:bg-[#212391] group-hover:text-white duration-300">
            <a href="#" className="group-hover:text-white">
              Read More{' '}
              <i className="las la-arrow-right group-hover:text-white" />
            </a>
          </div>
        </div>

        <div className="border rounded-xl max-w-[306px] cursor-pointer group duration-300">
          <div className="p-8 bg-white group-hover:bg-primary rounded-t-xl group-hover:text-white duration-300">
            <i className="las la-building text-7xl group-hover:text-white duration-300 text-primary false false">
              <Gem size={40} />
            </i>
            <h4 className="font-semibold text-xl pt-2 pb-3 text-neutral-700 group-hover:text-white">
              Premium
            </h4>
            <p>
              Top-tier High-performance Cutting-edge technology
              Prestigious Superior quality
            </p>
          </div>
          <div className="bg-[var(--bg-1)] p-8 rounded-b-xl group-hover:bg-[#212391] group-hover:text-white duration-300">
            <a href="#" className="group-hover:text-white">
              Read More <i className="las la-arrow-right" />
            </a>
          </div>
        </div>

        <div className="border rounded-xl max-w-[306px] cursor-pointer group duration-300">
          <div className="p-8 bg-white group-hover:bg-primary rounded-t-xl group-hover:text-white duration-300">
            <i className="las la-store text-7xl group-hover:text-white duration-300 false false text-[#9C742B]">
              <Wrench size={40} />
            </i>
            <h4 className="font-semibold text-xl pt-2 pb-3 text-neutral-700 group-hover:text-white">
              Delux
            </h4>
            <p>
              Luxury High end Premium features with Exquisite comfort
              and Elite experience .
            </p>
          </div>
          <div className="bg-[var(--bg-1)] p-8 rounded-b-xl group-hover:bg-[#212391] group-hover:text-white duration-300">
            <a href="#" className="group-hover:text-white">
              Find More <i className="las la-arrow-right" />
            </a>
          </div>
        </div>
        <div className="border rounded-xl max-w-[306px] cursor-pointer group duration-300">
          <div className="p-8 bg-white group-hover:bg-primary rounded-t-xl group-hover:text-white duration-300">
            <i className="las la-landmark text-7xl group-hover:text-white duration-300 false text-[#22814B] false">
              <Contact size={40} />
            </i>
            <h4 className="font-semibold text-xl pt-2 pb-3 text-neutral-700 group-hover:text-white">
              Family
            </h4>
            <p>
              Spacious Comfortable seating Kid-friendly Affordable
              family travel Versatile options
            </p>
          </div>
          <div className="bg-[var(--bg-1)] p-8 rounded-b-xl group-hover:bg-[#212391] group-hover:text-white duration-300">
            <a href="#" className="group-hover:text-white">
              Find More <i className="las la-arrow-right" />
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center relative group">
          <div className="w-[290px] h-[290px] rounded-full bg-[#ADEDC8] duration-300 group-hover:bg-[#22804A] group-hover:text-white flex items-center justify-center p-5 cursor-pointer relative overflow-hidden">
            <div className="text-center">
              <h2 className="h2 mb-2 group-hover:text-white">25+</h2>
              <p>
                Explore cars and <br /> choose ur desired package
              </p>
              <a
                className="rounded-full bg-white group-hover:bg-[var(--tertiary)] mt-4 p-6 inline-block text-black"
                href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-5 h-5">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </a>
            </div>
            <div className="h-[197px] w-[197px] rounded-full absolute -right-20 -bottom-16 bg-[#72E0A0]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSection;
