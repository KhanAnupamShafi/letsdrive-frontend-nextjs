'use server';
import { baseUrl } from '@/app/page';

export const getAllCategoryNames = async (): Promise<any> => {
  const res = await fetch(`${baseUrl}/cms/categories`, {
    // cache: "no-cache"
    next: {
      revalidate: 24 * 60 * 60,
      tags: ['categories'],
    },
  });
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
