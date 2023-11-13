'use server';

import { baseUrl } from '@/app/page';
import { revalidateTag } from 'next/cache';

export const makeCarAvailable = async (id: any) => {
  console.log(id);
  const res = await fetch(
    `${baseUrl}/car-packages/make-available/${id}`,
    {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      cache: 'no-cache',
    }
  );
  const data = await res.json();
  console.log(data);

  revalidateTag('bookings');
  revalidateTag('car-packages');

  // redirect(`/`);
};
