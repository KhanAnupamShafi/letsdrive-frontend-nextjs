'use client';
import { baseUrl } from '@/app/page';
import {
  DatePicker,
  Flex,
  Input,
  Modal,
  Radio,
  RadioChangeEvent,
  Select,
  Space,
  message,
} from 'antd';
import { RangePickerProps } from 'antd/es/date-picker';
import type { Dayjs } from 'dayjs';
import dayjs from 'dayjs';
import { CalendarDays, Info, MapPin } from 'lucide-react';
import { useSession } from 'next-auth/react';
import { ReactNode, useEffect, useState } from 'react';

type ModalBookingProps = {
  open: boolean;
  setOpen: (isOpen: boolean) => void;
  carId: string;
};
const optionsRadio = [
  { label: 'Inside Dhaka', value: 'inside' },
  { label: 'Outside Dhaka', value: 'outside' },
];
/** Manually entering any of the following formats will perform date parsing */
const dateFormat = 'DD/MM/YYYY';
const { RangePicker } = DatePicker;
const options = [
  {
    value: 'chittagong',
    label: 'Chittagong',
  },
  {
    value: 'rajshahi',
    label: 'Rajshahi',
  },
  {
    value: 'sylhet',
    label: 'Sylhet',
  },
];
const formattedDate = dayjs().add(1, 'day').format('DD/MM/YYYY');

