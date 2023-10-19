'use server';

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

  const res = await fetch(
    `http://localhost:5000/api/v1/car-packages?${queryString}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      // cache: "no-cache"
      next: {
        revalidate: 24 * 60 * 60,
        tags: ['car-packages'],
      },
    }
  );
  const { data } = await res.json();
  if (res.ok && data) {
    return data;
  } else {
    return [];
  }
};
