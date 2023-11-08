'use server';

import { baseUrl } from '@/app/page';
import { revalidatePath, revalidateTag } from 'next/cache';

export async function updateContentById(
  id: any,
  data: any,
  formData: FormData
): Promise<any> {
  try {
    formData.append('data', JSON.stringify(data));
    console.log(data, id);
    const res = await fetch(`${baseUrl}/cms/${id}`, {
      method: 'PUT',
      // headers: headers,
      body: formData,
    });
    const response = await res.json();
    console.log(response);
    // Revalidation and other logic
    revalidateTag('categories');
    revalidateTag('cms');
    revalidatePath('/admin/[slug]', 'page');

    return response;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to update content');
  }
}
