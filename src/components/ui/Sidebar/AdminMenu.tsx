'use client';
import type { MenuProps, MenuTheme } from 'antd';
import { Flex, Menu, Switch } from 'antd';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { items } from './SidebarItems';

const { SubMenu } = Menu;

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
      <Flex
        className="bg-tertiary"
        gap="0"
        vertical
        align="center"
        justify={'center'}>
        <Switch
          className="mb-0 "
          checked={theme === 'dark'}
          onChange={changeTheme}
          checkedChildren="Light"
          unCheckedChildren="Dark"
        />
        <Menu
          className="min-h-[100vh]"
          disabledOverflow
          theme={theme}
          onClick={onClick}
          defaultOpenKeys={current === pathname ? [current] : []}
          selectedKeys={[current]}
          mode="inline"
          items={items as MenuProps['items']} // Type assertion to match the type
        />
      </Flex>

      <br />
    </>
  );
};

export default AdminMenu;
