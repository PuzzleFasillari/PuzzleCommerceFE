'use server';

import { cookies } from 'next/headers';

export const setUser = async (token: string) => {
  const cookieStore = cookies();
  cookieStore.set('token', token);
};
export const getUser = async (): Promise<string | undefined | null> => {
  const cookieStore = cookies();
  const cookieValue = cookieStore.get('token')?.value;
  const user = cookieValue ? cookieValue : null;
  if (!user) {
    return null;
  }
  return user;
};

export const removeUser = async () => {
  const user = await getUser();
  if (!user) {
    return;
  }
  const cookieStore = cookies();
  cookieStore.delete('token');
};
