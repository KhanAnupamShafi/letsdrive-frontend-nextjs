'use server';

import { revalidateTag } from 'next/cache';

export const createBooking = async (payload: any) => {
  console.log(payload, 'ays');
  const res = await fetch(
    `http://localhost:5000/api/v1/bookings/book-car`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
      cache: 'no-cache',
    }
  );
  const { data } = await res.json();
  console.log(res, data, 'result');

  revalidateTag('bookings');

  // redirect(`/`);
};
