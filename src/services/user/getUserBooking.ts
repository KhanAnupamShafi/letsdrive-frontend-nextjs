'use server';

import { baseUrl } from '@/app/page';

export const getUserBookings = async (query: any): Promise<any> => {
  const res = await fetch(`${baseUrl}/bookings?email=${query}`, {
    cache: 'no-cache',
    next: {
      tags: ['bookings'],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
