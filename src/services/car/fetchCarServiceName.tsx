'use server';
import { baseUrl } from '@/app/page';

export const getAllServiceNames = async (): Promise<any> => {
  const res = await fetch(`${baseUrl}/services`, {
    headers: {
      'Content-Type': 'application/json',
    },
    // cache: "no-cache"
    next: {
      revalidate: 24 * 60 * 60,
      tags: ['services'],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
