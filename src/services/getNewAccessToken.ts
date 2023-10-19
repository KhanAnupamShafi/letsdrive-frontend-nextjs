'use server';

import { baseUrl } from '@/app/page';

export const getNewAccessToken = async (token: string) => {
  try {
    const res = await fetch(`${baseUrl}/auth/refresh-token`, {
      method: 'POST',
      body: JSON.stringify({ refreshToken: token }),
      headers: {
        'Content-Type': 'application/json',
        Authorization: token,
      },
    });
    const data = await res.json();
    return data;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error.message);
  }
};
