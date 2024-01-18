import { ProductResponseModel } from '@models/http/response/product-response.model';
import { getUser } from '@utils/auth';
import axios from 'axios';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const ProductService = {
  createProduct: async (formData: FormData) => {
    try {
      const token = await getUser();
      const res = await axios.post(`${BASE_URL}/puzzles/create`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (res.status !== 200 || 201 || 202) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      await res.data();
      return;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
  getProducts: async () => {
    try {
      const res = await fetch(`${BASE_URL}/puzzles/puzzle-list`, {});
      if (!res.ok) {
        throw new Error(`${res.status} ${res.statusText}`);
      }
      const products: ProductResponseModel[] = await res.json();
      return products;
    } catch (error) {
      throw new Error(`${error}`);
    }
  },
};