const ModalBooking = ({
  open,
  setOpen,
  carId,
}: ModalBookingProps) => {
  const [messageApi, contextHolder] = message.useMessage();
  const [valueRadio, setValueRadio] = useState('inside');
  const [startDate, setStartDate] = useState(formattedDate);
  const [endDate, setEndDate] = useState(formattedDate);
  const [pickUpLocation, setPickUpLocation] = useState('');
  const [selectedOption, setSelectedOption] = useState('');
  const [priceData, setPriceData] = useState<Record<string, unknown>>(
    {}
  );

  const { data: session } = useSession();
  // Calculate the difference in days
  const parsedDate = dayjs(startDate, dateFormat).toISOString();
  const parsedTodayDate = new Date().toISOString();

  const startD = dayjs(startDate, dateFormat);
  const endD = dayjs(endDate, dateFormat);
  const totalDays = Math.max(
    1,
    dayjs(endD, dateFormat).diff(startD, 'day') + 1
  );

  useEffect(() => {
    const priceQueryData = {
      tripType: valueRadio,
      reserveDays: totalDays,
    };

    fetch(`${baseUrl}/car-packages/get-price/${carId}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(priceQueryData),
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error('Network response was not ok');
        }
      })
      .then((data) => {
        console.log(data);

        setPriceData(data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, [valueRadio, totalDays, carId]);

  const handleOk = async () => {
    const payload = {
      bookingDate: parsedTodayDate,
      reserveDays: totalDays,
      tripType: valueRadio,
      departureDate: parsedDate,
      pickUpLocation: pickUpLocation,
      destination: selectedOption,
      departureTime: '9 AM',
      userId: session?.id,
      carPackageId: 'clnq8vodn0001d0r6jlhvt33x',
    };

    try {
      const res = await fetch(
        `http://localhost:5000/api/v1/bookings/book-car`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(payload),
          cache: 'no-cache',
        }
      );
      const response = await res.json();
      messageApi.open({
        key: 'updatable',
        type: 'loading',
        content: 'Loading...',
      });
      if (response.status === true) {
        messageApi.success({
          content: 'Booking successful',
          duration: 4,
          key: 'updatable',
        });

        setOpen(false); // Close the modal on successful submission
      } else {
        // Handle any errors
        messageApi.error({
          content: response?.message,
          duration: 5,
          key: 'updatable',
        });
      }
      setOpen(false); // Close the modal on successful submission
    } catch (error) {
      messageApi.error('Failed to request booking');
    }
  };

  const handleCancel = () => {
    console.log('Clicked cancel button');
    setOpen(false);
  };

  const onChangeRadio = ({ target: { value } }: RadioChangeEvent) => {
    console.log('radio4 checked', value);
    setValueRadio(value);
  };

  const onDateChange = (
    dates: null | (Dayjs | null)[],
    dateStrings: string[]
  ) => {
    if (dates) {
      setStartDate(dateStrings[0]);
      setEndDate(dateStrings[1]);
    } else {
      console.log('Clear');
    }
  };

  const handleLocationChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // Update the state when the pick-up location input value changes
    setPickUpLocation(e.target.value);
  };

  const handleOptionChange = (value: string) => {
    // Update the state when the selected option in the Select component changes
    setSelectedOption(value);
  };

  const disabledDate: RangePickerProps['disabledDate'] = (
    current
  ) => {
    // Can not select days before today and today
    return current && current < dayjs().endOf('day');
  };

  return (
    <>
      {contextHolder}
      <Modal
        title="Rent "
        centered
        open={open}
        okText="Confirm Booking"
        cancelText="Cancel"
        onOk={handleOk}
        onCancel={() => setOpen(false)}
        width={800}>
        <div className="mb-10 lg:mb-14">
          <div className="bg-white rounded-2xl py-8 px-6">
            <p className="mb-3 text-lg font-medium"> Price </p>
            <div className="flex items-start gap-2 mb-6">
              <div className="flex gap-3 items-center">
                <i className="las la-tag text-2xl" />
                <p className="mb-0"> From </p>
                <h3 className="h3 mb-0"> $399 </h3>
              </div>
              <Info size={16} />
            </div>
            <Flex justify="space-between" align="center">
              <div
                className="flex gap-4"
                role="tablist"
                aria-orientation="horizontal">
                <button
                  className="focus:outline-none text-primary"
                  type="button">
                  Booking Form
                </button>{' '}
                |
                <button className="focus:outline-none" type="button">
                  Enquiry Form
                </button>
              </div>
              <Radio.Group
                options={optionsRadio}
                onChange={onChangeRadio}
                value={valueRadio}
                optionType="button"
                buttonStyle="solid"
              />
            </Flex>
            <div className="mt-5">
              <div className="tab-pane fade show active">
                <div className="flex items-center bg-[var(--bg-1)] gap-3 py-4 px-8 rounded-full border border-neutral-40 mb-4">
                  <p className="mb-0 text clr-neutral-400">
                    Select Date
                  </p>
                  <CalendarDays size={22} />
                  <div className="flex-grow">
                    <Space direction="vertical" size={12}>
                      <RangePicker
                        onChange={onDateChange}
                        disabledDate={disabledDate}
                        defaultValue={[
                          dayjs(formattedDate + 1, dateFormat),
                          dayjs(formattedDate + 1, dateFormat),
                        ]}
                        format={dateFormat}
                      />
                    </Space>
                  </div>
                </div>
                <div className="flex bg-[var(--bg-1)] gap-3 py-4 px-8 rounded-full border border-neutral-40 mb-4">
                  <i className="las la-user-friends text-3xl text-gray-500" />
                  <div className="flex-grow ">
                    <Flex align="baseline" gap={10}>
                      <p className="mb-0 clr-neutral-400">
                        Where to?
                      </p>
                      <Space.Compact
                        className='className="w-full pb-2 focus:outline-none appearance-none border-none bg-transparent"'
                        size="large">
                        <Input
                          onChange={handleLocationChange}
                          addonBefore={<MapPin />}
                          placeholder="Pick up location"
                        />
                        {valueRadio !== 'inside' && (
                          <Select
                            onChange={handleOptionChange}
                            defaultValue="rajshahi"
                            options={options}
                          />
                        )}
                      </Space.Compact>
                    </Flex>
                  </div>
                </div>
                <div className="flex items-center justify-between my-4">
                  <p className="mb-0 clr-neutral-500">
                    {' '}
                    $50 x {totalDays} day{' '}
                  </p>
                  <p className="mb-0 font-medium">
                    {' '}
                    ${totalDays * 50}{' '}
                  </p>
                </div>
                <div className="flex items-center justify-between">
                  <p className="mb-0 clr-neutral-500">
                    {' '}
                    Service charge{' '}
                  </p>
                  <p className="mb-0 font-medium">
                    {' '}
                    ${(priceData?.data as any) - totalDays * 50}{' '}
                  </p>
                </div>
                <div className="border border-dashed my-4" />
                <div className="flex items-center justify-between">
                  <p className="mb-0 clr-neutral-500"> Total </p>
                  <p className="mb-0 font-medium">
                    {' '}
                    ${priceData?.data as ReactNode}{' '}
                  </p>
                </div>
              </div>
              <span
                id="enquiry-list"
                role="tabpanel"
                tabIndex={-1}
                style={{
                  position: 'fixed',
                  top: 1,
                  left: 1,
                  width: 1,
                  height: 0,
                  padding: 0,
                  margin: '-1px',
                  overflow: 'hidden',
                  clip: 'rect(0px, 0px, 0px, 0px)',
                  whiteSpace: 'nowrap',
                  borderWidth: 0,
                }}
                aria-labelledby="headlessui-tabs-tab-:r4:"
              />
            </div>
            <a
              className="btn-primary flex items-center justify-center my-6"
              href="#">
              Proceed Booking
            </a>
            <ul className="flex justify-center gap-6">
              <li>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-full bg-[var(--primary-light)] text-primary grid place-content-center">
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
                  </button>
                  <span className="inline-block text-sm clr-neutral-500">
                    Save To Wish List
                  </span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-2">
                  <button className="w-7 h-7 rounded-full bg-[var(--primary-light)] text-primary grid place-content-center">
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
                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
                      />
                    </svg>
                  </button>
                  <span className="inline-block text-sm clr-neutral-500">
                    Compare
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalBooking;
