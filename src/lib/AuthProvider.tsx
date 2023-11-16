'use client';

import Footer from '@/components/ui/HomePageSections/Footer';
import { Analytics } from '@vercel/analytics/react';
import { FloatButton } from 'antd';
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
          <FloatButton.BackTop />

          {children}
          <Footer />
          <Analytics />
        </body>
      </Providers>
    </SessionProvider>
  );
}
