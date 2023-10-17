'use client';
import AntContents from '@/components/Content/Content';
import AntBreadCrumb from '@/shared/breadCrumb';
import { ROLE } from '@/shared/role';
import { Layout, Menu, Space } from 'antd';
import Title from 'antd/es/typography/Title';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
type SidebarProps = {
  children: React.ReactNode;
  items: { key: string; label: string; href: string }[];
};
const Sidebar = ({ children, items }: SidebarProps) => {
  const { Header, Sider, Footer } = Layout;
  const role = ROLE.ADMIN;
  const pathname = usePathname();
  const getSelectedKey = () => {
    return items?.find((item) => item.href === pathname)?.key || '';
  };

  console.log(items);
  let tempo = 'admin';

  return (
    <Layout className="flex ">
      <Sider
        className="min-h-[100vh] bg-white"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <Header
          className="shadow-md bg-white"
          style={{
            position: 'sticky',
            top: 0,
            zIndex: 1,
            width: '100%',
            display: 'flex',
            alignItems: 'center',
          }}></Header>
        <div className="demo-logo-vertical" />

        <Menu
          className="bg-white p-0 "
          disabledOverflow
          color="red"
          mode="inline"
          defaultSelectedKeys={[getSelectedKey()]}
          selectedKeys={[getSelectedKey()]}>
          <Link href="/" className="">
            <Title className={`m-0 p-1 text-white`}>Dashboard</Title>
          </Link>
          {items?.map((item) => (
            <Menu.Item
              key={item.href}
              className={`${
                pathname === item.href
                  ? 'border-r-2 border-solid  border-[#1890ff]  bg-[#e6f7ff]'
                  : ''
              } text-base`}>
              <Space align="center">
                {/* <span className="flex items-center">{item.icon}</span> */}
                <Link
                  className={`${
                    pathname === item.href
                      ? 'text-primary font-semibold'
                      : ''
                  } `}
                  href={item.href}>
                  {item.label}
                </Link>
              </Space>
            </Menu.Item>
          ))}
        </Menu>
      </Sider>
      <Layout className="bg-[#EFF1F4]">
        <AntBreadCrumb
          items={[
            {
              label: `${tempo}`,
              link: `/${tempo}`,
            },
            {
              label: 'user',
              link: `/${tempo}/user`,
            },
          ]}
        />
        <AntContents>{children}</AntContents>
        <Footer
          style={{
            textAlign: 'center',
          }}>
          Ant Design ©2023 Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default Sidebar;
