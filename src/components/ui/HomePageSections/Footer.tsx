import Image from 'next/image';
import pic from '../../../assets/footer-logo2.png';
const Footer = () => {
  return (
    <footer className="bg-[#091E43] mt-[50px]">
      <div className="py-[60px] lg:py-[120px]">
        <div className="container">
          <div className="grid grid-cols-12 gap-6 text-white px-3 xl:px-0">
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <a className="inline-block mb-6" href="/">
                <Image
                  alt="image"
                  loading="lazy"
                  width={77}
                  height={20}
                  decoding="async"
                  src={pic}
                />
              </a>
              <p className="text-[#fff] mb-6">
                Welcome to our booking website, where you can easily
                book all of your travel needs in one place. We offer a
                comprehensive selection of flights, hotels, and rental
                cars to help you plan the perfect trip.
              </p>
              <ul className="flex gap-3 flex-wrap">
                <li>
                  <a
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                    href="#">
                    <i className="lab la-facebook-f text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                    href="#">
                    <i className="lab la-twitter text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                    href="#">
                    <i className="lab la-linkedin-in text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                    href="#">
                    <i className="lab la-instagram text-xl" />
                  </a>
                </li>
                <li>
                  <a
                    className="border border-[#3538ED] duration-300 hover:bg-[#3538ED] grid place-content-center p-[10px] rounded-full"
                    href="#">
                    <i className="lab la-dribbble text-xl" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6">
                {' '}
                Quick Link{' '}
              </h4>
              <ul className="flex flex-col gap-2">
                <li>
                  <a
                    className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                    href="/about-us">
                    About us
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                    href="/property-list">
                    Properties
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                    href="/agent">
                    Agents
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                    href="/faq">
                    FAQs
                  </a>
                </li>
                <li>
                  <a
                    className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                    href="blog-grid">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6">
                {' '}
                Contact{' '}
              </h4>
              <ul className="flex flex-col gap-4">
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-phone-volume bg-primary text-white text-xl p-2 rounded-full" />
                    <a
                      className="mb-0 text-[#fff]"
                      href="tel:3165550116">
                      (880) 0179-0116
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-envelope-open bg-[var(--secondary)] text-[var(--neutral-700)] text-xl p-2 rounded-full" />
                    <a
                      className="mb-0 text-[#fff]"
                      href="mailto:example@mail.com">
                      deep@gmail.com
                    </a>
                  </div>
                </li>
                <li>
                  <div className="flex items-center gap-4">
                    <i className="las la-map-marker-alt bg-[var(--tertiary)] text-[var(--neutral-700)] text-xl p-2 rounded-full" />
                    <p className="mb-0 text-[#fff]">
                      31 Brandy Way, Sutton, SM2 6SE
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col-span-12 md:col-span-6 xl:col-span-3">
              <h4 className="text-2xl font-semibold mb-6">
                {' '}
                Newsletter{' '}
              </h4>
              <p className="mb-6 text-[#fff]">
                Subscribe our newsletter to get our latest update
                &amp; news
              </p>
              <div className="p-2 rounded-full border border-neutral-200">
                <form action="#" className="flex items-center">
                  <input
                    placeholder="Email address"
                    className="w-full border-0 bg-transparent text-[#fff] px-3 py-2 ::placeholder-neutral-30 focus:outline-none"
                    type="text"
                  />
                  <button
                    type="button"
                    className="grid place-content-center px-6 py-3 rounded-full bg-[var(--tertiary)]  border-0">
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
                        d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                      />
                    </svg>
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-span-12">
            <div className="py-8 border-t border-[#3638bd] text-white">
              <div className="grid grid-cols-12 gap-4 ">
                <div className="col-span-12 lg:col-span-6">
                  <p className="m-0 text-center lg:text-start">
                    Copyright © 2023
                    <span className="text-[var(--tertiary)]">
                      {' '}
                      Anupam{' '}
                    </span>
                  </p>
                </div>
                <div className="col-span-12 lg:col-span-6">
                  <ul className="flex items-center flex-wrap gap-6 justify-center lg:justify-end">
                    <li>
                      <a
                        className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                        href="/help-center">
                        Help Center
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                        href="/privacy-policy">
                        Privacy Policy
                      </a>
                    </li>
                    <li>
                      <a
                        className="hover:text-[var(--secondary)] text-[#f3f3f3] duration-300"
                        href="/terms">
                        Terms of Service
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
