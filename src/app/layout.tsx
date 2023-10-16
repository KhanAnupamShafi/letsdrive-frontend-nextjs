import StyledComponentsRegistry from '@/lib/AntdRegistry';
import { Providers } from '@/lib/providers';
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
      <Providers>
        <body className="font-sans text-base">
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
          </StyledComponentsRegistry>
        </body>
      </Providers>
    </html>
  );
}
