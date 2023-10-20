const UserSidebar = () => {
  return (
    <div
      className="col-span-12 md:col-span-5 lg:col-span-4 xl:col-span-3"
      style={{ zIndex: 2 }}>
      <div className="p-3 sm:p-4 lg:p-6 rounded-2xl bg-white shadow-lg">
        <div className="w-32 h-32 border border-[var(--primary)] rounded-full bg-white p-4 grid place-content-center relative mx-auto mb-10">
          {/* <img
            alt="image"
            loading="lazy"
            width={96}
            height={96}
            decoding="async"
            data-nimg={1}
            className="rounded-full"
            srcSet="/_next/image?url=%2Fimg%2Fteam-1.jpg&w=96&q=75 1x, /_next/image?url=%2Fimg%2Fteam-1.jpg&w=256&q=75 2x"
            src="/_next/image?url=%2Fimg%2Fteam-1.jpg&w=256&q=75"
            style={{ color: 'transparent' }}
          /> */}
          <div className="w-8 h-8 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-0 right-0">
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
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
          </div>
        </div>
        <div className="text-center mb-10">
          <h4 className="text-2xl font-semibold"> anupam deep</h4>
          <p className="mb-0"> dip@example.com </p>
        </div>
        <div className="mb-10">
          <span className="block clr-neutral-400 text-xs mb-4">
            Account
          </span>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/personal-info">
                <i className="las la-user-circle text-xl" />
                <span className="block font-medium">
                  Personal info
                </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-security">
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
                    d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z"
                  />
                </svg>
                <span className="block font-medium"> Security </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center justify-between gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-notification">
                <span className="flex items-center gap-2">
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
                      d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
                    />
                  </svg>
                  <span className="block font-medium">
                    Notifications
                  </span>
                </span>
                <span className="grid place-content-center w-6 h-6 rounded-full bg-[var(--secondary-500)] text-white text-sm">
                  1
                </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-preference">
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
                    d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
                  />
                </svg>
                <span className="block font-medium">
                  {' '}
                  Preferences{' '}
                </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-chat">
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
                    d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155"
                  />
                </svg>
                <span className="block font-medium"> Chat </span>
              </a>
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <span className="block clr-neutral-400 text-xs mb-4">
            SHOPPING
          </span>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary text-primary"
                href="/user-booking">
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
                    d="M11.35 3.836c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m8.9-4.414c.376.023.75.05 1.124.08 1.131.094 1.976 1.057 1.976 2.192V16.5A2.25 2.25 0 0118 18.75h-2.25m-7.5-10.5H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V18.75m-7.5-10.5h6.375c.621 0 1.125.504 1.125 1.125v9.375m-8.25-3l1.5 1.5 3-3.75"
                  />
                </svg>
                <span className="block font-medium">
                  {' '}
                  My Bookings{' '}
                </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center justify-between gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-wishlist">
                <span className="flex items-center gap-2">
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
                  <span className="block font-medium">
                    My Wishlist
                  </span>
                </span>
                <span className="grid place-content-center w-6 h-6 rounded-full bg-[var(--secondary-500)] text-white text-sm">
                  4
                </span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <span className="block clr-neutral-400 text-xs mb-4">
            BILLING
          </span>
          <ul className="flex flex-col gap-3">
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-payment">
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
                    d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                  />
                </svg>
                <span className="block font-medium"> Payments </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-address">
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
                <span className="block font-medium"> Address </span>
              </a>
            </li>
            <li>
              <a
                className="link flex items-center gap-2 clr-neutral-500 hover:text-primary false"
                href="/user-team">
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
                    d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                  />
                </svg>
                <span className="block font-medium"> Teams </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
