import type { MenuProps } from 'antd';

import { Table, UserCircle } from 'lucide-react';
import Link from 'next/link';
import { ROLE } from './role';
// import { ROLE } from "./role";
export const sidebarItems = (role: string) => {
  const defaultSidebarItems: MenuProps['items'] = [
    {
      label: 'Profile',
      key: 'profile',
      icon: <UserCircle size={20} />,
      children: [
        {
          label: (
            <Link href={`/${role}/profile`}>Account Profile</Link>
          ),
          key: `/${role}/profile`,
        },
        {
          label: (
            <Link href={`/${role}/change-password`}>
              Change Password
            </Link>
          ),
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const commonAdminSidebarItems: MenuProps['items'] = [
    {
      label: (
        <Link href={`/${role}/manage-student`}>Manage Students</Link>
      ),
      icon: <Table />,
      key: `/${role}/manage-student`,
    },
    {
      label: (
        <Link href={`/${role}/manage-faculty`}>Manage Faculty</Link>
      ),
      icon: <Table />,
      key: `/${role}/manage-faculty`,
    },
  ];

  const adminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: 'Manage academic',
      key: 'manage-academic',
      icon: <Table />,
      children: [
        {
          label: (
            <Link href={`/${role}/academic/faculty`}>Faculties</Link>
          ),
          key: `/${role}/academic/faculty`,
        },
        {
          label: (
            <Link href={`/${role}/academic/department`}>
              Departments
            </Link>
          ),
          key: `/${role}/academic/department`,
        },
        {
          label: (
            <Link href={`/${role}/academic/semester`}>Semesters</Link>
          ),
          key: `/${role}/academic/semester`,
        },
      ],
    },
    {
      label: 'Management',
      key: 'management',
      icon: <Table />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
        {
          label: <Link href={`/${role}/building`}>Building</Link>,
          key: `/${role}/building`,
        },
        {
          label: <Link href={`/${role}/room`}>Rooms</Link>,
          key: `/${role}/room`,
        },
        {
          label: <Link href={`/${role}/course`}>Course</Link>,
          key: `/${role}/course`,
        },
        {
          label: (
            <Link href={`/${role}/semester-registration`}>
              Semester registration
            </Link>
          ),
          key: `/${role}/semester-registration`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course`}>
              Offered courses
            </Link>
          ),
          key: `/${role}/offered-course`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-section`}>
              Course sections
            </Link>
          ),
          key: `/${role}/offered-course-section`,
        },
        {
          label: (
            <Link href={`/${role}/offered-course-schedule`}>
              Course schedules
            </Link>
          ),
          key: `/${role}/offered-course-schedule`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps['items'] = [
    ...defaultSidebarItems,
    ...commonAdminSidebarItems,
    {
      label: <Link href={`/${role}/admin`}>Manage Admin</Link>,
      icon: <Table />,
      key: `/${role}/admin`,
    },
    {
      label: <Link href={`/${role}/user`}>Manage User</Link>,
      icon: <Table />,
      key: `/${role}/user`,
    },
    {
      label: 'Manage permission',
      key: 'manage-permission',
      icon: <Table />,
      children: [
        {
          label: (
            <Link href={`/${role}/permission`}>View permissions</Link>
          ),
          key: `/${role}/permission`,
        },
      ],
    },
    {
      label: 'Management',
      key: 'management',
      icon: <Table />,
      children: [
        {
          label: <Link href={`/${role}/department`}>Department</Link>,
          key: `/${role}/department`,
        },
      ],
    },
  ];

  if (role === ROLE.SUPER_ADMIN) return superAdminSidebarItems;
  else if (role === ROLE.ADMIN) return adminSidebarItems;
  else if (role === ROLE.USER) return defaultSidebarItems;
  else {
    return defaultSidebarItems;
  }
};
