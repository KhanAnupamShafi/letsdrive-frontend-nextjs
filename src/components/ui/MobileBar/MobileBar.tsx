import { Image } from 'antd';

const MobileBar = () => {
  return (
    <header className="lg:hidden fixed bottom-0 left-0 right-0 p-2 bg-white shadow z-[52]">
      <ul className=" flex items-center justify-around">
        <li>
          <a
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-md bg-primary text-white"
            href="/">
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
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            <span className="text-center text-xs">Home</span>
          </a>
        </li>{' '}
        <li>
          <a
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-md false"
            href="/property-list">
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
                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
              />
            </svg>
            <span className="text-center text-xs">Listings</span>
          </a>
        </li>
        <li>
          <a
            className="flex flex-col items-center gap-1 py-2 px-3 rounded-md false"
            href="/user-wishlist">
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
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
            <span className="text-center text-xs">Wishlist</span>
          </a>
        </li>
        <li>
          <button className="flex flex-col items-center gap-1 py-2 px-3 rounded-md">
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
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <span className="text-center text-xs">Menu</span>
          </button>
        </li>
      </ul>
      <div className="fixed top-0 left-0 h-screen w-full bg-white shadow-lg z-20 transform transition-transform ease-in-out duration-300 translate-x-full">
        <button className="p-3 rounded-full absolute top-1 right-1">
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
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <Image
          alt="logo"
          width={227}
          height={60}
          className="p-2"
          style={{ color: 'transparent' }}
          src="https://placewisetw.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.ea68c7bf.png&w=640&q=75&dpl=dpl_42kWG5pc2HFwKaqT2KDFDUp5BMqR"
        />
        <div className="border-b my-2" />
        <ul className="flex flex-col lg:flex-row menus absolute left-0 lg:top-full bg-white lg:bg-transparent w-full lg:w-auto lg:static px-2 lg:px-0">
          <li className="relative menu-items cursor-pointer">
            <span
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center justify-between gap-1">
              Home{/* */}{' '}
              <i className="las la-angle-right false duration-300" />
            </span>
            <div
              aria-hidden="true"
              className="rah-static rah-static--height-zero "
              style={{ height: 0, overflow: 'hidden' }}>
              <div style={{ display: 'none' }}>
                <ul className="my-dropdown duration-300 shadow top-full static lg:absolute min-w-[200px] left-0 z-10 bg-white ">
                  <li className="relative menu-items cursor-pointer">
                    <a href="/">Real Estate</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/home-2">Property Listing</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/home-3">Car Rental</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/home-4">Hotel Booking</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/home-5">Tour Booking</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/home-6">Flight Booking</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative menu-items cursor-pointer">
            <span
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center justify-between gap-1">
              Listings{/* */}{' '}
              <i className="las la-angle-right false duration-300" />
            </span>
            <div
              aria-hidden="true"
              className="rah-static rah-static--height-zero "
              style={{ height: 0, overflow: 'hidden' }}>
              <div style={{ display: 'none' }}>
                <ul className="my-dropdown duration-300 shadow top-full static lg:absolute min-w-[200px] left-0 z-10 bg-white ">
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      property{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/property-list">Property List</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/property-grid">Property Grid</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/property-map">Property Map</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/add-property">Add Property</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/property-details-1">
                              Property Details 1
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/property-details-2">
                              Property Details 2
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Cab{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/cab-listing">Cab Listing</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/cab-listing-grid">
                              Cab Listing Grid
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/cab-listing-map">
                              Cab Listing Map
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/cab-listing-details">
                              Cab Listing Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Hotel{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/hotel-listing">Hotel Listing</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/hotel-listing-grid">
                              Hotel Listing Grid
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/hotel-listing-map">
                              Hotel Listing Map
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/hotel-listing-details">
                              Hotel listing Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Tour{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/tour-listing">Tour Listing</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/tour-listing-grid">
                              Tour Listing Grid
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/tour-listing-map">
                              Tour Listing Map
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/tour-listing-details">
                              Tour Listing Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Flight{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/flight-list">Flight List</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/flight-details">
                              Flight Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/compare-listing">Compare Listing</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative menu-items cursor-pointer">
            <span
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center justify-between gap-1">
              Pages{/* */}{' '}
              <i className="las la-angle-right false duration-300" />
            </span>
            <div
              aria-hidden="true"
              className="rah-static rah-static--height-zero "
              style={{ height: 0, overflow: 'hidden' }}>
              <div style={{ display: 'none' }}>
                <ul className="my-dropdown duration-300 shadow top-full static lg:absolute min-w-[200px] left-0 z-10 bg-white ">
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Agent{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/agent">Agent</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/agent-details-list">
                              Agent Details List
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/agent-details-grid">
                              Agent Details Grid
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/agent-details-review">
                              Agent Details Review
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Service{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/service">Service</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/service-details">
                              Service Details
                            </a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/select-option">Select Option</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/gift-card">Gift Card</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/gift-card-details">
                              Gift Card Details
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Others{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/help-center">Help Center</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/offers">Offers</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/privacy">Privacy Policy</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/terms">
                              Terms &amp; Conditions
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/about-us">About Us</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/payment-method">Payment Method</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/pricing-plan">Pricing Plan</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative menu-items cursor-pointer">
            <span
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center justify-between gap-1">
              Dashboard{/* */}{' '}
              <i className="las la-angle-right false duration-300" />
            </span>
            <div
              aria-hidden="true"
              className="rah-static rah-static--height-zero "
              style={{ height: 0, overflow: 'hidden' }}>
              <div style={{ display: 'none' }}>
                <ul className="my-dropdown duration-300 shadow top-full static lg:absolute min-w-[200px] left-0 z-10 bg-white ">
                  <li className="relative menu-items cursor-pointer">
                    <a href="/personal-info">User Dashboard</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/vendor-dashboard">Vendor Dashboard</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/admin-dashboard">Admin Dashboard</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="relative menu-items cursor-pointer">
            <span
              aria-haspopup="menu"
              aria-expanded="false"
              className="flex items-center justify-between gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-7 h-7">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>{' '}
            </span>
            <div
              aria-hidden="true"
              className="rah-static rah-static--height-zero "
              style={{ height: 0, overflow: 'hidden' }}>
              <div style={{ display: 'none' }}>
                <ul className="my-dropdown  duration-300 shadow top-full static lg:absolute min-w-[200px] left-0 z-10 bg-white ">
                  <li className="relative menu-items cursor-pointer">
                    <span
                      aria-haspopup="menu"
                      aria-expanded="false"
                      className="flex items-center justify-between gap-1">
                      Blog{/* */}{' '}
                      <i className="las la-angle-right false duration-300" />
                    </span>
                    <div
                      aria-hidden="true"
                      className="rah-static rah-static--height-zero "
                      style={{ height: 0, overflow: 'hidden' }}>
                      <div style={{ display: 'none' }}>
                        <ul className="my-dropdown  duration-300 shadow static lg:absolute left-full z-10 bg-white min-w-[200px] top-0 ">
                          <li className="relative menu-items cursor-pointer">
                            <a href="/blog-grid">Blog</a>
                          </li>
                          <li className="relative menu-items cursor-pointer">
                            <a href="/blog-details">Blog Details</a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/faq">Faq</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/contact">Contact Us</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/sign-in">Sign in</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/signup">Sign up</a>
                  </li>
                  <li className="relative menu-items cursor-pointer">
                    <a href="/error">Error</a>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default MobileBar;
