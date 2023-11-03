import Sidebar from '@/components/ui/Sidebar/Sidebar';
import { authOptions } from '@/lib/authOptions/AuthOptions';
import { getServerSession } from 'next-auth';
import React from 'react';

const AdminSidebar = async ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const session = await getServerSession(authOptions);
  return (
    <Sidebar session={session ? true : false}>{children}</Sidebar>
  );
};

export default AdminSidebar;
