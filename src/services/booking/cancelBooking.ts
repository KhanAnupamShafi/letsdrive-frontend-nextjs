'use server';

import { revalidateTag } from 'next/cache';

export const cancelBooking = async (id: any) => {
  const res = await fetch(
    `http://localhost:5000/api/v1/bookings/cancel/${id}`,
    {
      method: 'PATCH',
    }
  );
  const { data } = await res.json();
  console.log(res, data, 'result');

  revalidateTag('bookings');

  // redirect(`/`);
};
