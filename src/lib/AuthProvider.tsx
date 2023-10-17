'use client';

import theme from '@/theme/themeConfig';
import { ConfigProvider } from 'antd';
import { SessionProvider } from 'next-auth/react';
import StyledComponentsRegistry from './AntdRegistry';
import { Providers } from './providers';

export default function AuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Providers>
        <body className="font-sans text-base">
          <StyledComponentsRegistry>
            <ConfigProvider theme={theme}>{children}</ConfigProvider>
          </StyledComponentsRegistry>
        </body>
      </Providers>
    </SessionProvider>
  );
}
