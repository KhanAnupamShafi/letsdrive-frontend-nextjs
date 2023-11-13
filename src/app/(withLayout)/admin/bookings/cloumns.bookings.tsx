'use client';

import { approveBooking } from '@/services/booking/approveBooking';
import { cancelBooking } from '@/services/booking/cancelBooking';
import {
  Button,
  Dropdown,
  Flex,
  MenuProps,
  Modal,
  Space,
  Tag,
  message,
} from 'antd';
import {
  AlertTriangle,
  CheckCheck,
  ChevronDownCircle,
  XCircle,
} from 'lucide-react';
import Link from 'next/link';

// const handleDelete = async (id: string) => {
//   await deleteDoctor(id);
// };
const { confirm } = Modal;

const getDropdownMenuItems = (
  id: string,
  status: string
): MenuProps['items'] => [
  {
    key: '1',
    label: (
      <Flex align="baseline" gap={2}>
        <span>Approve</span> <CheckCheck size={14} />
      </Flex>
    ),
    onClick: () => acceptBookingHandler(id),
    disabled: status === 'APPROVED' || status === 'CANCELED', // Updated condition
  },
  // {
  //   key: '2',
  //   label: <Link href={`/admins/bookings/${id}/update`}>Edit</Link>,
  // },
  {
    key: '3',
    label: (
      <span>
        <Flex align="center" gap={2}>
          Cancel <XCircle size={14} />
        </Flex>
      </span>
    ),
    onClick: () => showPromiseConfirm(id),
    danger: true,
    disabled: status === 'APPROVED' || status === 'CANCELED', // Updated condition
  },
];
const showPromiseConfirm = (id: string) => {
  confirm({
    title: 'Are You Sure?',
    icon: <AlertTriangle color="red" />,
    content: 'This is irreversible',
    okButtonProps: {
      className: 'bg-red-500',
    },
    onOk() {
      return cancelBooking(id) // Call your async function here
        .then(() => {
          // Handle success
          message.info('Operation completed successfully');
        })
        .catch((error) => {
          // Handle errors
          message.error('Oops, an error occurred:', error);
        });
    },
    onCancel() {},
  });
};
const acceptBookingHandler = (id: string) => {
  confirm({
    title: 'Are You Sure?',
    icon: <AlertTriangle color="red" />,
    content: 'This is irreversible',
    okButtonProps: {
      className: 'bg-red-500',
    },
    onOk() {
      return approveBooking(id) // Call your async function here
        .then(() => {
          // Handle success
          message.info('Operation completed successfully');
        })
        .catch((error) => {
          // Handle errors
          message.error('Oops, an error occurred:', error);
        });
    },
    onCancel() {},
  });
};

export interface DataType {
  key: React.Key;

  id: string;
  bookingDate: string;
  status: string;
  reserveDays: number;
  tripType: string;
  pickUpLocation: string;
  destination: string;
  departureDate: string;
  departureTime: string;
  totalCost: number;
  userId: string;
  carPackageId: string;
  createdAt: string;
  updatedAt: string;
  carPackage: {
    id: string;
    carId: number;
    name: string;
    image: string;
    description: string;
    model: string;
    isAvailable: boolean;
    seatCapacity: number;
    priceStart: number;
    fuel: string;
    luggage: number;
    wifi: boolean;
    airConditioner: boolean;
    transmission: boolean;
    rating: number;
    bookedUntil: string;
    serviceId: string;
    createdAt: string;
    updatedAt: string;
  };
  user: {
    id: string;
    email: string;
    password: string;
    fullName: string;
    phoneNumber: string;
    role: string;
    address: string;
    isPasswordReset: boolean;
    createdAt: string;
    updatedAt: string;
  };
}

export const columns: any = [
  {
    title: 'User Name',
    dataIndex: ['user', 'fullName'],
    key: 'user',
    render: (text: string) => <a>{text}</a>,
  },

  {
    title: 'Email',
    dataIndex: ['user', 'email'],
    key: 'email',
  },
  {
    title: 'Address',
    dataIndex: 'pickUpLocation',
    key: 'pickUpLocation',
  },
  {
    title: 'Trip Inside Dhaka ? ',
    dataIndex: 'tripType',
    key: 'tripType',
    render: (_: any, { tripType }: any) => {
      let color = 'orange';

      if (tripType === 'inside') {
        color = 'pink';
      }
      return (
        <Tag color={color} key={tripType}>
          {tripType?.toUpperCase()}
        </Tag>
      );
    },
  },
  {
    title: 'Destination',
    dataIndex: 'destination',
    key: 'destination',
  },
  {
    title: 'Departure Date',
    dataIndex: 'departureDate',
    key: 'departureDate',
    sorter: (a: any, b: any) => {
      const dateA = new Date(a.departureDate).getTime();
      const dateB = new Date(b.departureDate).getTime();

      return dateA - dateB;
    },
    render: (_: any, { departureDate }: any) => {
      const date = new Date(departureDate);
      const formattedDate = date.toLocaleDateString(); // Format the date part
      const formattedTime = date.toLocaleTimeString(); // Format the time part

      return (
        <span>
          <span>{formattedDate}</span> at <span>{formattedTime}</span>
        </span>
      );
    },
  },
  {
    title: 'Car',
    dataIndex: ['carPackage', 'name'],
    key: 'carPackage',
    render: (_: any, { carPackage }: any) => {
      return (
        <Link href={`/admin/car-list/${carPackage?.id}`}>
          {carPackage?.name}
        </Link>
      );
    },
  },
  {
    title: 'Booking Status',
    dataIndex: 'status',
    key: 'status',
    render: (_: any, { status }: any) => {
      let color = 'volcano';

      if (status === 'PENDING') {
        color = 'gold';
      } else if (status === 'APPROVED') {
        color = 'green';
      } else if (status === 'ENDED') {
        color = 'blue';
      }
      return (
        <Tag color={color} key={status}>
          {status?.toUpperCase()}
        </Tag>
      );
    },
  },

  {
    title: 'Action',
    key: 'action',
    render: (record: any) => {
      const items = getDropdownMenuItems(record.id, record.status);
      return (
        <Dropdown
          arrow={{ pointAtCenter: true }}
          placement="bottom"
          className="shadow-md "
          menu={{
            items: items,
          }}>
          {
            <span className="text-red-500">
              <Space align="end">
                <Button type="default">
                  <Flex align="center" gap={5}>
                    <span>Manage</span>
                    <ChevronDownCircle size={18} />
                  </Flex>
                </Button>
              </Space>
            </span>
          }
        </Dropdown>
      );
    },
  },
];
