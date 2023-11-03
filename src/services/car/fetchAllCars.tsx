'use server';

import { baseUrl } from '@/app/page';

export const getAllCars = async (
  query: Record<string, unknown>
): Promise<any> => {
  const queryParams = [
    'searchTerm',
    'isAvailable',
    'minPrice',
    'maxPrice',
  ];
  const filteredQuery = Object.keys(query).reduce((acc, key) => {
    if (queryParams.includes(key)) {
      acc[key] = query[key];
    }
    return acc;
  }, {} as Record<string, unknown>);
  const queryString = Object.keys(filteredQuery)
    .reduce((acc, key) => {
      acc.push(`${key}=${filteredQuery[key]}`);
      return acc;
    }, [] as string[])
    .join('&');

  const res = await fetch(`${baseUrl}/car-packages?${queryString}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    // cache: 'no-store',
    next: {
      revalidate: 5,
      tags: ['car-packages'],
    },
  });
  const response = await res.json();
  if (res.ok && response?.data) {
    return response;
  } else {
    return [];
  }
};
