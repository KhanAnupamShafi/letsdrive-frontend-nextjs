'use server';

import { baseUrl } from '@/app/page';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function updateCarPackage(
  id: any,
  data: any
): Promise<any> {
  console.log(id, data);

  try {
    const res = await fetch(`${baseUrl}/car-packages/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    // Revalidation and other logic
    revalidateTag('car-packages');
    revalidatePath('/admin/[slug]', 'page');
    // if (response) {
    //   redirect('/login');
    // }
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create a car package');
  }
}
