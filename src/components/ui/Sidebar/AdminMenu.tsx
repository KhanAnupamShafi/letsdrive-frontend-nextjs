'use client';
import type { MenuProps, MenuTheme } from 'antd';
import { Button, Flex, Menu, Switch } from 'antd';
import { signOut } from 'next-auth/react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { items } from './SidebarItems';

const { SubMenu } = Menu;

const AdminMenu = ({ authenticated }: { authenticated: boolean }) => {
  const [theme, setTheme] = useState<MenuTheme>('dark');
  const [current, setCurrent] = useState(usePathname());

  const changeTheme = (value: boolean) => {
    setTheme(value ? 'light' : 'dark');
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
  }, []);

  return (
    <>
      <Flex
        className="bg-slate-700"
        gap="10"
        vertical
        align="center"
        justify={'center'}>
        <div className="w-full px-5 flex flex-row-reverse justify-between items-center pt-2 gap-4 h-[60px]">
          {authenticated ? (
            <span className="hidden md:flex items-center">
              <Button
                size="small"
                type="primary"
                danger
                onClick={() => {
                  signOut();
                }}>
                Sign Out
              </Button>
            </span>
          ) : (
            <Link className="hidden md:block" href="/login">
              <Button type="primary">Sign Up</Button>
            </Link>
          )}
          <Switch
            className="mb-0 "
            checked={theme === 'light'}
            onChange={changeTheme}
            checkedChildren="Light"
            unCheckedChildren="Dark"
          />
        </div>

        <Menu
          className="min-h-[130vh]"
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
