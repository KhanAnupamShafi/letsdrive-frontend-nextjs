'use server';

import { baseUrl } from '@/app/page';
import { revalidateTag } from 'next/cache';

export const createBooking = async (payload: any) => {
  console.log(payload);
  const res = await fetch(`${baseUrl}/bookings/book-car`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-cache',
  });
  const data = await res.json();
  console.log(data);
  revalidateTag('bookings');

  // redirect(`/`);
};
