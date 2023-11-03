'use client';
import {
  BellRing,
  ChevronDown,
  Dot,
  Globe,
  Menu,
  UserCircle2,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import profilePic from '../../../assets/user-1.jpg';
function Navbar({ session }: { session: boolean }) {
  const [scrolling, setScrolling] = useState(false); // State to track scrolling
  const [className, setClassName] = useState(
    'z-30 border-y sticky top-0 duration-300 lg:text-2xl'
  );

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 99) {
        setScrolling(true);
        setClassName(
          'z-30 border-y sticky hidden lg:block top-0 z-50 shadow-md bg-white bg-opacity-70 backdrop-blur border-none duration-300'
        );
      } else {
        setScrolling(false);
        setClassName(
          'z-30 border-y sticky top-0 duration-300 lg:text-2xl'
        );
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //z-30 border-y sticky hidden lg:block top-0 z-50 shadow-md bg-white bg-opacity-70 backdrop-blur border-none duration-300
  return (
    <>
      <header className={className}>
        <div className="container  flex justify-between items-center relative px-3 py-2 ">
          <div className="flex items-center gap-2 lg:order-2">
            <div className="z-10 w-[115px] text-left">
              <div className="relative inline-block text-left">
                <div>
                  <button className="inline-flex w-full justify-center  rounded-3xl bg-[#EFEFFD] px-4 py-3 text-sm font-medium text-gray-700 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
                    <span className="flex items-center gap-2 mr-2">
                      <Globe color="#374151" size={20} />
                      <span className="text-gray-700">|</span>
                      <UserCircle2 color="#374151" size={20} />
                    </span>
                    <ChevronDown color="#374151" size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="z-10 text-left">
              <div className="relative inline-block text-left">
                <div>
                  <button
                    className="inline-flex justify-center rounded-3xl bg-[#EFEFFD] p-3 text-sm font-medium text-gray-800 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
                    id="headlessui-menu-button-:Rcidja:"
                    type="button">
                    <BellRing color="#374151" size={20} />
                  </button>
                </div>
              </div>
            </div>
            {session && (
              <div className="z-10 text-left">
                <div className="relative top-1 inline-block md:top-[2px]">
                  <button
                    className="flex items-center justify-center rounded-full focus:outline-none"
                    id="headlessui-menu-button-:Reidja:"
                    type="button">
                    <Image
                      alt="profile"
                      loading="lazy"
                      width="45"
                      height="45"
                      decoding="async"
                      data-nimg="1"
                      className="rounded-full"
                      src={profilePic}
                    />
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="lg:order-1">
            <button className="rounded-md border bg-[#EFEFFD] px-2 py-1 lg:hidden">
              <i className="text-2xl">
                <Menu color="#374151" size={20} />
              </i>
            </button>
            <div className="hidden lg:block">
              <ul className="menus absolute left-0 flex w-full flex-col bg-white px-2 lg:static lg:top-full lg:w-auto lg:flex-row lg:bg-transparent lg:px-0 text-neutral">
                <li className="menu-items relative cursor-pointer">
                  <Link href={'/'}>
                    <span className="flex items-center justify-between gap-1">
                      Home
                      <Dot />
                    </span>
                  </Link>
                </li>
                <li className="menu-items relative cursor-pointer">
                  <span className="flex items-center justify-between gap-1">
                    Listings
                    <Dot />
                  </span>
                </li>
                <li className="menu-items relative cursor-pointer">
                  <span className="flex items-center justify-between gap-1">
                    Pages
                    <Dot />
                  </span>
                </li>
                <li className="menu-items relative cursor-pointer">
                  <Link href={'/profile'}>
                    <span className="flex items-center justify-between gap-1">
                      Dashboard
                      <Dot className="invisible" />
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Navbar;
