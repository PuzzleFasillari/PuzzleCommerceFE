'use server';

import { cookies } from 'next/headers';

const cookieStore = cookies();

export const setUser = (token: string) => {
  cookieStore.set('token', token);
};
export const getUser = () => {
  return cookieStore.get('token')?.value;
};
export const removeUser = () => {
  cookieStore.delete('token');
};
