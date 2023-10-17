import Sidebar from '@/components/ui/Sidebar/Sidebar';
import React from 'react';

const AdminSidebar = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <Sidebar>{children}</Sidebar>;
};

export default AdminSidebar;
