'use client';
import ModalBooking from '@/app/(public)/select-car/modal.booking';
import { Briefcase, PersonStanding } from 'lucide-react';
import Image from 'next/image';
import { useState } from 'react';
import AntButton from '../Button/AntButton';

const SingleCarCard = ({ data }: { data: any }) => {
  const [open, setOpen] = useState(false);

  const {
    id,
    name,
    image,
    model,
    isAvailable,
    seatCapacity,
    priceStart,
    luggage,
    wifi,
    airConditioner,
    transmission,
  } = data || {};

  return (
    <div className="bg-white grid grid-cols-12 rounded-2xl p-2">
      <div className="rounded-2xl col-span-12 md:col-span-5 relative group">
        <div className="h-full">
          <Image
            alt="image"
            loading="lazy"
            width={270}
            height={280}
            decoding="async"
            className="rounded-2xl object-cover w-full h-full"
            src={image}
          />
        </div>
        <div
          className={`absolute top-4 z-10 inline-block ${
            !isAvailable
              ? 'bg-tertiary text-white'
              : 'bg-white text-primary'
          }  left-4 rounded-full py-2 px-2 sm:px-3 md:px-4`}>
          For Rent
        </div>
        <button className="absolute z-10 inline-block text-primary top-4 right-4 rounded-full bg-white p-2.5 ">
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
              d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
            />
          </svg>
        </button>
      </div>
      <div className="col-span-12 md:col-span-7">
        <div>
          <div className="flex items-center pt-3 gap-1 mb-3 pl-4 mt-2">
            <i className="las la-map-marker-alt text-lg text-[#9C742B]" />
            <span className="inline-block">{model}</span>
          </div>
          <a
            className="text-xl font-medium text-neutral-700 pl-4"
            href="property-details-1">
            {name}
          </a>
          <ul className="flex flex-wrap divide-x divide-dashed justify-between mt-5 pl-3 mb-5">
            <li className="flex flex-col px-2 gap-1">
              <Briefcase />
              <span className="block">{luggage} Large Bag</span>
            </li>
            <li className="flex flex-col px-1 xxl:px-2 gap-1">
              <PersonStanding />
              <span className="block"> {seatCapacity} Person </span>
            </li>
            <li className="flex flex-col px-1 xxl:px-2 gap-1">
              <PersonStanding />
              <span className="block"> {seatCapacity} Person </span>
            </li>
            <li className="flex flex-col px-1 xxl:px-2 gap-1">
              <PersonStanding />
              <span className="block"> {seatCapacity} Person </span>
            </li>
          </ul>
        </div>
        <div className="mx-3 md:mx-5">
          <div className=" border-t border-dash-long" />
        </div>
        <div className="px-3 sm:px-4 md:px-5 pb-5 pt-4">
          <div className="flex flex-wrap gap-3 justify-between items-center">
            <span className="text-primary text-xl font-medium">
              ${priceStart}
              <span className="text-base text-neutral-700">
                /Starts From
              </span>
            </span>
            <div onClick={() => setOpen(true)}>
              <AntButton type="primary" color="#ffbe46">
                Book Now
              </AntButton>
            </div>
            <ModalBooking carId={id} open={open} setOpen={setOpen} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCarCard;
