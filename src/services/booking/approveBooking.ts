'use server';

import { baseUrl } from '@/app/page';
import { revalidateTag } from 'next/cache';

export const approveBooking = async (id: any) => {
  const res = await fetch(`${baseUrl}/bookings/accept/${id}`, {
    method: 'PATCH',
  });
  const { data } = await res.json();
  revalidateTag('bookings');
  return data;

  // redirect(`/`);
};
