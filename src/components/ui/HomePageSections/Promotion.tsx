import {
  ArrowBigRight,
  CalendarRange,
  DollarSign,
  FastForward,
  MoonIcon,
} from 'lucide-react';
import Image from 'next/image';
import Pic from '/public/category-section-el.png';
const Promotion = () => {
  return (
    <section
      style={{
        backgroundImage: `url("https://res.cloudinary.com/de98kpzgn/image/upload/h_1000,w_950/v1699882015/carrent_ve28wj.webp")`,
        height: '100vh',
        backgroundRepeat: 'no-repeat',
      }}
      className="mt-10 bg-left bg-contain bg-no-repeat relative">
      <Image
        alt=""
        width={232}
        height={207}
        className="hidden xl:block absolute bottom-10 right-14"
        src={Pic}
      />

      <div className="py-[60px] lg:py-[120px]">
        <div className="container">
          <div className="flex justify-end px-3 xl:px-0">
            <div className="max-w-[600px]">
              <div className="flex gap-2">
                <i className="text-[var(--tertiary)] las la-star" />
                <i className="text-[var(--tertiary)] las la-star" />
                <i className="text-[var(--tertiary)] las la-star" />
                <i className="text-[var(--tertiary)] las la-star" />
                <i className="text-[var(--tertiary)] las la-star" />
              </div>
              <p className="mt-4 text-xl bg-white rounded p-2">
                <span className="text-primary ">
                  {' '}
                  99.5% Customer Satisfaction{' '}
                </span>{' '}
                based on 23,000+ reviews and 25,000+ Complete
                Projects.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-12">
            <div className="col-span-12 lg:col-span-4 xl:col-span-5" />
            <div className="col-span-12 lg:col-span-8 xl:col-span-7 px-3 sm:px-6 lg:px-16 py-4 lg:py-10 bg-white lg:border-solid border-2 border-sky-500 rounded-2xl mt-12">
              <button className="bg-[var(--primary-light)] p-1 rounded-full flex items-center">
                <i className="las la-arrow-right p-2 md:p-3 rounded-full bg-primary text-white">
                  <ArrowBigRight />
                </i>
                <span className="text-base sm:text-lg lg:text-xl font-medium sm:font-semibold px-2 sm:px-3 md:px-4">
                  Benefits
                </span>
              </button>
              <h2 className="h2 mt-4 leading-snug mb-5">
                Explore the city of Car
              </h2>
              <p className="text-neutral-600">
                Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Aspernatur harum quod laudantium nobis
                recusandae dolore suscipit ipsam neque, possimus
                aperiam ea sit odit et, quos repudiandae fugit soluta
                tenetur labore!
              </p>
              <div className="grid grid-cols-12 gap-6 mt-7 lg:mt-10">
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <DollarSign size={30} />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Best Price Guarantee
                    </h4>
                    <p>Best Price Guarantee is a policy offered</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <MoonIcon size={30} />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Reach millions user
                    </h4>
                    <p>It is possible that the platform allows</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <FastForward size={30} />

                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Easy &amp; Quick Booking
                    </h4>
                    <p>The goal of Easy &amp; Quick Booking is to</p>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-6 p-6 rounded-xl bg-[var(--bg-2)] flex gap-5">
                  <CalendarRange size={30} />
                  <div>
                    <h4 className="text-xl font-semibold mb-2">
                      Customer Care 24/7
                    </h4>
                    <p>24/7 Customer Care facility available</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promotion;
