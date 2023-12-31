'use server';

import { baseUrl } from '@/app/page';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function createContent(
  data: any,
  formData: FormData
): Promise<any> {
  try {
    formData.append('data', JSON.stringify(data));

    const res = await fetch(`${baseUrl}/cms/create`, {
      method: 'POST',
      // headers: headers,
      body: formData,
    });
    const response = await res.json();
    // Revalidation and other logic
    revalidateTag('categories');
    revalidateTag('cms');
    revalidatePath('/admin/[slug]', 'page');
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create content');
  }
}
