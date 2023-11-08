'use server';

import { baseUrl } from '@/app/page';
import { revalidatePath, revalidateTag } from 'next/cache';

export const deleteContent = async (id: any) => {
  const res = await fetch(`${baseUrl}/cms/${id}`, {
    method: 'DELETE',
  });
  revalidateTag('categories');
  revalidateTag('cms');
  revalidatePath('/admin/[slug]', 'page');

  // redirect(`/`);
};
