import Image from 'next/image';
import pic from '../../../assets/user-1.jpg';
const Testimonial = () => {
  return (
    <div className="container mt-20">
      <div className="max-w-[570px] mx-auto flex flex-col items-center text-center">
        <button className="bg-[var(--primary-light)] p-1 rounded-full flex items-center">
          <i className="las la-arrow-right p-2 md:p-3 rounded-full bg-primary text-white" />
          <span className="text-base sm:text-lg lg:text-xl font-medium sm:font-semibold px-2 sm:px-3 md:px-4">
            Testimonial
          </span>
        </button>
        <h2 className="h2 mt-3 leading-tight">
          Reviews of our satisfied customers
        </h2>
        <p className="text-neutral-600 pt-5 pb-8 lg:pb-14">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          Suscipit tenetur ipsa velit repellat, ad sequi nam, animi
          adipisci iure laborum posprehenderit odio ea quo veritatis!{' '}
        </p>
      </div>
      <div className="bg-white rounded-2xl">
        <div className="flex items-center gap-4 justify-between flex-wrap mb-10">
          <div className="flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-[var(--tertiary)]">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <h3 className="mb-0 text-xl"> 4.7 (21 reviews) </h3>
          </div>
          <div className="flex items-center gap-2">
            <p className="mb-0 clr-neutral-500 shrink-0">
              {' '}
              Sort By :{' '}
            </p>
            <div className="border rounded-full pr-3">
              <select className="w-full bg-transparent px-5 py-3 focus:outline-none">
                <option>Latest</option>
                <option value={1}>One</option>
                <option value={2}>Two</option>
                <option value={3}>Three</option>
              </select>
            </div>
          </div>
        </div>
        <div className="bg-[var(--bg-2)] rounded-2xl p-3 sm:p-4 lg:p-6 mb-8">
          <div className="flex items-center flex-wrap justify-between gap-4 ">
            <div className="flex gap-5 items-center">
              <div className="w-15 h-15 shrink-0 rounded-full overflow-hidden">
                <Image
                  alt="image"
                  width={60}
                  height={60}
                  className=" w-full h-full object-fit-cover"
                  src={pic}
                  style={{ color: 'transparent' }}
                />
              </div>
              <div className="flex-grow">
                <h5 className="mb-1 font-semibold"> K. Laura </h5>
                <p className="mb-0 clr-neutral-500">
                  {' '}
                  Product Designer{' '}
                </p>
              </div>
            </div>
            <div className="text-sm-end">
              <p className="mb-1"> 09:01 am </p>
              <p className="mb-0"> Mar 03, 2023 </p>
            </div>
          </div>
          <div className="border border-dashed my-6" />
          <div className="flex gap-1 pt-6 lg:pt-0 mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-[var(--tertiary)]">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-[var(--tertiary)]">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-[var(--tertiary)]">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-[var(--tertiary)]">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              className="w-5 h-5 text-[var(--tertiary)]">
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <p className="mb-0 clr-neutral-500">
            If you’re looking for cheap and economical car hire in
            Dhaka city, come to them and make a reservation right now.
            You do not have to pay anything until you are picked up.
            They give rental car assistance to customers across
            Bangladesh.
          </p>
          <div className="border border-dashed my-6" />
        </div>

        <a className="btn-primary" href="#">
          See All Reviews
        </a>
      </div>
    </div>
  );
};

export default Testimonial;
