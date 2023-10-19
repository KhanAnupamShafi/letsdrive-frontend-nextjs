'use client';
import {
  Button,
  DatePicker,
  DatePickerProps,
  Flex,
  Select,
  Space,
  Tooltip,
} from 'antd';
import {
  ArrowDownFromLine,
  CarFront,
  Search,
  Timer,
} from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

const Landing = ({ data }: any) => {
  const [formState, setFormState] = useState<{
    serviceType: string;
    bookDate: string;
  }>({
    serviceType: '',
    bookDate: '',
  });

  console.log(formState);

  const filterOption = (
    input: string,
    option?: { label: string; value: string }
  ) =>
    (option?.label ?? '').toLowerCase().includes(input.toLowerCase());
  const onServiceChange = (value: string) => {
    setFormState({ ...formState, serviceType: value });
  };

  const onDateChange: DatePickerProps['onChange'] = (
    date,
    dateString
  ) => {
    setFormState({ ...formState, bookDate: dateString });
  };

  const onSearch = (value: string) => {
    // console.log('search:', value);
  };

  const serviceData = (data || []).map((item: any) => ({
    value: item.name,
    label: item.name,
  }));
  const isDisabled = !formState.serviceType || !formState.bookDate;

  return (
    <div className="pt-[70px] sm:pt-[100px] md:pt-[150px] xl:pt-[180px] pb-16 h-full px-3">
      <div className="container">
        <div className="text-center relative z-[2]">
          <h1 className="text-[40px] lg:text-[56px] leading-[68px] text-[var(--neutral-700)] font-semibold">
            Easy Way to Find a Perfect <br /> Property
          </h1>
          <p className="text-xl mx-auto max-w-[600px] text-gray-500 mt-4 md:mt-9">
            Explore vast property listings by category with our
            user-friendly search. Find your perfect match!
          </p>
          <div className="z-30 p-4 lg:p-5 rounded-xl shadow-lg bg-white flex items-center flex-wrap gap-3 relative max-w-[1060px] mx-auto mt-12">
            <div className="text-left w-full md:w-[48%] xl:w-[22%] cursor-pointer">
              <div className="relative">
                <Flex className="px-2 py-1 flex gap-3 items-center relative w-full cursor-default focus:shadow-xl bg-[var(--bg-1)] border rounded-3xl justify-center">
                  <CarFront color="#374151" size={20} />
                  <Select
                    className="w-[80%]   "
                    showSearch
                    placeholder={
                      <span className="block truncate">
                        Rent Option
                      </span>
                    }
                    optionFilterProp="children"
                    onChange={onServiceChange}
                    onSearch={onSearch}
                    filterOption={filterOption}
                    style={{ width: 120 }}
                    loading={serviceData.length === 0}
                    options={serviceData}
                  />
                </Flex>
              </div>
            </div>
            <div className="text-left w-full md:w-[48%] xl:w-[22%] cursor-pointer">
              <div className="relative">
                <Flex
                  align="center"
                  className="px-2 py-1 flex gap-3 items-center relative w-full cursor-default focus:shadow-xl bg-[var(--bg-1)] border rounded-3xl justify-center">
                  <Timer color="#374151" size={20} />
                  <DatePicker
                    onChange={onDateChange}
                    placeholder={`Select Date`}
                  />
                </Flex>
              </div>
            </div>
            {/* <div className="text-left w-full md:w-[48%] xl:w-[22%] cursor-pointer">
              <div className="relative">
                <button
                  className="relative w-full cursor-default py-3 px-8 focus:shadow-xl flex gap-3 items-center sm:text-sm bg-[var(--bg-1)] border rounded-3xl"
                  id="headlessui-listbox-button-:r5:"
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded="false"
                  data-headlessui-state="">
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
                      d="M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z"
                    />
                  </svg>
                  <span className="block truncate">
                    Property Type
                  </span>
                  <span className="pointer-events-none absolute inset-y-0 right-8 flex items-center pr-2">
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
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="text-left w-full md:w-[48%] xl:w-[22%] relative">
              <div className="py-2 px-6 focus:shadow-xl flex gap-3 items-center sm:text-sm bg-[var(--bg-1)] border rounded-3xl">
                <div className="w-full py-1 flex items-center gap-2">
                  <span className="flex items-center gap-1">
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
                        d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
                      />
                    </svg>
                    Price
                  </span>
                  <span className="absolute top-[-14px] bg-white rounded-2xl py-1 px-5 right-4 shadow text-primary text-xs">
                    $40
                  </span>
                  <div className="rc-slider rc-slider-horizontal">
                    <div className="rc-slider-rail" />
                    <div
                      className="rc-slider-track"
                      style={{
                        left: '0%',
                        width: '40%',
                        backgroundColor: 'var(--primary)',
                      }}
                    />
                    <div className="rc-slider-step" />
                    <div
                      className="rc-slider-handle"
                      tabIndex={0}
                      role="slider"
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={40}
                      aria-disabled="false"
                      aria-orientation="horizontal"
                      style={{
                        left: '40%',
                        transform: 'translateX(-50%)',
                        backgroundColor: 'var(--primary)',
                        borderColor: 'var(--primary)',
                      }}
                    />
                  </div>
                </div>
              </div>
            </div> */}
            {/* style={{ pointerEvents: 'none', opacity: 0.5 }}> */}

            <Link
              className={`${
                isDisabled ? 'pointer-events-none opacity-50' : ''
              }`}
              href={`/select-car/?serviceType=${formState.serviceType}&bookingDate=${formState.bookDate}`}>
              <Tooltip title="search">
                <Button
                  size="large"
                  className="w-full flex justify-center xl:w-auto rounded-full"
                  type="primary"
                  shape="circle"
                  icon={<Search />}
                />
              </Tooltip>
            </Link>
          </div>
          <div className="mx-auto mt-16">
            <Space className="m-auto text-white bg-primary rounded-full p-4 mb-2">
              <Tooltip title="search">
                <Button
                  className="w-full flex justify-center xl:w-auto rounded-full"
                  type="primary"
                  shape="circle"
                  icon={<ArrowDownFromLine />}
                />
              </Tooltip>
            </Space>
            <br />
            <span className="text-center">More Details</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
