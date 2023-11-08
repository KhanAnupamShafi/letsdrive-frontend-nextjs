'use server';
import { baseUrl } from '@/app/page';

export const getAllContentsById = async (
  id: string
): Promise<any> => {
  const res = await fetch(`${baseUrl}/cms/content-category/${id}`, {
    cache: 'no-cache',
    next: {
      tags: ['cms', 'category'],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
