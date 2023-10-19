import Title from 'antd/es/typography/Title';
import Image from 'next/image';
import React from 'react';
import carPic from '../../../assets/footer-logo2.png';
const AdminTable = ({
  children,
  title,
}: {
  children: React.ReactNode;
  title: string;
}) => {
  return (
    <>
      <div className="flex items-center justify-between flex-wrap px-3 py-5 md:p-[12px] gap-5 lg:p-[20px] bg-[var(--dark)]">
        <div className="flex gap-2 items-center">
          <div className="p-1 border border-[var(--primary)] rounded-full  grid place-content-center relative mx-auto">
            <Image
              src={carPic}
              width={100}
              height={18}
              alt="Picture of the car"
            />
            <div className="w-4 h-4 grid place-content-center rounded-full border-2 white text-white bg-primary absolute bottom-2 right-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
                className="w-3 h-3">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4.5 12.75l6 6 9-13.5"
                />
              </svg>
            </div>
          </div>
          <div className="text-white">
            <Title className="font-semibold text-2xl text-white">
              {title}
            </Title>
          </div>
        </div>
      </div>

      {children}
    </>
  );
};

export default AdminTable;
