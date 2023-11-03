'use server';

import { baseUrl } from '@/app/page';

export async function fetchCarById(id: string): Promise<any> {
  ('use server');
  try {
    const res = await fetch(`${baseUrl}/car-packages/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 24 * 60 * 60,
        tags: ['single-car', 'car-packages'],
      },
    });
    const response = await res.json();

    // Revalidation and other logic

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create a car package');
  }
}
