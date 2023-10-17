import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

type MenuItemProps = {
  label: ReactNode;
  href: string;
};

const CustomMenuItem: React.FC<MenuItemProps> = ({ label, href }) => {
  const pathname = usePathname();

  return (
    <Link
      className={`w-full ${
        pathname === href ? 'font-semibold align-middle' : ''
      }`}
      href={href}>
      {label}
    </Link>
  );
};

export default CustomMenuItem;
//  className={`${
//       pathname === href
//         ? 'border-r-2 border-solid  border-[#1890ff]  '
//         : ''
//     }`}
