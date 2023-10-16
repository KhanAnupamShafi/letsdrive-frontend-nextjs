import { Button, ConfigProvider } from 'antd';
import { ReactNode } from 'react';
type ButtonType =
  | 'link'
  | 'text'
  | 'default'
  | 'primary'
  | 'dashed'
  | undefined;

type ComponentType = {
  color: string;
  type?: ButtonType;
  children: ReactNode;
};
function AntButton({ color, type, children }: ComponentType) {
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: color,
          borderRadius: 2.5,
          fontFamily: 'Sofia Sans',
          // Alias Token
          colorBgContainer: '#f6ffed',
        },
      }}>
      <Button type={type}>{children}</Button>
    </ConfigProvider>
  );
}

export default AntButton;
