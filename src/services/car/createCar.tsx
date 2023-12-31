'use server';

import { baseUrl } from '@/app/page';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function createCarPackage(data: any): Promise<any> {
  try {
    const res = await fetch(`${baseUrl}/car-packages/create`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const response = await res.json();

    // Revalidation and other logic
    revalidateTag('car-packages');
    revalidatePath('/admin/[slug]', 'page');
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create a car package');
  }
}
