'use server';

export const fetchAvailable = async (
  query: Record<string, unknown>
) => {
  const queryParams = ['serviceType', 'bookingDate'];
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
  // console.log(queryString, ' inside fetch available');
  const res = await fetch(
    `http://localhost:5000/api/v1/car-packages/available?${queryString}`,
    {
      headers: {
        'Content-Type': 'application/json',
      },
      next: {
        revalidate: 24 * 60 * 60,
        tags: ['bookings'],
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
