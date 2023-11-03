'use server';

import { baseUrl } from '@/app/page';
import { revalidateTag } from 'next/cache';

export const cancelBooking = async (id: any) => {
  const res = await fetch(`${baseUrl}/bookings/cancel/${id}`, {
    method: 'PATCH',
  });
  const { data } = await res.json();

  revalidateTag('bookings');

  // redirect(`/`);
};
