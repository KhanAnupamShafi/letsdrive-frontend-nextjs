import StyledComponentsRegistry from '@/lib/AntdRegistry';
import AuthSessionProvider from '@/lib/AuthProvider';
import theme from '@/theme/themeConfig';
import { Analytics } from '@vercel/analytics/react';
import { ConfigProvider } from 'antd';
import type { Metadata } from 'next';
import Head from 'next/head';
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
      <Head>
        <link rel="icon" href="/anupam-logo.png" sizes="any" />
      </Head>
      <StyledComponentsRegistry>
        <ConfigProvider theme={theme}>
          <AuthSessionProvider>{children}</AuthSessionProvider>
        </ConfigProvider>
      </StyledComponentsRegistry>
      <Analytics />
    </html>
  );
}

// troubleshoot : SessionProvider:  'use client'
