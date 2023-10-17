import AuthSessionProvider from '@/lib/AuthProvider';
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
      <AuthSessionProvider>{children}</AuthSessionProvider>
    </html>
  );
}

// troubleshoot : SessionProvider:  'use client'
