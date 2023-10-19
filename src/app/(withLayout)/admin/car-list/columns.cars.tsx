'use client';
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
import carPic from '../../../../assets/car.png';

import Image from 'next/image';
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
      <Link href={`/admins/car-list/${id}`}>
        <Flex align="baseline" gap={2}>
          <span>Approve</span> <CheckCheck size={14} />
        </Flex>
      </Link>
    ),
    disabled: status === 'APPROVED' || status === 'CANCELED', // Updated condition
  },
  {
    key: '2',
    label: <Link href={`/admins/bookings/${id}/update`}>Edit</Link>,
  },
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

export const columns: any = [
  {
    title: 'Car Name',
    dataIndex: ['name'],
    key: 'car',
    render: (text: string) => <a>{text}</a>,
  },

  {
    title: 'Model',
    dataIndex: ['model'],
    key: 'model',
    sorter: (a: any, b: any) => {
      return a.model - b.model;
    },
  },
  {
    title: 'Package',
    dataIndex: ['service', 'name'],
    key: 'service',
    render: (_: any, { service }: any) => {
      return (
        <Link href={`/admin/services/${service?.id}`}>
          {service?.name}
        </Link>
      );
    },
  },
  {
    title: 'Total Seat ',
    dataIndex: ['seatCapacity'],
    key: 'seatCapacity',
  },
  {
    title: 'Luggage Capacity',
    dataIndex: ['luggage'],
    key: 'luggage',
  },

  {
    title: 'Image',
    dataIndex: 'image',
    key: 'image',

    render: (_: any, { image }: any) => {
      return (
        <span>
          <Image
            src={carPic}
            width={80}
            height={40}
            alt="Picture of the car"
          />
        </span>
      );
    },
  },

  {
    title: 'Booking Status',
    dataIndex: 'isAvailable',
    key: 'isAvailable',
    render: (_: any, { isAvailable }: any) => {
      let color = 'green';
      console.log(isAvailable);
      if (isAvailable === false) {
        color = 'gold';
      }
      return (
        <Tag color={color} key={isAvailable}>
          {isAvailable ? 'available' : 'booked'}
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
