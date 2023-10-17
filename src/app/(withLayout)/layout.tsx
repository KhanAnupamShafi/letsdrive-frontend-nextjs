import AdminSidebar from '@/components/view/Sidebar/AdminSidebar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lets Drive - Admin Dashboard',
  description: 'The ultimate car rental service solution',
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="min-h-[calc(100vh-64px)]">
        <AdminSidebar>{children}</AdminSidebar>
      </div>
    </>
  );
}
