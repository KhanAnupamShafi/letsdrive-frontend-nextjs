import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const AdminSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const items = [
    { key: '1', label: 'Dashboard', href: '/admin/home' },
    { key: '2', label: 'Services', href: '/admins/services' },
    {
      key: '3',
      label: 'Available Services',
      href: '/admins/available-services',
    },
    { key: '4', label: 'Doctors', href: '/admins/doctors' },
    {
      key: '5',
      label: 'Available Doctors',
      href: '/admins/available-doctors',
    },
    { key: '6', label: 'Appointments', href: '/admins/appointments' },
    {
      key: '7',
      label: 'Specializations',
      href: '/admins/specializations',
    },
    { key: '8', label: 'Profile', href: '/admin/profile' },
  ];
  return <Sidebar items={items}>{children}</Sidebar>;
};

export default AdminSidebar;
