// import { Breadcrumb } from 'antd';
// import { HomeIcon } from 'lucide-react';
// import Link from 'next/link';

// const AntBreadCrumb = ({
//   items,
// }: {
//   items: {
//     label: string;
//     link: string;
//   }[];
// }) => {
//   const breadCrumbItems = [
//     {
//       title: (
//         <Link href="/admin/home" className="flex items-center">
//           <HomeIcon color="#091e42" size={18} />
//         </Link>
//       ),
//     },
//     ...items.map((item) => {
//       return {
//         title: item.link ? (
//           <Link href={item.link}>{item.label}</Link>
//         ) : (
//           <span>{item.label}</span>
//         ),
//       };
//     }),
//   ];

//   return (
//     <Breadcrumb
//       style={{ margin: '12px 0', padding: '0 8px', fontSize: '18px' }}
//       items={breadCrumbItems}></Breadcrumb>
//   );
// };

// export default AntBreadCrumb;
import { Breadcrumb } from 'antd';
import { HomeIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface BreadcrumbItem {
  title: JSX.Element;
}

const AntBreadCrumb = () => {
  const pathname = usePathname();

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
    '/admin/faculty/courses': [
      {
        title: (
          <Link href="/admin/home" className="flex items-center">
            <HomeIcon color="#091e42" size={18} />
          </Link>
        ),
      },
      {
        title: <Link href="/admin/faculty">faculty</Link>,
      },
      {
        title: <Link href="/admin/faculty/courses">courses</Link>,
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
