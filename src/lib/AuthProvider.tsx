'use client';

import Footer from '@/components/ui/HomePageSections/Footer';
import { BackTop } from 'antd';
import { SessionProvider } from 'next-auth/react';
import { Providers } from './providers';

export default function AuthSessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Providers>
        <body
          className="font-sans text-base"
          suppressHydrationWarning={true}>
          <BackTop />

          {children}
          <Footer />
        </body>
      </Providers>
    </SessionProvider>
  );
}
