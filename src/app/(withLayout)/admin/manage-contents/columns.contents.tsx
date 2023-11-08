'use client';

import { deleteContent } from '@/services/cms/deleteContent';
import { Flex, Modal, Tag, message } from 'antd';
import dayjs from 'dayjs';
import { AlertTriangle, Edit, Trash2Icon } from 'lucide-react';
import Link from 'next/link';

// const handleDelete = async (id: string) => {
//   await deleteDoctor(id);
// };
const { confirm } = Modal;

export interface DataType {
  id: string;
  title: string;
  content: string;
  views: number;
  tags: string[]; // You can replace this with the actual type of tags if needed
  coverImages: string[];
  isPublished: boolean;
  isDraft: boolean;
  theme: string;
  isFeatured: boolean;
  categoryId: string;
  adminId: string;
  createdAt: string;
  updatedAt: string;
  admin: {
    fullName: string;
  };
  category: {
    id: string;
    name: string;
    description: string;
    createdAt: string;
    updatedAt: string;
  };
}

export const contentColumns: any = [
  {
    title: 'No.',
    dataIndex: 'key',
    rowScope: 'row',
    key: 'index',
    render: (text: string, record: any, index: string) => index + 1,
  },
  {
    title: 'Title',
    dataIndex: ['title'],
    key: 'title',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Views',
    dataIndex: ['views'],
    key: 'views',
    render: (text: string) => <a>{text}</a>,
  },
  {
    title: 'Featured Content ?',
    dataIndex: 'isFeatured',
    key: 'isFeatured',
    render: (text: boolean) => {
      let color = 'green';

      if (text === false) {
        color = 'pink';
      }
      return <Tag color={color}>{String(text)}</Tag>;
    },
  },
  {
    title: 'Published Content ?',
    dataIndex: 'isPublished',
    key: 'isPublished',
    render: (text: boolean) => {
      let color = 'green';

      if (text === false) {
        color = 'pink';
      }
      return <Tag color={color}>{String(text)}</Tag>;
    },
  },
  {
    title: 'Date Published',
    dataIndex: ['createdAt'],
    key: 'createdAt',
    render: (text: string) => (
      <span>{dayjs(text).format('YYYY-MM-DD HH:mm:ss')}</span>
    ),
  },
  {
    title: 'Date Updated',
    dataIndex: ['updatedAt'],
    key: 'updatedAt',
    width: '10%',
    render: (text: string) => (
      <span>{dayjs(text).format('YYYY-MM-DD HH:mm:ss')}</span>
    ),
  },
  {
    title: 'Author Name',
    dataIndex: ['admin', 'fullName'],
    key: 'fullName',
    render: (text: string) => <a>{text}</a>,
  },

  {
    title: 'Action',
    key: 'action',
    // onClick: () => showPromiseConfirm(id),
    render: (record: any) => {
      return (
        <span>
          <Flex align="center" gap={8}>
            <Trash2Icon
              className="cursor-pointer"
              color="red"
              size={18}
              onClick={() => showPromiseConfirm(record.id)}
            />
            <Link
              className="flex items-center"
              href={`/admin/manage-contents/edit/${record.id}`}>
              <Edit
                className="cursor-pointer"
                color="orange"
                size={18}
              />
            </Link>
          </Flex>
        </span>
      );
    },
  },
];
const showPromiseConfirm = (id: any) => {
  confirm({
    title: 'Are You Sure?',
    icon: <AlertTriangle color="orange" />,
    content: 'This is irreversible',
    okButtonProps: {
      className: 'bg-green-500',
    },
    onOk() {
      return deleteContent(id) // Call your async function here
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
