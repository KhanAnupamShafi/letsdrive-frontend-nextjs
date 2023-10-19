import { MenuProps } from 'antd';
import {
  CarTaxiFront,
  HelpingHand,
  LucideHome,
  MousePointer,
  Settings2,
  User2,
} from 'lucide-react';
import CustomMenuItem from './CustomMenuItem';

export const items: MenuProps['items'] = [
  {
    label: (
      <CustomMenuItem label="Dashboard- Home" href="/admin/home" />
    ),
    key: '/admin/home',
    icon: <LucideHome size={18} />,
  },

  {
    label: 'Manage Services',
    key: 'Services',
    icon: <Settings2 size={18} />,
    children: [
      {
        label: (
          <CustomMenuItem
            label="Manage Services"
            href="/admin/services"
          />
        ),
        icon: <MousePointer size={18} />,

        key: 'setting:2',
      },
      {
        label: (
          <CustomMenuItem
            label="Manage Bookings"
            href="/admin/bookings"
          />
        ),
        key: 'setting:3',
        icon: <HelpingHand size={18} />,
      },
      {
        label: (
          <CustomMenuItem label="Car List" href="/admin/car-list" />
        ),
        key: 'setting:4',
        icon: <CarTaxiFront size={18} />,
      },
    ],
  },
  {
    label: (
      <CustomMenuItem
        label="Dashboard- profile"
        href="/admin/profile"
      />
    ),
    key: '/admin/profile',
    icon: <User2 size={18} />,
  },
];
