'use server';

import { baseUrl } from '@/app/page';
import { revalidateTag } from 'next/cache';

export const createCar = async (payload: any) => {
  const res = await fetch(`${baseUrl}/users/create`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
    cache: 'no-cache',
  });
  const { data } = await res.json();
  revalidateTag('car-packages');

  if (res.ok && data) {
    return data;
  } else {
    return [];
  }

  // redirect(`/`);
};
