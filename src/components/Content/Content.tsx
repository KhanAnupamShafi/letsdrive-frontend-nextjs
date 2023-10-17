'use client';
import { Layout } from 'antd';

const { Content } = Layout;

const AntContents = ({ children }: { children: React.ReactNode }) => {
  const base = 'admin';
  return (
    <Content
      style={{
        margin: '24px 16px',
        padding: 24,
        background: '#fff',
        minHeight: 'calc(100vh - 400px)',
        color: '#222',
      }}>
      {children}
    </Content>
  );
};

export default AntContents;
