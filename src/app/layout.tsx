import StyledComponentsRegistry from '@/lib/AntdRegistry';
import AuthSessionProvider from '@/lib/AuthProvider';
import theme from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Lets Drive - Car Rental',
  description: 'The ultimate car rental service solution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </ConfigProvider>
      </StyledComponentsRegistry>
    </html>
  );
}

// troubleshoot : SessionProvider:  'use client'
