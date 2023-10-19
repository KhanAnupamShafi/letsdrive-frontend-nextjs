import type { MenuProps, MenuTheme } from 'antd';
import { Flex, Menu, Switch } from 'antd';
import { LucideHome, Settings2 } from 'lucide-react';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import CustomMenuItem from './CustomMenuItem';

const { SubMenu } = Menu;

const items: MenuProps['items'] = [
  {
    label: (
      <CustomMenuItem label="Dashboard- Home" href="/admin/home" />
    ),
    key: '/admin/home',
    icon: <LucideHome size={18} />,
  },

  {
    label: 'Navigation Three - Submenu',
    key: 'SubMenu',
    icon: <Settings2 size={18} />,
    children: [
      {
        label: 'Option 2',
        key: 'setting:2',
      },
      {
        type: 'group',
        label: 'Item 2',
        children: [
          {
            label: 'Option 3',
            key: 'setting:3',
          },
          {
            label: 'Option 4',
            key: 'setting:4',
          },
        ],
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
    icon: <Settings2 size={18} />,
  },
];

const AdminMenu: React.FC = () => {
  const [theme, setTheme] = useState<MenuTheme>('light');
  const [current, setCurrent] = useState(usePathname());
  const changeTheme = (value: boolean) => {
    setTheme(value ? 'dark' : 'light');
  };

  const onClick = (e: { key: React.Key }) => {
    setCurrent(e.key.toString());
  };

  const pathname = usePathname();

  useEffect(() => {
    // Listen for changes in the pathname and update the current state
    const updateCurrentPathname = () => {
      setCurrent(pathname);
    };

    updateCurrentPathname(); // Set the initial value
    window.addEventListener('popstate', updateCurrentPathname);

    return () => {
      window.removeEventListener('popstate', updateCurrentPathname);
    };
  }, [pathname]);

  return (
    <>
      <br />
      <Menu
        disabledOverflow
        theme={theme}
        onClick={onClick}
        // style={{ minHeight: 'calc(100vh - 300px)' }}
        defaultOpenKeys={current === pathname ? [current] : []}
        selectedKeys={[current]}
        mode="inline"
        items={items as MenuProps['items']} // Type assertion to match the type
      />
      <br />
      <Flex gap="middle" align="flex-end" justify={'center'}>
        <Switch
          className="mb-0"
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Light"
          unCheckedChildren="Dark"
        />
      </Flex>
    </>
  );
};

export default AdminMenu;
