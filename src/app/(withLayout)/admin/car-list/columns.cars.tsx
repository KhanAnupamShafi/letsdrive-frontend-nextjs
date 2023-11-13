'use client';
import { makeCarAvailable } from '@/services/booking/makeCarAvailable';
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
  ChevronDownCircle,
  XCircle,
} from 'lucide-react';

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
    label: <Link href={`/admin/car-list/${id}/update`}>Edit</Link>,
  },
  {
    key: '2',
    label: (
      <span>
        <Flex align="center" gap={2}>
          Delete <XCircle size={14} />
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
      return makeCarAvailable(id) // Call your async function here
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
    width: '50%',
    render: (_: any, { image }: any) => {
      console.log(image);
      return (
        <Tag className="w-full h-56">
          <Image
            src={
              image ||
              'https://res.cloudinary.com/de98kpzgn/image/upload/v1697760976/photo-1546614042-7df3c24c9e5d_jpkxlc.webp'
            }
            className="object-cover"
            // sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
            alt="Picture of the car"
          />
        </Tag>
      );
    },
  },

  {
    title: 'Booking Status',
    dataIndex: 'isAvailable',
    key: 'isAvailable',
    render: (_: any, { isAvailable }: any) => {
      let color = 'green';
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
