'use client';
import AntContents from '@/components/ui/Content/Content';
import AntBreadCrumb from '@/shared/breadCrumb';
import { Avatar, Badge, Flex, Layout, Space } from 'antd';
import { MailOpen, User } from 'lucide-react';
import { useSession } from 'next-auth/react';
import AdminMenu from './AdminMenu';
type SidebarProps = {
  children: React.ReactNode;
  session: boolean;
};
const Sidebar = ({ children, session }: SidebarProps) => {
  const { Header, Sider, Footer } = Layout;

  const { data } = useSession();
  console.log(data?.role);
  return (
    <Layout className="flex ">
      <Sider
        width={300}
        className="min-h-[100vh] bg-white "
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          // console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          // console.log(collapsed, type);
        }}>
        <Header
          className="shadow-md bg-white text-center hidden lg:block"
          style={{
            zIndex: 1,
            width: '100%',
          }}>
          {' '}
          <span>
            <Badge dot color="green" className="leading-none	mr-2">
              <Avatar shape="square" icon={<User />} />
            </Badge>
            <span>{data?.role}</span>
          </span>
        </Header>
        <div className="demo-logo-vertical" />
        <AdminMenu authenticated={data?.role ? true : false} />
        {/* <Menu
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
                <span className="flex items-center">{item.icon}</span>
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
        </Menu> */}
      </Sider>

      <Layout className="bg-[#EFF1F4]">
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
            background: '#fcfdff',
            justifyContent: 'end',
          }}>
          {' '}
          <Space className="mr-0" direction="horizontal" size={24}>
            <h4 className="text-xl font-semibold">
              {data?.fullName}
            </h4>
            <Flex align="center" gap={10}>
              <MailOpen />
              <p className=""> {data?.email}</p>
            </Flex>
          </Space>
        </Header>
        <AntBreadCrumb />
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
