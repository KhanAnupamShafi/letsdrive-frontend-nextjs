'use client';
import { Button } from 'antd';
import { MailOpen, MapPin, PhoneCall } from 'lucide-react';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import Logo from '../../../assets/Logo.svg';

const TopHeader = ({ session }: { session: boolean }) => {
  const { data: sessionData, status } = useSession();

  return (
    <div className="bg-[var(--bg-1)] border-b-2 border-[var(--border)] font-sans">
      <div className="container mx-auto flex justify-between py-3 lg:py-5 px-2 gap-1 ">
        <Link href="/">
          <Logo width="172" height="50" />
        </Link>

        {/* <img
          alt="logo"
          width="56"
          height="40"
          className="self-center xl:hidden w-40 h-40 ml-3"
        /> */}

        <div className="flex divide-x  ">
          <div className="flex items-center gap-5 px-2 xl:px-4 border-solid border-r-[1px] border-[#e5e7eb]">
            <i className="bg-primary text-white text-2xl p-2 rounded-full flex items-center justify-center">
              <PhoneCall size={25} />
            </i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Free Call</span>
              <a className="text-base" href="tel:4065550120">
                (880) 1790-544
              </a>
            </div>
          </div>

          <div className="flex items-center gap-5 px-2 xl:px-4">
            <i className="bg-secondary text-neutral text-2xl p-2 rounded-full flex items-center justify-center">
              <MailOpen size={25} />
            </i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Online Support</span>
              <Link
                className="text-base"
                href="mailto:deep71.bd@gmail.com">
                anupam.shafi@gmail.com
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-5 px-2 xl:px-4 border-solid border-r-[1px] border-[#e5e7eb]">
            <i className="flex justify-center items-center bg-tertiary text-neutral text-2xl p-2 rounded-full">
              <MapPin size={25} />
            </i>
            <div className="flex-col hidden lg:flex">
              <span className="text-xs">Our Location</span>
              <span className="text-base">144 New Airport Rd.</span>
            </div>
          </div>
        </div>
        {status === 'authenticated' || session ? (
          <span className="hidden md:flex items-center">
            <Button
              size="small"
              type="primary"
              danger
              onClick={() => {
                signOut();
              }}>
              Sign Out
            </Button>
          </span>
        ) : (
          <Link className="hidden md:block" href="/login">
            <Button type="primary">Sign Up</Button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default TopHeader;
