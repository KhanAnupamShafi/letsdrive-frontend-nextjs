'use server';

import { baseUrl } from '@/app/page';

export async function fetchContentById(id: string): Promise<any> {
  ('use server');
  try {
    const res = await fetch(`${baseUrl}/cms/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 24 * 60 * 60,
        tags: ['cms'],
      },
    });
    const response = await res.json();

    // Revalidation and other logic

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to get the relevant content');
  }
}
