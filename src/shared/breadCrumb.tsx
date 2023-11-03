// export default AntBreadCrumb;
import { Breadcrumb } from 'antd';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';

interface BreadcrumbItem {
  title: JSX.Element;
}

const AntBreadCrumb = () => {
  const pathname = usePathname();
  const params = useParams();

  // Define a mapping of routes to breadcrumb items
  const breadcrumbItems: { [key: string]: BreadcrumbItem[] } = {
    '/admin/home': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
    ],
    '/admin/profile': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: <Link href="/admin/profile">Profile</Link>,
      },
    ],
    '/admin/bookings': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: <Link href="/admin/bookings">Bookings</Link>,
      },
    ],
    '/admin/car-list': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: <Link href="/admin/car-list">Car List</Link>,
      },
    ],

    '/admin/services': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: <Link href="/admin/services">All Services</Link>,
      },
    ],
    '/admin/manage-users': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: (
          <Link href="/admin/manage-users">Manage User/Admin</Link>
        ),
      },
    ],
    '/admin/manage-contents': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: (
          <Link href="/admin/manage-contents">Manage Content</Link>
        ),
      },
    ],
    // Add more routes and breadcrumb items as needed
  };

  const items = breadcrumbItems[pathname] || [];

  return (
    <Breadcrumb
      style={{
        margin: '12px 0',
        padding: '0 8px',
        fontSize: '18px',
      }}>
      {items.map((item, index) => (
        <Breadcrumb.Item key={index}>{item.title}</Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default AntBreadCrumb;
