'use server';

import { baseUrl } from '@/app/page';

export const getNewAccessToken = async (token: string) => {
  console.log(token, 'got from middleware');
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
    console.log(data, 'sending to middleware');

    return data;
  } catch (error: any) {
    // console.log(error);
    throw new Error(error.message);
  }
};
